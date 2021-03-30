let contract_Rockets, contract_NYR, web3, currentchainid, db;

let contractsInitialized = false;

let nftprice = 0.05;
let nftsupply = 0;

let nftstatusupdater;

let startingIndex = 0;

let nftsonthispage = [];

const NUM_ARTWORKS = 13337;

let galleryresult = Array.from({length: NUM_ARTWORKS}, (_, i) => i + 1);

const SALE_START_TIMESTAMP = 1614087217;

// bsc testnet = 97, mainnet = 56
const requiredChainId = [0,97,56,86];

let userhaswallet = false;
let useroncorrectchain = false;

var slider = document.getElementById('slider');

const contractAddress_NYR = "0xC042568Bcf8b4BC5c6D4244C2748171Ff4A139d8"; //
const contractAddress_Rockets = "0x0DD5aaC633a92F50f55254cA91F98879307d92b5"; // rocketsAddress

let rpcurl = "https://bsc-dataseed1.binance.org:443"; //https://bsc-dataseed.binance.org/

// metamask web3

async function loadSQLJS() {
    var dbconfig = {
      locateFile: filename => `/assets/js/sql-wasm.wasm`
    };
    // The `initSqlJs` function is globally provided by all of the main dist files if loaded in the browser.
    // We must specify this locateFile function if we are loading a wasm file from anywhere other than the current html page's folder.
    initSqlJs(dbconfig).then(function(SQL){
      var xhr = new XMLHttpRequest();
      // For example: https://github.com/lerocha/chinook-database/raw/master/ChinookDatabase/DataSources/Chinook_Sqlite.sqlite
      xhr.open('GET', '/assets/database.db', true);
      xhr.responseType = 'arraybuffer';

      xhr.onload = e => {
        var uInt8Array = new Uint8Array(xhr.response);
        db = new SQL.Database(uInt8Array);
        var contents = db.exec("select * from lilmoonrockets where id IN (1,2,3)");
        console.log("db results initiated!");
        console.log(contents);
        // contents is now [{columns:['col1','col2',...], values:[[first row], [second row], ...]}]
      };
      xhr.send();
    });
}

function resetFilters() {
  $('select').each(function(index) {
    $(this).val("*");
  });
  galleryresult = Array.from({length: NUM_ARTWORKS}, (_, i) => i + 1);
  $('#resetfilters').hide();
  loadGallery();
}

function compileDBStatement() {

  //startingIndex = 1;

  galleryresult = [];
  let query = squel.select().from("lilmoonrockets").field("id");

  $('select').each(function(index) {
    console.log($(this).attr("id"), $(this).val());

    if($(this).val() != "*") {
      query.where(`${$(this).attr("id").replace("select_","")} = ?`, parseInt($(this).val()));
    }

  })
  .promise()
    .done( function() {
        console.log("done");

        // let res = db.exec();
        // console.log(res[0].values);

        // db.execute(query);
        db.each(
          query.toString(),
          [],
          function (row){ galleryresult.push(row.id); console.log(row.id); },
          function() {
              console.log("foreach db result = done");
              console.log(galleryresult);
              loadGallery();
              $('#resetfilters').show();
          }

        );
    });

}

function getTimeRemaining(endtime){
  const total = Date.parse(endtime) - Date.parse(new Date());
  const seconds = pad (Math.floor( (total/1000) % 60 ), 2);
  const minutes = pad (Math.floor( (total/1000/60) % 60 ),2);
  const hours = pad (Math.floor( (total/(1000*60*60)) % 24 ),2);
  const days = Math.floor( total/(1000*60*60*24) );

  return {
    total,
    days,
    hours,
    minutes,
    seconds
  };
}

function initializeClock(id, endtime) {
  const clock = document.getElementById(id);
  const timeinterval = setInterval(() => {
    const t = getTimeRemaining(endtime);
    clock.innerHTML = t.days + ' day' + (t.days == 1 ? "":"s") +  ' - '+ t.hours + ':' + t.minutes + ':' + t.seconds + '  until the reveal of artworks';
    if (t.total <= 0) {
      clearInterval(timeinterval);
    }
  },1000);
}

async function checkLoadWeb3(cb = false){
  if(window.ethereum) {
    userhaswallet = true;
    web3 = new Web3(window.ethereum);
    console.log('checkWebLoad3');
    console.log(window.ethereum);
    // since we are connected, lets check if user has correct Chain id.
    if(await testChainId()) {
      web3 = new Web3(window.ethereum);
    } else {
      web3 = new Web3(rpcurl);
    }
  } else {
    userhaswallet = false;
    web3 = new Web3(rpcurl);
  }

  if(cb) {
    cb();
  }
}

async function testChainId() {
  // should only be called once, before using web3' provider to Backup Provider RPC.
  currentchainid = await web3.eth.getChainId();

  console.log(currentchainid);
  //alert(currentchainid);

  if(requiredChainId.indexOf(currentchainid) != -1) {
    useroncorrectchain = true;
  } else {
    useroncorrectchain = false;
  }

  console.log("chainId, correctchain?, haswallet?", currentchainid, useroncorrectchain, userhaswallet);

  return useroncorrectchain;
}

function getArtworkFromToken(token_number) {
  const artworkid = (parseInt(token_number) + startingIndex) % NUM_ARTWORKS + 1;
  console.log("getArtworkfromToken ", token_number, startingIndex, NUM_ARTWORKS, artworkid);
  return artworkid;
}

