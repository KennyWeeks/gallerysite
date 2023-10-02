import React, {useRef} from 'react';

const useInterObs = (cb: any, options: object) => {
    const observer = useRef<IntersectionObserver | null>(null); //This is a reverenct to the observer

    return React.useCallback((node: any) => {
        if(!node) {
            //This should unmount it
            if (observer.current) {
                //I know typescript is throwing this error, but this is a Intersection Observer, then this should work
                observer.current.disconnect()
            }
            return
        }

        //I want to get rid of this error
        observer.current = new window.IntersectionObserver(cb, options)
        observer.current.observe(node)
    }, []);
}

export default useInterObs;