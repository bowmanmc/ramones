<template>
<div class="SongLengths">
    <h3>Song Length (seconds)</h3>
    <div class="chart-bar-horizontal" ref="chart"></div>
</div>
</template>

<script>
import vegaEmbed from 'vega-embed';

import SongLengthsSpec from './SongLengthsSpec';


export default {
    name: 'SongLengths',
    props: ['songs'],
    watch: {
        songs() {
            this.renderChart();
        },
    },
    methods: {
        renderChart() {
            if (!this.songs) {
                return;
            }

            const spec = Object.assign({}, SongLengthsSpec, {
                data: { values: this.songs },
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

    .SongLengths {
        cursor: default;
    }
</style>
