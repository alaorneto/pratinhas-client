import { writable } from 'svelte/store';
import { browser } from '$app/env';

export const persistStore = (key, initial) => {
    if (browser) {
        const persist = localStorage.getItem(key);
        const data = persist ? JSON.parse(persist) : initial;
        var store = writable(data, () => {
            const unsubscribe = store.subscribe(value => {
                localStorage.setItem(key, JSON.stringify(value));
            })
            return unsubscribe;
        })
        return store;
    }
    return null;
    
}