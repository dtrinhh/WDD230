const hamButton = document.querySelector('.hamburgerbtn');
const navigation = document.querySelector('.navlinks');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('active');
	hamButton.classList.toggle('open');
});

