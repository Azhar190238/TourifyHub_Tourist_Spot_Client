
import {Typewriter} from 'react-simple-typewriter';
// import 'react-simple-typewriter/dist/index.css';
        const Banner = () => {
            return (
     <div>
            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full">
                    <div className="hero rounded-2xl sm:w-full md:w-full lg:w-full min-h-screen" style={{ backgroundImage: 'url(https://i.postimg.cc/cHLHcFtC/6.jpg)' }}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-md">
                            <h1 className="mb-5 text-5xl font-bold">
                  <Typewriter
                    words={['Welcome To The Beautiful & Gorgeous Place']}
                    loop
                    cursor
                    cursorStyle='_'
                    typeSpeed={100}
                    deleteSpeed={50}
                    delaySpeed={1000}
                  />
                </h1>
                                <p className="mb-5">Tourism, the act and process of spending time away from home in pursuit of recreation, relaxation, and pleasure, while making use of the commercial provision of services.</p>
                                <button className="btn btn-primary">Please Explore This Place</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <div className="hero md:w-full sm:w-full rounded-xl" style={{ backgroundImage: 'url(https://i.postimg.cc/qvHvFJ69/2.jpg)' }}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">
                  <Typewriter
                    words={['Welcome To The Beautiful & Gorgeous Place']}
                    loop
                    cursor
                    cursorStyle='_'
                    typeSpeed={100}
                    deleteSpeed={50}
                    delaySpeed={1000}
                  />
                </h1>
                                <p className="mb-5">Tourism, the act and process of spending time away from home in pursuit of recreation, relaxation, and pleasure, while making use of the commercial provision of services.</p>
                                <button className="btn btn-primary">Please Explore This Place</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <div className="hero md:w-full sm:w-full rounded-xl" style={{ backgroundImage: 'url(https://i.postimg.cc/LsH6HxTD/1.jpg)' }}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">
                  <Typewriter
                    words={['Welcome To The Beautiful & Gorgeous Place']}
                    loop
                    cursor
                    cursorStyle='_'
                    typeSpeed={100}
                    deleteSpeed={50}
                    delaySpeed={1000}
                  />
                </h1>
                                <p className="mb-5">Tourism, the act and process of spending time away from home in pursuit of recreation, relaxation, and pleasure, while making use of the commercial provision of services.</p>
                                <button className="btn btn-primary">Please Explore This Place</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <div className="hero md:w-full sm:w-full rounded-xl" style={{ backgroundImage: 'url(https://i.postimg.cc/zBvzh34R/3.jpg)' }}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">
                  <Typewriter
                    words={['Welcome To The Beautiful & Gorgeous Place']}
                    loop
                    cursor
                    cursorStyle='_'
                    typeSpeed={100}
                    deleteSpeed={50}
                    delaySpeed={1000}
                  />
                </h1>
                                <p className="mb-5">Tourism, the act and process of spending time away from home in pursuit of recreation, relaxation, and pleasure, while making use of the commercial provision of services.</p>
                                <button className="btn btn-primary">Please Explore This Place</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
            );
        };
        
        export default Banner;
        
        
        
        