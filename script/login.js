document.getElementById('btn-login')
    .addEventListener('click', function () {
        // 1- get the mobile number input
        const numberInput = document.getElementById('input-number');
        const contactNumber = numberInput.value;
        console.log(contactNumber)

        // 2- get the pin input
        const pinInput = document.getElementById('input-pin');
        const pin = pinInput.value;
        console.log(pin)

        // 3- macth mobile & pin
        if(contactNumber === '01234567890' && pin === '1234'){
            // 3.1 ==> true> alart= homepage
            alert('Login Successful');

            window.location.assign('./home.html')
        }
        else{
            // 3.2 ==> false> alart= return
            alert('Please Enter valid number or pin');
            return;
        }
    })