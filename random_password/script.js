const button= document.getElementById("random");
const display = document.getElementById("random-display");
const content = document.getElementById('random-content');




let passwordGenerated = false;

function generatePass () {
    let pass ='';
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' + 'abcdefghijklmnopqrstuvwxynz' + '1234567890';

    for( let i = 0; i <= 8; i++){
        let char = Math.floor(Math.random() * str.length +1);

        pass += str.charAt(char)
    }
    return pass;
}


button.addEventListener("click", function(){
    document.getElementById('loader').style.display = 'block';
    button.style.display='none';

    let password = generatePass();

    setTimeout(function() {
        let display = document.getElementById('random-display');
        let content = document.getElementById('card-content');

        document.getElementById('loader').style.display = 'none';
        display.style.display='block';
        content.textContent = password;
        passwordGenerated = true;
    }, 3000);
});

window.addEventListener('keydown', function(e) {
    if (e.key === 'Enter' && passwordGenerated) {
        location.reload();
    }
})
