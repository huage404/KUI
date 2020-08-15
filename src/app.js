import Vue from 'vue'
import Button from './button/button'
import Icon from './icon/icon'
import ButtonGroup from './button/button-group'
import Input from './input/input'
import Row from './layout/row'
import Col from './layout/col'
import Layout from './layout/layout'
import Header from './layout/header'
import Sider from './layout/sider'
import Content from './layout/content'
import Footer from './layout/footer'
import Toast from './toast/toast'
import plugin from './toast/plugin'
import Tabs from './tabs/tabs'
import TabsHead from './tabs/tabs-head'
import TabsBody from './tabs/tabs-body'
import TabsItem from './tabs/tabs-item'
import TabsPane from './tabs/tabs-pane'
import Popover from './popover/popover'
import Collapse from './collapse/collapse'
import CollapseItem from './collapse/collapse-item'


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
Vue.component('k-popover', Popover)
Vue.component('k-collapse', Collapse)
Vue.component('k-collapse-item', CollapseItem)




new Vue({
    el: '#app',
    data: {
        selectedTab: ['2','1']
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

