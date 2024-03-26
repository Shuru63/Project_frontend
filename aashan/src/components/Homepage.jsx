import React from 'react'
import './Homepage.css'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Homepage = () => {
  var settings_client = {
    dots: false,
    speed: 1500,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div>
      <div className='home-page'>
        <div className='middel-content'>
          <div className='content'>
            <Slider {...settings_client}>
              <div className="slide" >
                <div className='left-card'>
                  <p>XTREME FITNESS</p>
                  <h1>
                    POWER UP
                  </h1>
                  <p>Best GYM & Fitness Center Build Your Health </p>
                  <button><span className="material-symbols-outlined">
                    play_circle
                  </span></button>
                </div>
                <div className='right-card'>
                  <p className='right-btn'><span className="material-symbols-outlined">
                    play_circle
                  </span></p>
                </div>
              </div>
              <div className="slide" >
                <div className='left-card'>
                  <p>XTREME FITNESS</p>
                  <h1>
                    POWER UP
                  </h1>
                  <p>Best GYM & Fitness Center Build Your Health </p>
                  <button><span className="material-symbols-outlined">
                    play_circle
                  </span></button>
                </div>
                <div className='right-card'>
                  <p className='right-btn'><span className="material-symbols-outlined">
                    play_circle
                  </span></p>
                </div>
              </div>
              <div className="slide" >
                <div className='left-card'>
                  <p>XTREME FITNESS</p>
                  <h1>
                    POWER UP
                  </h1>
                  <p>Best GYM & Fitness Center Build Your Health </p>
                  <button><span className="material-symbols-outlined">
                    play_circle
                  </span></button>
                </div>
                <div className='right-card'>
                  <p className='right-btn'><span className="material-symbols-outlined">
                    play_circle
                  </span></p>
                </div>
              </div>
             

            </Slider>
          </div>
        </div>
      </div>
    </div >
  )
}

export default Homepage
