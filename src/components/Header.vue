<template>
<div class="Header" @mousemove="handleMouseMove">
    <div class="Group"
         v-bind:style="{
            backgroundPositionX: xOffset + 'px',
            backgroundPositionY: yOffset + 'px'
         }">
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

.Header {
    align-items: center;
    background: $color-primary;
    background-image: url('/img/ramones-bg.jpg');
    background-position: top center;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: 97%;

    .Group {
        background-image: url('/img/ramones-band.png');
        background-position: top center;
        background-repeat: no-repeat;
        background-size: cover;
        flex: 1;
        height: 100%;
        min-height: 100%;
        width: 100%;
    }
}
</style>
