import React, {useState} from 'react';
import {AppState, GalleryContext} from "./contextinit";

export interface Props {
    children: React.ReactNode
}

const GalleryContextProvider : React.FC<Props> = ({children}) => {
    const [cindex, setState] = useState(0); //So we've set the state here

    const cupdate = (dir: string) => {
        if(dir == 'left' || dir == 'right') {
            if(dir == "left") {
                if(cindex - 1 < 0) {
                    setState(2);
                } else {
                    setState(cindex - 1);
                }
            } else {
                setState((cindex + 1) % 3);
            }
        } else {
            console.log(cindex);
        }
        
    }
    //So I hope this works, but idk
    return(
        <GalleryContext.Provider value={{cindex, cupdate}}>
            {children}
        </GalleryContext.Provider>
    );
}

export default GalleryContextProvider;