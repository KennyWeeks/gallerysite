'use client'
import React, {useState, useContext} from 'react';
import Image from 'next/image';
import Data from "../data/db";
import { GalleryContext } from '../context/contextinit';

interface Landing {
    DataObject: {Gallery_Name: string, Description: string, Images: string[]}[]
}


const Landing : React.FC<Landing> = ({DataObject}) => {
    const {cindex, cupdate} = useContext(GalleryContext);

    return(
        <div id="LandingWrapper" className="w-[100vw] h-[100vh] bg-white relative z-[10000]">
            <div id="DescriptionWrapper" className="w-[50vw] h-[100%] bg-offwhite absolute top-0 left-0 relative z-[1000]">
                <div id="DescriptionArea" className="w-[90%] absolute bottom-[30px] left-[5%] text-black">
                    <h1 className="mb-[5px] inline-block text-2xl font-semibold after:content-[''] after:block after:bg-black after:w-[30%] after:h-[5px]">{}</h1>
                    <p>This will be the description area of the site Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad fugiat voluptatum quia tempore rem quod facilis totam natus, fuga, provident voluptates assumenda eos tempora illo placeat debitis, recusandae quae eum!</p>
                </div>
                <div id="ChooseButton" className="group absolute bottom-0 right-[-60px] h-[50px] w-[50px] bg-offwhite rounded-t-lg overflow-hidden">
                    <a href="#gallerycontent">
                        <Image className="ml-[calc((50px-15px)/2)] mt-[calc((50px-20px)/2)] rotate-180 transition-spacing linear group-hover:mt-[calc(((50px-20px)/2)+5px)]" src="/arrow.png" alt="arrow" width={15} height={20}/>
                    </a>
                </div>
                <div onClick={()=>{cupdate("left")}} id="LeftGalleryButton" className="group absolute top-0 right-[-60px] h-[50px] w-[50px] bg-offwhite rounded-b-lg overflow-hidden">
                    <Image className="ml-[calc((50px-15px)/2)] mt-[calc((50px-20px)/2)] rotate-[-90deg] transition-spacing linear group-hover:ml-[calc(((50px-15px)/2)-5px)]" src="/arrow.png" alt="arrow" width={15} height={20}/>
                </div>
                <div onClick={()=>{cupdate("right")}} id="RightGalleryButton" className="group absolute top-0 right-[-120px] h-[50px] w-[50px] bg-offwhite rounded-b-lg overflow-hidden">
                    <Image className="ml-[calc((50px-15px)/2)] mt-[calc((50px-20px)/2)] rotate-90 transition-spacing linear group-hover:ml-[calc(((50px-15px)/2)+5px)]" src="/arrow.png" alt="arrow" width={15} height={20}/>
                </div>
            </div>
            <div id="GalleryArea" style={{backgroundImage: `url(${DataObject[cindex]["Images"][0]})`}} className={"w-[50%] h-[100vh] absolute top-0 right-0 shadow-insidecover bg-no-repeat bg-center bg-cover"}>
                {/*This will remain empty, and will just simply be the background image for this app*/}
            </div>
        </div>
    );
}

export default Landing;