<template>
    <div class="Locations">
        <div class="Location" v-bind:class="{ inactive: (highlight !== 'plaza') }">
            <h3>Plaza Sound Studios</h3>
            <p>
                The Ramones recorded their debut album here, on the seventh
                floor of Radio City Music Hall.
            </p>
        </div>

        <div class="Location" v-bind:class="{ inactive: (highlight !== 'arturos') }">
            <h3>Arturo Vega's Loft</h3>
            <p>
                Dee Dee and Joey both lived in Arturo Vega's loft apartment during
                the early days of the Ramones.
            </p>
        </div>

        <div class="Location" v-bind:class="{ inactive: (highlight !== 'cbgb') }">
            <h3>CBGB</h3>
            <p>
                Opened by Hilly Krystal in 1973, CBGB became famous for hosting
                many early punk and new wave bands.
            </p>
        </div>

        <div class="Location" v-bind:class="{ inactive: (highlight !== '53rd3rd') }">
            <h3>53rd & 3rd</h3>
            <p>
                Written by Dee Dee Ramone, the song 53rd & 3rd is about a
                well-known spot in New York City for male prostitution.
            </p>
        </div>

        <div class="Location" v-bind:class="{ inactive: (highlight !== 'alberts') }">
            <h3>Albert's Garden</h3>
            <p>
                Roberta Bayley
            </p>
        </div>

        <div class="Location" v-bind:class="{ inactive: (highlight !== 'performance') }">
            <h3>Performance Studio</h3>
        </div>
    </div>
</template>

<script>
export default {
    props: ['highlight'],
    name: 'Locations',
};
</script>

<style lang="scss">
    @import "../../defaults/colors";
    @import "../../defaults/typography";


    .Locations {
        .inactive {
            display: none;
        }

        .Location {
            h3 {
                border-bottom: 1px solid $color-white;
                padding-bottom: 0.5em;
            }

            p {
                font-size: $fontsize-small;
                line-height: $fontsize-small * 1.5;
            }
        }
    }
</style>
