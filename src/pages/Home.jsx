// import NavBar from '../components/layout/'
// import Footer from '../components/layout/'
import homeStyles from '../assets/styles/home.module.css'

const HomePage = () =>
{
    return(
        <div className="flex flex-col w-12xl min-h-screen">
            {/* <NavBar/> */}
            <div className="flex flex-col w-full">
                <main className={`w-full h-[80vh] relative ${homeStyles.heroSection}`}>
                    <div className="absolute bottom-[-55px] left-[50%] transform-translate -translate-x-[50%] md:w-[60%] w-[90%] bg-white shadow-[0_4px_8px_#05091C26] rounded-md px-8 py-4 flex flex-col items-center justify-center md:gap-5 gap-3">
                        <h2 className="text-heading lg:text-5xl md:text-4xl sm:text-3xl text-xl font-medium text-[#10152E]">Welcome to our website</h2>
                        <span className="text-[#10152E] md:text-xl text-sm">Say something else about the website!</span>
                        <button className="bg-[#CDBB88] text-[#FFFFFF] md:text-2xl text-xl w-40 h-12 rounded-md">Get in touch</button>
                    </div>
                </main>
                {/* Services Section */}
                <section className="h-screen"></section>
            </div>
            {/* <Footer/> */}
        </div>
    );
}

export default HomePage;