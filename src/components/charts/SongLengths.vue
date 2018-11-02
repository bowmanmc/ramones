<template>
<div class="SongLengths">
    <h3>Song Length (seconds)</h3>

    <p>
        All songs on the album clock in well under three minutes, with the
        average song length being 2:06 (two minutes and six seconds).
    </p>

    <svg class="Chart" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 709.12 709.12">
        <title>Song Lengths Chart</title>
        <g id="_14" class="track">
            <path class="bar" d="M20,667.75H446.51v20.77H20Z"/>
            <text class="time" transform="translate(418.81 681.94)">2:09</text>
            <text class="title" transform="translate(19.58 662.82)">14. Today Your Love, Tomorrow the World</text>
        </g>
        <g id="_13" class="track">
            <path class="bar" d="M20,619.1H360.54v20.77H20Z"/>
            <text class="time" transform="translate(332.81 633.06)">1:43</text>
            <text class="title" transform="translate(19.58 614.18)">13. I Don't Wanna Walk Around with You</text>
        </g>
        <g id="_12" class="track">
            <path class="bar" d="M20,570.43H387V591.2H20Z"/>
            <text class="time" transform="translate(359.19 584.54)">1:51</text>
                <text class="title" transform="translate(19.58 565.51)">12. Let's Dance</text>
        </g>
        <g id="_11" class="track">
            <path class="bar" d="M20,521.77H479.57v20.77H20Z"/>
            <text class="time" transform="translate(451.83 535.9)">2:19</text>
            <text class="title" transform="translate(19.58 516.84)">11. 53rd & 3rd</text>
        </g>
        <g id="_10" class="track">
            <path class="bar" d="M20,473.19H403.53V494H20Z"/>
            <text class="time" transform="translate(375.87 486.93)">1:56</text>
            <text class="title" transform="translate(19.58 468.26)">10. Listen to My Heart</text>
        </g>
        <g id="_09" class="track">
            <path class="bar" d="M20,424.74H416.75v20.77H20Z"/>
            <text class="time" transform="translate(389.09 438.71)">2:00</text>
            <text class="title" transform="translate(19.58 419.68)">09. Havana Affair</text>
        </g>
        <g id="_08" class="track">
            <path class="bar" d="M20,376H463v20.77H20Z"/>
            <text class="time" transform="translate(435.14 389.52)">2:14</text>
            <text class="title" transform="translate(19.58 370.93)">08. Loudmouth</text>
        </g>
        <g id="_07" class="track highlight">
            <path class="bar" d="M20,327.22H532.47V348H20Z"/>
            <text class="time" transform="translate(504.67 341)">2:35</text>
            <text class="title" transform="translate(19.58 322.29)">07. I Don't Wanna Go Down to the Basement</text>
        </g>
        <g id="_06" class="track">
            <path class="bar" d="M20,278.56H330.79v20.77H20Z"/>
            <text class="time" transform="translate(302.97 292.18)">1:34</text>
            <text class="title" transform="translate(19.58 273.64)">06. Now I Wanna Sniff Some Glue</text>
        </g>
        <g id="_05" class="track">
            <path class="bar" d="M20,229.92H400.22v20.77H20Z"/>
            <text class="time" transform="translate(372.37 243.62)">1:55</text>
            <text class="title" transform="translate(19.58 224.99)">05. Chain Saw</text>
        </g>
        <g id="_04" class="track">
            <path class="bar" d="M20,181.29H496.1v20.77H20Z"/>
            <text class="time" transform="translate(468.3 194.87)">2:24</text>
            <text class="title" transform="translate(19.58 176.25)">04. I Wanna Be Your Boyfriend</text>
        </g>
        <g id="_03" class="track highlight">
            <path class="bar" d="M20,132.56H317.56v20.77H20Z"/>
            <text class="time" transform="translate(289.82 146.21)">1:30</text>
            <text class="title" transform="translate(19.58 127.64)">03. Judy is a Punk</text>
        </g>
        <g id="_02" class="track">
            <path class="bar" d="M20,83.92H515.94v20.77H20Z"/>
            <text class="time" transform="translate(488.11 97.71)">2:30</text>
            <text class="title" transform="translate(19.58 78.99)">02. Beat on the Brat</text>
        </g>
        <g id="_01" class="track">
            <path class="bar" d="M20,35.23H456.42V56H20Z"/>
            <text class="time" transform="translate(428.94 49.17)">2:12</text>
            <text class="title" transform="translate(19.58 30.3)">01. Blitzkrieg Bop</text>
        </g>
        <g class="Annotations">
            <g id="shortest">
                <text transform="translate(601.87 146.21)">
                    The <tspan class="bold">shortest</tspan> song <tspan x="0" y="14.4">on the album</tspan>
                </text>
                <line x1="596.94" y1="142.95" x2="322.49" y2="142.95"/>
            </g>
            <g id="longest">
                <text class="cls-52" transform="translate(601.87 341)">
                    The <tspan class="bold">longest</tspan> song <tspan x="0" y="14.4">on the album</tspan>
                </text>
                <line x1="596.31" y1="337.61" x2="537.79" y2="337.61"/>
            </g>
        </g>
    </svg>

</div>
</template>

<script>
export default {
    name: 'SongLengths',
};
</script>

<style lang="scss">
    @import "../../defaults/colors";
    @import "../../defaults/devices";
    @import "../../defaults/typography";

    .SongLengths {
        cursor: default;

        .Annotations {
            display: none;

            @include desktop() {
                display: block;
            }

            line {
                stroke: $color-gray-50;
                stroke-dasharray: 5;
                stroke-linecap: round;
                stroke-width: 1;
            }
        }

        .Chart {
            width: 100%;

            text {
                fill: $color-gray-30;
                font-family: $fontstack-heading;
                font-size: 12px;
            }

            .bar {
                fill: $color-gray-30;
            }

            .bold {
                fill: $color-gray-20;
                font-weight: $fontweight-bold;
            }

            .highlight {
                .bar {
                    fill: $color-gray-20;
                }
                .time {
                    fill: $color-white;
                }
                .title {
                    fill: $color-gray-20;
                    font-weight: $fontweight-bold;
                }
            }

            .time {
                fill: $color-gray-90;
                font-weight: $fontweight-bold;
            }

            .title {
                font-size: 14px;
            }
        }
    }
</style>
