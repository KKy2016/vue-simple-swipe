<template>
    <div class="swipe-item">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        mounted() {
            this.$parent.reInitPage()
        },

        destroyed() {
            this.$parent.reInitPage()
        }
    }
</script>