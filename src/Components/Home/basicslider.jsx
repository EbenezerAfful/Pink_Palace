import React from "react";
import '../../images/sunset-1283872_640.jpg'
import '../Navigation/styles/navigationbar.styles.css'

const BasicSlider=()=>{
const slides = document.querySelectorAll('.slide');
const next = document.querySelector('#next');
const prev = document.querySelector('#prev');
const auto = true; // Auto scroll
const intervalTime = 5000;
let slideInterval;

const nextSlide = () => {
  // Get current class
  const current = document.querySelector('.current');
  // Remove current class
  current.classList.remove('current');
  // Check for next slide
  if (current.nextElementSibling) {
    // Add current to next sibling
    current.nextElementSibling.classList.add('current');
  } else {
    // Add current to start
    slides[0].classList.add('current');
  }
  setTimeout(() => current.classList.remove('current'));
};

const prevSlide = () => {
  // Get current class
  const current = document.querySelector('.current');
  // Remove current class
  current.classList.remove('current');
  // Check for prev slide
  if (current.previousElementSibling) {
    // Add current to prev sibling
    current.previousElementSibling.classList.add('current');
  } else {
    // Add current to last
    slides[slides.length - 1].classList.add('current');
  }
  setTimeout(() => current.classList.remove('current'));
};

// Button events
next.addEventListener('click', e => {
  nextSlide();
  if (auto) {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, intervalTime);
  }
});

prev.addEventListener('click', e => {
  prevSlide();
  if (auto) {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, intervalTime);
  }
});

// Auto slide
if (auto) {
  // Run next slide at interval time
  slideInterval = setInterval(nextSlide, intervalTime);
}

    
    return(
    <div className="slider">
        <div className="slide ">
            <div className="content">
                <h1>slide one</h1>
                <p>Sun Glasses</p>
            </div>
        </div>

        <div className="slide">
            <div className="content">
                <h1>slide two</h1>
                <p>new one</p>
            </div>
        </div>
        <div className="slide">
            <div className="content">
                <h1>slide three</h1>
                <p>new one</p>
            </div>
        </div>
        <div className="slide">
            <div className="content">
                <h1>slide four</h1>
                <p>new one</p>
            </div>
            </div>
        <div className="slide current">
            <div className="content">
                <h1>slide five</h1>
                <p>new one</p>
          </div>
            
            <div className="buttons">
                <button id="prev"><i className="fas fa-arrow-left"></i></button>
                <button id="next"><i className="fas fa-arrow-right"></i></button>

            </div>
        </div>
           
        
    </div>)
}






export default BasicSlider;