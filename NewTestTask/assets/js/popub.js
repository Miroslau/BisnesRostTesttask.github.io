let modal = document.querySelector('.modal');
let modalBtn = document.querySelector('.btn');
let modalBg = document.querySelector('.modal_bg');

let exit = document.querySelector('.exit');

exit.addEventListener('click', function(){
    modal.classList.remove('show');
	modalBg.classList.remove('show');
})

modalBtn.addEventListener('click', function(){
	modal.classList.add('show');
	modalBg.classList.add('show');
});