<template>
    <div class="tabs-head">
        <slot></slot>
        <div class="line"></div>
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
            console.log(item,vm)
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
        > .line{
            position: absolute;
            bottom: 0;
            border-bottom: 1px solid $blue;
            width: 100px;
        }


        > .actions-wrapper{
            margin-left: auto;
        }
    }
</style>