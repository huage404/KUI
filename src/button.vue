<template>
    <button class="k-button" :class="{[`icon-${iconPosition}`]:true}">
        <svg v-if="icon" class="icon">
            <use :xlink:href="`#i-${icon}`"></use>
        </svg>
        <div class="content">
            <slot></slot>
        </div>
    </button>

</template>

<script>
    export default {
        props: {
            icon: {},
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
            width: 1em;
            height: 1em;
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
    }


</style>