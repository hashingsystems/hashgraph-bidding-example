const getBidsURL = 'https://mps.hashingsystems.com/memo/hedera-bidding-example?limit=1000';
let bidRate = 0;
var intialBid = 1;

$('document').ready(function () {

  $('#bidBtn').click(function () {
    bidRate = $('#bidRate')[0].innerText;
    payForBid(bidRate);
  });

  fetch(getBidsURL)
    .then((resp) => resp.json())
    .then(function (data) {
      if (data && data.success === true && data.response && data.response.length > 0) {
        populateBidList(data.response);
      } else {
        $("#container-Append").empty();
        $('#container-Append').append('<p class="n-t-s">No Bid Placed.</p>')
      }
    })
    .catch(function (error) {
      $("#container-Append").empty();
      $('#container-Append').append('<p  class="n-t-s">Something went wrong, please try again!</p>')
    });

  $('#bidRate')[0].innerHTML = intialBid;
});

function populateBidList(bidingList) {
  for (var i = 0; i < bidingList.length; i++) {
    let bid = bidingList[i];

    let formattedDate = getFormattedDate(Number(bid.timestamp));
    let fiatCost = convesrtInFiat(bid.cost);

    $('#container-Append').append(`<div class="rectangle-border"><div class="row row-details"><div class="col-md-7 rm-pd"><div class="row">
                <div class="col-md-2 crat-img">
                    <img src="images/img2.png">
                </div>

                <div class="col-md-10">
                        <span class="acc">Account</span>
                        <span class="account-text">${bid.sender}</span> 
                </div>
            </div>
        </div>

        <div class="col-md-5">
            <div class="row">
                <div class="col-md-3 spaces">
                    <div class="banner-hours">${formattedDate.timeStr}</div><!--see this-->
                </div>

                <div class="col-md-6 border-center"> 
                    <div class="banner-year">${formattedDate.dateStr}</div>
                </div> 

                <div class="col-md-3 dollor">
                    <div class="banner-count">${'£'}${fiatCost}</div>
                </div>
            </div>
        </div>

    </div>
   </div>`)
  }
}

function incDec(value) {
  var currentBid = parseInt($('#bidRate')[0].innerHTML);
  switch (value) {
    case 'inc':
      $('#bidRate')[0].innerHTML = currentBid + 1;
      break;
    case 'dec':
      if (currentBid > intialBid) {
        $('#bidRate')[0].innerHTML = currentBid - 1;
      }
      break;
    default:
      console.log('no value match', value);
  }
}

function convesrtInFiat(amount) {
  amount = amount / 4666667;
  return amount < 1 && amount !== 0 ? parseFloat(Math.round(amount * 100) / 100).toFixed(2) : amount;
}

function convertInHbar(amount) {
  return amount * 4666667;
}

function getFormattedDate(timestamp) {
  var date = new Date(timestamp);

  var month = date.getMonth() + 1;
  var day = date.getDate();
  var hour = date.getHours();
  var min = date.getMinutes();
  var sec = date.getSeconds();

  day = (day < 10 ? "0" : "") + day;
  hour = (hour < 10 ? "0" : "") + hour;
  min = (min < 10 ? "0" : "") + min;
  sec = (sec < 10 ? "0" : "") + sec;

  let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

  let formattedDate = {
    dateStr: months[month] + " " + day + ", " + date.getFullYear(),
    timeStr: hour + ":" + min
  }

  return formattedDate;
}

(function (_h, a, s, h, g, ra, ph) {
  _h['MPS-JS'] = h;
  _h[h] = _h[h] || function () {
    (_h[h].q = _h[h].q || []).push(arguments)
  }; ra = a.createElement(s),
    ph = a.getElementsByTagName(s)[0];
  ra.id = h;
  ra.src = g;
  ra.async = 1;
  console.log(ra);
  console.log(ph);
  ph.parentNode.insertBefore(ra, ph);
}(window, document, 'script', 'mw', 'https://api.hashingsystems.com/js/widget.js'));

function payForBid(amount) {
  let tinybars = convertInHbar(amount);
  console.log("Kirti payForBid :- ", amount, tinybars);
  window.mw('init', {
    submissionnode: "0.0.11",
    recipientlist: `[{ "to": "0.0.99", "tinybars": ${tinybars} }]`,
    contentid: '79',
    type: 'bid',
    memo: 'hedera-bidding-example',
    attrID: 'article-1',
  });
}




