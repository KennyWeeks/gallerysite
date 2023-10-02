'use client'
import {useState} from 'react';
import Image from 'next/image'

export default function Landing() {
    const [cbIndex, setBackground] = useState(1);
    const backgroundUrls = ["\"./photos/Putna/Putna.jpg\"", "\"./photos/Red_Lake/boats.jpg\""];

    const galleryName : string[] = ["Putna Monastery", "Red Lake & Cheile Bicazului"]

    const changeBackground = () => {
        setBackground((cbIndex + 1) % 2); //This should keep the index withing 0 and 1
    }

    return(
        <div id="LandingWrapper" className="w-[100vw] h-[100vh] bg-white relative z-[10000]">
            <div id="DescriptionWrapper" className="w-[50vw] h-[100%] bg-offwhite absolute top-0 left-0 relative z-[1000]">
                <div id="DescriptionArea" className="w-[90%] absolute bottom-[30px] left-[5%] text-black">
                    <h1 className="mb-[5px] inline-block text-2xl font-semibold after:content-[''] after:block after:bg-black after:w-[30%] after:h-[5px]">{galleryName[cbIndex]}</h1>
                    <p>This will be the description area of the site Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad fugiat voluptatum quia tempore rem quod facilis totam natus, fuga, provident voluptates assumenda eos tempora illo placeat debitis, recusandae quae eum!</p>
                </div>
                <div id="ChooseButton" className="group absolute bottom-0 right-[-60px] h-[50px] w-[50px] bg-offwhite rounded-t-lg overflow-hidden">
                    <a href="#gallerycontent">
                        <Image className="ml-[calc((50px-15px)/2)] mt-[calc((50px-20px)/2)] rotate-180 transition-spacing linear group-hover:mt-[calc(((50px-20px)/2)+5px)]" src="/arrow.png" alt="arrow" width={15} height={20}/>
                    </a>
                </div>
                <div onClick={()=>{changeBackground()}} id="LeftGalleryButton" className="group absolute top-0 right-[-60px] h-[50px] w-[50px] bg-offwhite rounded-b-lg overflow-hidden">
                    <Image className="ml-[calc((50px-15px)/2)] mt-[calc((50px-20px)/2)] rotate-[-90deg] transition-spacing linear group-hover:ml-[calc(((50px-15px)/2)-5px)]" src="/arrow.png" alt="arrow" width={15} height={20}/>
                </div>
                <div onClick={()=>{changeBackground()}} id="RightGalleryButton" className="group absolute top-0 right-[-120px] h-[50px] w-[50px] bg-offwhite rounded-b-lg overflow-hidden">
                    <Image className="ml-[calc((50px-15px)/2)] mt-[calc((50px-20px)/2)] rotate-90 transition-spacing linear group-hover:ml-[calc(((50px-15px)/2)+5px)]" src="/arrow.png" alt="arrow" width={15} height={20}/>
                </div>
            </div>
            <div id="GalleryArea" style={{backgroundImage: `url(${backgroundUrls[cbIndex]})`}} className={"w-[50%] h-[100vh] absolute top-0 right-0 shadow-insidecover bg-no-repeat bg-center bg-cover"}>
                {/*This will remain empty, and will just simply be the background image for this app*/}
            </div>
        </div>
    );
}