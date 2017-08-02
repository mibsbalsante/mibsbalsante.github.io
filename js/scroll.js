const doc = document,
			win = window

const main = () => {
	const down = doc.querySelector('#down'),
        about = doc.querySelector('#about').offsetTop

	const scrollPage = (event) => {
		let timer = 0 + win.scrollY
		let running = setInterval(() => {
			timer += 5

			win.scroll(0, timer)

			if(timer >= about) {
				clearInterval(running)
			}
		}, 1)
	}

  down.addEventListener('click', scrollPage)
}

window.addEventListener('load', main)
