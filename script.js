const app = {};

app.menu = document.querySelector('.fas')
app.linksContainer = document.querySelector('.linksContainer')
app.navbar = document.querySelector('.navbar')
app.navLinks = document.querySelectorAll('.navLinks a')


app.handleClick = () => {
	app.linksContainer.classList.toggle('activeLinksContainer')
	app.navbar.classList.toggle('activeNavbar')
}

app.handleRemoveMenu = () => {
	app.linksContainer.classList.remove('activeLinksContainer')
	app.navbar.classList.remove('activeNavbar')
}

app.navClick = () => {
	app.navLinks.forEach((link) => {
		link.addEventListener('click', app.handleRemoveMenu)
	}) 
}

app.init = () => {
	app.menu.addEventListener('click', app.handleClick);
	app.navClick();
}

app.init();