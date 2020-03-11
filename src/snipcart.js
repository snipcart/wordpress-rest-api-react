
import { useEffect, useRef, useState } from 'react';


export function useSnipcartState(selector) {
    const [data, setData] = useState(undefined);

    const isUnmounted = useRef(false);
    const cleanupFn = useRef(null);

    useEffect(() => {
        return () => {
            isUnmounted.current = true;
            if(typeof cleanupFn.current === 'function') {
                cleanupFn.current();
            }
        }
    }, []);

    let lastValue = data;
    function refreshValue() {
        const state = window.Snipcart.store.getState();
        const currentValue = selector(state);
        if(currentValue !== lastValue) {
            setData(currentValue);
        }
    }

    function setup() {
        if(isUnmounted.current) {
            return;
        }
        cleanupFn.current = window.Snipcart.store.subscribe(refreshValue);
        refreshValue();
    }

    if(!window.Snipcart) {
        document.addEventListener('snipcart.ready', setup);
    } else {
        setup();
    }
    return data;
}
