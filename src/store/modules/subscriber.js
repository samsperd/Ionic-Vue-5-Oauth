import { store } from '../../store'
import axios from 'axios';
import localforage from 'localforage'

// storage.create();
store.subscribe((mutation) => {
    switch (mutation.type) {
        case 'auth/SET_TOKEN':
            if (mutation.payload) {
                axios.defaults.headers.common['Authorization'] = `Bearer ${mutation.payload}`;
                localStorage.setItem('token', mutation.payload);
            } else {
                axios.defaults.headers.common['Authorization'] = null;
                localStorage.removeItem('token');
            }
            break;
    
        default:
            break;
    }
})
// console.log(store)