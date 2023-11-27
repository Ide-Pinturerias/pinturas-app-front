import AboutCard from '@components/AboutCard/AboutCard'
import FeaturedContainer from '@components/FeaturedContainer/FeaturedContainer'
import CategoryContainer from '@components/CategoryContainer/CategoryContainer'
import Banner from '@components/Banner/Banner'
import BannerBlog from '@components/BannerBlog/BannerBlog'


function Home () {
    return (
        <main className="flex flex-col items-center w-full h-full p-whiteSpaceTop bg-warmWhite">
            <Banner />
            <CategoryContainer />
            <FeaturedContainer />
            <AboutCard />
            <BannerBlog />
        </main>
    );
};


export default Home;