<template>
    <div class="NumChords">
        <h3>Number of Chords</h3>
        <svg class="Chart" viewBox="0 0 170 192">
            <g class="count" transform="translate(0, 0)">
                <rect class="bar" x="0" y="106.66666666666667"
                      height="21.333333333333332" width="27"></rect>
                <text class="label" x="13.5" y="108.66666666666667"
                      alignment-baseline="hanging" text-anchor="middle">1
                </text>
                <line class="tick" x1="13.5" x2="13.5" y1="135"
                      y2="137.5"></line>
                <text class="axis-label" x="13.5" y="139"
                      alignment-baseline="hanging" text-anchor="middle">3
                </text>
            </g>
            <g class="count highlight" transform="translate(34, 0)">
                <rect class="bar" x="0" y="0" height="128" width="27"></rect>
                <text class="label" x="13.5" y="2" alignment-baseline="hanging"
                      text-anchor="middle">6
                </text>
                <line class="tick" x1="13.5" x2="13.5" y1="135"
                      y2="137.5"></line>
                <text class="axis-label" x="13.5" y="139"
                      alignment-baseline="hanging" text-anchor="middle">4
                </text>
            </g>
            <g class="count" transform="translate(68, 0)">
                <rect class="bar" x="0" y="64" height="64" width="27"></rect>
                <text class="label" x="13.5" y="66" alignment-baseline="hanging"
                      text-anchor="middle">3
                </text>
                <line class="tick" x1="13.5" x2="13.5" y1="135"
                      y2="137.5"></line>
                <text class="axis-label" x="13.5" y="139"
                      alignment-baseline="hanging" text-anchor="middle">5
                </text>
            </g>
            <g class="count" transform="translate(102, 0)">
                <rect class="bar" x="0" y="85.33333333333334"
                      height="42.666666666666664" width="27"></rect>
                <text class="label" x="13.5" y="87.33333333333334"
                      alignment-baseline="hanging" text-anchor="middle">2
                </text>
                <line class="tick" x1="13.5" x2="13.5" y1="135"
                      y2="137.5"></line>
                <text class="axis-label" x="13.5" y="139"
                      alignment-baseline="hanging" text-anchor="middle">6
                </text>
            </g>
            <g class="count" transform="translate(136, 0)">
                <rect class="bar" x="0" y="85.33333333333334"
                      height="42.666666666666664" width="27"></rect>
                <text class="label" x="13.5" y="87.33333333333334"
                      alignment-baseline="hanging" text-anchor="middle">2
                </text>
                <line class="tick" x1="13.5" x2="13.5" y1="135"
                      y2="137.5"></line>
                <text class="axis-label" x="13.5" y="139"
                      alignment-baseline="hanging" text-anchor="middle">7
                </text>
            </g>
            <line x1="0" x2="170" y1="137" y2="137"></line>
        </svg>
    </div>
</template>

<script>
export default {
    name: 'NumChords',
};
</script>

<style lang="scss">
    @import "../../defaults/colors";

    .NumChords {

        .Chart {
            max-width: 256px;
            width: 100%;

            line {
                stroke: $color-gray-40;
                stroke-linecap: round;
                stroke-width: 1;
            }

            rect {
                fill: $color-gray-30;
            }

            text {
                fill: $color-gray-30;
                font-size: 11px;
            }

            .label {
                fill: $color-gray-90;
                font-weight: 900;
            }

            .highlight {
                rect {
                    fill: $color-gray-20;
                }

                .label {
                    fill: $color-white;
                }
            }
        }

    }
</style>
