import Vue from 'vue';
import Button from './button';
import Icon from './icon';
import ButtonGroup from './button-group';
import Input from './input';
import Row from './row';
import Col from './col';

import Layout from './layout'
import Header from './header'
import Sider from './sider'
import Content from './content'
import Footer from './footer'

Vue.component('k-button', Button);
Vue.component('k-icon', Icon);
Vue.component('k-button-group', ButtonGroup);
Vue.component('k-input', Input);
Vue.component('k-row', Row);
Vue.component('k-col', Col);

Vue.component('k-layout', Layout)
Vue.component('k-header', Header)
Vue.component('k-content', Content)
Vue.component('k-footer', Footer)
Vue.component('k-sider', Sider)


new Vue({
    el: "#app",
    data: {
        loading1: false,
        loading2: false,
        loading3: false,
        value: ''
    },
    methods: {
        inputChange(e) {
            console.log('Hello World');
            console.log(e.target.value);
            console.log(e.target._value);
        }
    }
});


