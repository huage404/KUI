<template>
    <div class="k-button-group">
        <slot></slot>
    </div>

</template>

<script>
    export default {
        name: "k-button-group",
        mounted() {
            for( let node of this.$el.children ){
                let name = node.nodeName.toLowerCase();
                if(node.nodeName.toLowerCase() !== 'button'){
                    console.warn(`k-button-group 的直接子元素应该全是 k-button 但你写的是 ${name}`)
                }
            }
        }
    }

</script>

<style scoped lang="scss">
    $border-radius: 4px;
    .k-button-group{
        display: inline-flex;
        vertical-align: middle;

        > .k-button{
            -webkit-border-radius: 0;
            -moz-border-radius: 0;
            border-radius: 0;
            &:not(:first-child){
                margin-left: -1px;
            }
            
            &:first-child{
                border-top-left-radius: $border-radius;
                border-bottom-left-radius: $border-radius;
            }
            &:last-child{
                border-top-right-radius: $border-radius;
                border-bottom-right-radius: $border-radius;
            }
            &:hover{
                position: relative;
                z-index: 1;
            }
        }
    }
</style>