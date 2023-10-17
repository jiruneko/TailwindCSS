import { useState } from 'react';
import './App.css'

function App() {
  return (
    <>
    <header className='text-gray-700 border-b border-white-900'>
      <div className='container flex mx-auto p-5 flex-col md:flex-row items-center'>
        <a href='#' className='font-medium text-gray-900 mb-4 md:mb-0'>
          <span className='text-x1 ml-3'><img src="/img/S__95608835.JPG" alt="logo" width="500" height="500" /></span>
        </a>
        <nav className='md:ml-auto text-base'>
          <a href='#home' className='mr-5 hover:text-blue-400 duration-300'>
            Home
            </a>
          <a href='#About' className='mr-5 hover:text-blue-400 duration-300'>
            About
            </a>
          <a href='#Skills' className='mr-5 hover:text-blue-400 duration-300'>
            Skills
            </a>
          <a href='#Blog' className='hover:text-blue-400 duration-300'>
            Blog
          </a>
        </nav>
      </div>
    </header>

    <section>
      <div className='flex container mx-auto py-20 px-5 flex-col md:flex-row items-center'>
        <div className='md:w-1/2 flex-grow mb-16 lg:pr-24 md:pr-16 text-center'>
          <h1 className='text-3xl sm:text-6xl text-gray-900 font-medium mb-4'>Hi!
            <br />
            We are webuild!
            <br />
            Web Developer
          </h1>
          <p className='mb-8 leading-relaxed'>At webuild, we're more than just web designers; we're storytellers. Each business has a unique narrative, and our mission is to capture and express that through impeccably crafted websites. As a dedicated sole proprietorship, we pride ourselves on delivering personalized, one-on-one service to every client. Our approach ensures that every project, big or small, receives the attention and expertise it deserves.

Drawing from years of experience in the web design industry, we understand the nuances that can make a site stand out in today's crowded digital landscape. Whether you're a startup looking to make a splash, an established brand aiming to refresh your online presence, or somewhere in between, we're equipped to bring your vision to life.

We don't just build websites; we build digital experiences. Leveraging the latest trends and technologies, we aim to create platforms that engage visitors and drive business growth. Each website we design is not only aesthetically pleasing but also user-friendly, responsive, and optimized for search engines.

Choosing webuild means partnering with someone who's genuinely invested in your success. Let's collaborate and craft the perfect online representation for your brand.</p>
          <button className='text-white bg-green-500 py-2 px-6 border-0 rounded text-lg hover:bg-green-600 duration-300'>Contact Me</button>
        </div>
        <div className='md:w-1/2 lg:max-w-lg w-5/6'>
          <img src="img/IMG_5162.JPG" alt="shatyou" width="4000" height="1000" />
        </div>
      </div>
    </section>

    <section className='text-gray-700 border-t border-gray-200'>
      <div className='container px-5 py-24 mx-auto'>
        <div className='text-center mb-20'>
          <h1 className='text-2l sm:text-3xl font-medium mb-2 text-gray-900'>About us
          </h1>
          <p className='pb-10'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam ipsum harum quod ipsa similique, beatae quasi quisquam placeat non perferendis est delectus earum? Dignissimos aliquam rem facere sapiente ducimus eveniet.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione nemo delectus quia explicabo possimus, officiis voluptatem inventore eveniet vel, voluptatum, odio a ipsam asperiores dignissimos necessitatibus hic quos consequuntur ullam?
            </p>
          </div>
          <div className="flex -m-4 flex-wrap">
            <div className="md:w-1/3 p-4">
              <div className="bg-gray-100 h-full p-8 rounded-lg ">
                <div className="flex items-center mb-3">
                  <div className="bg-green-500 text-white rounded-full w-8 h-8 flex justify-center items-center mr-3">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                    </svg>
                  </div>
                  <h2 className="text-gray-900 text-lg font-medium">
                    Web Developer
                  </h2>
                </div>
                <div className="#">
                  <p className="leading-relaxed text-base">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Molestiae, laudantium?.
                  </p>
                  <a href="#" className="mt-3 text-green-500 flex items-center">
                    もっと見る
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="md:w-1/3 p-4">
              <div className="bg-gray-100 h-full p-8 rounded-lg">
                <div className="flex items-center mb-3">
                  <div className="bg-green-500 text-white rounded-full w-8 h-8 flex justify-center items-center mr-3">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                    </svg>
                  </div>
                  <h2 className="text-gray-900 text-lg font-medium">
                    Web Developer
                  </h2>
                </div>
                <div className="#">
                  <p className="leading-relaxed text-base">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Molestiae, laudantium?.
                  </p>
                  <a href="#" className="mt-3 text-green-500 flex items-center">
                    もっと見る
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="md:w-1/3 p-4">
              <div className="bg-gray-100 h-full p-8 rounded-lg">
                <div className="flex items-center mb-3">
                  <div className="bg-green-500 text-white rounded-full w-8 h-8 flex justify-center items-center mr-3">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                    </svg>
                  </div>
                  <h2 className="text-gray-900 text-lg font-medium">
                    Web Developer
                  </h2>
                </div>
                <div className="#">
                  <p className="leading-relaxed text-base">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Molestiae, laudantium?.
                  </p>
                  <a href="#" className="mt-3 text-green-500 flex items-center">
                    もっと見る
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="skill" className="text-gray-700 border-t border-gray-200">
        <div className="flex container px-5 py-24 mx-auto flex-wrap">
          <div className="rounded w-full mb-10 lg:w-1/2 lg:mb-0">
            <img
              src="https://i.ibb.co/ZHGrn4B/work4.jpg"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className="lg:py-6 lg:pl-12 lg:text-left lg:w-1/2 w-full">
            <h1 className="sm:text-3xl text-2xl font-medium text-gray-900 mb-10">
              My Skills
            </h1>
            <div className="">
              <div className="w-full">
                <h2>HTML</h2>
                <div className="shadow w-full bg-green-100 mt-2">
                  <div
                    className="bg-green-600 text-xs leading-none py-1 text-center text-white"
                    style={{ width: "100%" }}
                  >
                    100%
                  </div>
                </div>
                <h2 className="pt-5">CSS</h2>
                <div className="shadow w-full bg-green-1000 mt-2">
                  <div
                    className="bg-green-600 text-xs leading-none py-1 text-center text-white"
                    style={{ width: "100%" }}
                  >
                    100%
                  </div>
                </div>
                <h2 className="pt-5">Javascript</h2>
                <div className="shadow w-full bg-green-100 mt-2">
                  <div
                    className="bg-green-600 text-xs leading-none py-1 text-center text-white"
                    style={{ width: "65%" }}
                  >
                    65%
                  </div>
                </div>
                <h2 className="pt-5">Tailwindcss</h2>
                <div className="shadow w-full bg-green-100 mt-2">
                  <div
                    className="bg-green-600 text-xs leading-none py-1 text-center text-white"
                    style={{ width: "75%" }}
                  >
                    75%
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
