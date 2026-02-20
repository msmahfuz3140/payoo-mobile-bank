document.getElementById('btn-cashout')
    .addEventListener('click', function () {
        // 1--get agent number
        const cashoutNumber = getValueFromInput('cashout-number');
        console.log(cashoutNumber);

        if (cashoutNumber.length !== 11) {
            alert('Invalid Agent Number');
            return;
        }

        // 2- get the amount
        const cashoutAmount = getValueFromInput('cashout-amount');
        console.log(cashoutAmount)

        // 3- get the Current Balance
        const currentBalance = getBalance();
        // 4- calculate new balance
        const newBalance = currentBalance - Number(cashoutAmount);
        if (newBalance < 0) {
            alert('Invalid Amount');
            return;
        }

        // 5- get the pin and verify

        const pin = getValueFromInput('cashout-pin');

        if (pin === '1234') {
            // 5.1- true:: show an alert & set balance
            alert('Cashout successfull');
            setBalance(newBalance);


             // history container ke dhore niye ashbo
            const history = document.getElementById('history-container');
            // new div create korbo
            const newHistory = document.createElement('div');
            // new div e innerHTML add korbo
            newHistory.innerHTML = `
            <div class="transaction-card p-5 bg-base-100">
                Cash Out Successfull_ ${cashoutAmount} Taka, from ${cashoutNumber},to 01930612564 at ${new Date()}
            </div>
            `
            // history container e new div append korbo
            history.appendChild(newHistory)
        }
        else {
            // 5.2- false:: show an error alert & return
            alert('Invalid Pin');
            return
        }
        console.log('new balance', newBalance)

    })


// document.getElementById('btn-cashout')
// .addEventListener('click', function(){
//     // 1--get agent number
//     const cashoutNumberInput = document.getElementById('cashout-number');
//     const cashoutNumber = cashoutNumberInput.value;
//     console.log(cashoutNumber);

//     if(cashoutNumber.length !==11){
//         alert('Invalid Agent Number');
//         return;
//     }

//     // 2- get the amount
//     const cashoutAmountInput = document.getElementById('cashout-amount');
//     const cashoutAmount = cashoutAmountInput.value;
//     console.log(cashoutAmount)

//     // 3- get the Current Balance
//     const balanceElement = document.getElementById('balance');
//     const balance = balanceElement.innerText;
//     console.log(balance)

//     // 4- calculate new balance
//     const newBalance = Number(balance) - Number(cashoutAmount);

//     if(newBalance<0){
//         alert('Invalid Amount');
//         return;
//     }
//     // 5- get the pin and verify
//     const cashoutPinInput = document.getElementById('cashout-pin');
//     const pin = cashoutPinInput.value;

//     if(pin === '1234'){
//         // 5.1- true:: show an alert & set balance
//         alert('Cashout successfull');
//         balanceElement.innerText = newBalance;

//     }
//     else{
//         // 5.2- false:: show an error alert & return
//         alert('Invalid Pin');
//         return;

//     }
//     console.log('new balance' ,newBalance)
// })