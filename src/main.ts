import {forIn} from 'lodash'
import Vue from "vue";
import {default as App} from "./App.vue"
import {client_store} from "./store";

export function register_components( components: {} ){
    forIn(components, ( value, key ) =>{
       //console.log("registering", key);
       //Vue.component(key, value);
    });
}

const v = new Vue({
    store : client_store,
    el    : "#app", // don't use Body, messes with Textboxio I think
    render: h => h(App)
});
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


declare let module: any;
if( module.hot ){
    module.hot.accept();
}
