<template>
    <div class="collapse">
        <slot></slot>
    </div>
</template>

<script>
    import Vue from 'vue'
    export default {
        name: "k-collapse",
        data(){
            return{
                eventBus: new Vue()
            }
        },
        props:{
            single: {
                type: Boolean,
                default: false
            },
            selected:{
                type: String
            }
        },
        provide(){
            if(this.single){
                return{
                    eventBus: this.eventBus
                }
            }
        },
        mounted() {
            this.eventBus.$emit('update:selected',this.selected);
        }

    }
</script>

<style scoped lang="scss">
    $grey: #ddd;
    $border-radius: 4px;
    .collapse{
        border: 1px solid $grey;
        border-radius: $border-radius;
    }
</style>