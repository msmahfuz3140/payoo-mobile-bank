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
        const newBalance = getBalance() + Number(amount);
        
        // verify pin
        const pin = getValueFromInput("add-money-pin");
        if(pin === '1234'){
            alert('Add Money Successfull');
            setBalance(newBalance);
        }
        else{
            alert('Invalid Pin');
            return;
        }
    })