<template>
    <div>
        <button class="k-button">按钮1</button>
    </div>
</template>

<script>
    export default {};
</script>

<style scoped lang="scss">
    .k-button{
        font-size: var(--font-size);
        height: var(--button-height);
        padding: 0 1em;
        -webkit-border-radius: var(--border-radius);
        -moz-border-radius: var(--border-radius);
        border-radius: var(--border-radius);
        border: 1px solid var(--border-color);
        background: var(--button-bg);

        &:hover{
            border-color: var(--border-color-hover);
        }
        &:active{
            background-color: var(--button-active-bg);
        }
        &:focus{
            outline: none;
        }
    }


</style>