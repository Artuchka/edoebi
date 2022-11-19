import React from "react"
import Slider from "react-slick"

const sliderImageSources = [
	"https://static-franch.prod-ybdyb.ru/images/0a88586d0b98ce7aa105bcb53b8e7e9f.jpg",
	"https://static-franch.prod-ybdyb.ru/images/6153acafcc6d76f4e25a98e3c361014d.jpg",
	"https://static-franch.prod-ybdyb.ru/images/d0363c8f64da9991c98dd346a444acbe.jpg",
	"https://static-franch.prod-ybdyb.ru/images/010bbb24492f649478ca58c808d7618a.jpg",
	"https://static-franch.prod-ybdyb.ru/images/b4433c611f80c6cce9b03856a9c97caf.jpg",
]

export const SliderComp = () => {
	var settings = {
		dots: true,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		speed: 500,
		autoplaySpeed: 2000,
		cssEase: "ease-in-out",
	}
	return (
		<Slider {...settings}>
			{sliderImageSources.map((src, ind) => {
				return <img key={ind} className="slider__item" src={src} />
			})}
		</Slider>
	)
}
