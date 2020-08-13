<template>
    <div class="popover" @click="onClick" ref="popover">
        <div ref="contentWrapper" class="content-wrapper" v-show="visible">
            <slot name="content"></slot>
        </div>
        <span ref="triggerWrapper">
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
        methods: {
            positionContent() {  // 让展示层定位到按钮附近
                document.body.appendChild(this.$refs.contentWrapper);
                let {left, top} = this.$refs.triggerWrapper.getBoundingClientRect();
                this.$refs.contentWrapper.style.left = window.scrollX + left + 'px';
                this.$refs.contentWrapper.style.top = window.scrollY + top + 'px';
            },
            onClickDocument(e) {
                if (this.$refs.popover && (this.$refs.popover === e.target || this.$refs.popover.contains(e.target))) {
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
                document.removeEventListener('click',this.onClickDocument);
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
    .popover {
        display: inline-block;
        vertical-align: top;
        position: relative;

    }

    .content-wrapper {
        position: absolute;
        border: 1px solid red;
        -webkit-box-shadow: 0 0 3px rgba(0, 0, 0, .5);
        -moz-box-shadow: 0 0 3px rgba(0, 0, 0, .5);
        box-shadow: 0 0 3px rgba(0, 0, 0, .5);
        -webkit-transform: translateY(-100%);
        -moz-transform: translateY(-100%);
        -ms-transform: translateY(-100%);
        -o-transform: translateY(-100%);
        transform: translateY(-100%);
    }
</style>