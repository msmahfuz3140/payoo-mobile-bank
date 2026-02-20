// machine-- id input ==> value

function getValueFromInput(id) {
    const input = document.getElementById(id);
    const value = input.value;
    console.log(id, value);
    return value;
}

// machine -- balance

function getBalance() {
    const balanceElement = document.getElementById('balance');
    const balance = balanceElement.innerText;
    return Number(balance);
}
console.log(getBalance)

// machine set balance

function setBalance(value) {
    const balanceElement = document.getElementById('balance');
    balanceElement.innerText = value;
}

// machine id=> hide all and show id

function showOnly(id){
    const addMoney = document.getElementById('add-money');
    const cashOut = document.getElementById('cash-out');
    const history = document.getElementById('history');
    const transfer = document.getElementById('TransferMoney');
    const bonus = document.getElementById('getBonus');
    // console.log(`add money ${addMoney}, cashout ${cashOut}`)

    // sobai ke hide kore daw
    addMoney.classList.add('hidden')
    cashOut.classList.add('hidden')
    history.classList.add('hidden')
    transfer.classList.add('hidden')
    bonus.classList.add('hidden')

    // id wala element take show kro
    const selected = document.getElementById(id);
    selected.classList.remove('hidden')
}