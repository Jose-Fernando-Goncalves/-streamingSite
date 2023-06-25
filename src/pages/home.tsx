import React from "react";
import {FaStar, FaStarHalf, FaGg, FaSearch, FaHeart} from 'react-icons/fa'

export default  function Home() {
  return (
    <div className="h-screen sm:h-full bg-bg block overflow-y-auto relative sm:static font-gilroy">
        <div className="w-[80%]  rounded-lg h-12 sm:h-14 fixed z-30 bg-bg/80 transform -translate-x-1/2 top-1 left-1/2 flex flex-row items-center px-4">
                <div className="flex flex-row text-white sm:gap-12 items-center w-full">
                    <div className="hidden sm:flex flex-row gap-1 items-center">
                        <FaGg />
                        <h1 className="font-bold text-lg tracking-wider">Burn The Party</h1>
                    </div>

                    <div className="flex flex-row items-center gap-1 w-[80%] sm:w-[40%] max-w-[300px]">
                        <input className="rounded-lg w-full text-black pl-2" />
                        <FaSearch />
                    </div>
                </div>
                    
                    <FaHeart size={20} className="text-white mr-4"/>
                    <div className="bg-gradient-to-r from-primary to-purple-500 sm:w-11 sm:h-11 w-5 h-5 rounded-full flex items-center justify-center">
                        <img src="https://images4.alphacoders.com/131/1314281.jpeg" className="sm:w-10 sm:h-10 w-4 h-4 rounded-full"/>
                    </div>
        </div>

            <div className="w-full h-screen max-h-[520px] sm:max-h-[720px]">
                <div className="bg-gradient-to-t from-bg from-30% sm:from-10% to-bg/60 w-full h-screen max-h-[520px] sm:max-h-[720px] absolute" />
                <img src="https://images4.alphacoders.com/131/1314281.jpeg" className="w-full h-screen max-h-[520px] sm:max-h-[720px]"/>

                <div className="flex flex-col gap-10 w-[95%] sm:w-[50%] h-[27rem] absolute mt-24 sm:mt-12 sm:ml-8 text-white top-1/4 sm:top-1/2 left-1/2 sm:left-1/4 transform -translate-x-1/2 -translate-y-1/2">
                        <h1 className="font-bold text-base tracking-wider">Bem-vindo ao Burn The Party</h1>
                        <h1 className="font-bold text-3xl lg:text-4xl xl:text-5xl tracking-wider">Explore o universo do entretenimento: divirta-se com filmes e séries, mergulhe em aventuras inesquecíveis!</h1>

                        <div className="w-[95%] h-14 justify-between flex flex-row self-center">
                            <div className="w-2/3 h-full bg-white rounded-l-lg pl-4 items-center flex">
                                <h1 className="lg:text-2xl xl:text-3xl text-gray-300">email@email.com</h1>
                            </div>

                            <div className="w-1/3 h-full bg-primary rounded-r-lg text-center justify-center items-center flex">
                                <h1 className="lg:text-2xl xl:text-3xl">Inscrever-se</h1>
                            </div>
                        </div>
                </div>

                <div className="hidden sm:flex absolute top-1/2 left-[80%] transform -translate-x-1/2 -translate-y-1/2 w-[40%]">
                    <img className="" src="https://www.acrossthespiderversemovie.com/images/tt_small.png"/>
                </div>
            </div>

            <div className="h-ful pl-6 sm:pl-16 sm:p-8">
                <h1 className="font-medium text-lg sm:text-2xl text-white"><span className="text-primary">Filmes populares</span> no momento</h1>

                <div className="space-x-8 mt-2 w-full  overflow-x-scroll overflow-y-hidden whitespace-nowrap scroll-smooth">
                    <div className="group h-48 sm:h-72 min-w-[160px] sm:min-w-[250px] bg-white inline-block cursor-pointer">
                        <img className="w-[250px] h-2/3" src="https://images4.alphacoders.com/131/1314281.jpeg"/>
                        <div className="w-full h-1/3 bg-bg group-hover:bg-[#150e17] transition-all py-4 flex justify-between flex-col px-2">
                            <div className="flex justify-between">
                                <h1 className="text-white font-semibold">Spider-Man</h1>
                                <h1 className="text-yellow-300 flex flex-row">< FaStar/>< FaStar/>< FaStar/>< FaStar/>< FaStarHalf/></h1>
                            </div>
                            <h1 className="text-gray-300 ">Legendado | Dublado</h1>
                        </div>
                    </div>

                    <div className="group h-48 sm:h-72 min-w-[160px] sm:min-w-[250px] bg-white inline-block cursor-pointer">
                        <img className="w-[250px] h-2/3" src="https://images4.alphacoders.com/131/1314281.jpeg"/>
                        <div className="w-full h-1/3 bg-bg group-hover:bg-[#150e17] transition-all py-4 flex justify-between flex-col px-2">
                            <div className="flex justify-between">
                                <h1 className="text-white font-semibold">Spider-Man</h1>
                                <h1 className="text-yellow-300 flex flex-row">< FaStar/>< FaStar/>< FaStar/>< FaStar/>< FaStarHalf/></h1>
                            </div>
                            <h1 className="text-gray-300 ">Legendado | Dublado</h1>
                        </div>
                    </div>

                    <div className="group h-48 sm:h-72 min-w-[160px] sm:min-w-[250px] bg-white inline-block cursor-pointer">
                        <img className="w-[250px] h-2/3" src="https://images4.alphacoders.com/131/1314281.jpeg"/>
                        <div className="w-full h-1/3 bg-bg group-hover:bg-[#150e17] transition-all py-4 flex justify-between flex-col px-2">
                            <div className="flex justify-between">
                                <h1 className="text-white font-semibold">Spider-Man</h1>
                                <h1 className="text-yellow-300 flex flex-row">< FaStar/>< FaStar/>< FaStar/>< FaStar/>< FaStarHalf/></h1>
                            </div>
                            <h1 className="text-gray-300 ">Legendado | Dublado</h1>
                        </div>
                    </div>

                    <div className="group h-48 sm:h-72 min-w-[160px] sm:min-w-[250px] bg-white inline-block cursor-pointer">
                        <img className="w-[250px] h-2/3" src="https://images4.alphacoders.com/131/1314281.jpeg"/>
                        <div className="w-full h-1/3 bg-bg group-hover:bg-[#150e17] transition-all py-4 flex justify-between flex-col px-2">
                            <div className="flex justify-between">
                                <h1 className="text-white font-semibold">Spider-Man</h1>
                                <h1 className="text-yellow-300 flex flex-row">< FaStar/>< FaStar/>< FaStar/>< FaStar/>< FaStarHalf/></h1>
                            </div>
                            <h1 className="text-gray-300 ">Legendado | Dublado</h1>
                        </div>
                    </div>

                    <div className="group h-48 sm:h-72 min-w-[160px] sm:min-w-[250px] bg-white inline-block cursor-pointer">
                        <img className="w-[250px] h-2/3" src="https://images4.alphacoders.com/131/1314281.jpeg"/>
                        <div className="w-full h-1/3 bg-bg group-hover:bg-[#150e17] transition-all py-4 flex justify-between flex-col px-2">
                            <div className="flex justify-between">
                                <h1 className="text-white font-semibold">Spider-Man</h1>
                                <h1 className="text-yellow-300 flex flex-row">< FaStar/>< FaStar/>< FaStar/>< FaStar/>< FaStar/></h1>
                            </div>
                            <h1 className="text-gray-300 ">Legendado | Dublado</h1>
                        </div>
                    </div>

                    <div className="group h-48 sm:h-72 min-w-[160px] sm:min-w-[250px] bg-white inline-block cursor-pointer">
                        <img className="w-[250px] h-2/3" src="https://images4.alphacoders.com/131/1314281.jpeg"/>
                        <div className="w-full h-1/3 bg-bg group-hover:bg-[#150e17] transition-all py-4 flex justify-between flex-col px-2">
                            <div className="flex justify-between">
                                <h1 className="text-white font-semibold">Spider-Man</h1>
                                <h1 className="text-yellow-300 flex flex-row">< FaStar/>< FaStar/>< FaStar/>< FaStar/>< FaStar/></h1>
                            </div>
                            <h1 className="text-gray-300 ">Legendado | Dublado</h1>
                        </div>
                    </div>

                    <div className="group h-48 sm:h-72 min-w-[160px] sm:min-w-[250px] bg-white inline-block cursor-pointer">
                        <img className="w-[250px] h-2/3" src="https://images4.alphacoders.com/131/1314281.jpeg"/>
                        <div className="w-full h-1/3 bg-bg group-hover:bg-[#150e17] transition-all py-4 flex justify-between flex-col px-2">
                            <div className="flex justify-between">
                                <h1 className="text-white font-semibold">Spider-Man</h1>
                                <h1 className="text-yellow-300 flex flex-row">< FaStar/>< FaStar/>< FaStar/>< FaStar/>< FaStar/></h1>
                            </div>
                            <h1 className="text-gray-300 ">Legendado | Dublado</h1>
                        </div>
                    </div>

                    <div className="group h-48 sm:h-72 min-w-[160px] sm:min-w-[250px] bg-white inline-block cursor-pointer">
                        <img className="w-[250px] h-2/3" src="https://images4.alphacoders.com/131/1314281.jpeg"/>
                        <div className="w-full h-1/3 bg-bg group-hover:bg-[#150e17] transition-all py-4 flex justify-between flex-col px-2">
                            <div className="flex justify-between">
                                <h1 className="text-white font-semibold">Spider-Man</h1>
                                <h1 className="text-yellow-300 flex flex-row">< FaStar/>< FaStar/>< FaStar/>< FaStar/>< FaStar/></h1>
                            </div>
                            <h1 className="text-gray-300 ">Legendado | Dublado</h1>
                        </div>
                    </div>
                </div>
            </div>

            <div className="h-ful pl-6 sm:pl-16 sm:p-8">
                <h1 className="font-medium text-lg sm:text-2xl text-white"><span className="text-primary">Filmes populares</span> no momento</h1>

                <div className="space-x-8 mt-2 w-full  overflow-x-scroll overflow-y-hidden whitespace-nowrap scroll-smooth">
                    <div className="group h-48 sm:h-72 min-w-[160px] sm:min-w-[250px] bg-white inline-block cursor-pointer">
                        <img className="w-[250px] h-2/3" src="https://images4.alphacoders.com/131/1314281.jpeg"/>
                        <div className="w-full h-1/3 bg-bg group-hover:bg-[#150e17] transition-all py-4 flex justify-between flex-col px-2">
                            <div className="flex justify-between">
                                <h1 className="text-white font-semibold">Spider-Man</h1>
                                <h1 className="text-yellow-300 flex flex-row">< FaStar/>< FaStar/>< FaStar/>< FaStar/>< FaStarHalf/></h1>
                            </div>
                            <h1 className="text-gray-300 ">Legendado | Dublado</h1>
                        </div>
                    </div>

                    <div className="group h-48 sm:h-72 min-w-[160px] sm:min-w-[250px] bg-white inline-block cursor-pointer">
                        <img className="w-[250px] h-2/3" src="https://images4.alphacoders.com/131/1314281.jpeg"/>
                        <div className="w-full h-1/3 bg-bg group-hover:bg-[#150e17] transition-all py-4 flex justify-between flex-col px-2">
                            <div className="flex justify-between">
                                <h1 className="text-white font-semibold">Spider-Man</h1>
                                <h1 className="text-yellow-300 flex flex-row">< FaStar/>< FaStar/>< FaStar/>< FaStar/>< FaStarHalf/></h1>
                            </div>
                            <h1 className="text-gray-300 ">Legendado | Dublado</h1>
                        </div>
                    </div>

                    <div className="group h-48 sm:h-72 min-w-[160px] sm:min-w-[250px] bg-white inline-block cursor-pointer">
                        <img className="w-[250px] h-2/3" src="https://images4.alphacoders.com/131/1314281.jpeg"/>
                        <div className="w-full h-1/3 bg-bg group-hover:bg-[#150e17] transition-all py-4 flex justify-between flex-col px-2">
                            <div className="flex justify-between">
                                <h1 className="text-white font-semibold">Spider-Man</h1>
                                <h1 className="text-yellow-300 flex flex-row">< FaStar/>< FaStar/>< FaStar/>< FaStar/>< FaStarHalf/></h1>
                            </div>
                            <h1 className="text-gray-300 ">Legendado | Dublado</h1>
                        </div>
                    </div>

                    <div className="group h-48 sm:h-72 min-w-[160px] sm:min-w-[250px] bg-white inline-block cursor-pointer">
                        <img className="w-[250px] h-2/3" src="https://images4.alphacoders.com/131/1314281.jpeg"/>
                        <div className="w-full h-1/3 bg-bg group-hover:bg-[#150e17] transition-all py-4 flex justify-between flex-col px-2">
                            <div className="flex justify-between">
                                <h1 className="text-white font-semibold">Spider-Man</h1>
                                <h1 className="text-yellow-300 flex flex-row">< FaStar/>< FaStar/>< FaStar/>< FaStar/>< FaStarHalf/></h1>
                            </div>
                            <h1 className="text-gray-300 ">Legendado | Dublado</h1>
                        </div>
                    </div>

                    <div className="group h-48 sm:h-72 min-w-[160px] sm:min-w-[250px] bg-white inline-block cursor-pointer">
                        <img className="w-[250px] h-2/3" src="https://images4.alphacoders.com/131/1314281.jpeg"/>
                        <div className="w-full h-1/3 bg-bg group-hover:bg-[#150e17] transition-all py-4 flex justify-between flex-col px-2">
                            <div className="flex justify-between">
                                <h1 className="text-white font-semibold">Spider-Man</h1>
                                <h1 className="text-yellow-300 flex flex-row">< FaStar/>< FaStar/>< FaStar/>< FaStar/>< FaStar/></h1>
                            </div>
                            <h1 className="text-gray-300 ">Legendado | Dublado</h1>
                        </div>
                    </div>

                    <div className="group h-48 sm:h-72 min-w-[160px] sm:min-w-[250px] bg-white inline-block cursor-pointer">
                        <img className="w-[250px] h-2/3" src="https://images4.alphacoders.com/131/1314281.jpeg"/>
                        <div className="w-full h-1/3 bg-bg group-hover:bg-[#150e17] transition-all py-4 flex justify-between flex-col px-2">
                            <div className="flex justify-between">
                                <h1 className="text-white font-semibold">Spider-Man</h1>
                                <h1 className="text-yellow-300 flex flex-row">< FaStar/>< FaStar/>< FaStar/>< FaStar/>< FaStar/></h1>
                            </div>
                            <h1 className="text-gray-300 ">Legendado | Dublado</h1>
                        </div>
                    </div>

                    <div className="group h-48 sm:h-72 min-w-[160px] sm:min-w-[250px] bg-white inline-block cursor-pointer">
                        <img className="w-[250px] h-2/3" src="https://images4.alphacoders.com/131/1314281.jpeg"/>
                        <div className="w-full h-1/3 bg-bg group-hover:bg-[#150e17] transition-all py-4 flex justify-between flex-col px-2">
                            <div className="flex justify-between">
                                <h1 className="text-white font-semibold">Spider-Man</h1>
                                <h1 className="text-yellow-300 flex flex-row">< FaStar/>< FaStar/>< FaStar/>< FaStar/>< FaStar/></h1>
                            </div>
                            <h1 className="text-gray-300 ">Legendado | Dublado</h1>
                        </div>
                    </div>

                    <div className="group h-48 sm:h-72 min-w-[160px] sm:min-w-[250px] bg-white inline-block cursor-pointer">
                        <img className="w-[250px] h-2/3" src="https://images4.alphacoders.com/131/1314281.jpeg"/>
                        <div className="w-full h-1/3 bg-bg group-hover:bg-[#150e17] transition-all py-4 flex justify-between flex-col px-2">
                            <div className="flex justify-between">
                                <h1 className="text-white font-semibold">Spider-Man</h1>
                                <h1 className="text-yellow-300 flex flex-row">< FaStar/>< FaStar/>< FaStar/>< FaStar/>< FaStar/></h1>
                            </div>
                            <h1 className="text-gray-300 ">Legendado | Dublado</h1>
                        </div>
                    </div>
                </div>
            </div>

    </div>
  );
}
