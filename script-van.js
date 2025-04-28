const galleryContainer = document.querySelector('.gallery-container');
const galleryControlsContainer = document.querySelector('.gallery-controls');
const galleryControls = ['previous', 'next'];
const galleryItems = document.querySelectorAll('.gallery-item');

class Carousel {

    constructor(container, items, controls){
        this.carouselContainer = container;
        this.carouselControls = controls;
        this.carouselArray = [...items];
    }

    updateGallery(){
        this.carouselArray.forEach(el => {
            el.classList.remove('gallery-item-1', 'gallery-item-2', 'gallery-item-3', 'gallery-item-4', 'gallery-item-5');
        });

        this.carouselArray.slice(0, 5).forEach((el , i) => {
            el.classList.add(`gallery-item-${i+1}`);
        });
    }

    setCurrentState(direction){
        if (direction.className.includes('gallery-controls-previous')){
            this.carouselArray.unshift(this.carouselArray.pop());
        } else {
            this.carouselArray.push(this.carouselArray.shift());
        }
        this.updateGallery();
    }

    setControls() {
        this.carouselControls.forEach(control => {
          const button = document.createElement('button');
          button.className = `gallery-controls-${control}`;
          galleryControlsContainer.appendChild(button);
        });
      }

    useControls(){
        const triggers = [...galleryControlsContainer.childNodes];
        triggers.forEach(control => {
            control.addEventListener('click', e => {
                e.preventDefault();
                this.setCurrentState(control);
            });
        });
    }
}

const exampleCarousel = new Carousel(galleryContainer, galleryItems, galleryControls);
exampleCarousel.setControls();
exampleCarousel.useControls();

























document.addEventListener("mousemove", (e) => {
    const swirl = document.createElement("div");
    swirl.classList.add("swirl");
  
    // Random offset for more "Van Gogh" chaos
    const offsetX = (Math.random() - 0.5) * 20;
    const offsetY = (Math.random() - 0.5) * 20;
  
    swirl.style.left = `${e.clientX + offsetX}px`;
    swirl.style.top = `${e.clientY + offsetY}px`;
  
    // Random color swirl (blue or yellow tones like in Van Gogh's painting)
    const colors = ['#ffe066', '#f0c420', '#8ecae6', '#219ebc', '#ffffff'];
    swirl.style.background = `radial-gradient(circle, ${colors[Math.floor(Math.random() * colors.length)]}, transparent)`;
  
    document.body.appendChild(swirl);
  
    setTimeout(() => {
      swirl.remove();
    }, 1200);
  });
  