const app = {}

app.link = document.querySelectorAll('#nav-links li')

app.handleClickLink = () => {
	
}

app.addLinkEventListeners = () => {
	link.addLinkEventListeners('click', app.handleClickLink)
}

app.init = () => {
	app.addLinkEventListeners();
}