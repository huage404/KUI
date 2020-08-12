const expect = chai.expect;
import Vue from 'vue'
import Tabs from '../src/tabs'
import TabsHead from '../src/tabs-head'
import TabsBody from '../src/tabs-body'
import TabsItem from '../src/tabs-item'
import TabsPane from '../src/tabs-pane'

Vue.component('k-tabs', Tabs)
Vue.component('k-tabs-head', TabsHead)
Vue.component('k-tabs-body', TabsBody)
Vue.component('k-tabs-item', TabsItem)
Vue.component('k-tabs-pane', TabsPane)

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Tabs', () => {
    it('存在.', () => {
        expect(TabsItem).to.be.ok
    });

    it('接收 name 属性',()=>{
        const Constructor = Vue.extend(TabsItem);
        const vm = new Constructor({
            propsData:{
                name: 'xxx'
            }
        }).$mount();
        expect(vm.$el.getAttribute('data-name')).to.eq('xxx')
    })

    it('接收 disabled 属性',()=>{
        const Constructor = Vue.extend(TabsItem);
        const vm = new Constructor({
            propsData:{
                disabled: true
            }
        }).$mount();
        expect(vm.$el.classList.contains('disabled')).to.be.true;

        const callback = sinon.fake();
        vm.$on('click',callback);
        vm.$el.click();
        expect(callback).to.have.not.been.called;
    })
})