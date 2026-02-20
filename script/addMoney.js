document.getElementById("btn-add-money")
    .addEventListener('click', function () {
        // get bank account
        const bankAccount = getValueFromInput("add-money-bank");
        if (bankAccount === 'Select Bank') {
            alert('Pleasle Select a Bank');
            return;
        }

        // get account number
        const accountNumber = getValueFromInput("add-money-number");
        if (accountNumber.length !== 11) {
            alert('Invalid account Number');
            return;
        }

        // get amount
        const amount = getValueFromInput("add-money-amount");
        const currentBalance = getBalance()
        const newBalance = currentBalance + Number(amount);
        
        // verify pin
        const pin = getValueFromInput("add-money-pin");
        if(pin === '1234'){
            alert(`Add Money Successfull from ${bankAccount}
            
            at ${new Date()}`);
            setBalance(newBalance);

            // history container ke dhore niye ashbo
            const history = document.getElementById('history-container');
            // new div create korbo
            const newHistory = document.createElement('div');
            // new div e innerHTML add korbo
            newHistory.innerHTML = `
            <div class="transaction-card p-5 bg-base-100">
                Add Money Successfull_ ${amount} Taka, from ${bankAccount},account no- ${accountNumber}, at ${new Date()}
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