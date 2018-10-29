<template>
<div class="AlbumCharts">
    <div class="content">
        <h2>Album Charts</h2>

        <SongLengths v-bind:songs="songs" />
        <NumChords v-bind:songs="songs" />
        <SongWriters v-bind:songs="songs" />

    </div>
</div>
</template>

<script>
import { csvParse } from 'd3-dsv';

import NumChords from './charts/NumChords.vue';
import SongLengths from './charts/SongLengths.vue';
import SongWriters from './charts/SongWriters.vue';


export default {
    name: 'AlbumCharts',
    data() {
        return {
            songs: null,
        };
    },
    components: {
        NumChords, SongLengths, SongWriters,
    },
    methods: {
        fetchData() {
            const self = this;
            const request = new Request('/data/ramones-st-1976.csv');

            fetch(request).then(response => response.text()).then((text) => {
                self.songs = csvParse(text);
            }).catch((error) => {
                console.error('Error fetching data', error);
            });
        },
    },
    mounted() {
        this.fetchData();
    },
};
</script>

<style lang="scss">
@import "../defaults/colors";

.AlbumCharts {
    background: $color-primary;
    color: $color-gray-20;
    padding: 1.0em 0;
}
</style>
