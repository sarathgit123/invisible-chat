let generatedKey; 

      
function generateKey() {
    generatedKey = Math.floor(Math.random() * 9000) + 1000;
    let ran = document.getElementById("key");
    ran.innerHTML = "Key: " + generatedKey;
}


document.getElementById("btn").addEventListener("click", function() {
    const check = document.getElementById("check").value;
    const result = document.getElementById("result");
    const passField = document.getElementById("pass");
    const audio = document.getElementById("audio"); 

    if (check == generatedKey) {
        result.textContent =  passField.value;

        
        result.onmouseover = () => {
            audio.play();
        };

        result.onmouseout = () => {
            audio.pause();
            audio.currentTime = 0; 
        };
    } 
    else {
        result.textContent = "Incorrect key! Please try again.";
    }
});