function getTokenFromArtwork(artwork_id) {
  let token = (artwork_id - 1 - startingIndex) % NUM_ARTWORKS;

  if(token < 0) {
    token += NUM_ARTWORKS;
  }
  return token;
}


async function getImageSrc(tokenId, type) {
  if(startingIndex !== 0) {
    if(type === "thumb") {
      console.log("thumb => ", getArtworkFromToken(tokenId));
      return `rocketgallery/img/thumb/lil-moon-rocket-${getArtworkFromToken(tokenId)}-thumb.png`;
    } else {
      return `rocketgallery/img/xl/lil-moon-rocket-${getArtworkFromToken(tokenId)}-lg.png`;
    }
  } else {
    return `assets/img/prereveal${(Math.floor(Math.random() * 5) + 1)}.png`;
  }
}

const getLMR = function () {
  connect(showPurchaseDialog);
};

const getMoar = function () {
  $('#modalContributeSuccess').modal('hide');
  $('#modalContribute').modal('show');
}

const showToast = function(msg , style="default", duration = 3000) {

  switch (style) {

    case "default":
      siiimpleToast.message(msg, { duration: duration });
    break;

    case "alert":
      siiimpleToast.alert(msg,  { duration: duration });
      $('#sound_error')[0].play();
    break;

    case "success":
      siiimpleToast.success(msg,  { duration: duration });
    break;

  }



};

const showPurchaseDialog = function() {

  // should now start timer to update price at given times.
  $('#modalContribute').modal('show');

}


/**********************************************************/
/* Handle chain (network) and chainChanged (per EIP-1193) */
/**********************************************************/

// const chainId = await ethereum.request({ method: 'eth_chainId' });
// handleChainChanged(chainId);

try {
  ethereum.on('chainChanged', handleChainChanged);
} catch(err) {

}

function handleChainChanged(_chainId) {
  // We recommend reloading the page, unless you must do otherwise
  window.location.reload();
}

/***********************************************************/
/* Handle user accounts and accountsChanged (per EIP-1193) */
/***********************************************************/

let currentAccount = null;
let initialisedHandlers = false;

// Note that this event is emitted on page load.
// If the array of accounts is non-empty, you're already
// connected.
try {
    ethereum.on('accountsChanged', handleAccountsChanged);
} catch (err) {

}


// For now, 'eth_accounts' will continue to always return an array
function handleAccountsChanged(accounts, cb = false) {
  console.log('handled accounts');
  //console.log(cb);
  if (accounts.length === 0) {
    // MetaMask is locked or the user has not connected any accounts
    showToast(`Please connect to MetaMask!`, "alert");
  } else {

    if(currentAccount != accounts[0]) {
      currentAccount = accounts[0];
      showToast(`${accounts[0]} is now the active address`);

      if(currentpage === "wallet" && contractsInitialized) {
        loadWallet();
        return;
      }
    }


    // Do any other work!

    if(cb) {
      cb();
    }
  }
}

// While you are awaiting the call to eth_requestAccounts, you should disable
// any buttons the user can click to initiate the request.
// MetaMask will reject any additional requests while the first is still
// pending.
async function connect(cb) {
  //console.log("clicked connect");
  //const provider = await detectEthereumProvider();
  if (!window.ethereum) {
    if(ismetaMaskBrowser()) {
      $("#modalDownloadMM").modal('show');
    } else {
      $("#modalDownloadBrowser").modal('show');
    }
    return false;
  }

  // if not correct chainId... show chainId change instruction
  //


  if(!useroncorrectchain) {
    $('#modalSwapChainid').modal('show');
    return false;
  }

  ethereum
    .request({ method: 'eth_requestAccounts' })
    .then(function(acc) {handleAccountsChanged(acc, cb) })
    .catch((err) => {
      if (err.code === 4001) {
        // EIP-1193 userRejectedRequest error
        // If this happens, the user rejected the connection request.
        showToast(`Please connect to MetaMask to use Bull Bear Finance!`, "alert");
      } else {
        showToast(err.message);
      }
    });
}

async function buyNFT(amount){

  // contract_Rockets.methods.mintNFT(amount).send(
  //   {
  //     from: currentAccount,
  //     to: contractAddress_Rockets,
  //     value: await contract_Rockets.methods.getNFTPrice().call() * amount
  //   }
  // ).then(
  //   res =>
  //   {
  //     console.log(res);
  //     $('#modalContribute').modal('hide');
  //     resetCheckout();
  //     $('#sound_success')[0].play();
  //     showToast(`Transaction confirmed in block #${res.blockNumber} - Check the <a href="wallet.html">wallet page</a> to see your NFTs!`,"success");
  //     showSuccessDialog();
  //   })
  //   .catch(
  //     err =>
  //     {
  //       console.log(err);
  //       resetCheckout();
  //       showToast(err.message, "alert");
  //     });

  contract_Rockets.methods.mintNFT(amount).send(
    {
      from: currentAccount,
      to: contractAddress_Rockets,
      value: await contract_Rockets.methods.getNFTPrice().call() * amount
    })
  .on('error', function(error){
    console.log("on error");
    console.log(error);
   })
  .on('transactionHash', function(transactionHash){
    console.log("on transactionHash");
    console.log(transactionHash);

    $('#checkoutbutton').html(`<img src="assets/img/loader.gif" /> Waiting for transaction to be minted <img src="assets/img/loader.gif" />`);
    showToast(`Transaction ${transactionHash} waiting to be minted - <a target="_blank" href="https://bscscan.com/tx/${transactionHash}" title="View ${transactionHash} on BSCscan">BSCscan</a>`,"default", 7000);

  })
  .on('receipt', function(receipt){
    console.log("on receipt");
    console.log(receipt);
      //console.log(receipt.contractAddress) // contains the new contract address
    })
  .on('confirmation', function(confirmationNumber, receipt){
      console.log(confirmationNumber, receipt);
   })
  .then(
    res =>
    {
      console.log(res);
      $('#modalContribute').modal('hide');
      resetCheckout();
      $('#sound_success')[0].play();
      showToast(`Transaction confirmed in block #${res.blockNumber} - Check the <a href="wallet.html">wallet page</a> to see your NFTs!`,"success",  5000);
      showSuccessDialog();
    })
    .catch(
      err =>
      {
        console.log(err);
        resetCheckout();
        showToast(err.message, "alert");
      });

}

