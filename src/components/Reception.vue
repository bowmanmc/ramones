<template>
    <div class="Reception">
        <div class="content">
            <h2>Reception & Sales</h2>
            <p>
                Despite only selling about 6,000 copies in its first year,
                the album was released to glowing reviews and has since become
                one of the most influential albums of all time. Songs from the
                album have been covered by bands such as the
                Red Hot Chili Peppers, Metallica, and U2.
            </p>
            <p>
                The album took a little over 38 years to be certified by the
                RIAA in 2014 as gold (selling 500,000 copies). The
                album has also been selected by the Library of Congress for
                preservation because of its "cultural, artistic and
                historic importance to the nation’s aural legacy".
            </p>
        </div>

    </div>
</template>

<script>
export default {
    name: 'Reception',
};
</script>

<style lang="scss">
    @import "../defaults/colors";
    @import "../defaults/devices";
    @import "../defaults/typography";

    .Reception {
        background: $color-primary;
        color: $color-gray-20;
        padding: 1.0em 0;

    }
</style>
