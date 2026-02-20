document.getElementById("btn-bonus")
    .addEventListener('click', function () {
        // get account number
        const couponCode = getValueFromInput("bonus-coupon");
        const bonus = '100000';
        const currentBalance = getBalance()
        const newBalance = currentBalance + Number(bonus);
        if (couponCode.length !== 2) {
            alert('Invalid Coupon Number');
            return;
        }
        else {
            alert(`Congratulations You Have receve a bonus ${bonus} Taka
            from Sonar Bank
            at ${new Date()}`)
            setBalance(newBalance)
        }
        // history container ke dhore niye ashbo
        const history = document.getElementById('history-container');
        // new div create korbo
        const newHistory = document.createElement('div');
        // new div e innerHTML add korbo
        newHistory.innerHTML = `
            <div class="transaction-card p-5 bg-base-100 rounded-lg text-purple-500 border-2 border-gray-300 shadow-xl">
                Receve Bonus Successfull_ ${bonus} Taka, from Sonar Bank, at ${new Date()}
            </div>
            `
        // history container e new div append korbo
        history.appendChild(newHistory)
    }

    )