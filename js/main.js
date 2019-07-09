

var bidlogs=[
    {
       "id":"00001",
       "accountName":"Account 0.0.1761",
       "bidTime":"5:32pm",
       "bidDate":"June 19th,2019",
       "bidAmt":"5",
       "currency":"£"
    },
    {
       "id":"00002",
       "accountName":"Account 0.0.1761",
       "bidTime":"10:30pm",
       "bidDate":"June 18th,2019",
       "bidAmt":"10",
       "currency":"£"
    },
    {
       "id":"00003",
       "accountName":"Account 0.0.1761",
       "bidTime":"6:50pm",
       "bidDate":"June 17th,2019",
       "bidAmt":"50",
       "currency":"£"
    },
    {
       "id":"00004",
       "accountName":"Account 0.0.1761",
       "bidTime":"1:00pm",
       "bidDate":"June 16th,2019",
       "bidAmt":"100",
       "currency":"£"
    },
    {
       "id":"00005",
       "accountName":"Account 0.0.1761",
       "bidTime":"5:20pm",
       "bidDate":"June 15th,2019",
       "bidAmt":"999",
       "currency":"£"
    },
    {
        "id":"00006",
        "accountName":"Account 0.0.1761",
        "bidTime":"3:45pm",
        "bidDate":"June 14th,2019",
        "bidAmt":"5",
        "currency":"£"
     }
 ];


let bidRate=0;
$('document').ready(function() { 

  $('#bidBtn').click(function() {
    bidRate=$('#bidRate')[0].innerText; 
    payment(bidRate);
});

const url = 'https://mps.hashingsystems.com/memo/hedera-bidding-example?limit=1000';
  fetch(url)
  .then((resp) => resp.json())
  .then(function(data) {
          console.log("sjskabksa",data);
     if(data && data.success===true && data.response && data.response.length > 0){
      console.log("sjskabksa",data.response);
	} else {
         $("#container-Append").empty();
	 $('#container-Append').append('<p class="n-t-s">Nothing to show</p>')
	}
   
    })

  .catch(function(error) {
    console.log(JSON.stringify(error));
    $("#container-Append").empty();
    $('#container-Append').append('<p  class="n-t-s">Nothing to show</p>')
  });   

    for(var i = 0;i<bidlogs.length;i++){
  
    $('#container-Append').append(`<div class="rectangle-border"><div class="row row-details"><div class="col-md-7 rm-pd"><div class="row">
                <div class="col-md-2 crat-img">
                    <img src="images/img2.png">
                </div>

                <div class="col-md-10">
                        <span class="acc">Account</span>
                        <span class="account-text">0.0.1761</span> 
                </div>
            </div>
        </div>

        <div class="col-md-5">
            <div class="row">
                <div class="col-md-3 spaces">
                    <div class="banner-hours">${bidlogs[i].bidTime}</div><!--see this-->
                </div>

                <div class="col-md-6 border-center"> 
                    <div class="banner-year">${bidlogs[i].bidDate}</div>
                </div> 

                <div class="col-md-3 dollor">
                    <div class="banner-count">${bidlogs[i].currency}${bidlogs[i].bidAmt}</div>
                </div>
            </div>
        </div>
        
    </div>
</div>`)


    }



      var intialBid=10;
    $('#bidRate')[0].innerHTML=intialBid;
    
    console.log('Data',bidlogs);
  });
function incDec(value) {
    var currentBid=parseInt($('#bidRate')[0].innerHTML);
        switch(value) {
            case 'inc':
                    
                    $('#bidRate')[0].innerHTML=currentBid+1;
              break;
            case 'dec':
                    if(currentBid>10){
                        $('#bidRate')[0].innerHTML=currentBid-1;  
                    }
              break;
            default:
              console.log('no value match', value );
          }

    
}


    (function(_h, a, s, h, g, ra, ph) {
      console.log("i am inside ");
      _h['MPS-JS'] = h;
      console.log("i am inside  _hhhh",_h);
      console.log("I am s ",s);
      _h[h] = _h[h] || function() {
          console.log("Inside second second ");
          (_h[h].q = _h[h].q || []).push(arguments) };
          var ra = a.createElement(s),
          ph = a.getElementsByTagName(s)[0];
          ra.id = h;
          ra.src = g;
          ra.async = 1;
          console.log(ra);
          console.log(ph);
          ph.parentNode.insertBefore(ra, ph);
      }(window, document, 'script', 'mw', 'https://api.hashingsystems.com/js/widget.js'))

  
  function payment(amount) {
    console.log("Paul Inside payment",amount);

    //let cont_file="zzzzzzz";
    //let sessionid="ttttttt";
    //let memo= await memo_generator(cont_file,sessionid);
    //console.log("I am memo ",memo);

    window.mw('init',
    {
        submissionnode: "0.0.11",
        recipientlist: `[{ "to": "0.0.1761", "tinybars": ${amount} }]`,
        contentid:'79',
        type:'article',
        memo:hedera-bidding-example,
        redirect:'{ "nonPayingAccount": "/insufficient-amount/", "noAccount": "/account-not-paired/", "homePage": "/" }',
        time: memo.timestamp, // optional parameter
        attrID: 'article-1',
    });

   // return memo.memoid;
  }



  
//   async  checkPayment(memo_id){
//     console.log("CHECKPAYMENT   ",memo_id);
//     window.mw('checkTransaction',{'memo_id':memo_id}, function(err, data) {

//       console.log("I will get err or data ",err,data)
//     //   console.log("going inside check payment");
//     //  if (err) {
//     //    console.log("ErrorHappend ",err);
//     //  } else {
//     //    console.log("transaction don",data);
//     //    console.log("transaction done");
//     //  }
//    });
  

  /*async memo_generator(cont_file,sessionid){

    let timestamp=new Date().getTime();
    let time=timestamp.toString();
    let memoid;

    memoid = CryptoJS.SHA256(time+sessionid+cont_file);
    console.log(memoid+"hash generated ");
    var memo_obj={
     "memoid":memoid.toString(),
     "timestamp":timestamp
    }
    console.log(memo_obj);
  }*/

 /* async  check_payment(memo_id){
       window.mw('checkTransaction',memo_id, function(err, data) {
        if (err) {
          console.log(err);
        } else {
          console.log(data);
          console.log("transaction done");
        }
      });
    }
 */

// }

// async function memo_generator(cont_file,sessionid){

//   let timestamp=new Date().getTime();
//   let time=timestamp.toString();
//   let memoid;

//   memoid = CryptoJS.SHA256(time+sessionid+cont_file);
//   console.log(memoid+"hash generated ");
//   var memo_obj={
//    "memoid":memoid.toString(),
//    "timestamp":timestamp
//   }
//   return memo_obj;
// }




 