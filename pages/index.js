import Slider from '../components/Slider';
import Head from 'next/head';
import Image from 'next/image';
// import Services from '../components/services';


export default function Home() {
  return (
    <div >
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="<NODE_MODULES_FOLDER>/react-responsive-carousel/lib/styles/carousel.min.css" />
      </Head>


      <div className="main">
        <Slider />
        {/* <Image className='mainImg'
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: '100%', height: '60vh', objectFit: "cover" }}
          src={"/main3.jpg"} alt='main' /> */}
      </div>

      <section className="text-gray-600 body-font ">
        {/* <Slider /> */}
        <div className="container px-5 py-16 mx-auto">
          <div className="flex flex-wrap w-full mb-20">
            <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Pick What You Want From Our Collection</h1>
              <div className="h-1 w-20 bg-indigo-500 rounded"></div>
            </div>
          </div>
          <div className="flex flex-wrap -m-4">
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-gray-100 p-6 rounded-lg">
                <img className="h-40 rounded w-full object-cover object-center mb-6" src="https://codeswear.nyc3.cdn.digitaloceanspaces.com/constants/landing/themes/anime.webp" alt="content" />
                <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">SUBTITLE</h3>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Chichen Itza</h2>
                <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
              </div>
            </div>
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-gray-100 p-6 rounded-lg">
                <img className="h-40 rounded w-full object-cover object-center mb-6" src="https://codeswear.nyc3.cdn.digitaloceanspaces.com/constants/landing/themes/combooffers.webp" alt="content" />
                <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">SUBTITLE</h3>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Colosseum Roma</h2>
                <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
              </div>
            </div>
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-gray-100 p-6 rounded-lg">
                <img className="h-40 rounded w-full object-cover object-center mb-6" src="https://codeswear.nyc3.cdn.digitaloceanspaces.com/constants/landing/themes/fitness.webp" alt="content" />
                <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">SUBTITLE</h3>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Great Pyramid of Giza</h2>
                <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
              </div>
            </div>
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-gray-100 p-6 rounded-lg">
                <img className="h-40 rounded w-full object-cover object-center mb-6" src="https://codeswear.nyc3.cdn.digitaloceanspaces.com/constants/landing/themes/trending.webp" alt="content" />
                <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">SUBTITLE</h3>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">San Francisco</h2>
                <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
              </div>
            </div>
          </div>
          <div>
            {/* <Services /> */}
          </div>

        </div>
      </section>



      <style jsx global>{`
      
      `}</style>
    </div>
  )
}

