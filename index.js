function  luasSegitiga(){
let tinggi = document.getElementsByTagName("input")[0].value;
let lebar = document.getElementsByTagName("input")[1].value;
let luas = 0.5*tinggi*lebar;
console.log(luas)
let tampilan = document.createElement("div")
let btn = document.createElement("button")
btn.addEventListener("click", tutup)
btn.innerHTML="   x";
tampilan.classList.add("tampilan")
btn.classList.add("btn")
function tutup(){
   tampilan.style.visibility="hidden";
   btn.style.visibility="hidden";
}
document.body.appendChild(tampilan)
document.body.appendChild(btn)
tampilan.innerHTML=luas
}

