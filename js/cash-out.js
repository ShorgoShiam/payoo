document.getElementById('btn-cash-out').addEventListener('click', function(event){
    event.preventDefault()
    const amount = document.getElementById('cash-out-field').value;
    const pinNumber = document.getElementById('cash-out-pin').value
     if (pinNumber === '1234'){
        const balance = document.getElementById('balance').innerText;
        const amountNumber = parseFloat(amount);
        const balanceNumber = parseFloat(balance);
        const newBalance = balanceNumber - amountNumber;
        document.getElementById('balance').innerText = newBalance;
     }
     else{
        alert('Wrong Information')
     }
})