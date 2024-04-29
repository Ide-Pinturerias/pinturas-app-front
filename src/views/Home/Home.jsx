import AboutCard from '@components/AboutCard/AboutCard'
import FeaturedContainer from '@components/FeaturedContainer/FeaturedContainer'
import CategoryContainer from '@components/CategoryContainer/CategoryContainer'
import Banner from '@components/Banner/Banner'
import BannerBlog from '@components/BannerBlog/BannerBlog'

function Home () {
  return (
        <main className="flex flex-col items-center w-full h-full p-whiteSpaceTop bg-bg">
            <Banner />
            <CategoryContainer />
            <section className="flex items-center justify-center w-full mt-[50px] bg-bg">
                {/* OP1: */}
                {/* <div className="absolute bottom-full left-1/2 -translate-x-1/2 w-full overflow-hidden leading-none">
                    <svg xmlns="http://www.w3.org/2000/svg" className="relative block w-[calc(135%+1.3px)] fill-accentClear" viewBox="0 0 1200 120">
                        <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="shape-fill"></path>
                    </svg>
                </div>
                <div className='absolute top-0 left-1/2 -translate-x-1/2 h-[300px] w-full bg-accentClear ' />
                <div className='relative z-10 w-full text-start'>
                    <h2 className="text-[clamp(.75rem,calc(0.5rem+3vw),3.5rem)]">Productos más vendidos.</h2>
                    <p className="text-xl">Las mejores opciones para transformar sus espacios con estilo</p>
                </div> */}
                {/* <img
                    src={featuredBanner}
                    alt="Los más vendidos. Top ventas."
                    className="object-cover w-full h-[120px] bg-bgFocus rounded-lg text-clear select-none"
                /> */}
                {/* OP2: */}
                <div className="flex flex-col justify-center items-center m-sides max-w-maxSc w-maxIn">
                    <div className='flex flex-col items-center justify-between w-full p-4 pb-5 bg-primaryClear rounded-xl text-bg'>
                        <h2 className="text-3xl font-primary text-center uppercase font-black">Top ventas</h2>
                        <p className="text-xl">Las mejores opciones para transformar sus espacios con estilo</p>
                    </div>
                    <FeaturedContainer bestSellersContainer={true} similarProductsContainer={false} />
                </div>
            </section>
            <AboutCard />
            <BannerBlog />
        </main>
  )
};

export default Home
