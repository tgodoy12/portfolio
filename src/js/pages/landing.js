import React from "react";
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

        {/* Sección principal */}
        <div className="mx-auto max-w-7xl py-32 sm:py-48 lg:py-56">
          <div className="flex flex-col items-center text-center">
            <div className="principal-text">
              <p className="text-xl text-[#FFFCF9] text-start">Hey there! I'm</p>
              <h1 className="mt-6 text-6xl font-bold text-[#FFFCF9] text-start">Trilce Godoy</h1>
          
              
              <p className="mt-5 text-sm text-[#FFFCF9] text-start">
                I'm a Fullstack Developer focused on building clean, efficient, <br />
                and scalable web applications.
              </p>

              {/* Botones social y see my work */}
              <div className="mt-10 flex-box gap-x-6">
              
              <div className="social-icons flex">
                <i className="fab fa-linkedin fa-lg me-5" style={{color: "#ff6978"}}></i>
                <i className="fab fa-github fa-lg me-5" style={{color: "#ff6978"}}></i>
                <i class="fas fa-envelope fa-lg" style={{color: "#ff6978"}}></i>
              </div>
              
              <div className="see-my-work-button mt-60">
                <div>
                  <a
                    href="/"
                    className="text-sm font-semibold leading-6 text-[#FFFCF9]"
                  >
                    See my work
                  </a>
                </div>
                <div className="flex justify-center mt-2">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-[#FFFCF9]">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 17.25 12 21m0 0-3.75-3.75M12 21V3" />
                  </svg>
                </div>
                
                
               
                

              </div>
              
            </div>
            
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