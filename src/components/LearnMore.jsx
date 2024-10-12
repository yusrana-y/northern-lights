import React from 'react'


const LearnMore = () => {
    return (
        <>
            <div className='bg-[#06141D] overflow-x-hidden pt-5'>
                <h1 className="text-white text-center text-5xl font-bold mb-4"> Learn More</h1>
             
                <div className="flex flex-wrap justify-center gap-4">
                    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 mb-3">
                        <div className="bg-slate-400 rounded-lg shadow-lg p-6 flex flex-col items-center">
                            <i className="fa-solid fa-location-crosshairs text-8xl mb-4"></i>
                            <h2 className="font-bold text-xl mb-4">Where is the best place to see the Northern Lights?</h2>
                        </div>
                    </div>

                  <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 mb-3">
                        <div className="bg-slate-400 rounded-lg shadow-lg p-6 flex flex-col items-center">
                            <i className="fa-regular fa-calendar text-8xl mb-4"></i>
                            <h2 className="font-bold text-xl mb-4">When is the best time to see the Northern Lights?</h2>
                        </div>
                    </div>

                      <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 mb-3">
                        <div className="bg-slate-400 rounded-lg shadow-lg p-6 flex flex-col items-center">
                            <i className="fa-solid fa-star text-8xl mb-4"></i>
                            <h2 className="font-bold text-xl mb-4">Why are Northern Lights sometimes colored differently?</h2>
                        </div>
                    </div>

                </div>


            </div>
        </>
    )
}

export default LearnMore
