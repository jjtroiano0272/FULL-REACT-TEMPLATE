import React, { useState, useRef } from 'react'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import { responsive } from './common/carouselResponsivePoints.jsx'
import Card from './Card'
import Button from '@mui/material/Button'

export default function CardDeck({ data }) {
    // const [Carousel, setCarousel] = useState();
    // const carouselRef = useRef(null);

    const ButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
        const {
            carouselState: { currentSlide },
        } = rest
        return (
            <div className="carousel-button-group">
                {/* <Button onClick={() => next()} /> */}
            </div>
        )
    }

    return (
        <Carousel
            // ref={carouselRef}
            responsive={responsive}
            swipeable={false}
            showDots={true}
            // autoPlay={this.props.deviceType !== 'mobile' ? true : false}
            keyBoardControl={true}
            customTransition="all .5"
            transitionDuration={500}
            containerClass="carousel-container"
            // removeArrowOnDeviceType={['tablet', 'mobile']}
            // deviceType={this.props.deviceType}
            // dotListClass='custom-dot-list-style'
            // itemClass='carousel-item-padding-40-px'
        >
            {/* <Button variant='contained' onClick={() => carouselRef.current.next()} /> */}
            {/* <Button variant="contained" onClick={() => next()} /> */}
            {data.map((item) => (
                <Card
                    key={item.id}
                    question={item.question}
                    incorrect_answers={item.incorrect_answers}
                    correct_answer={item.correct_answer}
                />
            ))}
        </Carousel>
    )
}
