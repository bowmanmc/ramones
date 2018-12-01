<template>
    <div class="Band">
        <div class="content">
            <h2>The Band</h2>
            <p>
                By February of 1976, when the album was recorded, the Ramones
                had been playing together for almost two years. They recorded
                the songs in the same order they played them live to help
                capture the feel of their concerts.
            </p>
            <div class="members">
                <div class="member">
                    <div class="member__headshot">
                        <img class="face" src="/img/johnny.png" alt="Johnny" />
                    </div>
                    <div class="member__info">
                        <h3>Johnny Ramone</h3>
                        <h4>Guitar</h4>
                        <p>
                            Johnny has song writing credits on three tracks,
                            "I Don't Wanna Go Down to the Basement",
                            "Loudmouth", and "Havana Affair". The song
                            "Havana Affair" was inspired by
                            <a href="https://en.wikipedia.org/wiki/Antonio_Proh%C3%ADas">Antonio Prohías</a>,
                            a Cuban immigrant who created the
                            Spy vs Spy comic strip
                            for Mad Magazine.
                        </p>
                    </div>
                </div>
                <div class="member">
                    <div class="member__headshot">
                        <img class="face" src="/img/tommy.png" alt="Tommy" />
                    </div>
                    <div class="member__info">
                        <h3>Tommy Ramone</h3>
                        <h4>Drums</h4>
                        <p>
                            Tommy contributed to two songs on the album, which
                            also happened to be the two singles for the record,
                            "Blitzkrieg Bop" and
                            "I Wanna Be Your Boyfriend".
                            "Blitzkrieg Bop" was inspired by the Bay City Rollers
                            song "Saturday Night". They wanted to have a song
                            the audience could chant along with.
                        </p>
                    </div>
                </div>
                <div class="member">
                    <div class="member__headshot">
                        <img class="face" src="/img/joey.png" alt="Joey" />
                    </div>
                    <div class="member__info">
                        <h3>Joey Ramone</h3>
                        <h4>Vocals</h4>
                        <p>
                            Joey contributed to three songs on the album,
                            "Beat on the Brat",
                            "Judy is a Punk", and
                            "Chain Saw". At almost 180 beats per minute,
                            "Chain Saw" is the fastest song on the album and was
                            written after viewing the 1974 horror classic,
                            <a href="https://en.wikipedia.org/wiki/The_Texas_Chain_Saw_Massacre">The Texas Chain Saw Massacre</a>.
                        </p>
                    </div>
                </div>
                <div class="member">
                    <div class="member__headshot">
                        <img class="face" src="/img/deedee.png" alt="Dee Dee" />
                    </div>
                    <div class="member__info">
                        <h3>Dee Dee Ramone</h3>
                        <h4>Bass</h4>
                        <p>
                            Besides famously counting in the songs live, "1-2-3-4!",
                            Dee Dee wrote the majority of the songs on the debut
                            album, contributing to nine of the thirteen original
                            tracks.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Band',
};
</script>

<style lang="scss">
    @import "../defaults/colors";
    @import "../defaults/typography";

    $headsize: 156px;

    .Band {
        background: $color-gray-98;
        color: $color-gray-20;
        padding: 1.0em 0;

        .member {
            display: flex;
            padding-bottom: 0.5em;

            &__headshot {
                .face {
                    height: $headsize;
                    width: $headsize;
                }
            }

            &__info {
                flex: 1;
                padding: 0 1.0em;

                h4 {
                    color: $color-gray-50;
                    font-size: $fontsize-normal;
                    font-style: italic;
                    margin: 0;
                }

                p {
                    font-size: $fontsize-small;
                    line-height: $fontsize-small * 1.5;
                    margin-top: 0;
                }
            }
        }
    }
</style>
