import Slider from '../components/Slider';
import Head from 'next/head';
import Image from 'next/image';
import Collection from '../components/Collection';
import Products from '../components/Products';
import Service from '../components/Services';
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
          <div class="text-center my-10">
            <h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-2">Collections</h1>
            <div class="flex mt-6 justify-center">
              <div class="w-16 h-1 rounded-full bg-indigo-500 inline-flex"></div>
            </div>
          </div>

          <div>
            <Collection />
          </div>

          <div>
            <Products category={"Tshirts"} />
          </div>

          <div>
            <Products category={"hoodies"} />
          </div>

          <div>
            <Service />
          </div>
        </div>
      </section>
    </div>
  )
}

