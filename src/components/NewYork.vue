<template>
    <div class="NewYork">
        <div class="content">
            <h2>Around New York</h2>
            <div class="navigation">
                <div class="navigation__section">
                    <a @click="selectMapItem('plaza')">Plaza Sound Studios</a>
                    <a @click="selectMapItem('alberts')">Albert's Garden</a>
                </div>
                <div class="navigation__section">
                    <a @click="selectMapItem('cbgb')">CBGB</a>
                    <a @click="selectMapItem('arturos')">Arturo Vega's Loft</a>
                </div>
                <div class="navigation__section">
                    <a @click="selectMapItem('53rd3rd')">53rd & 3rd</a>
                    <a @click="selectMapItem('performance')">Performance Studio</a>
                </div>
            </div>
            <div class="sections">
                <div class="section">
                    <Locations v-bind:highlight="selected" />
                </div>
                <div class="section">
                    <NYCMap v-bind:highlight="selected" />
                </div>
            </div>

        </div>
    </div>
</template>

<script>
import Locations from './map/Locations.vue';
import NYCMap from './map/NYCMap.vue';


export default {
    name: 'NewYork',
    components: {
        Locations,
        NYCMap,
    },
    data() {
        return {
            selected: 'plaza',
        };
    },
    methods: {
        selectMapItem(selectedItem) {
            this.selected = selectedItem;
        },
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
                font-weight: bold;
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
