

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



$('document').ready(function() { 
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
                    <div class="banner-hours">${bidlogs[i].bidTime}</div>
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
                    if(currentBid>1){
                        $('#bidRate')[0].innerHTML=currentBid-1;  
                    }
              break;
            default:
              console.log('no value match', value );
          }

    
}


 
