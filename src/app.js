
import Vue from 'vue';
import Button from './button';
import Icon from './icon';
import ButtonGroup from './button-group';
import Input from './input';

Vue.component('k-button' , Button);
Vue.component('k-icon' , Icon);
Vue.component('k-button-group' , ButtonGroup);
Vue.component('k-input' , Input);


new Vue({
    el:"#app",
    data:{
        loading1: false,
        loading2: false,
        loading3: false,
        value: ''
    },
    methods:{
        inputChange(e){
            console.log('Hello World');
            console.log(e.target.value);
            console.log(e.target._value);
        }
    }
});