async function showSuccessDialog() {
  // fill up user account address
  if(currentAccount != null) {
    $('#user_address').text(currentAccount);
    var amountrockets = parseInt(await contract_Rockets.methods.balanceOf(currentAccount).call());
    $('.user_lmr_supply').text(amountrockets + " Bull Bear Finance" + (amountrockets == 1 ? "": "s"));
    $('.user_lmr_supply_link').attr('href',`https://bscscan.com/token/${contractAddress_Rockets}?a=${currentAccount}`);
    $('#modalContributeSuccess').modal('show');
  }
}

async function checkOut(){
  if($('#agreedToTerms:checked').length > 0) {
    // execute purchase
    $('#checkoutbutton').text("Check your MetaMask pop-up to complete transaction");

    if(await contract_Rockets.methods.SALE_START_TIMESTAMP().call() > (new Date().getTime() / 1000)) {
      showToast(`Sale has not yet started`,"alert");
      return false;
    } else {
      showToast("Complete checkout in MetaMask pop-up!");
      buyNFT(parseInt(slider.noUiSlider.get()));
    }
  } else {

    showToast(`Did you read, agree and comply with the <a href="terms.html">Terms &amp; Conditions</a> and <a href="disclaimer.html">Disclaimer</a>?`,"alert");
    $('#agreedToTermsContainer').removeClass("shake");

    setTimeout(function(){
       //wait for card1 flip to finish and then flip 2
       $('#agreedToTermsContainer').addClass("shake");
    }, 300);
  }
}

function resetCheckout() {
  $('#checkoutbutton').text("Click to Complete Checkout with MetaMask");
}

async function loadContracts() {
  contract_Rockets = await new web3.eth.Contract(contractABI_Rockets, contractAddress_Rockets);
  contract_NYR = await new web3.eth.Contract(contractABI_NYR, contractAddress_NYR);
  contractsInitialized = true;

  await getNFTstatus();
  nftstatusupdater = setInterval(getNFTstatus, 30000);


  if(currentpage === "wallet") {
    connect(loadWallet);
    loadSQLJS();
  }

  if(currentpage === "gallery-new") {
      loadGallery();
      loadSQLJS();
  }

  return true;
}

async function updateSupplyProgressBar() {
  updateSaleProgress(await contract_Rockets.methods.totalSupply().call());
}

// check if this browser supports metamask...
function ismetaMaskBrowser() {
  if (navigator.userAgent.search("Brave") >= 0) {
      //code goes here
      return true;
  }
  else if (navigator.userAgent.search("Chrome") >= 0) {
      //code goes here
      return true;
  }
  else if (navigator.userAgent.search("Firefox") >= 0) {
      //code goes here
      return true;
  }
  else if (navigator.userAgent.search("Edge") >= 0) {
      //code goes here
      return true;
  }
  else {
    return false;
  }
}

function filterPips(value, type) {
    if (type === 0) {
        return value < 10 ? 0 : 0;
    }
    if(value === 1) {
      return 1;
    }
    return value % 10 ? -1 : 1;
}

async function getNFTstatus() {
  if(contractsInitialized) {
    if(SALE_START_TIMESTAMP <= (new Date().getTime() / 1000)) {
      startingIndex = parseInt(await contract_Rockets.methods.startingIndex().call());

      nftprice = web3.utils.fromWei(await contract_Rockets.methods.getNFTPrice().call(), 'ether');
      // update total supply
      nftsupply = await contract_Rockets.methods.totalSupply().call();
      $('.nftprice').text(nftprice + ' bnb');

      $('#progresspct').text(`Over ${Math.ceil((nftsupply / NUM_ARTWORKS) * 100)}% of rockets sold. `);

      var currentamount = parseInt(slider.noUiSlider.get());
      $("#totalprice").text((currentamount * nftprice).toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2}) + ' bnb');
      updateSaleProgress(nftsupply);
    }
  }
}

async function rocketwallettemplategallery(data) {
  console.log("rocketwallettemplate", data);
  nftsonthispage = [];
  let loadhtml = '';

  for(var i =0; i < data.length; i++) {
      loadhtml += `<div class="col-md-2 col-sm-3 col-4 padding-10 d-inline-block linear-background"><img src="assets/img/emptythumbnail.png" width="300" height="423"/></div>`;
  }

  $('#data-container').html(loadhtml);

  let html = '';
  for(var i =0; i < data.length; i++) {
      let tokenId = getTokenFromArtwork(data[i]);
      // console.log(i);
      console.log(`preloading at ${i} token ${tokenId}`);
      nftsonthispage.push(parseInt(tokenId));

      let imgsrc = await getImageSrc(tokenId, "thumb");
      console.log(imgsrc);
      html += `<div class="hoverbox-1 text-center col-md-2 col-sm-3 col-4 padding-10 nftthumb" data-token="${tokenId}">
      <img src="${imgsrc}" width="300" height="423"/>
      <div class="hover-content">
        <h5>NFT #${tokenId}</h5>
      </div>
    </div>`;

  }

  return html;
};

