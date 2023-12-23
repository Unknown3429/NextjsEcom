import Slider from '../components/Slider';
import Head from 'next/head';
// import Image from 'next/image';
import Collection from '../components/Collection';
import Products from '../components/Products';
import Service from '../components/Services';
import Testimonials from './testimonials';
import { useEffect, useState } from 'react';
// import Front from '../components/front';
// import Services from '../components/services';


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

      <section className={mode ? `text-gray-600 body-font min-h-screen bg-[#232D3F]` : `text-gray-600 body-font min-h-screen`}>
        <div className="container px-5 pt-10 mx-auto">
          <div class="text-center my-10">
            <h1 class={mode ? `sm:text-3xl text-2xl font-medium title-font text-[#e9e7ee]  mb-2` : `sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-2`}>Our Collections</h1>
            <div class="flex mt-6 justify-center">
              <div class="w-16 h-1 rounded-full bg-indigo-500 inline-flex"></div>
            </div>
          </div>

          <div>
            <Collection image={image} />

          </div>

          <div>
            <Products category={"Tshirts"} mode={mode} />
          </div>

          <div>
            <Products category={"caps"} mode={mode} />
          </div>

          <div>
            <Products category={"hoodies"} mode={mode} />
          </div>

          <div>
            <Testimonials />
          </div>

          <div>
            <Service mode={mode} />
          </div>
        </div>
      </section>
    </div>
  )
}

