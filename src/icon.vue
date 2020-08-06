<template>
    <svg class="k-icon">
        <use :xlink:href="`#i-${name}`"/>
    </svg>
</template>

<script>
    import './svg';
    export default {
        name: "k-icon",
        props: ['name']
    }
</script>

<style scoped lang="scss">
    .k-icon{
        width: 1em;
        height: 1em;
    }
</style>