async function rocketwallettemplate(data) {
  //console.log("rocketwallettemplate", data);
  nftsonthispage = [];
  let loadhtml = '';

  for(var i =0; i < data.length; i++) {
      loadhtml += `<div class="col-md-2 col-sm-3 col-4 padding-10 d-inline-block linear-background"><img src="assets/img/emptythumbnail.png" width="300" height="423"/></div>`;
  }

  $('#data-container').html(loadhtml);

  let html = '';
  for(var i =0; i < data.length; i++) {
      let tokenId = await contract_Rockets.methods.tokenOfOwnerByIndex(currentAccount, data[i]).call();
      // console.log(i);
      console.log(`preloading at ${i} token ${tokenId}`);
      nftsonthispage.push(parseInt(tokenId));

      let imgsrc = await getImageSrc(tokenId, "thumb");
      console.log(imgsrc);
      html += `<div class="hoverbox-1 text-center col-md-2 col-sm-3 col-4 padding-10 nftthumb" data-token="${tokenId}">
      <img src="${imgsrc}" width="300" height="423"/>
      <div class="hover-content">
        <h5>NFT #${tokenId}</h5>
      </div>
    </div>`;

  }

  return html;
};

async function updateWalletBalances() {
  var amountrockets = parseInt(await contract_Rockets.methods.balanceOf(currentAccount).call());

  var amountnyr = (parseInt(await contract_NYR.methods.balanceOf(currentAccount).call())/1e18).toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2});

  $('#current_account').text(currentAccount);
  $('.user_lmr_supply').text(amountrockets + " Bull Bear Finance" + (amountrockets == 1 ? "": "s"));
  $('.user_lmr_supply_link').attr('href',`https://bscscan.com/token/${contractAddress_Rockets}?a=${currentAccount}`);

  $('.user_nyr_supply').text(amountnyr + " NYR");
  $('.user_nyr_supply_link').attr('href',`https://bscscan.com/token/${contractAddress_NYR}?a=${currentAccount}`);
}

async function loadGallery() {
  $('#filterresults').text(`${galleryresult.length} result${galleryresult.length != 1 ? "s":""}`);
  $('#pagination-container').pagination({
    pageSize: 18,
    dataSource: galleryresult,
    callback: async function(data, pagination) {
        // template method of yourself

        var html = await rocketwallettemplategallery(data);
        $('#data-container').animate({opacity:0}, function() {
          $('#data-container').html(html);
          $('#data-container').animate({opacity:100}, function() {
            $('#data-container').css('height', $('#data-container').height());
          });
        });

    }
  });

}

async function loadWallet() {
  //console.log("loadWallet called for ", );

  var amountrockets = parseInt(await contract_Rockets.methods.balanceOf(currentAccount).call());

  var amountnyr = (parseInt(await contract_NYR.methods.balanceOf(currentAccount).call())/1e18).toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2});

  $('#current_account').text(currentAccount);
  $('.user_lmr_supply').text(amountrockets + " Bull Bear Finance" + (amountrockets == 1 ? "": "s"));
  $('.user_lmr_supply_link').attr('href',`https://bscscan.com/token/${contractAddress_Rockets}?a=${currentAccount}`);

  $('.user_nyr_supply').text(amountnyr + " NYR");
  $('.user_nyr_supply_link').attr('href',`https://bscscan.com/token/${contractAddress_NYR}?a=${currentAccount}`);



  $('#pagination-container').pagination({
    pageSize: 12,
    dataSource: Array.from(Array(parseInt(amountrockets)).keys()),
    callback: async function(data, pagination) {
        // template method of yourself

        var html = await rocketwallettemplate(data);
        $('#data-container').animate({opacity:0}, function() {
          $('#data-container').html(html);
          $('#data-container').animate({opacity:100}, function() {
            $('#data-container').css('height', $('#data-container').height());
          });
        });

    }
  });

}

