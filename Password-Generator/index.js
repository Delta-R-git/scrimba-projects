const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let password = ""
const generateBtn = document.getElementById("generate-btn")
const password1 = document.getElementById("pswd1")
const password2 = document.getElementById("pswd2")

function generatePassword(){
    for ( i = 0; i < 15; i++ ) {
        password += characters[Math.floor( Math.random() * 91 )]
    }
}

generateBtn.addEventListener("click", function(){
    generatePassword()
    password1.value = password
    password = ""
    generatePassword()
    password2.value = password
    password = ""
})

document.querySelectorAll("#pswd1, #pswd2").forEach(button => {
  button.onclick = function() {
    let oldValue = this.value;
    navigator.clipboard.writeText(this.value);
    this.value = 'Copied!';
    setTimeout(() => this.value = oldValue, 1000);
  }
});