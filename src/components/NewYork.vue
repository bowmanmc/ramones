<template>
    <div class="NewYork">
        <div class="content">
            <h2>Around New York</h2>
            <div class="places">
                <div class="descriptions">
                    <h3>Plaza Sound Studios</h3>
                    <p>
                        Known mostly for recording jazz albums, Plaza Sound was
                        located on the seventh floor of Radio City Music Hall.
                        It was
                        a large space with thirty foot ceilings and amazing
                        acoustics,
                        originally built by NBC for Arturo Toscanini's Orchestra
                        in
                        the 1930's.
                    </p>

                    <h3>Arturo Vega's Loft</h3>
                    <p>
                        Arturo Vega was an artist and friend of the Ramones.
                        He designed the iconic Ramones logo
                        and did the photo and layout for the back cover of the
                        album.
                        Dee Dee and Joey both lived in Arturo's loft apartment
                        during
                        the early days of the Ramones.
                        They signed their record contract with Sire on Arturo's
                        coffee
                        table.
                    </p>

                    <h3>CBGB</h3>
                    <p>
                        Opened by Hilly Krystal in 1973, CBGB became famous for
                        hosting
                        many early punk and new wave bands. Located just a few
                        steps
                        across the street from Arturo Vega's loft,
                        members of the Ramones were
                        frequent patrons and performers at the club.
                    </p>

                    <h3>53rd & 3rd</h3>
                    <p>
                        Written by Dee Dee Ramone, the song 53rd & 3rd is about
                        a
                        well-known spot in New York City for male prostitution.
                        Throughout his career,
                        Dee Dee refused to discuss the origin of the song,
                        fueling
                        speculation that it was autobiographical.
                    </p>

                    <h3>Albert's Garden</h3>
                    <p>
                        Roberta Bayley had done a photo shoot with the band in
                        1975
                        for an issue of Punk magazine. For a location, they
                        walked
                        next door from Arturo Vega's loft to a community garden.
                        Ramones fans from across the world still visit Albert's
                        garden
                        to photograph themselves in front of the brick wall made
                        famous
                        by the band.
                    </p>

                    <h3>Performance Studios</h3>
                    <p>
                        The Ramones had rehearsal space at Performance Studios.
                        In addition to functioning as a practice and hangout
                        space,
                        several of their early concerts were at this location.
                    </p>
                </div>
                <div class="map">
                    <NYCMap/>
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
    @import "../defaults/devices";
    @import "../defaults/typography";


    .NewYork {
        background: $color-alt-dkdk;
        color: $color-white;
        padding: 1.0em 0;

        .places {
            display: flex;
            flex-wrap: wrap;

            .descriptions {
                font-size: $fontsize-small;
                line-height: $fontsize-small * 1.5;
                padding: 0 0.25em;
                width: 100%;

                h3 {
                    font-size: $fontsize-normal;
                    line-height: $fontsize-normal * 1.5;
                    margin: 0;
                }

                p {
                    margin: 0 0 1.0em 0;
                }
            }

            .map {
                width: 100%;
            }

            @include desktop {
                flex-wrap: nowrap;

                .descriptions {
                    width: 50%;
                }
                .map {
                    width: 50%;
                }
            }
        }
    }
</style>