async function sendNyr() {

  var amountnyr = (parseInt(await contract_NYR.methods.balanceOf(currentAccount).call())/1e18);  //.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})

  if(amountnyr === 0) {
    showToast(`You don't have any liquid NYR. Can you claim some first?`, "alert");
    return false;
  }

  let input = {
    type: 'text',
    label: 'Receiving address',
    value: '',
  }

    $.dialog.prompt(`Insert receiving BSC address`,`To which BSC address do you want to send (some of) your ${amountnyr.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})} NYR?`, input, async function(newowner){
      if(newowner === null) {
        showToast('You did not insert a destination address', "alert");
        return false;
      }

      newowner = newowner.trim();

      if(newowner.length === 0) {
        showToast('Destination address should have 40 characters (+ 0x prefix)', "alert");
        return false;
      }

      if(!newowner.startsWith("0x")) {
        newowner = "0x"+newowner;
      }

      if(!web3.utils.isAddress(newowner)) {
        showToast('Address invalid. Destination address should have 40 characters (+ 0x prefix)', "alert");
        return false;
      }

      let input2 = {
        type: 'text',
        label: 'Amount NYR',
        value: '',
      }

        $.dialog.prompt(`How much NYR to send?`,`How much of your <b>${amountnyr} NYR</b> would you like to send to <b>${newowner}</b>?<br /><small>(Only use a . as decimal seperator)</small>`, input2, async function(amountnyr_tosend){

          let regex = /^\d*\.?\d*$/;
          if(!regex.test(amountnyr_tosend)) {
            showToast(`Your amount to send contains invalid characters. You can only use integers and one dot (.) as a decimal seperator`, "alert");
            return false;
          }

          $.dialog.confirm('Confirm sending NYR?',`Please confirm:<br /><b>Send ${amountnyr_tosend} NYR to ${newowner}?</b>`, async function(res){
            if(!res) {

              showToast(`Cancelled sending NYR`);
              return false;
            }

            let amountnyr_tosend_inWei = web3.utils.toWei(amountnyr_tosend);
            let allowed = await contract_NYR.methods.allowance(currentAccount,currentAccount).call();

            if(allowed < amountnyr_tosend_inWei) {
              showToast(`Spending allowance to low (${web3.utils.fromWei(allowed)}). Confirm in MetaMask to raise allowance first!`,"default", 7000);
              contract_NYR.methods.increaseAllowance(currentAccount, web3.utils.toWei(amountnyr_tosend)).send({from:currentAccount})
              .on('transactionHash', function(transactionHash){
                console.log("on transactionHash");
                console.log(transactionHash);

                showToast(`Transaction ${transactionHash} waiting to be minted - <a target="_blank" href="https://bscscan.com/tx/${transactionHash}" title="View ${transactionHash} on BSCscan">BSCscan</a>`,"default", 5000);

              })
              .then(
                res => {
                  showToast(`Increased allowance with ${amountnyr_tosend} NYR, now confirm actual transfer of ${amountnyr_tosend} NYR to ${newowner} in MetaMask`, "success", 7000);
                  finalSendNyr(newowner, amountnyr_tosend);
                }
              ).catch(
                err => {
                  showToast(err.message, "alert");
                }
              );
            } else {
              finalSendNyr(newowner, amountnyr_tosend);
            }


          });



        });




    });

}

async function finalSendNyr(newowner, amountnyr_tosend) {
  contract_NYR.methods.transferFrom(currentAccount, newowner, web3.utils.toWei(amountnyr_tosend)).send(
    {
      from: currentAccount,
      to: contract_NYR
    }
  )
  .on('transactionHash', function(transactionHash){
    console.log("on transactionHash");
    console.log(transactionHash);

    showToast(`Transaction ${transactionHash} waiting to be minted - <a target="_blank" href="https://bscscan.com/tx/${transactionHash}" title="View ${transactionHash} on BSCscan">BSCscan</a>`,"default", 5000);

  })
  .then(
    res =>
    {
      console.log(res);
      updateWalletBalances();
      showToast(`Sent ${amountnyr_tosend} NYR to ${newowner}`, "success", 2000);
    })
  .catch(
    err =>
    {
      showToast(err.message, "alert");
    }
  );
}

async function batch_claimNYR() {

  if(nftsonthispage.length === 0) {
    showToast(`There are no NFTs on this page, so you can't claim any NYR`, "alert");
    return false;
  }

  showToast('Calculating accumulated NYR for NFTs on this page');

  let claimable_nyr = 0;

  for(var i = 0; i < nftsonthispage.length; i++) {
      claimable_nyr += parseInt(await contract_NYR.methods.accumulated(nftsonthispage[i]).call());
  }

  if(claimable_nyr === 0) {
    showToast(`There is no NYR accumulated at the moment for the NFTs on this page`, "alert");
  }

  $.dialog.confirm('Confirm batch claim',`Accumulated NYR for ${nftsonthispage.length} NFT${(nftsonthispage.length === 1 ? "":"s")}: ${(claimable_nyr/1e18).toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}<br />Want to claim that NYR now?`, async function(res){
    if(!res) {

      showToast(`Cancelled batch NYR claim`);
      return false;
    }

    contract_NYR.methods.claim(nftsonthispage).send({
      from: currentAccount,
      to: contractAddress_NYR
    })
    .on('transactionHash', function(transactionHash){
      console.log("on transactionHash");
      console.log(transactionHash);

      showToast(`Transaction ${transactionHash} waiting to be minted - <a target="_blank" href="https://bscscan.com/tx/${transactionHash}" title="View ${transactionHash} on BSCscan">BSCscan</a>`,"default", 5000);

    })
    .then(
      res => {
        updateWalletBalances();
        showToast(`Claimed NYR tokens`, "success");
      },
      reject => {
        console.log(reject)
        showToast(reject.message, "alert");
      }
    ).catch(err => {
      console.log(err.c);
      console.log(JSON.parse(err));
      showToast(err, "alert", 3000);
    });

  });



}

async function modalNFT_claimNYR(){

  let tokenId = $('#modalNFT').data('tokenid');

  if( parseInt (await contract_NYR.methods.accumulated(tokenId).call() ) > 0 ) {
      contract_NYR.methods.claim([tokenId]).send({
        from: currentAccount,
        to: contractAddress_NYR
      })
      .on('transactionHash', function(transactionHash){
        console.log("on transactionHash");
        console.log(transactionHash);

        showToast(`Transaction ${transactionHash} waiting to be minted - <a target="_blank" href="https://bscscan.com/tx/${transactionHash}" title="View ${transactionHash} on BSCscan">BSCscan</a>`,"default", 5000);

      })
      .then(
        res => {
          loadNFTModal(tokenId);
          updateWalletBalances();
          showToast(`Claimed NYR for NFT #${tokenId}`,"success");
        },
        reject => {
          console.log(reject)
          showToast(reject, "alert");
        }
      );
  }
}

