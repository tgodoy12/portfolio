import React from "react";
import avatar from "./../img/avatar.png";
import "./../../styles/landing.css"



const Landing = () => {
  return (
    <div className="landing h-screen">
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          />
        </div>

        {/* Sección principal con flex */}
        <div className="mx-auto max-w-7xl py-32 sm:py-48 lg:py-56 flex flex-col md:flex-row items-center justify-between">
          
          {/* Imagen primero en pantallas pequeñas */}
          <div className="md:order-2 mb-8 md:mb-0 lg:me-16">
            <img
              src={avatar}
              alt="Avatar"
              style={{ height: "300px", width: "300px" }}
              className="object-cover rounded-full outline outline-offset-4 outline-[#FF6978]"
            />
          </div>

          {/* Texto después de la imagen en pantallas pequeñas */}
          <div className="max-w-lg text-start md:order-1 lg:ms-16">
            <p className="text-xl text-[#FFFCF9]">Hey there! I'm</p>
            <h1 className="mt-6 text-6xl font-bold text-[#FFFCF9]">Trilce Godoy</h1>
            <p className="mt-4 text-lg text-[#FFFCF9]">
              A passionate Fullstack web developer
            </p>
            <div className="mt-10 flex items-center justify-start gap-x-6">
              <a
                href="/"
                className="rounded-md bg-[#FF6978] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#7F95D1] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Let’s build together
              </a>
              <a
                href="/"
                className="text-sm font-semibold leading-6 text-[#FFFCF9]"
              >
                See my work <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>

        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          />
        </div>
      </div>
    </div>
  );
};

export default Landing;