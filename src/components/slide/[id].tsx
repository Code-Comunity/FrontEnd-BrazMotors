import React, { useEffect } from "react";
import Slider from "react-slick";
import Image from 'next/image'

import slide from "../../assets/slide.webp";
import slide2 from "../../assets/slide2.jpg";
import slide3 from "../../assets/slide3.jpeg";

import { Slide } from "../styleds/Car.Styled";

const foto = "https://i.pinimg.com/originals/02/de/9c/02de9c08067da3f6e70154c84ea9ff69.jpg"

import { GetStaticProps, GetStaticPaths } from 'next'



export const getStaticPaths: GetStaticPaths  = async () => {
    const response = await fetch(`https://teste-brazmotors.herokuapp.com/carros`)
    const data = await response.json()
    console.log(data)
    const paths = data.map((post: { _id: any }) => ({ params: { id: post._id }, }))

    return { paths, fallback: true }
}

 export const getStaticProps: GetStaticProps = async (context) => {

 const id:any = context.params.id

   const response = await fetch(`https://teste-brazmotors.herokuapp.com/carros/${id}`)
   const data = await response.json();
   console.log(response)
   return {
     props: {
       carro: data,
     }
   }
 }

export default function SimpleSlider1({carro}){

  console.log(carro)


    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
      
    };

    return (
      <Slide>
        <Slider {...settings}>
          <div>
            <Image
              src={slide}
              alt="Picture of the author"
              width={768}
              height={544}
              quality={100}
              layout={"fixed"}
            />
          </div>
          <div>
            <Image
              src={slide2}
              alt="Picture of the author"
              width={768}
              height={544}
              quality={100}
              layout={"fixed"}
            />
          </div>
          <div>
            <Image
              src={slide3}
              alt="Picture of the author"
              width={768}
              height={544}
              quality={100}
              layout={"fixed"}
            />
          </div>
        </Slider>
      </Slide>
    );
}