<template>
<div class="AlbumCharts">
    <div class="content">
        <h2>Album Charts</h2>

        {{ songs }}
    </div>
</div>
</template>

<script>
import { csvParse } from 'd3-dsv';


export default {
    name: 'AlbumCharts',
    data() {
        return {
            songs: null,
        };
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
