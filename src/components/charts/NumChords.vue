<template>
    <div class="NumChords">

        <h3>Number of Chords per Song</h3>

        <div class="NumChordsCtr">
            <div class="NumChords__chart">
                <svg class="Chart" viewBox="0 0 170 192">
                    <g class="count" transform="translate(0, 0)">
                        <rect class="bar" x="0" y="106.66666666666667"
                              height="21.333333333333332" width="27"></rect>
                        <text class="label" x="13.5" y="108.66666666666667"
                              alignment-baseline="hanging" text-anchor="middle">
                            1
                        </text>
                        <line class="tick" x1="13.5" x2="13.5" y1="131"
                              y2="134"></line>
                        <text class="axis-label" x="13.5" y="137"
                              alignment-baseline="hanging" text-anchor="middle">
                            3
                        </text>
                    </g>
                    <g class="count highlight" transform="translate(34, 0)">
                        <rect class="bar" x="0" y="0" height="128"
                              width="27"></rect>
                        <text class="label" x="13.5" y="2"
                              alignment-baseline="hanging" text-anchor="middle">
                            6
                        </text>
                        <line class="tick" x1="13.5" x2="13.5" y1="131"
                              y2="134"></line>
                        <text class="axis-label" x="13.5" y="137"
                              alignment-baseline="hanging" text-anchor="middle">
                            4
                        </text>
                    </g>
                    <g class="count" transform="translate(68, 0)">
                        <rect class="bar" x="0" y="64" height="64"
                              width="27"></rect>
                        <text class="label" x="13.5" y="66"
                              alignment-baseline="hanging" text-anchor="middle">
                            3
                        </text>
                        <line class="tick" x1="13.5" x2="13.5" y1="131"
                              y2="134"></line>
                        <text class="axis-label" x="13.5" y="137"
                              alignment-baseline="hanging" text-anchor="middle">
                            5
                        </text>
                    </g>
                    <g class="count" transform="translate(102, 0)">
                        <rect class="bar" x="0" y="85.33333333333334"
                              height="42.666666666666664" width="27"></rect>
                        <text class="label" x="13.5" y="87.33333333333334"
                              alignment-baseline="hanging" text-anchor="middle">
                            2
                        </text>
                        <line class="tick" x1="13.5" x2="13.5" y1="131"
                              y2="134"></line>
                        <text class="axis-label" x="13.5" y="137"
                              alignment-baseline="hanging" text-anchor="middle">
                            6
                        </text>
                    </g>
                    <g class="count" transform="translate(136, 0)">
                        <rect class="bar" x="0" y="85.33333333333334"
                              height="42.666666666666664" width="27"></rect>
                        <text class="label" x="13.5" y="87.33333333333334"
                              alignment-baseline="hanging" text-anchor="middle">
                            2
                        </text>
                        <line class="tick" x1="13.5" x2="13.5" y1="131"
                              y2="134"></line>
                        <text class="axis-label" x="13.5" y="137"
                              alignment-baseline="hanging" text-anchor="middle">
                            7
                        </text>
                    </g>
                    <line x1="0" x2="170" y1="133" y2="133"></line>
                </svg>
            </div>
            <div class="NumChords__description">
                <p>
                    The Ramones are known for their simplistic, three-chord
                    melodies, however, only one song on the album,
                    <em>Judy is a Punk</em>,
                    contains just three chords. Most songs (6), contain four
                    chords, and two,
                    <em>I Don't Wanna Go Down to the Basement</em> and
                    <em>Listen to My Heart</em> contain seven chords each.
                </p>
            </div>
        </div>
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

        .NumChordsCtr {
            display: flex;
            padding-top: 1.0em;

            .NumChords__chart {
                width: 256px;
            }

            .NumChords__description {
                flex: 1;
                padding-left: 2.0em;

                p {
                    margin-top: 0;
                }
            }
        }

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
