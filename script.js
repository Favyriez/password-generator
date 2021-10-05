const  display = document.querySelector("input"),
 button = document.querySelector("button"),
 copyBtn = document.querySelector("span.far"),
 copyActive = document.querySelector("span.fas")
let chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPSRSTUVWXYZ123456789!@#$%^&*()_"
button.onclick = ()=>{
    let i,
    randomPassword = "";
    for(i = 0; i < 16; i++){
        randomPassword = randomPassword + chars.charAt(
            Math.floor(Math.random() * chars.length)
        );
    }
    display.value = randomPassword;
}
function copy(){
    display.select();
    document.esecCommand("copy");
}

