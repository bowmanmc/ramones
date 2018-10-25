<template>
<div class="SongLengths">
    <h3>Song Length (seconds)</h3>
    <div class="chart-bar-horizontal" ref="chart"></div>
</div>
</template>

<script>
import vegaEmbed from 'vega-embed';


export default {
    name: 'SongLengths',
    props: ['songs'],
    watch: {
        songs: function () {
            this.renderChart();
        },
    },
    computed: {
        chartData() {
            if (!this.songs) {
                return null;
            }

            const titles = [];
            const lengths = [];
            this.songs.forEach((song) => {
                titles.push(song.Title);
                lengths.push(song.Seconds);
            });
            return {
                titles,
                lengths,
            };
        },
    },
    methods: {
        renderChart() {
            if (!this.chartData) {
                return;
            }

            const spec = {
                $schema: 'https://vega.github.io/schema/vega-lite/v3.json',
                description: 'Bar chart showing the lengths of songs off of the first Ramones album.',
                data: {
                    values: this.songs,
                },
                mark: 'bar',
                encoding: {
                    x: {
                        field: 'Seconds',
                        type: 'quantitative',
                        axis: { title: 'Song Length (seconds)' },
                    },
                    y: {
                        field: 'Title',
                        type: 'nominal',
                        axis: { title: '' },
                    },
                },
            };
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

        .chart-bar-horizontal {
            border: 1px solid red;
            height: 480px;
            width: 100%;
        }

        .ct-series-a .ct-bar {
            stroke: $color-gray-20;
            stroke-width: 17px;

            &:hover {
                stroke: $color-gray-30;
            }
        }
    }
</style>
