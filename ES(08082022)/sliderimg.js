class slider{
    constructor(){
        this.slides = [
            {
                name:'slide1',
                image:'city.jpg'
            },
            {
                name:'slide2',
                image:'sea.jpg'
            },
            {
                name:'slide3',
                image:'sweden.jpg'
            },
            {
                name:'slide4',
                image:'heaven.jpg'
            },
            {
                name:'slide4',
                image:'lights.jpg'
            },
        ];
        this.currentSlide = this.slides[0];
        this.currentSlideIndex = 0;
    }
    renderSlides(){
        let slide ='<img class="slide" src="'+this.currentSlide.image+'"/>'
        $('.slider').html(slide)
    }
    autoslide(){
        let change = this;
        setInterval(function(){
            if(change.currentSlideIndex < change.slides.length - 1){
                change.currentSlideIndex =  change.currentSlideIndex + 1;
                change.currentSlide = change.slides[ change.currentSlideIndex];
                change.renderSlides();
            }
            else if(change.currentSlideIndex == change.slides.length - 1){
                change.currentSlideIndex = 0;
                change.currentSlide = change.slides[0];
                change.renderSlides();
            }
        },2000)
    }
    back(){
        if(this.currentSlideIndex > 0){
            this.currentSlideIndex = this.currentSlideIndex - 1;
            this.currentSlide = this.slides[this.currentSlideIndex];
            this.renderSlides();
        }
    }
    forward(){
        if(this.currentSlideIndex < this.slides.length - 1){
            this.currentSlideIndex = this.currentSlideIndex +1;
            this.currentSlide = this.slides[this.currentSlideIndex];
            this.renderSlides();
        }
    }
}
let slideshow = new slider();
slideshow.renderSlides();