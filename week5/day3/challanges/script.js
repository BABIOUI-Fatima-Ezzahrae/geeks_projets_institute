const API_KEY = '1102e151f55bae0cec551622';

const select1 = document.getElementById('rate1');
const select2 = document.getElementById('rate2');
const amountInput = document.getElementById('amount');
const resultDiv = document.getElementById('resultat');
const calculBtn = document.getElementById('calcul');
const changer = document.getElementById('changer');

async function getRate() {
    const response = await fetch(`https://v6.exchangerate-api.com/v6/${API_KEY}/codes`);
    const data = await response.json();
    const codes = data.supported_codes;

    codes.forEach(code => {
        const option1 = document.createElement('option');
        const option2 = document.createElement('option');

        option1.value = code[0]
        option1.textContent = `${code[0]} - ${code[1]}`;
        option2.value = code[0]
        option2.textContent = `${code[0]} - ${code[1]}`;

        select1.appendChild(option1);
        select2.appendChild(option2);
    });
}

getRate()

changer.addEventListener('click', () => {
  const temp = select1.value;
  select1.value = select2.value;
  select2.value = temp;
  resultDiv.textContent = '';
});

calculBtn.addEventListener('click', async function (event) {
    event.preventDefault();
    const elem1 = select1.value;
    const elem2 = select2.value;
    const amount = parseFloat(amountInput.value);

    if (!elem1 || !elem2) {
        resultDiv.textContent = 'Please , choise the rate';
        return;
    } 
    if(isNaN(amount) || amount <= 0) {
        resultDiv.textContent = 'Please , choise the rate positive';
        return;
    }

    try {
        const response = await fetch(`https://v6.exchangerate-api.com/v6/${API_KEY}/pair/${elem1}/${elem2}/${amount}`);
        const data = await response.json();

        if (data.result === 'success') {
            resultDiv.textContent = `${amount} ${elem1} = ${data.conversion_result} ${elem2}`;
        } else {
            resultDiv.textContent = `Error in the calcul, try again!!`;
        }
    } catch (error) {
        resultDiv.textContent = `Error !!!!`;
    }
})