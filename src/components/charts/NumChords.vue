<template>
    <div class="NumChords">
        <h3>Number of Chords</h3>
        <div ref="chart"></div>
    </div>
</template>

<script>
import vegaEmbed from 'vega-embed';

import NumChordsSpec from './NumChords.def';


export default {
    name: 'NumChords',
    props: ['songs'],
    watch: {
        songs() {
            this.renderChart();
        },
    },
    computed: {
        chartData() {
            if (!this.songs) {
                return null;
            }
            // add a numChords attribute to each song
            const result = [];
            this.songs.forEach((song) => {
                result.push(Object.assign({}, song, {
                    numChords: song.Chords.split('|').length,
                }));
            });
            return result;
        },
    },
    methods: {
        renderChart() {
            if (!this.chartData) {
                return;
            }

            const spec = Object.assign({}, NumChordsSpec, {
                data: { values: this.chartData },
            });

            vegaEmbed(this.$refs.chart, spec, {
                actions: false,
                renderer: 'svg',
            });
        },
    },
    mounted() {
        this.renderChart();
    },
};
</script>

<style lang="scss">
    @import "../../defaults/colors";

    .NumChords {

    }
</style>
