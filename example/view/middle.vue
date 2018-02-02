<template>
    <component :is="content"></component>
</template>

<script>
import pc from './pc.vue';
import mobile from './mobile.vue';

export default {
    data () {
        return {
            content: 'pc',
        };
    },
    created () {
        if (this.$platform === '2') {
            this.content = 'mobile';
        }
    },
    components: {
        pc,
        mobile,
    },
};
</script>