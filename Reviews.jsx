import React from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import ReviewCard1 from './ReviewCard1';
import ReviewCard2 from './ReviewCard2';
import '../css/carousel.css'



const Reviews = () => {
    return (

        <>

            <div>
                <h3 className='text-center text-light p-3 text-dark'>Travello Tour Reviews</h3>
            </div>
            <div className='slider-container text-dark'>
                <CarouselProvider
                    naturalSlideWidth={100}
                    naturalSlideHeight={120}
                    totalSlides={2}
                >

                    <Slider style={{}}>
                        <Slide index={0}>
                            <div className='mt-3 text-dark'>
                                <ReviewCard1 />
                            </div>
                        </Slide>
                        <Slide index={1}>
                            <div className='mt-3 text-dark'>
                                <ReviewCard2 />
                            </div>
                        </Slide>
                    </Slider>

                    <div className='text-center text-dark'>
                        <ButtonBack className='btn btn-outline-light m-3'>&lt;</ButtonBack>
                        <ButtonNext className='btn btn-outline-light'>&gt;</ButtonNext>
                    </div>
                    
                </CarouselProvider>
            </div>


        </>

    );
};
export default Reviews;



