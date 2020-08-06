<template>
    <button class="k-button" :class="{[`icon-${iconPosition}`]:true}" @click="$emit('click')">
        <k-icon class="icon" v-if="icon && !loading" :name="icon"></k-icon>
        <k-icon class="loading icon" v-if="loading" name="loading"></k-icon>
        <span class="content">
            <slot/>
        </span>
    </button>

</template>

<script>

    import Icon from './icon';

    export default {
        name: 'k-button',
        components:{
          'k-icon': Icon
        },
        props: {
            icon: {},
            loading:{
                type: Boolean,
                default: false
            },
            iconPosition: {
                type: String,
                default: 'left',
                validator: function (value) {
                    return !(value !== 'left' && value !== 'right');
                }
            }
        }
    };
</script>

<style scoped lang="scss">

    @keyframes spin {
        0%{ transform: rotate(0deg) }
        100%{ transform: rotate(360deg) }
    }
    
    
    
    .k-button {
        font-size: var(--font-size);
        height: var(--button-height);
        padding: 0 1em;
        -webkit-border-radius: var(--border-radius);
        -moz-border-radius: var(--border-radius);
        border-radius: var(--border-radius);
        border: 1px solid var(--border-color);
        background: var(--button-bg);
        vertical-align: middle;
        display: inline-flex;
        justify-content: center;
        align-items: center;

        &:hover {
            border-color: var(--border-color-hover);
        }

        &:active {
            background-color: var(--button-active-bg);
        }

        &:focus {
            outline: none;
        }

        > .content {
            order: 2;
        }

        > .icon {
            order: 1;
            margin-right: .3em;
        }

        &.icon-right {
            > .icon {
                order: 2;
                margin-left: .3em;
                margin-right: 0;
            }

            > .content {
                order: 1;
            }
        }
        .loading{
            animation: spin 1.5s ease-in-out infinite;
        }
    }


</style>