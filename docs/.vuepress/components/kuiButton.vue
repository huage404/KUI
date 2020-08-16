<template>
    <div>
        <kui-button>默认按钮</kui-button>
        <kui-button icon="settings">默认按钮</kui-button>
        <kui-button :loading="true">默认按钮</kui-button>
        <kui-button disabled>默认按钮</kui-button>
    </div>
</template>
<script>
    import Button from "../../../src/button/button";

    export default {
        name: 'kuiButton',
        components: {
            'kui-button': Button
        }
    }
</script>