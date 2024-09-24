document.getElementById('show-cash-out-button').addEventListener('click', function(){
    document.getElementById('cash-out-div').classList.remove('hidden');
    document.getElementById('add-money-div').classList.add('hidden');
})
document.getElementById('show-add-money-button').addEventListener('click', function(){
    document.getElementById('add-money-div').classList.remove('hidden');
    document.getElementById('cash-out-div').classList.add('hidden');
})