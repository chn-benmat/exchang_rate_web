const currency_one = document.getElementById('currency-one')
const currency_two = document.getElementById('currency-two')

const amount_one = document.getElementById('amount-one')
const amount_two = document.getElementById('amount-two')

const rateText = document.getElementById('rate')
const swap_btn = document.getElementById('btn')

currency_one.addEventListener('change', calculateMoney)
currency_two.addEventListener('change', calculateMoney)

function calculateMoney() {
    const one = currency_one.value
    const two = currency_two.value
    let url = `https://v6.exchangerate-api.com/v6/9cbeb892b47b358355b34f7a/latest/${one}`
    fetch(url).then(res => res.json()).then(data => {
        // console.log(data);
        const rate = data.conversion_rates[two]
        rateText.innerText = `1 ${one} = ${rate} ${two}`
    })

}
calculateMoney()