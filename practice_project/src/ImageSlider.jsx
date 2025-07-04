import React, { useEffect, useRef } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import './slider.css';

function ImageSlider() {
    const splideRef = useRef(null);

    // Separated hover setup logic
    const setupHoverToSlide = () => {
        const splide = splideRef.current?.splide;

        if (splide) {
        const buttons = document.querySelectorAll('.splide__pagination__page');

        buttons.forEach((button, index) => {
            button.addEventListener('mouseenter', () => {
            splide.go(index);
            });
        });
        }
    };

    //Call function on mount
    useEffect(() => {
        setupHoverToSlide();
    }, []);

    return (
        <div>
            <div className='main-content'>
                <Splide ref={splideRef} className="blue"
                options={{
                    type: 'loop',
                    perPage: 1,
                    autoplay: true,
                    arrows: false,
                    pagination: true,
                }}
                aria-label="Hover Slide">
                <SplideSlide >
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ718nztPNJfCbDJjZG8fOkejBnBAeQw5eAUA&s"  alt="Slide 1" />
                   
                </SplideSlide>
                <SplideSlide >
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUPIfiGgUML8G3ZqsNLHfaCnZK3I5g4tJabQ&s"  alt="Slide 2" />
                </SplideSlide>
                <SplideSlide  >
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLat8bZvhXD3ChSXyzGsFVh6qgplm1KhYPKA&s"  alt="Slide 3" />
                </SplideSlide>
            </Splide>
            </div>
        </div>
    );
}

export default ImageSlider;
