let body = document.getElementById('body');
let btn = document.getElementById('nanBtn');
let nav = document.getElementById('nav');

let clickFn = function (paramBtn, paramNav, paramBody) {
	if (paramBtn.classList.contains('opened')) {
		paramBtn.classList.remove('opened');
		paramNav.classList.remove('active');
		paramBody.classList.remove('ovh');
		paramBtn.classList.add('closed');
	} else {
		paramBtn.classList.add('opened');
		paramBody.classList.add('ovh');
		paramNav.classList.add('active');

	}

}

let clickState = btn.addEventListener('click', function () {
	clickFn(btn, nav, body)
});
