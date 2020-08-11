<template>
    <div class="tabs-item" @click="xxx" :class="classes">
        <slot></slot>
    </div>
</template>

<script>
    export default{
        name: 'k-tabs-item',
        data(){
          return{
              active: false
          }
        },
        props: {
            disabled:{
                type: Boolean,
                default: false
            },
            name: {
                type: String,
                required: true
            }
        },
        inject: ['eventBus'],
        created() {
            this.eventBus.$on('update:selected',(name)=>{
                this.active = name === this.name;
            })
        },
        methods:{
            xxx(){
                this.eventBus.$emit('update:selected',this.name,this)
            }
        },
        computed:{
            classes(){
                return{
                    active: this.active
                }
            }
        }
    }
</script>

<style scoped lang="scss">
    $blue: blue;
    .tabs-item{
        flex-shrink: 0;
        padding: 0 2em;
        height: 100%;
        display: flex;
        align-items: center;
        &.active{
            color: $blue;
            font-weight: bold;
        }
    }
</style>