async function modalNFT_rename(){
  let tokenId = $('#modalNFT').data('tokenid');

  // can only contain 25 chars, minimum 1 char.

  let input = {
    type: 'text',
    label: 'New NFT name',
    value: '',
  }

  $.dialog.prompt(`Give NFT #${tokenId} a new name.`, 'Min: 1 char, max: 25 chars.\nOnly Alpha Numeric and spaces are valid characters.<br /><snmall>You will need to have 1337 NYR tokens for a name change, so claim those first</small>', input, async function(newname){
    if(newname === null) {
      showToast('You did not insert a new name', "alert");
      return false;
    }

    newname = newname.trim();

    if(newname.length === 0) {
      showToast('Your name needs at least 1 character', "alert");
      return false;
    }

    if(newname.length > 25) {
      showToast(`Your name exceeds the maximum of 25 characters. (${newname.length})`, "alert");
      return false;
    }

    // can only contain Alphanumeric and space.
    let regex = /^[a-zA-Z0-9 ]*$/;
    if(!regex.test(newname)) {
      showToast(`Your name contains invalid characters. You can only use alphanumeric (Aa-Zz 0-9) and space`, "alert");
      return false;
    }

    if(await contract_Rockets.methods.isNameReserved(newname).call()) {
        showToast(`Unfortunately another NFT is already named ${newname}. Pick another!`, "alert", 5000);
        return false;
    }

    $.dialog.confirm('Confirm new name?',`Naming a Bull Bear Finance costs 1337 NYR (and some gas).<br /><b>Confirm new name of NFT #${tokenId}: <code>${newname}</code>?</b>`, async function(res){
      if(!res) {

        showToast(`Cancelled naming #${tokenId}`);
        return false;
      }

        if(parseInt(await contract_NYR.methods.balanceOf(currentAccount).call()) < (1337 * 1e18) ) {
          showToast(`You need at least 1337 claimed NYR tokens in your wallet`, "alert");
          return false;
        }

        contract_Rockets.methods.changeName(tokenId, newname).send({
          from: currentAccount,
          to: contractAddress_Rockets
        }
        )
        .on('transactionHash', function(transactionHash){
          console.log("on transactionHash");
          console.log(transactionHash);

          showToast(`Transaction ${transactionHash} waiting to be minted - <a target="_blank" href="https://bscscan.com/tx/${transactionHash}" title="View ${transactionHash} on BSCscan">BSCscan</a>`,"default", 5000);

        })
        .then(
        (res) => {
          updateWalletBalances();
          loadNFTModal(tokenId);
          showToast(`Renamed your NFT!`,"success");
          console.log(res);
        },
        (reject)  => {
          console.log("REJECTRED");
          showToast(reject.message, "alert", 3000);
          console.log(reject.code);
          console.log(reject.error);
        }
        ).catch(err => {
          console.log(err.c);
          console.log(JSON.parse(err));
          showToast(err, "alert", 3000);
        });

      });

  });

  return false;

}

async function modalNFT_transfer(){

  let tokenId = $('#modalNFT').data('tokenid');

  let input = {
    type: 'text',
    label: 'Receiving address',
    value: '',
  }

    $.dialog.prompt(`Insert receiving BSC address`,`To which BSC address do you want to send NFT #${tokenId}?`, input, async function(newowner){
      if(newowner === null) {
        showToast('You did not insert a destination address', "alert");
        return false;
      }

      newowner = newowner.trim();

      if(newowner.length === 0) {
        showToast('Destination address should have 40 characters (+ 0x prefix)', "alert");
        return false;
      }

      if(!newowner.startsWith("0x")) {
        newowner = "0x"+newowner;
      }

      if(!web3.utils.isAddress(newowner)) {
        showToast('Address invalid. Destination address should have 40 characters (+ 0x prefix)', "alert");
        return false;
      }

      contract_Rockets.methods.safeTransferFrom(currentAccount, newowner, tokenId).send(
        {
          from: currentAccount,
          to: contractAddress_Rockets
        }
      )
      .on('transactionHash', function(transactionHash){
        console.log("on transactionHash");
        console.log(transactionHash);

        showToast(`Transaction ${transactionHash} waiting to be minted - <a target="_blank" href="https://bscscan.com/tx/${transactionHash}" title="View ${transactionHash} on BSCscan">BSCscan</a>`,"default", 5000);

      })
      .then(
        res =>
        {
          console.log(res);
          $('#sound_success')[0].play();
          loadWallet();
          $('#modalNFT').modal('hide');
          showToast(`Sent #${tokenId} to ${newowner}`,"success");
        })
      .catch(
        err =>
        {
          showToast(err.message, "alert");
        }
      );
    });

}

async function getNFTTitle(tokenId) {
  let nfttitle = await contract_Rockets.methods.tokenNameByIndex(tokenId).call();

  if(nfttitle === "") {
    nfttitle = `UNNAMED`;
  }

  return nfttitle;
}

function pad (str, max) {
  str = str.toString();
  return str.length < max ? pad("0" + str, max) : str;
}

