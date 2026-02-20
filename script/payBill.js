document.getElementById("btn-pay-bill")
    .addEventListener('click', function () {
        // get bank account
        const bankAccount = getValueFromInput("pay-bill-bank");
        if (bankAccount === 'Select Bank') {
            alert('Pleasle Select a Bank');
            return;
        }

        // get account number
        const accountNumber = getValueFromInput("pay-bill-number");
        if (accountNumber.length !== 11) {
            alert('Invalid account Number');
            return;
        }

        // get amount
        const amount = getValueFromInput("pay-bill-amount");
        const currentBalance = getBalance()
        const newBalance = currentBalance - Number(amount);
        
        // verify pin
        const pin = getValueFromInput("pay-bill-pin");
        if(pin === '1234'){
            alert(`Pay Bill Successfull from ${bankAccount}, ${amount} Taka
            
            at ${new Date()}`);
            setBalance(newBalance);

            // history container ke dhore niye ashbo
            const history = document.getElementById('history-container');
            // new div create korbo
            const newHistory = document.createElement('div');
            // new div e innerHTML add korbo
            newHistory.innerHTML = `
            <div class="transaction-card p-5 bg-base-100 rounded-lg text-orange-500-500 border-2 border-gray-300 shadow-xl">
               Bill Pay Successfull_ ${amount} Taka, from ${bankAccount},account no- ${accountNumber}, at ${new Date()}
            </div>
            `
            // history container e new div append korbo
            history.appendChild(newHistory)
        }
        else{
            alert('Invalid Pin');
            return;
        }
    })