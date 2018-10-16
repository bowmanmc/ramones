<template>
<div id="App">
    <Header />
    <Introduction />
    <Footer />
</div>
</template>

<script>
import Footer from './components/Footer.vue';
import Header from './components/Header.vue';
import Introduction from './components/Introduction.vue';

export default {
    name: 'App',
    components: {
        Header, Introduction, Footer,
    },
};
</script>

<style lang="scss">
@import 'defaults/base';
</style>
