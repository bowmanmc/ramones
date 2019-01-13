<template>
    <div class="Locations">
        <div class="Location" v-bind:class="{ inactive: (highlight !== 'plaza') }">
            <h3>Plaza Sound Studios</h3>
            <p>
                Known mostly for recording jazz albums, Plaza Sound was
                located on the seventh floor of Radio City Music Hall. It was
                a large space with thirty foot ceilings and amazing acoustics,
                originally built by NBC for Arturo Toscanini's Orchestra in
                the 1930's.
            </p>
        </div>

        <div class="Location" v-bind:class="{ inactive: (highlight !== 'arturos') }">
            <h3>Arturo Vega's Loft</h3>
            <p>
                Arturo Vega was an artist and friend of the Ramones.
                He designed the iconic Ramones logo
                and did the photo and layout for the back cover of the album.
                Dee Dee and Joey both lived in Arturo's loft apartment during
                the early days of the Ramones.
                They signed their record contract with Sire on Arturo's coffee
                table.
            </p>
        </div>

        <div class="Location" v-bind:class="{ inactive: (highlight !== 'cbgb') }">
            <h3>CBGB</h3>
            <p>
                Opened by Hilly Krystal in 1973, CBGB became famous for hosting
                many early punk and new wave bands. Located just a few steps
                across the street from Arturo Vega's loft,
                members of the Ramones were
                frequent patrons and performers at the club.
            </p>
        </div>

        <div class="Location" v-bind:class="{ inactive: (highlight !== '53rd3rd') }">
            <h3>53rd & 3rd</h3>
            <p>
                Written by Dee Dee Ramone, the song 53rd & 3rd is about a
                well-known spot in New York City for male prostitution.
                Throughout his career,
                Dee Dee refused to discuss the origin of the song, fueling
                speculation that it was autobiographical.
            </p>
        </div>

        <div class="Location" v-bind:class="{ inactive: (highlight !== 'alberts') }">
            <h3>Albert's Garden</h3>
            <p>
                Roberta Bayley had done a photo shoot with the band in 1975
                for an issue of Punk magazine. For a location, they walked
                next door from Arturo Vega's loft to a community garden.
                Ramones fans from across the world still visit Albert's garden
                to photograph themselves in front of the brick wall made famous
                by the band.
            </p>
        </div>

        <div class="Location" v-bind:class="{ inactive: (highlight !== 'performance') }">
            <h3>Performance Studios</h3>
            <p>
                The Ramones had rehearsal space at Performance Studios.
                In addition to functioning as a practice and hangout space,
                several of their early concerts were at this location.
            </p>
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
