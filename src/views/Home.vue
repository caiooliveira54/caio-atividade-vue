<template>
    <home-public v-if="!isAuthenticated"/>
    <home-private v-else/>
</template>

<script>
import HomePublic from '@/components/HomePublic';
import HomePrivate from '@/components/HomePrivate';

export default {
    name: 'home',
    components: {
        HomePublic,
        HomePrivate
    },
    computed: {
        isAuthenticated() {
            return this.$store.getters.isAuthenticated;
        }
    },
};
</script>