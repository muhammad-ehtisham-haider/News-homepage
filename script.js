
function show(){
    document.getElementById("close").classList.toggle("show");
    document.getElementById("open").style.display = ("none")  ;  
}

document.getElementById("open").addEventListener("click" , show);




function close(){
    document.getElementById("close").classList.toggle("show");
    document.getElementById("open").style.display =("block");
}
document.getElementById("two").addEventListener("click" , close)
