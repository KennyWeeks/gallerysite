'use client';
import React from 'react';
import Image from "next/image";
import useInterObs from "./intersectionobserver";

interface ImageComp {
    imageUrl: string
}
const ImageComp : React.FC<ImageComp> = ({imageUrl}) => {
    const [visible, setVisible] = React.useState(false);
    const cbRef = useInterObs((entries : IntersectionObserverEntry[]) => {
        entries.forEach((entry : IntersectionObserverEntry) => {
            if(entry.isIntersecting) {
                setVisible(true);
            }
        })
    },  {threshold: 0.3})

    return(
        <div className={"inline-block"}>
            {/*This will determine whether the final image is visible or invisible, which is trigger by the page tracker
            idk how this will essentially work, cause each of these images has a render component, and I want to affect each of these individually.
            It feels like this may be really bad cause I will have multiple window observers acting with each other, but we'll see how that works eventually*/}
            {/*<div ref={cbRef} className={"bg-[url('" + imageUrl + "')] w-[200px] h-[200px] " + (visible ? "visible": "invisible")}></div>*/}
            <Image ref={cbRef} src={imageUrl} alt={"Image Here"} width={300} height={400} className={"transition-op duration-1000 " + (visible ? "opacity-1" : "opacity-0")}/>
            
        </div>
    );
}



export default ImageComp;