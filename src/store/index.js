import auth from "./modules/auth"
import {createStore} from "vuex"

export const store = createStore({
    modules:{
        auth
    }
});


 