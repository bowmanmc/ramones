<template>
    <div class="NewYork">
        <div class="content">
            <h2>Around New York</h2>
            <NYCMap />
        </div>
    </div>
</template>

<script>
import NYCMap from './map/NYCMap.vue';

export default {
    name: 'NewYork',
    components: {
        NYCMap,
    },
};
</script>

<style lang="scss">
    @import "../defaults/colors";

    .NewYork {
        background: $color-gray-10;
        color: $color-white;
        padding: 1.0em 0;
    }
</style>
