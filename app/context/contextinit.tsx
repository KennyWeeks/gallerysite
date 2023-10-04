import {createContext} from 'react';


export interface AppState {
    cindex: number,
    cupdate: (dir: string) => void
}

const defaultState : AppState = {
    cindex: 0,
    cupdate: (dir: string) => {}
}

//So this will change the state as needed
export const GalleryContext = createContext<AppState>(defaultState);

