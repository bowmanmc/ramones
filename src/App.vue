<template>
<div id="App">
    <Header />

    <Introduction />
    <NewYork />

    <Footer />
</div>
</template>

<script>
import Footer from './components/Footer.vue';
import Header from './components/Header.vue';
import Introduction from './components/Introduction.vue';
import NewYork from './components/NewYork.vue';


export default {
    name: 'App',
    components: {
        Header, Introduction, Footer, NewYork,
    },
};
</script>

<style lang="scss">
@import 'defaults/base';
</style>
