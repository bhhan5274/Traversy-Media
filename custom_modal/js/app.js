// Get Modal element
var modal = document.getElementById('simpleModal');

// Get open modal button
var modalBtn = document.getElementById('modalBtn');

// Get Close modal button
var closeBtn = document.getElementById('closeBtn');

modalBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);

// Listen for Outside Click
window.addEventListener('click', clickOutSide);

function openModal(){
    modal.style.display = 'block';
}

function closeModal(){
    modal.style.display = 'none';
}

function clickOutSide(e){
    e.preventDefault();
    if(e.target == modal){
        modal.style.display = 'none';
    }
}

