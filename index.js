function random(){
    let check = document.getElementById("check");
    let result = document.getElementById("result");
    let key = document.getElementById("key");
    const passField = document.getElementById("pass");
    let random = Math.floor(Math.random() * 9000)+1000;
    key.innerHTML = random;
if(check == random) {
    result.innerHTML = "hi";
}
else{
    result.innerHTML = "Incorrect";
    }
    
    
}

    
   
  








// const toggleButton = document.getElementById("toggleButton");
// const result = document.getElementById("result");

// Display password in the paragraph on button click
toggleButton.addEventListener("click", function() {
    result.textContent = passField.value; // Set the <p> tag's text to the input field's value
});