document.getElementById('btn-login').addEventListener('click', function(event){
    event.preventDefault();
    const phoneNumber = document.getElementById('phone-number').value;
    const pinNumber = document.getElementById('pin-number').value
    if (phoneNumber === "01747355949" && pinNumber === "1234"){
        console.log('WOW');
        window.location.href = '/home.html'
    }
    else{
        alert("Wrong information!")
    }

})