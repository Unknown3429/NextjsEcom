import { useEffect, useState } from "react";
import Skeleton from 'react-loading-skeleton'
import Carousel from 'react-grid-carousel'
import 'react-loading-skeleton/dist/skeleton.css'
import Fade from 'react-reveal/Fade';
import Link from 'next/link'


const Services = ({ mode }) => {
  const [image, setImage] = useState([])

  const handleimg = async () => {
    const img = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/collection`);
    let res = await img.json()
    setImage(res)
  }

  useEffect(() => {
    handleimg()
  }, [])
  if (!image) { return }
  let img = image?.img

  if (!img) {
    return (
      <Carousel cols={4} rows={1} gap={5} loop
        mobileBreakpoint={670}
        responsiveLayout={[
          {
            breakpoint: 1200,
            cols: 3
          },
          {
            breakpoint: 990,
            cols: 2
          }
        ]}>
        <Carousel.Item >
          <div className="mb-5" >
            <Skeleton className="md:h-[35vh] lg:h-[40vh] h-[45vh]" width="90%" />
          </div>
        </Carousel.Item>
        <Carousel.Item >
          <div className="mb-5" >
            <Skeleton className="md:h-[35vh] lg:h-[40vh] h-[45vh]" width="90%" />
          </div>
        </Carousel.Item>
        <Carousel.Item >
          <div className="mb-5" >
            <Skeleton className="md:h-[35vh] lg:h-[40vh] h-[45vh]" width="90%" />
          </div>
        </Carousel.Item>
        <Carousel.Item >
          <div className="mb-5" >
            <Skeleton className="md:h-[35vh] lg:h-[40vh] h-[45vh]" width="90%" />
          </div>
        </Carousel.Item>
      </Carousel>
    )
  }


  return (
    <Fade bottom>
      <Carousel cols={4} rows={1} loop
        mobileBreakpoint={670}
        responsiveLayout={[
          {
            breakpoint: 1200,
            cols: 3
          },
          {
            breakpoint: 990,
            cols: 2
          }
        ]}>
        {img && img?.map((item, i) => {
          const links = item?.category.toLowerCase()
          return (
            <Carousel.Item key={i} >
              <Link href={`/${links}`}>
                <div className="mb-5 w-full bg-white max-w-xs shadow-md transition duration-300 ease-in-out hover:scale-105" key={i}>
                  <img className="cursor-pointer md:h-[35vh] w-full object-contain lg:h-[40vh] h-[50vh]" width="100%" src={item?.img} />
                  <span className="relative pb-5 flex justify-center align-middle text-2xl mt-2 font-bold text-black">{item?.category.toUpperCase()}</span>
                </div>
              </Link>
            </Carousel.Item>
          )
        })}
      </Carousel>
    </Fade >
  )
}
export default Services;
