import React from "react";
import HeroSlider,{Slide} from  'hero-slider'
import '../../images/sunset-1283872_640.jpg'
import '../Navigation/styles/navigationbar.styles.css'

const Image1 ='https://i.imgur.com/Gu5Cznz.jpg'
const Image2 = 'https://i.imgur.com/8DYumaY.jpg'


const BasicSlider=()=>{
    return(<div className="slider-container">
        <HeroSlider
        slidingAnimation="left_to_right"
        orientation='horizontal'
        initialSlide ={1}
        onBeforeChange={(previousSlide,nextSlide)=>console.log('onBeforeChange',previousSlide,nextSlide)}
        onChange={nextSlide=>console.log('onchange',nextSlide)}
        onAfterChange={nextSlide=>console.log('onAfterchange',nextSlide)}
        style={{background:'rgba(0,0,0.33)'}}
        settings={{
            slidingDuration:250,
            slidingDelay:180,
            shouldAutoplay:true,
            shouldDisplayButtons:true,
            autoplayDuration:5000,
            
            
            

        }}
        >
            <Slide
            background={{
                backgroundImage: `url(${Image1})`,
                backgroundAttachment:"fixed",
                

            }}
            />
            <Slide
            background={{
                backgroundImage: `url(${Image2})`,
                backgroundAttachment:"fixed"
            }}
            />
        </HeroSlider>
    </div>)
}






export default BasicSlider;