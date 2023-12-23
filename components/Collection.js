import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import Fade from 'react-reveal/Fade';
import Link from 'next/link'


const Services = ({ mode, image }) => {

  if (!image) { return }
  let img = image?.img

  if (!img) {
    return (
      <div className="flex gap-3 flex-wrap justify-evenly items-center w-full" >
        <Skeleton className="mb-5 md:w-[40vw] w-[90vw] flex justify-center items-center flex-col bg-white shadow-md transition duration-300 ease-in-out hover:scale-105">
          <Skeleton className="cursor-pointer p-2 h-[50vh] md:h-[35vh] w-[70vw] object-cover " />
          <Skeleton className="relative pb-5 flex justify-center align-middle text-2xl mt-2 font-bold text-black" />
        </Skeleton>
      </div>

    )
  }


  return (
    <div className="flex gap-3 flex-wrap justify-evenly items-center w-full">
      {img && img?.map((item, i) => {
        const links = item?.category.toLowerCase()
        return (
          <div >
            <Fade >
              <Link href={`/${links}`}>
                <div className="mb-5 md:w-[40vw] w-[90vw] flex justify-center items-center flex-col bg-white shadow-md transition duration-300 ease-in-out hover:scale-105" key={i}>
                  <img className="cursor-pointer p-2 h-[50vh] md:h-[35vh] w-[70vw] object-cover " src={item?.img} />
                  <span className="relative pb-5 flex justify-center align-middle text-2xl mt-2 font-bold text-black">{item?.category.toUpperCase()}</span>
                </div>
              </Link>
            </Fade >
          </div>
        )
      })}
    </div>
  )
}
export default Services;
