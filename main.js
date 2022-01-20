const input=document.querySelector('input');
input.value=localStorage.getItem('name');
input.focus();
input.select();
document.querySelector('button').addEventListener('click',e=>{
    if(input.value){
        localStorage.setItem('name',input.value);
        location.href="./game-start/game-start.html"
    }
})