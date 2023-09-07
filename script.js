const currency_one = document.getElementById('currency-one')
const currency_two = document.getElementById('currency-two')

const amount_one = document.getElementById('amount-one')
const amount_two = document.getElementById('amount-two')

const rateText = document.getElementById('rate')
const swap_btn = document.getElementById('btn')

currency_one.addEventListener('change', calculateMoney)
currency_two.addEventListener('change', calculateMoney)

amount_one.addEventListener('input', calculateMoney)
amount_two.addEventListener('input', calculateMoney)

function calculateMoney() {
    const one = currency_one.value
    const two = currency_two.value
    
  
    let url = `https://v6.exchangerate-api.com/v6/9cbeb892b47b358355b34f7a/latest/${one}`
    fetch(url).then(res => res.json()).then(data => {
        // console.log(data);
        const rate = data.conversion_rates[two]
        rateText.innerText = `${amount_one.value} ${one} = ${(amount_one.value * rate).toFixed(2)} ${two}`
        amount_two.value = ((amount_one.value * rate).toFixed(2))
    })

}
calculateMoney()