<template>
    <div class="NYCMap">
        <div class="navigation">
            <div class="navigation__section">
                <a>Plaza Sound Studios</a>
                <a>Arturo Vega's Apartment</a>
            </div>
            <div class="navigation__section">
                <a>CBGB's</a>
                <a>53rd & 3rd</a>
            </div>
            <div class="navigation__section">
                <a>Albert's Garden</a>
                <a>Performance Studio</a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'NYCMap',
};
</script>

<style lang="scss">
@import "../../defaults/colors";
@import "../../defaults/typography";


.NYCMap {
    color: $color-white;
    padding: 1.0em 0;

    .navigation {
        display: flex;

        &__section {
            display: flex;
            flex: 1;
            flex-direction: column;
        }

        a {
            background: $color-alt-dk;
            border-radius: 0.25em;
            color: $color-gray-90;
            cursor: pointer;
            display: inline-block;
            font-size: $fontsize-small;
            font-weight: normal;
            margin: 0 0.25em 0.5em 0.25em;
            padding: 0.5em;

            &:hover {
                background: lighten($color-alt-dk, 7%);
            }
        }
    }
}
</style>
