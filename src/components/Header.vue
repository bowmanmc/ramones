<template>
<div class="Header" @mousemove="handleMouseMove">
    <div class="Group"
         v-bind:style="{
            backgroundPositionX: xOffset + 'px',
            backgroundPositionY: yOffset + 'px'
         }">
        <ul class="album-links">
            <li><a href="">Spotify</a></li>
            <li><a href="">iTunes</a></li>
            <li><a href="">YouTube Music</a></li>
        </ul>
    </div>
</div>
</template>

<script>
import { scaleLinear } from 'd3-scale';

export default {
    data() {
        return {
            xOffset: 0,
            yOffset: 0,
        };
    },

    methods: {
        handleMouseMove(evt) {
            const x = scaleLinear()
                .domain([0, window.innerWidth])
                .range([-5, 5]);
            this.xOffset = x(evt.clientX) * -1;

            const y = scaleLinear()
                .domain([0, window.innerHeight])
                .range([-3, 3]);
            this.yOffset = y(evt.clientY) * -1;
        },
    },
};
</script>

<style lang="scss">
@import "../defaults/colors";
@import "../defaults/typography";

.Header {
    align-items: center;
    background: $color-primary;
    background-image: url('/img/ramones-bg.jpg');
    //background-position: top center;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: 97%;

    .Group {
        align-items: flex-end;
        background-image: url('/img/ramones-band.png');
        //background-position: top center;
        background-repeat: no-repeat;
        background-size: cover;
        display: flex;
        flex: 1;
        height: 100%;
        justify-content: flex-end;
        min-height: 100%;
        width: 100%;
    }

    .album-links {

        list-style-type: none;

        li {
            display: inline;
            margin: 0 0.5em;
        }

        a {
            background: rgba($color-gray-20, 0.65);
            border-radius: 24px;
            color: $color-white;
            font-family: $fontstack-heading;
            font-weight: $fontweight-heading;
            padding: 0.5em 1.0em;
            text-decoration: none;
            text-transform: uppercase;

            &:hover {
                background: rgba($color-gray-20, 0.85);
            }
        }
    }
}
</style>
