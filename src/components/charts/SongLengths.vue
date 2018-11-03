<template>
<div class="SongLengths">
    <p>
        All songs on the album clock in at well under three minutes, with the
        average song length being 2:06 (two minutes and six seconds).
        <em>Judy is a Punk</em>
        is the shortest song at 1:30 and
        <em>I Don't Wanna Go Down to the Basement</em> is the longest
        at 2:35.
    </p>

    <h3>Song Lengths</h3>
    <!-- https://codepen.io/webslingerm/pen/pQzbvp -->
    <svg class="Chart" viewBox="0 0 640 770">
        <g class="track" id="01">
            <text class="title" y="0" alignment-baseline="hanging">01.
                Blitzkrieg Bop
            </text>
            <rect class="bar" x="0" y="16" height="27" width="528"></rect>
            <text x="521" y="31" alignment-baseline="middle" text-anchor="end"
                  class="time">2:12
            </text>
        </g>
        <g class="track" id="02">
            <text class="title" y="55" alignment-baseline="hanging">02. Beat on
                the Brat
            </text>
            <rect class="bar" x="0" y="71" height="27" width="600"></rect>
            <text x="593" y="86" alignment-baseline="middle" text-anchor="end"
                  class="time">2:30
            </text>
        </g>
        <g class="track highlight" id="03">
            <text class="title" y="110" alignment-baseline="hanging">03. Judy is
                a Punk
            </text>
            <rect class="bar" x="0" y="126" height="27" width="360"></rect>
            <text x="353" y="141" alignment-baseline="middle" text-anchor="end"
                  class="time">1:30
            </text>
        </g>
        <g class="track" id="04">
            <text class="title" y="165" alignment-baseline="hanging">04. I Wanna
                Be Your Boyfriend
            </text>
            <rect class="bar" x="0" y="181" height="27" width="576"></rect>
            <text x="569" y="196" alignment-baseline="middle" text-anchor="end"
                  class="time">2:24
            </text>
        </g>
        <g class="track" id="05">
            <text class="title" y="220" alignment-baseline="hanging">05. Chain
                Saw
            </text>
            <rect class="bar" x="0" y="236" height="27" width="460"></rect>
            <text x="453" y="251" alignment-baseline="middle" text-anchor="end"
                  class="time">1:55
            </text>
        </g>
        <g class="track" id="06">
            <text class="title" y="275" alignment-baseline="hanging">06. Now I
                Wanna Sniff Some Glue
            </text>
            <rect class="bar" x="0" y="291" height="27" width="376"></rect>
            <text x="369" y="306" alignment-baseline="middle" text-anchor="end"
                  class="time">1:34
            </text>
        </g>
        <g class="track highlight" id="07">
            <text class="title" y="330" alignment-baseline="hanging">07. I Don't
                Wanna Go Down to the Basement
            </text>
            <rect class="bar" x="0" y="346" height="27" width="620"></rect>
            <text x="613" y="361" alignment-baseline="middle" text-anchor="end"
                  class="time">2:35
            </text>
        </g>
        <g class="track" id="08">
            <text class="title" y="385" alignment-baseline="hanging">08.
                Loudmouth
            </text>
            <rect class="bar" x="0" y="401" height="27" width="536"></rect>
            <text x="529" y="416" alignment-baseline="middle" text-anchor="end"
                  class="time">2:14
            </text>
        </g>
        <g class="track" id="09">
            <text class="title" y="440" alignment-baseline="hanging">09. Havana
                Affair
            </text>
            <rect class="bar" x="0" y="456" height="27" width="480"></rect>
            <text x="473" y="471" alignment-baseline="middle" text-anchor="end"
                  class="time">2:00
            </text>
        </g>
        <g class="track" id="10">
            <text class="title" y="495" alignment-baseline="hanging">10. Listen
                to My Heart
            </text>
            <rect class="bar" x="0" y="511" height="27" width="464"></rect>
            <text x="457" y="526" alignment-baseline="middle" text-anchor="end"
                  class="time">1:56
            </text>
        </g>
        <g class="track" id="11">
            <text class="title" y="550" alignment-baseline="hanging">11. 53rd
                &amp; 3rd
            </text>
            <rect class="bar" x="0" y="566" height="27" width="556"></rect>
            <text x="549" y="581" alignment-baseline="middle" text-anchor="end"
                  class="time">2:19
            </text>
        </g>
        <g class="track" id="12">
            <text class="title" y="605" alignment-baseline="hanging">12. Let's
                Dance
            </text>
            <rect class="bar" x="0" y="621" height="27" width="444"></rect>
            <text x="437" y="636" alignment-baseline="middle" text-anchor="end"
                  class="time">1:51
            </text>
        </g>
        <g class="track" id="13">
            <text class="title" y="660" alignment-baseline="hanging">13. I Don't
                Wanna Walk Around with You
            </text>
            <rect class="bar" x="0" y="676" height="27" width="412"></rect>
            <text x="405" y="691" alignment-baseline="middle" text-anchor="end"
                  class="time">1:43
            </text>
        </g>
        <g class="track" id="14">
            <text class="title" y="715" alignment-baseline="hanging">14. Today
                Your Love Tomorrow the World
            </text>
            <rect class="bar" x="0" y="731" height="27" width="516"></rect>
            <text x="509" y="746" alignment-baseline="middle" text-anchor="end"
                  class="time">2:09
            </text>
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

        .Chart {
            max-width: 512px;
            width: 100%;

            text {
                fill: $color-gray-30;
                font-size: 16px;
            }

            rect {
                fill: $color-gray-30;
            }

            .time {
                fill: $color-gray-90;
                font-weight: 900;
            }

            .highlight {
                rect {
                    fill: $color-gray-20;
                }

                .time {
                    fill: $color-white;
                }

                .title {
                    font-weight: $fontweight-bold;
                }
            }
        }
    }
</style>
