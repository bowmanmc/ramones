<template>
<div id="App">
    <Header />

    <Introduction />
    <AlbumCharts />
    <AlbumComparisons />
    <NewYork />
    <Band />
    <Resources />

    <Footer />
</div>
</template>

<script>
import AlbumCharts from './components/AlbumCharts.vue';
import AlbumComparisons from './components/AlbumComparisons.vue';
import Band from './components/Band.vue';
import Footer from './components/Footer.vue';
import Header from './components/Header.vue';
import Introduction from './components/Introduction.vue';
import NewYork from './components/NewYork.vue';
import Resources from './components/Resources.vue';


export default {
    name: 'App',
    components: {
        AlbumCharts, AlbumComparisons, Band, Footer, Header, Introduction, NewYork, Resources,
    },
};
</script>

<style lang="scss">
@import 'defaults/base';
@import '~chartist/dist/scss/chartist';

</style>
