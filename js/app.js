const buttonNext = document.querySelector('.next');
const buttonPrevious = document.querySelector('.previous');
const container = document.querySelector('.image-container');

const images = [
    'project-img-1',
    'project-img-2',
    'project-img-3'
];

class ImageSlider {
    counter = 0;

    constructor(container, images) {
        this.container = container;
        this.images = images;
    }

    /**
     * Next slide.
     * @memberof ImageSlider
     */
    next() {
        this.counter++

        if (this.counter > this.images.length - 1) {
            this.counter = 0
        }

        this.load();
    }

    /**
     * Previous slide.
     * @memberof ImageSlider
     */
    previous() {
        this.counter--
        
        if (this.counter < 0) {
            this.counter = this.images.length - 1
        }

        this.load();
    }

    load() {
        this.container.style.backgroundImage = `url('./img/${this.images[this.counter]}.jpg')`;
    }
}

const imageSlider = new ImageSlider(container, images);

buttonNext.addEventListener('click',() => imageSlider.next());
buttonPrevious.addEventListener('click',() => imageSlider.previous());
