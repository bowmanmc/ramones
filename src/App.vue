<template>
<div id="App">
    <Header />

    <Introduction />
    <AlbumCharts />
    <NewYork />

    <Footer />
</div>
</template>

<script>
import AlbumCharts from './components/AlbumCharts.vue';
import Footer from './components/Footer.vue';
import Header from './components/Header.vue';
import Introduction from './components/Introduction.vue';
import NewYork from './components/NewYork.vue';


export default {
    name: 'App',
    components: {
        AlbumCharts, Footer, Header, Introduction, NewYork,
    },
};
</script>

<style lang="scss">
@import 'defaults/base';
</style>
