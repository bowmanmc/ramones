<template>
    <div class="NewYork">
        <div class="content">
            <h2>Around New York</h2>
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
            <div class="sections">
                <div class="section">
                    <h3>Plaza Sound Studios</h3>

                </div>
                <div class="section">
                    <NYCMap />
                </div>
            </div>

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
    @import "../defaults/typography";


    .NewYork {
        background: $color-alt-dkdk;
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

        .sections {
            display: flex;

            .section {
                flex: 1;
                padding: 1.0em;
            }
        }
    }
</style>
