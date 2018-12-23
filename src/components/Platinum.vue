<template>
    <div class="Platinum">
        <div class="content">
            <h2>Reception & Sales</h2>
            <p>
                Despite only selling about 6,000 copies in its first year,
                the album was released to glowing reviews and has since become
                one of the most influential albums of all time. Songs from the
                album have been covered by bands such as the
                Red Hot Chili Peppers, Metallica, and U2.
            </p>
        </div>

    </div>
</template>

<script>
export default {
    name: 'Platinum',
};
</script>

<style lang="scss">
    @import "../defaults/colors";
    @import "../defaults/devices";
    @import "../defaults/typography";

    .Platinum {
        background: $color-primary;
        color: $color-gray-20;
        padding: 1.0em 0;

    }
</style>