function getZeropadArtworkId(tokenId) {
  if(startingIndex !== 0) {
    return pad(getArtworkFromToken(tokenId), 5);
  } else {
    return "TBD";
  }
}

function getSVGLink(tokenId) {
    if(startingIndex !== 0) {
      return `/rocketgallery/lil-moon-rocket-${getArtworkFromToken(tokenId)}.html`;
    } else {
      return "#SVG-NOT-YET-AVAILABLE--NFTs-have-not-yet-been-revealed--STAY-TUNED";
    }
}

function getTweetLink(tokenId, nftname) {

  let totweet = "Imma go to the moon with Bull Bear Finance";

  if(nftname) {
    totweet = `Look at my Bull Bear Finance ${nftname}`;
  }

  let url = "https://lilmoonrockets.com";

  if(startingIndex !== 0) {
    url = `https://lilmoonrockets.com/rocketgallery/lil-moon-rocket-${getArtworkFromToken(tokenId)}.html`;
  }

  return `https://twitter.com/intent/tweet?via=lilmoonrockets&hashtags=NFT,eth,cryptoart,moony&text=${encodeURIComponent(totweet)}&url=${encodeURIComponent(url)}`;
}

async function loadNFTModal(tokenId) {

  //console.log(tokenId);
  showToast(`Loading NFT #${tokenId}`,'default', 1000);


  //modalNFT_image, modalNFT_title, modalNFT_artworkid, modalNFT_tokenid, modalNFT_nyr, modalNFT_svglink, modalNFT_tweetlink

  $('#modalNFT_image').attr('src',await getImageSrc(tokenId, "lg"));

  $('#modalNFT_title').text(await getNFTTitle(tokenId));

  $('#modalNFT_artworkid').text(getZeropadArtworkId(tokenId));

  $('#modalNFT_tokenid').text(tokenId);

  $('#modalNFT_nyr').text((parseInt(await contract_NYR.methods.accumulated(tokenId).call())/1e18).toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2}));

  $('#modalNFT_svglink').attr('href', getSVGLink(tokenId));

  $('#modalNFT_tweetlink').attr('href', getTweetLink(tokenId,$('#modalNFT_title').text()));


  // functions:

  // Rename
  // show accumulated NYR
  // claim NYR (claim NYR for all)
  // Burn
  // Transfer
  // view svg

  fillNFTStats(tokenId);
  $('#modalNFT').data('tokenid', tokenId);
  $('#modalNFT').modal('show');
}
async function getDbRow(id) {
  var contents = db.prepare(squel.select().from("lilmoonrockets").where("id = ?", id).toString());
  contents.step();
  return contents.getAsObject();
}

async function getStatsCount(col, val) {
  var contents = db.exec(`select count(*) from lilmoonrockets where ${col} = ${val}`);

  var numberres = new BigNumber(contents[0].values[0][0]);

  return {
    plain: numberres.toNumber(),
    pct: numberres.dividedBy(NUM_ARTWORKS).toNumber()
  }
  //return ((contents[0].values[0][0] / NUM_ARTWORKS));
}

function formatStatsCount(stats) {
  return (stats * 100).toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 4})+ " %";
}

