



// import Slider from 'react-slick';
// import Slide from './Slide';

import Slider from "react-slick";
import Slide from "./Slide";


export default function Hero() {

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true,
        pauseOnHover:false,
      };

      const slideData = [
        {
            id:0,
            img: "/banner-1.jpeg",
            title: "Trending Item",
            mainTitle: "WOMEN'S LATEST FASHION SALE",
            price:"20$",
        },
        {
            id:1,
            img: "/banner-2.jpeg",
            title: "Trending Accessories",
            mainTitle: "MODERN SUNGLASS",
            price:"10$",
        },
        {
            id:3,
            img: "/banner-3.jpg",
            title: "Sale offer",
            mainTitle: "MEN FASHION SUMMER SALE",
            price:"50$",
        }
      ];

  return (
    <div className=''>
        <div className='container pt-6 lg:pt-8'>
<Slider {...settings}>
   {slideData.map((item)=>(
    <Slide key={item.id}
    img={item.img}
    title={item.title}
    mainTitle={item.mainTitle}
    price={item.price}/>

 
   ))}
</Slider>
        </div>
    </div>
  )
}
