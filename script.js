const counterData = document.querySelector('.counterDiv');
const number = document.getElementById('number');
const btns = document.querySelectorAll('button');

counterData.addEventListener('click', e =>{
    if(e.target.matches('button')){
        const btn = e.target.textContent;
        if(btn === 'Decrease'){
            if(number.textContent > 0){
                number.textContent = parseInt(number.textContent) - 1;
            }
            else{
                alert("The value must be greater than zero");
            }
        }else if(btn === 'Increase'){
            number.textContent = parseInt(number.textContent) + 1;
        }
    }
})
function reset(){
    number.textContent=0;
}