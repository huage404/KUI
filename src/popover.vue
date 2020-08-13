<template>
    <div class="popover" @click.stop="xxx">
        <div ref="contentWrapper" class="content-wrapper" v-show="visible" @click.stop>
            <slot name="content"></slot>
        </div>
        <span ref="triggerWrapper">
            <slot></slot>
        </span>
    </div>
</template>

<script>
    export default {
        name: "k-popover",
        data(){
            return{
                visible: false
            }
        },
        methods:{
            xxx(){
                this.visible = !this.visible;
                if(this.visible === true){
                    setTimeout(()=>{
                        document.body.appendChild(this.$refs.contentWrapper)
                        let {left,top} = this.$refs.triggerWrapper.getBoundingClientRect();
                        this.$refs.contentWrapper.style.left = left+'px';
                        this.$refs.contentWrapper.style.top = top +'px';
                        let eventHandler = ()=>{
                            this.visible = false;
                            document.removeEventListener('click',eventHandler);
                        }
                        document.addEventListener('click',eventHandler);
                    });
                }
            }
        },
        mounted() {
            console.log(this.$refs.triggerWrapper)
        }
    }
</script>

<style scoped lang="scss">
    .popover{
        display: inline-block;
        vertical-align: top;
        position: relative;

    }
    .content-wrapper{
        position: absolute;
        border: 1px solid red;
        -webkit-box-shadow: 0 0 3px rgba(0,0,0,.5);
        -moz-box-shadow: 0 0 3px rgba(0,0,0,.5);
        box-shadow: 0 0 3px rgba(0,0,0,.5);
        -webkit-transform: translateY(-100%);
        -moz-transform: translateY(-100%);
        -ms-transform: translateY(-100%);
        -o-transform: translateY(-100%);
        transform: translateY(-100%);
    }
</style>