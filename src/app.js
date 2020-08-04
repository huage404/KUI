
import Vue from 'vue';
import Button from './button';
import Icon from './icon';
import ButtonGroup from './button-group';

Vue.component('k-button' , Button);
Vue.component('k-icon' , Icon);
Vue.component('k-button-group' , ButtonGroup);


new Vue({
    el:"#app",
    data:{
        loading1: false,
        loading2: false,
        loading3: false
    }
});

