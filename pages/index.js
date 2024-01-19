import Slider from '../components/Slider';
import Head from 'next/head';
// import Image from 'next/image';
import Collection from '../components/Collection';
import Fade from 'react-reveal/Fade';
import Products from '../components/Products';
import Service from '../components/Services';
import Testimonials from './testimonials';
import Animate from '../components/Animate';


export default function Home({ mode, image }) {


  return (
    <div >
      <Head>
        <title>Wear The Comfort</title>
        <link rel="icon" href="/main.png" />
      </Head>

      <div className="main">
        <Slider mode={mode} />
      </div>
      <Fade >
        <section className={mode ? `text-gray-600 body-font min-h-screen bg-[#232D3F]` : `text-gray-600 body-font min-h-screen`}>
          <div className="container px-5 pt-10 mx-auto">
            <div class="text-center mb-10">
              <h1 class={mode ? `sm:text-4xl text-2xl font-bold title-font text-[#e9e7ee]  mb-2` : `sm:text-4xl text-2xl font-bold title-font text-gray-900 mb-2`}>Our Collections</h1>
              <div class="flex mt-3 justify-center">
                <div class="w-16 h-1 rounded-full bg-indigo-500 inline-flex"></div>
              </div>
            </div>

            <div>
              <Collection image={image} />
            </div>

            <div className='md:my-20 my-10 w-[90vw] gap-5 flex justify-center flex-col items-center text-center text-3xl md:text-4xl font-bold'>
              <Fade>
                <h1 className='text-black/75 my-5'>Super Saver Deals</h1>
              </Fade>
              <Fade>
                <img className='w-auto md:h-auto cursor-pointer shadow-sm' src={'/offer.png'} alt="offer" />
              </Fade>

              <Fade>
                <img className='w-auto h-auto my-10 shadow-sm cursor-pointer' src={'/offer2.png'} alt="offer" />
              </Fade>
            </div>

            <div>
              <Products category={"Tshirts"} mode={mode} />
            </div>

            <div>
              <Testimonials />
            </div>

            <div>
              <Service mode={mode} />
            </div>
          </div>
        </section>
      </Fade>
    </div>
  )
}

