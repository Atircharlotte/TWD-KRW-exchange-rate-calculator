const currencyEl_one = document.getElementById('currency-one');
const currencyEl_two = document.getElementById('currency-two');
const amountEl_one = document.getElementById('amount-one');
const amountEl_two = document.getElementById('amount-two');

const rateEl = document.getElementById('rate');
//const swap = document.getElementById('swap');


//fetch currency rates and updates the dom 抓取匯率
var myHeaders = new Headers();
myHeaders.append("apikey", "8zpQnKk1DW2GFWOa8vYwB0u4g5Oze2JL");

var requestOptions = {
  method: 'GET',
  redirect: 'follow',
  headers: myHeaders
};


function calculate(){
    const currency_one = currencyEl_one.value;
    const currency_two = currencyEl_two.value;
    
    fetch("https://api.apilayer.com/exchangerates_data/convert?to=TWD&from=KRW&amount=10000",requestOptions)
    .then(response => response.json())
    .then((data) => {
        //console.log(data);
        const rate = data.info.rate; //匯率的值
        rateEl.innerText = `1 KRW = ${rate} TWD`;//顯示單位匯率換算

        amountEl_two.value = (amountEl_one.value*rate).toFixed(2);//金額顯示至小數點第二位

    
    });
}


currencyEl_one.addEventListener('change',calculate);
currencyEl_two.addEventListener('change',calculate);
amountEl_one.addEventListener('input',calculate);
amountEl_two.addEventListener('input',calculate);


//swap按鈕切換

/*swap.addEventListener('click', () => {
    const temp = currencyEl_one.value;
    currencyEl_one.value = currencyEl_two.value;
    currencyEl_two.value = temp;
    calculate();});
*/
