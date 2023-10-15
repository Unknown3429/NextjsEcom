import Slider from '../components/Slider';
import Head from 'next/head';
import Image from 'next/image';
import Services from '../components/Services';
import Products from '../components/Products';
// import Services from '../components/services';


export default function Home() {
  return (
    <div >
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <div className="main">
        <Slider />
      </div>

      <section className="text-gray-600 body-font min-h-screen ">
        <div className="container px-5 pt-10 mx-auto">
          <div className="flex flex-wrap w-full mb-10">
            <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Our Collection</h1>
              <div className="h-1 w-12 bg-indigo-500 rounded"></div>
            </div>
          </div>

          <div>
            <Services />
          </div>

          <div>
            <Products category={"Tshirts"} />
          </div>

          <div>
            <Products category={"hoodies"} />
          </div>
        </div>
      </section>
    </div>
  )
}

