<template>
    <div class="tabs-head">
        <slot></slot>
        <div class="line" ref="line"></div>
        <div class="actions-wrapper">
            <slot name="actions"></slot>
        </div>
    </div>
</template>

<script>
 export default{
     name: 'k-tabs-head',
     inject: ['eventBus'],
     created(){
         this.eventBus.$on('update:selected',(item,vm)=>{
             let {width,left} = vm.$el.getBoundingClientRect();
             this.$refs.line.style.width = `${width}px`;
             this.$refs.line.style.left = `${left}px`;

         })
     }
 }
</script>

<style scoped lang="scss">
    $tab-height: 46px;
    $blue: blue;
    .tabs-head{
        display: flex;
        height: $tab-height;
        justify-content: flex-start;
        align-items: center;
        position: relative;
        border-bottom: 1px solid #ddd;
        > .line{
            position: absolute;
            bottom: 0;
            border-bottom: 1px solid $blue;
            transition: all .2s linear;
        }


        > .actions-wrapper{
            margin-left: auto;
        }
    }
</style>