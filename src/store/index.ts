import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export type ClientState = typeof state

const state = {

}

export const client_store = new Vuex.Store<any>({
    strict : true,
    state
});

// ==========================================================================
// HOT RELOADING:
// NOT SURE IF THIS IS ACTUALLY NEEDED:
declare var module;
if( module.hot ){
    //module.hot.accept()

    module.hot.accept(() =>{
        client_store.hotUpdate({
           // getters,
           // mutations
        });
    });
}

