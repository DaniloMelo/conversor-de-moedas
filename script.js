// https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL

function currencyFormatter(value) {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(value);
}

const dolarResult = document.querySelector(".dolar__result");
const dolarInp = document.querySelector(".dolar__inp");
fetch("https://economia.awesomeapi.com.br/last/USD-BRL")
  .then((response) => response.json())
  .then((data) => {
    // console.log(typeof data.USDBRL.ask);
    // console.log(currencyFormatter(data.USDBRL.ask));
    let usdCurrentValue = Number(data.USDBRL.ask).toFixed(2);
    dolarResult.innerText = currencyFormatter(data.USDBRL.ask);
    dolarInp.addEventListener("input", () => {
      let result = usdCurrentValue * dolarInp.value;
      dolarResult.innerText = currencyFormatter(result);
    });
  });

const euroResult = document.querySelector(".euro__result");
const euroInp = document.querySelector(".euro__inp");
fetch("https://economia.awesomeapi.com.br/last/EUR-BRL")
  .then((response) => response.json())
  .then((data) => {
    let euroCurrentValue = Number(data.EURBRL.ask).toFixed(2);
    euroResult.innerText = currencyFormatter(data.EURBRL.ask);
    euroInp.addEventListener("input", () => {
      let result = euroCurrentValue * euroInp.value;
      euroResult.innerText = currencyFormatter(result);
    });
  });

const btcResult = document.querySelector(".btc__result");
const btcInp = document.querySelector(".btc__inp");
fetch("https://economia.awesomeapi.com.br/last/BTC-BRL")
  .then((response) => response.json())
  .then((data) => {
    let btcCurrentValue = Number(data.BTCBRL.ask).toFixed(2);
    btcResult.innerText = currencyFormatter(data.BTCBRL.ask);
    btcInp.addEventListener("input", () => {
      let result = btcCurrentValue * btcInp.value;
      btcResult.innerText = currencyFormatter(result);
    });
  });
