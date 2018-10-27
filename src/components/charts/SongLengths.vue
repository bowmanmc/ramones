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
        songs() {
            this.renderChart();
        },
    },
    methods: {
        renderChart() {
            if (!this.songs) {
                return;
            }

            const spec = {
                $schema: 'https://vega.github.io/schema/vega-lite/v3.json',
                description: 'Bar chart showing the lengths of songs off of the first Ramones album.',
                width: 768,
                height: 480,
                config: {
                    view: {
                        stroke: 'transparent',
                    },
                },
                autosize: {
                    type: 'fit',
                    contains: 'padding',
                },
                data: {
                    values: this.songs,
                },
                mark: {
                    type: 'bar',
                    color: '#363636',
                },
                encoding: {
                    x: {
                        field: 'Seconds',
                        type: 'quantitative',
                        axis: {
                            title: 'Song Length (seconds)',
                            grid: true,
                            gridColor: 'rgba(0, 0, 0, 0.09)',
                        },
                    },
                    y: {
                        field: 'Title',
                        sort: null,
                        type: 'nominal',
                        axis: {
                            title: '',
                            grid: false,
                        },
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
