import React from 'react'
import './Section1.css'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from "react-slick";
import star1 from '../assets/star1.jpg'
import star2 from '../assets/start2.avif'
import star3 from '../assets/star3.avif'
import star4 from '../assets/star4.avif'

const Section1 = () => {

    const images = [star1, star2, star3, star4];
    const headings = [
        'Norway',
        'Sweden',
        'Finland',
        'Canada'
    ];
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            { breakpoint: 1200, settings: { slidesToShow: 4, slidesToScroll: 1 } },
            { breakpoint: 992, settings: { slidesToShow: 3, slidesToScroll: 1 } },
            { breakpoint: 768, settings: { slidesToShow: 2, slidesToScroll: 1 } },
            { breakpoint: 576, settings: { slidesToShow: 1, slidesToScroll: 1 } },
        ],
    };
    return (

        <>
            <div className='bg-[#06141D] overflow-x-hidden px-7' style={{ height: '70vh' }} >
                <h1 className="p-4 text-white text-center text-5xl font-bold"> Northern Stars Around the world</h1>
                <div className=" p-3">
                    <Slider {...settings}>
                        {images.map((img, index) => (
                            <div key={index} className='d-flex flex-column align-items-center' >
                                <img src={img} alt={`Slide ${index + 1}`} className='rounded px-4' style={{ height: '300px', width: '400px', objectFit: 'cover' }} />
                                <h2 className="card-heading p-4 text-white text-center">{headings[index]}</h2>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 flex items-center justify-center bg-[#06141D] text-white">
                <div className=" ">
                    <h1 className='text-4xl font-bold text-center'>Experience Nature’s Most Spectacular Light Show</h1>
                    <p className='text-center text-xl p-2'>The Northern Lights, or Aurora Borealis, are a breathtaking display of colorful lights dancing across the night sky, primarily seen in high-latitude regions near the Arctic. This natural phenomenon occurs when charged particles from the sun collide with Earth's atmosphere, creating vivid greens, purples, and pinks. Join us on an unforgettable journey to witness this magical spectacle, explore the science behind it, and learn the best locations and times for viewing. Embrace the wonder of the Northern Lights—where adventure meets the extraordinary!</p>
                </div>
                <div className=" ">
                    <div className="">
                        <iframe width="759" height="522" src="https://www.youtube.com/embed/oJDzh2mVBms" title="Arctic Auroras - 8K Ultra HD Northern Lights Timelapse Compilation from Fort Yukon, Alaska" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>
                </div>

            </div>
        </>

    )
}

export default Section1
