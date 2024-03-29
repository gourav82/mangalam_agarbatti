import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import Slider from 'react-slick'
import { BsChevronDown } from "react-icons/bs";
import Animation from '../core/Animation';
import Link from 'next/link';

const MainBanner = () => {
const [banner, setBanner] = useState();


// useEffect(()=>{
//   bannerData();
// },[])

// const bannerData = ()=>{
//   bannerAPI().then((resp)=>{
//     setBanner(resp);
//     // console.log(resp);
//   })
// }

  var settings = {
    arrows: false,
    infinite: true,
    speed: 100,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          arrows: false,
          autoplay: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          arrows: false,
          autoplay: true,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          autoplay: true,
        }
      }
    ]
  };
  return (
    <div className="banner">
      <div className="banner--table flex flex--justify-content-between flex--align-items-center mt--10 mb--40">
        <div className="container--responsive banner--table-slider pd--15 bg--radius">
          <Slider {...settings}>
            {mainSlide.map((item, index) => {
              return (
                <div key={`banner-${index}`} className="image pd--20 pt--50">
                  <Image src={item.img} width={800} height={200} alt='' className='bg--radius' />
                  
                  <span className='fs--28 font--bold color--error'>{item.details}</span>
                </div>
              )
            })}
          </Slider>
        </div>
         
        <div className="banner--table-book pd--20 bg--radius font--center">
          <h1 className='fs--28 font--bold color--error mb--15'>Welcome in Phonik Industries</h1>
          <span className='fs--20 color--success font--bold ' >Let`s Join Us</span>
          <p className='mt--15'>
         <Link href={"/contact"}> <button className='fs--15 bg--error bg--radius pd--5 ml--10 color--white font--bold'>Contect Us</button></Link>
         </p>
          <Animation height={`200`} width={`200`} animationData={"/assets/json/delivery.json"} />

            {/* <Image src="/assets/image/ripple1.png" width={100} height={100} alt='' className='btn_ripple' /> */}
          </div>
        </div>
      </div>
 )
}
 
export default MainBanner

const mainSlide = [
  {
    img: "/assets/image/phonik1.jpg",
    alt: "",
    btn: "Order Now",
    details: "Dhoop Bati"
  },
  {
    img: "/assets/image/phonik2.jpg",
    alt: "",
    btn: "Order Now",
    details: "Dhoop Bati"
  },
  {
    img: "/assets/image/phonik3.jpg",
    alt: "",
    btn: "Order Now",
    details: "Dhoop Bati"
  },
  {
    img: "/assets/image/phonik4.jpg",
    alt: "",
    btn: "Order Now",
    details: "Dhoop Bati"
  },
  {
    img: "/assets/image/phonik5.jpg",
    alt: "",
    btn: "Order Now",
    details: "Dhoop Bati"
  },
  {
    img: "/assets/image/phonik1.jpg",
    alt: "",
    btn: "Order Now",
    details: "Dhoop Bati"
  },
  {
    img: "/assets/image/phonik2.jpg",
    alt: "",
    btn: "Order Now",
    details: "Dhoop Bati"
  }

]