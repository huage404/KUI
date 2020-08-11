import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import ButtonGroup from './button-group'
import Input from './input'
import Row from './row'
import Col from './col'
import Layout from './layout'
import Header from './header'
import Sider from './sider'
import Content from './content'
import Footer from './footer'
import Toast from './toast'
import plugin from './plugin'
import Tabs from './tabs'
import TabsHead from './tabs-head'
import TabsBody from './tabs-body'
import TabsItem from './tabs-item'
import TabsPane from './tabs-pane'


Vue.component('k-button', Button)
Vue.component('k-icon', Icon)
Vue.component('k-button-group', ButtonGroup)
Vue.component('k-input', Input)
Vue.component('k-row', Row)
Vue.component('k-col', Col)
Vue.component('k-layout', Layout)
Vue.component('k-header', Header)
Vue.component('k-content', Content)
Vue.component('k-footer', Footer)
Vue.component('k-sider', Sider)
Vue.component('k-toast', Toast)
Vue.use(plugin)
Vue.component('k-tabs', Tabs)
Vue.component('k-tabs-head', TabsHead)
Vue.component('k-tabs-body', TabsBody)
Vue.component('k-tabs-item', TabsItem)
Vue.component('k-tabs-pane', TabsPane)



new Vue({
    el: '#app',
    data: {
        loading1: false,
        loading2: true,
        loading3: false,
        message: 'hi',
        selectedTab: ''
    },
    created(){
    },
    methods: {
        yyy(){
            console.log('yyy')
        },
        showToast1(){
            this.showToast('top')
        },
        showToast2(){
            this.showToast('middle')
        },
        showToast3(){
            this.showToast('bottom')
        },
        showToast(position){
            this.$toast(`你的智商目前为 ${parseInt(Math.random() * 100)}。你的智商需要充值！`, {
                position,
                enableHtml: false,
                closeButton: {
                    text: '已充值',
                    callback () {
                        console.log('他说已经充值智商了')
                    }
                },
                autoClose: 3,
            })
        }
    }
})

