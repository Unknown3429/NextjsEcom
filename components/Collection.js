import { useEffect, useState } from "react";
import Skeleton from 'react-loading-skeleton'
import Carousel from 'react-grid-carousel'
import 'react-loading-skeleton/dist/skeleton.css'


const Services = () => {
  const [image, setImage] = useState([])

  const handleimg = async () => {
    const img = await fetch("http://localhost:3000/api/collection");
    let res = await img.json()
    setImage(res)
  }

  useEffect(() => {
    handleimg()
  }, [])
  if (!image) { return }
  let img = image?.img
  console.log(img);

  if (!img) {
    return (
      <div className="relative flex rounded-xl bg-clip-border h-[50vh]">
        <div className="relative mx-4 flex w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
          <div className="relative mx-4 my-4 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700">
            <Skeleton className="object-cover object-center w-full h-[50vh]" />
          </div>
        </div>
        <div className="relative mx-4 flex w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
          <div className="relative mx-4 my-4 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700">
            <Skeleton className="object-cover object-center w-full h-[50vh]" />
          </div>
        </div>
        <div className="relative mx-4 flex w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
          <div className="relative mx-4 my-4 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700">
            <Skeleton className="object-cover object-center w-full h-[50vh]" />
          </div>
        </div>

      </div>
    )
  }


  return (
    <Carousel cols={4} rows={1} gap={8} loop
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
      {img && img.map((item, i) => {
        return (
          <Carousel.Item key={i} >
            <div className="mb-5" key={i}>
              <img className="md:h-[35vh] lg:h-[40vh] h-[60vh]" width="90%" src={item} />
            </div>
          </Carousel.Item>
        )
      })}
    </Carousel>
    // <div className="relative flex rounded-xl bg-clip-border h-[50vh]">
    // {img && img.map((item) => {
    //   return <div key={item} className="relative mx-4 flex w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
    //     <div key={item} className="relative mx-4 my-4 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700">
    //       <img
    //         src={item}
    //         className="object-cover object-center h-full w-full "
    //       />
    //     </div>
    //   </div>

    // })}
    // </div>
  )
}
export default Services;
