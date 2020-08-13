<template>
    <div class="popover" @click="onClick" ref="popover">
        <div ref="contentWrapper" class="content-wrapper" v-show="visible" :class="{[`position-${position}`]: true}">
            <slot name="content"></slot>
        </div>
        <span ref="triggerWrapper" class="trigger-wrapper">
            <slot></slot>
        </span>
    </div>
</template>

<script>
    export default {
        name: "k-popover",
        data() {
            return {
                visible: false
            }
        },
        props: {
            position: {
                type: String,
                default: 'top',
                validator(value) {
                    return ['top', 'bottom', 'left', 'right'].indexOf(value) >= 0
                }
            }
        },
        methods: {
            positionContent() {  // 让展示层定位到按钮附近
                const {contentWrapper, triggerWrapper} = this.$refs;

                document.body.appendChild(contentWrapper);
                let {width,height, left, top} = triggerWrapper.getBoundingClientRect();
                switch (this.position) {
                    case 'top':
                        contentWrapper.style.left = window.scrollX + left + 'px';
                        contentWrapper.style.top = window.scrollY + top + 'px';
                        break;
                    case 'bottom':
                        contentWrapper.style.left = window.scrollX + left + 'px';
                        contentWrapper.style.top = window.scrollY + height + top + 'px';
                        break;
                    case 'left':
                        contentWrapper.style.left = window.scrollX + left + 'px';
                        contentWrapper.style.top = window.scrollY + top + 'px';
                        let {height: height2} = contentWrapper.getBoundingClientRect();
                        contentWrapper.style.top = top + window.scrollY + (height - height2) / 2 + 'px';
                        break;
                    case 'right':
                        console.log(123);
                        contentWrapper.style.left = window.scrollX+ width + left + 'px';
                        contentWrapper.style.top = window.scrollY + top + 'px';
                        let {height: height3} = contentWrapper.getBoundingClientRect();
                        contentWrapper.style.top = top + window.scrollY + (height - height3) / 2 + 'px';
                        break;
                    default:
                        console.log('请传入一个 position ，用于设置气泡框出现方向');

                }

            },
            onClickDocument(e) {
                if (this.$refs.popover && (this.$refs.popover === e.target || this.$refs.popover.contains(e.target))) {
                    return
                }
                if (this.$refs.contentWrapper && (this.$refs.contentWrapper === e.target || this.$refs.contentWrapper.contains(e.target))) {
                    return
                }

                this.close();
            },
            open() {  // 点击后触发的逻辑
                this.visible = true;
                setTimeout(() => {
                    this.positionContent();
                    document.addEventListener('click', this.onClickDocument);
                });
            },
            close: function () {
                this.visible = false;
                document.removeEventListener('click', this.onClickDocument);
            },
            onClick(event) {
                if (this.$refs.triggerWrapper.contains(event.target)) {
                    if (this.visible === true) {
                        this.close();
                    } else {
                        this.open();
                    }
                }

            }
        }
    }
</script>

<style scoped lang="scss">

    $border-color: #333;
    $border-radius: 4px;


    .popover {
        display: inline-block;
        vertical-align: top;
        position: relative;
    }

    .content-wrapper {
        position: absolute;
        border: 1px solid $border-color;
        border-radius: $border-radius;
        filter: drop-shadow(0 1px 1px rgba(0, 0, 0, .5));
        background: #fff;
        padding: 1em;
        max-width: 20em;
        word-break: break-all;

        &::before, &::after {
            content: '';
            display: block;
            border: 10px solid transparent;
            width: 0;
            height: 0;
            position: absolute;
        }

        &.position-top {
            margin-top: -10px;
            transform: translateY(-100%);

            &::before, &::after {
                left: 10px;
            }

            &::before {
                top: 100%;
                border-top-color: #000;
            }

            &::after {
                top: calc(100% - 1px);
                border-top-color: #fff;
            }
        }

        &.position-bottom {
            margin-top: 10px;

            &::before, &::after {
                left: 10px;
            }

            &::before {
                bottom: 100%;
                border-bottom-color: #000;
            }

            &::after {
                bottom: calc(100% - 1px);
                border-bottom-color: #fff;
            }
        }

        &.position-left {
            transform: translateX(-100%);
            margin-left: -10px;
            &::before,&::after{
                left: 100%;
                transform: translateY(-50%);
                top: 50%;
            }
            &::before {
                border-left-color: #000;
                left: 100%;
            }
            &::after{
                border-left-color: #fff;
                left: calc(100% - 1px);
            }

        }

        &.position-right {
            margin-left: 10px;
            &::before,&::after{
                transform: translateY(-50%);
                top: 50%;
            }
            &::before {
                border-right-color: #000;
                right: 100%;
            }
            &::after{
                border-right-color: #fff;
                right: calc(100% - 1px);
            }

        }
    }

    .trigger-wrapper {
        display: inline-block;
    }
</style>