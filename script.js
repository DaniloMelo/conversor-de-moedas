// https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL

const dolarResult = document.querySelector(".dolar__result");
const dolarInp = document.querySelector(".dolar__inp");

const euroResult = document.querySelector(".euro__result");
const euroInp = document.querySelector(".euro__inp");

const btcResult = document.querySelector(".btc__result");
const btcInp = document.querySelector(".btc__inp");

Promise.all([
      startsDolar(),
      startsEuro(),
      startBtc(),
]);

async function startsDolar() {
      const request = await fetch('https://economia.awesomeapi.com.br/last/USD-BRL');
      const data = await request.json();
      let usdCurrentValue = Number(data.USDBRL.ask).toFixed(2)
      dolarResult.innerText = `${usdCurrentValue} R$`.replace(".", ",")
      dolarInp.addEventListener("input", () => {
            let result = usdCurrentValue * dolarInp.value
            dolarResult.innerText = `${result.toFixed(2)} R$`.replace(".", ",")
      })
}

async function startsEuro() {
      const request = await fetch('https://economia.awesomeapi.com.br/last/EUR-BRL');
      const data = await request.json();
      let euroCurrentValue = Number(data.EURBRL.ask).toFixed(2)
      euroResult.innerText = `${euroCurrentValue} R$`.replace(".", ",")
      euroInp.addEventListener("input", () => {
            let result = euroCurrentValue * euroInp.value
            euroResult.innerText = `${result.toFixed(2)} R$`.replace(".", ",")
      })
}

async function startBtc() {
      const request = await fetch('https://economia.awesomeapi.com.br/last/BTC-BRL');
      const data = await request.json();
      let btcCurrentValue = Number(data.BTCBRL.ask).toFixed(2)
      btcResult.innerText = `${btcCurrentValue} R$`.replace(".", ",")
      btcInp.addEventListener("input", () => {
            let result = btcCurrentValue * btcInp.value
            btcResult.innerText = `${result.toFixed(2)} R$`.replace(".", ",")
      })
}