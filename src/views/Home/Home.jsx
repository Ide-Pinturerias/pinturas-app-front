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
