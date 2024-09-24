document.getElementById('btn-add-money').addEventListener('click', function(event){
    event.preventDefault()
    const amount = document.getElementById('input-field').value;
    const pinNumber = document.getElementById('input-pin').value
     if (pinNumber === '1234'){
        const balance = document.getElementById('balance').innerText;
        const amountNumber = parseFloat(amount);
        const balanceNumber = parseFloat(balance);
        const newBalance = amountNumber + balanceNumber;
        document.getElementById('balance').innerText = newBalance;
     }
     else{
        alert('Wrong Information')
     }
})