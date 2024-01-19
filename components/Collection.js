import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import Fade from 'react-reveal/Fade';
import Link from 'next/link'
import Image from 'next/image';


const Collection = ({ mode, image }) => {

  if (!image) { return }
  let img = image?.img

  if (!img) {
    return (
      <div className="mb-5 flex justify-center items-center h-[40vh]"  >
        <Image className='h-[25vh] w-[25vw]' src={'/ZJFD.gif'} width={800} height={800} />
      </div>
    )
  }


  return (
    <div className="flex gap-3 flex-wrap justify-evenly items-center">
      {img && img?.map((item, i) => {
        const links = item?.category.toLowerCase()
        return (
          <div key={i} >
            <Fade >
              <Link href={`/${links}`}>
                <div className="mb-5 md:w-[40vw] pb-4 w-[40vw] h-[25vh] md:h-[45vh] flex justify-center items-center flex-col bg-white shadow-md transition duration-300 ease-in-out hover:scale-105" key={i}>
                  <img className="cursor-pointer p-2 h-full w-[90vw] object-contain md:object-cover " src={item?.img} />
                  <span className="relative pb-5 flex justify-center align-middle text-2xl -mt-2 font-bold text-black">{item?.category.toUpperCase()}</span>
                </div>
              </Link>
            </Fade >
          </div>
        )
      })}
    </div>
  )
}
export default Collection;
