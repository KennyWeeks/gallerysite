'use client'
import {useRef, useContext} from "react";
import ImageComp from "./imagecomponent";
import { isDOMComponent } from 'react-dom/test-utils';
import Image from "next/image";
import { GalleryContext } from "../context/contextinit";

interface GalleryInterface {
    Data: {Gallery_Name: string, Description: string, Images: string[]}[]
}

const Gallery : React.FC<GalleryInterface> = ({Data})=>{
    const galleryAreaRef = useRef<HTMLDivElement>(null); //This will just be defaulted to null up here
    const {cindex, cupdate} = useContext(GalleryContext);

    return(
        <div ref={galleryAreaRef} id="gallerycontent" className="w-[100vw] h-[100vh] bg-offwhite overflow-scroll scroll-smooth">

            <div id="galleryarea" className="w-[100%] h-[300vh] relative">

                {Data[cindex]['Images'].map((imgs, index) => (
                    <ImageComp key={index} imageUrl={imgs}/>
                ))}

            </div>

            <div id="menu-area" className="w-[115px] h-[115px] absolute bottom-[10px] right-[15px]">

                <div className="w-[100%] h-[100%] relative mb-[5px]">

                    <div className="group w-[50px] h-[50px] bg-offwhite-darker rounded-full absolute top-0 right-0 shadow-blanketshadow" onClick={()=>{
                        galleryAreaRef.current!.scrollTop = 0; //Scroll Back up to top, the exclamation is a non-null assertion.
                    }}>
                        <Image className="ml-[calc((50px-15px)/2)] mt-[calc((50px-20px)/2)] transition-spacing linear group-hover:mt-[calc(((50px-20px)/2)-5px)]" src="/arrow.png" alt="arrow" width={15} height={20}/>
                    </div>

                    <div onClick={()=>{cupdate("left")}} className="group w-[50px] h-[50px] bg-offwhite-darker rounded-full absolute bottom-0 left-0 shadow-blanketshadow">
                        <Image className="ml-[calc((50px-15px)/2)] mt-[calc((50px-20px)/2)] rotate-[-90deg] transition-spacing linear group-hover:ml-[calc(((50px-15px)/2)-5px)]" src="/arrow.png" alt="arrow" width={15} height={20}/>
                    </div>

                    <a href="#LandingWrapper">
                        <div className="w-[50px] h-[50px] bg-offwhite-darker rounded-full absolute bottom-0 right-0 shadow-blanketshadow">
                            <Image className={"absolute top-[calc((50px-17px)/2)] left-[calc((50px-17px)/2)]"} src="/close.png" alt="close" width={17} height={17}/>
                        </div>
                    </a>
                </div>

            </div>

        </div>
    );
}

export default Gallery;