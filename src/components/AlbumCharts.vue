<template>
<div class="AlbumCharts">
    <div class="content">
        <h2>Three Chord Assault</h2>

        <SongLengths />
        <NumChords />

    </div>
</div>
</template>

<script>
import NumChords from './charts/NumChords.vue';
import SongLengths from './charts/SongLengths.vue';


export default {
    name: 'AlbumCharts',
    components: {
        NumChords, SongLengths,
    },
};
</script>

<style lang="scss">
@import "../defaults/colors";

.AlbumCharts {
    background: $color-primary;
    color: $color-gray-20;
    padding: 1.0em 0;

    .NumChords {
        margin-top: 1.0em;
    }
}
</style>
