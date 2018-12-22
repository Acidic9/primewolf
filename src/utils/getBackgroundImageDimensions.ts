export default (el: HTMLElement, scaleBy: string | null): Promise<{ width: number, height: number }> => {
	return new Promise((resolve, reject) => {
		try {
			const imageSrc = el
				.style
				.backgroundImage
				.replace(/url\((['"])?(.*?)\1\)/gi, '$2')
				.split(',')[0]

			const image = new Image()
			image.onload = (ev: Event): any => {
				const width = image.width
				const height = image.height
				let scalar = 1

				if (scaleBy === 'width') {
					scalar = el.offsetWidth / width
				} else if (scaleBy === 'height') {
					scalar = el.offsetHeight / height
				}

				resolve({
					width: image.width * scalar,
					height: image.height * scalar,
				})
			}
			image.onerror = () => {
				reject()
			}
			image.src = imageSrc
		} catch (err) {
			reject()
		}
	})
}