async function fillNFTStats(tokenId) {
  var dbid = getArtworkFromToken(tokenId);

  console.log("getting nftstats ", dbid);
  let dbres = await getDbRow(dbid);
  console.log(dbres);

  $('#modalNFT_ipfshash').text(dbres.ipfshash);
  $('#modalNFT_ipfshash').attr('href' , `https://ipfs.io/ipfs/${dbres.ipfshash}`);

  $('#traitname_hiker').text(map_hikers[dbres.hiker]);
  $('#traitname_rocket').text(map_rockets[dbres.rocket]);
  $('#traitname_win').text(map_windows[dbres.win]);
  $('#traitname_moon').text(map_moon[parseInt(dbres.moon)]);
  $('#traitname_pattern').text(map_pattern[dbres.pattern]);
  $('#traitname_pattern_size').text(map_patternsize[dbres.pattern_size]);
  $('#traitname_nopattern').text(map_nopattern[dbres.nopattern]);
  $('#traitname_color').text(map_basecolor[dbres.color].name);
  $('#traitname_palette').text(map_colorschemes[dbres.palette].name);
  $('#traitname_blackwhite').text(map_blackwhite[dbres.blackwhite]);
  $('#traitname_dashed').text(map_dashed[dbres.dashed]);


  let traitchance_hiker = await getStatsCount("hiker",dbres.hiker);
  let traitchance_rocket = await getStatsCount("rocket",dbres.rocket);
  let traitchance_win = await getStatsCount("win",dbres.win);
  let traitchance_moon = await getStatsCount("moon",dbres.moon);
  let traitchance_pattern = await getStatsCount("pattern",dbres.pattern);
  let traitchance_pattern_size = await getStatsCount("pattern_size",dbres.pattern_size);
  let traitchance_nopattern = await getStatsCount("nopattern",dbres.nopattern);
  let traitchance_color = await getStatsCount("color",dbres.color);
  let traitchance_palette = await getStatsCount("palette",dbres.palette);
  let traitchance_blackwhite = await getStatsCount("blackwhite",dbres.blackwhite);
  let traitchance_dashed = await getStatsCount("dashed",dbres.dashed);

  let traitvalue = (traitchance_hiker.pct * traitchance_rocket.pct * traitchance_win.pct * traitchance_moon.pct * traitchance_pattern.pct * traitchance_pattern_size.pct * traitchance_nopattern.pct * traitchance_color.pct * traitchance_palette.pct * traitchance_blackwhite.pct * traitchance_dashed.pct) * NUM_ARTWORKS;


  let traitvalue2 = new BigNumber(traitchance_hiker.pct);

  var tvcalc = traitvalue2.multipliedBy(traitchance_rocket.pct).multipliedBy(traitchance_win.pct).multipliedBy(traitchance_moon.pct).multipliedBy(traitchance_pattern.pct).multipliedBy(traitchance_pattern_size.pct).multipliedBy(traitchance_nopattern.pct).multipliedBy(traitchance_color.pct).multipliedBy(traitchance_palette.pct).multipliedBy(traitchance_blackwhite.pct).multipliedBy(traitchance_dashed.pct).multipliedBy(NUM_ARTWORKS);

  console.log(traitvalue);
  console.log(tvcalc.toNumber());

  $('#traitchance_hiker').text(formatStatsCount(traitchance_hiker.pct));
  $('#traitchance_rocket').text(formatStatsCount(traitchance_rocket.pct));
  $('#traitchance_win').text(formatStatsCount(traitchance_win.pct));
  $('#traitchance_moon').text(formatStatsCount(traitchance_moon.pct));
  $('#traitchance_pattern').text(formatStatsCount(traitchance_pattern.pct));
  $('#traitchance_pattern_size').text(formatStatsCount(traitchance_pattern_size.pct));
  $('#traitchance_nopattern').text(formatStatsCount(traitchance_nopattern.pct));
  $('#traitchance_color').text(formatStatsCount(traitchance_color.pct));
  $('#traitchance_palette').text(formatStatsCount(traitchance_palette.pct));
  $('#traitchance_blackwhite').text(formatStatsCount(traitchance_blackwhite.pct));
  $('#traitchance_dashed').text(formatStatsCount(traitchance_dashed.pct));

  $('#traitchance_hiker').parent("div").attr("data-original-title",`${traitchance_hiker.plain} rockets have this trait`);
  $('#traitchance_rocket').parent("div").attr("data-original-title",`${traitchance_rocket.plain} rockets have this trait`);
  $('#traitchance_win').parent("div").attr("data-original-title",`${traitchance_win.plain} rockets have this trait`);
  $('#traitchance_moon').parent("div").attr("data-original-title",`${traitchance_moon.plain} rockets have this trait`);
  $('#traitchance_pattern').parent("div").attr("data-original-title",`${traitchance_pattern.plain} rockets have this trait`);
  $('#traitchance_pattern_size').parent("div").attr("data-original-title",`${traitchance_pattern_size.plain} rockets have this trait`);
  $('#traitchance_nopattern').parent("div").attr("data-original-title",`${traitchance_nopattern.plain} rockets have this trait`);
  $('#traitchance_color').parent("div").attr("data-original-title",`${traitchance_color.plain} rockets have this trait`);
  $('#traitchance_palette').parent("div").attr("data-original-title",`${traitchance_palette.plain} rockets have this trait`);
  $('#traitchance_blackwhite').parent("div").attr("data-original-title",`${traitchance_blackwhite.plain} rockets have this trait`);
  $('#traitchance_dashed').parent("div").attr("data-original-title",`${traitchance_dashed.plain} rockets have this trait`);

  $('#traitchance_rrvalue').text(tvcalc.multipliedBy(100).toFormat(4) + " %");
  $('#traitchance_rrvalue').parent("div").attr("data-original-title", `Interpreted indicator for uniqueness (lower is more unique)`);

}
// load contracts
$(document).ready(function() {

  // if(currentpage == "home") {
  //   initializeClock('ctdown', "March 16 2021 13:33:37 GMT");
  // }



  checkLoadWeb3(loadContracts);

  noUiSlider.create(slider, {
      start: 1,
      step: 1,
      connect: true,
      range: {
          'min': 1,
          'max': 50
      },
      pips: {
        mode: 'steps',
        density: 0,
        filter: filterPips,
        format: wNumb({
            decimals: 0
        })
      },
      tooltips: [wNumb({decimals: 0, suffix: "🚀 "})]
  });

  slider.noUiSlider.on('change', function () {
    var currentamount = parseInt(slider.noUiSlider.get());
    $("#totalprice").text((currentamount * nftprice).toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2}) + ' bnb');
  });

  slider.noUiSlider.on('slide', function () {
    var currentamount = parseInt(slider.noUiSlider.get());
    $("#totalprice").text((currentamount * nftprice).toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2}) + ' bnb');
  });

  let mouserocket = document.getElementById('mouserocket');

  const onMouseMove = (e) =>{
    mouserocket.style.left = e.pageX + 25 + 'px';
    mouserocket.style.top = e.pageY + 25 + 'px';
  }

  document.addEventListener('mousemove', onMouseMove);

  $("#data-container").on("click", ".nftthumb", function () {
    let tokenId = $(this).data('token');
    console.log(tokenId);

    if(tokenId !== undefined) {
      loadNFTModal(tokenId);
    }

  });

  if(currentpage == "gallery") {

    setTimeout(function() {
      $("#galleryiframe")[0].contentWindow.focus()
    }, 100);


  }

  if(currentpage === "gallery-new") {
    $('select').change(function(){
      compileDBStatement();
    });
  }



  $('#modalNFT').on('shown.bs.modal	', function (e) {
  // do something...
  $('[data-toggle="tooltip"]').tooltip({
    boundary: "tooltipboundary"
  });
});





});
