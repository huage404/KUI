<template>
    <div class="wrapper" :class="{ 'error': error }">
        <input :value="value"
               type="text"
               :disabled="disabled"
               :readonly="readonly"
               @change="$emit('change',$event)"
               @input="$emit('input',$event)"
               @focus="$emit('focus',$event)"
               @blur="$emit('blur',$event)">
        <template v-if="error">
            <k-icon name="error" class="icon-error"></k-icon>
            <span v-text="error" class="errorMessage"></span>
        </template>
    </div>
</template>

<script>
    import Icon from './icon';

    export default {
        components:{
          'k-icon': Icon
        },
        name: "k-input",
        props: {
            value: String,
            disabled: {
                type: Boolean,
                default: false
            },
            readonly: {
                type: Boolean,
                default: false
            },
            error: {
                type: String
            }
        }
    }
</script>

<style scoped lang="scss">
    $height: 32px;
    $border-color: #999;
    $border-color-hover: #666;
    $border-radius: 4px;
    $font-size: 12px;
    $box-shadow-color: rgba(0, 0, 0, .5);
    $red: #f1453d;
    .wrapper {
        font-size: $font-size;
        display: inline-flex;
        align-items: center;

        > :not(:last-child){
            margin-right: .5em;
        }

        > input {
            height: $height;
            border: 1px solid $border-color;
            -webkit-border-radius: $border-radius;
            -moz-border-radius: $border-radius;
            border-radius: $border-radius;
            padding: 0 8px;
            font-style: inherit;

            &:hover {
                border-color: $border-color-hover;
            }

            &:focus {
                box-shadow: inset 0 1px 3px $box-shadow-color;
            }

            &[disabled],
            &[readonly] {
                border-color: #aaa;
                color: #aaa;
                cursor: not-allowed;
            }
        }

        &.error {
            > input {
                border-color: $red;
                color: $red;
            }
        }

        .icon-error{
            fill: $red;
        }
        .errorMessage{
            color: $red;
        }
    }
</style>