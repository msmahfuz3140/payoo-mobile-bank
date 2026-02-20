document.getElementById("btn-transfer")
    .addEventListener('click', function () {
        // get account number
        const accountNumber = getValueFromInput("transfer-number");
        if (accountNumber.length !== 11) {
            alert('Invalid account Number');
            return;
        }

        // get amount
        const amount = getValueFromInput("transfer-amount");
        const currentBalance = getBalance()
        const newBalance = currentBalance - Number(amount);
        
        // verify pin
        const pin = getValueFromInput("transfer-pin");
        if(pin === '1234'){
            alert(`Transfer Money Successfull from ${accountNumber} to You
            
            at ${new Date()}`);
            setBalance(newBalance);

            // history container ke dhore niye ashbo
            const history = document.getElementById('history-container');
            // new div create korbo
            const newHistory = document.createElement('div');
            // new div e innerHTML add korbo
            newHistory.innerHTML = `
            <div class="transaction-card p-5 bg-base-100 rounded-lg text-red-500 border-2 border-gray-300 shadow-xl">
                Transfer Money Successfull_ ${amount} Taka, from ${accountNumber}, at ${new Date()}
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