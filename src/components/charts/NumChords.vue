<template>
    <div class="NumChords">
        <h3>Number of Chords</h3>
        <div class="ct-chart ct-perfect-fourth" ref="chart"></div>
    </div>
</template>

<script>
    import Chartist from 'chartist';


    export default {
        name: 'NumChords',
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
                const chords = [];
                this.songs.forEach((song) => {
                    titles.push(song.Title);
                    chords.push(song.Chords.split('|').length);
                });
                return {
                    titles,
                    chords,
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
                    series: [this.chartData.chords],
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

    .NumChords {
        .ct-series-a .ct-bar {
            stroke: $color-gray-20;
            stroke-width: 17px;

            &:hover {
                stroke: $color-gray-30;
            }
        }
    }
</style>
