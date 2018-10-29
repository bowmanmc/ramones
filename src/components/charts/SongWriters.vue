<template>
    <div class="SongWriters">
        <h3>Song Writing Credits</h3>
        <div ref="chart"></div>
    </div>
</template>

<script>
import vegaEmbed from 'vega-embed';

import SongWritersSpec from './SongWriters.def';


export default {
    name: 'SongWriters',
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
            // add a SongWriters attribute to each song
            const counts = {};
            this.songs.forEach((song) => {
                const writers = song.Writers.split('|');
                writers.forEach((writer) => {
                    if (writer.startsWith('Jim')) { return; }
                    if (!counts[writer]) { counts[writer] = 0; }
                    counts[writer] += 1;
                });
            });
            const results = [];
            Object.keys(counts).sort().forEach((member) => {
                results.push({ name: member, count: counts[member] });
            });
            return results;
        },
    },
    methods: {
        renderChart() {
            if (!this.chartData) {
                return;
            }

            const spec = Object.assign({}, SongWritersSpec, {
                data: [{
                    name: 'credits',
                    values: this.chartData,
                    transform: [{
                        type: 'pie',
                        field: 'count',
                        groupby: ['name'],
                    }],
                }],
            });
            //vega.scheme('ramones', ['#f00', '#0f0', '#00f', '#ff0', '#f0f', '#0ff']);
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

    .SongWriters {

    }
</style>
