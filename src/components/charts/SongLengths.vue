<template>
<div class="SongLengths">
    <h3>Song Length (seconds)</h3>
    <div class="ct-chart ct-perfect-fourth" ref="chart"></div>
</div>
</template>

<script>
import Chartist from 'chartist';


export default {
    name: 'SongLengths',
    props: ['songs'],
    watch: {
        songs: function() {
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

            new Chartist.Bar(this.$refs.chart, {
                labels: this.chartData.titles,
                series: [this.chartData.lengths],
            }, {
                reverseData: true,
                horizontalBars: true,
                axisX: {
                    onlyInteger: true,
                },
                axisY: {
                    offset: 150,

                }
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
        .ct-series-a .ct-bar {
            stroke: $color-gray-20;
            stroke-width: 17px;

            &:hover {
                stroke: $color-gray-30;
            }
        }
    }
</style>
