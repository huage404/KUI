<template>
    <svg class="k-icon">
        <use :xlink:href="`#i-${name}`"/>
    </svg>
</template>

<script>
    export default {
        props: ['name']
    }
</script>

<style scoped lang="scss">
    .k-icon{
        width: 1em;
        height: 1em;
    }
</style>