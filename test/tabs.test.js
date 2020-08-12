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
        expect(Tabs).to.be.ok
    });

    it('子组件只能是 tabs-head 和 tabs-body', (done) => {
        const div = document.createElement('div');
        document.body.appendChild(div);
        div.innerHTML = `
                <k-tabs selected="finance">
                    <k-tabs-head>
                        <k-tabs-item name="woman">美女</k-tabs-item>
                        <k-tabs-item name="finance">财经</k-tabs-item>
                        <k-tabs-item name="sports">体育</k-tabs-item>
                    </k-tabs-head>
                    <k-tabs-body>
                        <k-tabs-pane name="woman">美女相关资讯</k-tabs-pane>
                        <k-tabs-pane name="finance">财经相关资讯</k-tabs-pane>
                        <k-tabs-pane name="sports">体育相关资讯</k-tabs-pane>
                    </k-tabs-body>
                </k-tabs>`;
            let vm = new Vue({
                el: div
            });
            vm.$nextTick(()=>{
                let x = vm.$el.querySelector('.tabs-item:nth-child(2)');
                expect(x.classList.contains('active')).to.be.true;
                done();
            });
    })

})