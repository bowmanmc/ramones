<template>
<div id="App">
    <Header />

    <Introduction />
    <Studio />
    <AlbumCharts />
    <AlbumCover />
    <NewYork />
    <Reception />
    <Band />
    <Resources />

    <Footer />
</div>
</template>

<script>
import AlbumCharts from './components/AlbumCharts.vue';
import AlbumCover from './components/AlbumCover.vue';
import Band from './components/Band.vue';
import Footer from './components/Footer.vue';
import Header from './components/Header.vue';
import Introduction from './components/Introduction.vue';
import NewYork from './components/NewYork.vue';
import Reception from './components/Reception.vue';
import Resources from './components/Resources.vue';
import Studio from './components/Studio.vue';


export default {
    name: 'App',
    components: {
        AlbumCharts,
        AlbumCover,
        Band,
        Footer,
        Header,
        Introduction,
        NewYork,
        Reception,
        Resources,
        Studio,
    },
};
</script>

<style lang="scss">
@import 'defaults/base';

</style>
