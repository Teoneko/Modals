function createPopup() {
	const images = document.querySelectorAll('.content-image')
	const wrapper = document.querySelector('.wrapper');
	for (let index = 1; index <= images.length; index++) {
		let div1 = document.createElement('div');
		div1.id = `image-${index}`;
		div1.className = 'popup';
		wrapper.after(div1);
		let div2 = document.createElement('div');
		div2.className = 'popup-body';
		div1.append(div2);
		let div3 = document.createElement('div');
		div3.className = 'popup-content popup-content-image';
		div2.append(div3);
		let a = document.createElement('a');
		a.href = '#header';
		a.className = 'popup-close close-popup';
		a.innerHTML = 'X';
		div3.append(a);
		let div4 = document.createElement('div');
		div4.className = 'popup-image';
		div3.append(div4);
		let img = document.createElement('img');
		img.src = `images/${index}.jpg`;
		div4.append(img)
	}
}

createPopup()