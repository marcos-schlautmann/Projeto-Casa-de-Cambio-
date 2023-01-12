
const url = 'https://api.exchangerate.host/latest?base=${moeda}';

const botaoPesquisar = document.getElementById('search-btn');
const inputMoeda = document.getElementById('input-moeda');


botaoPesquisar.addEventListener('click', () => {
    if (!(inputMoeda)) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Você precisa inserir uma moeda !',
        });
    }
});

const capturaMoedas = (rates) => {

    const divPai = document.getElementById('container');
    const arrRates = Object.entries(rates);
    console.log(arrRates);

    arrRates.map((rate) => {

        const moeda = document.createElement('div');

        moeda.setAttribute('value', rate);

        moeda.innerText = rate;

        divPai.appendChild(moeda);

    });
};


const resultado = fetch(url)
    .then((response) => response.json())
    .then((data) => {
        const { rates } = data;
        capturaMoedas(rates);
    })
    .catch(() => {
        
    });

console.log(resultado);








