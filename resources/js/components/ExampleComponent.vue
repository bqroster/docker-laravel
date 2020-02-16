<template>
    <div :class="{ 'in-style': hasStyle }">
        {{ content }}
    </div>
</template>

<script>

    export default {
        props: {
            content: {
                type: String,
                default: 'Example Testing Component'
            },

            hasStyle: {
                type: Boolean,
                default: true
            }
        }
    }

</script>

<style scoped>

    .in-style {
        border: 2px solid #4F6A86;
        padding: 24px;
    }

</style>
