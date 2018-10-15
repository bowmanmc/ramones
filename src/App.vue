<template>
<div id="App">
    <Header />
    <Introduction />
</div>
</template>

<script>
import Header from './components/Header.vue';
import Introduction from './components/Introduction.vue';

export default {
    name: 'App',
    components: {
        Header, Introduction,
    },
};
</script>

<style lang="scss">
@import 'defaults/base';
</style>
