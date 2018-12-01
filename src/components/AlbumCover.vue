<template>
    <div class="AlbumCover">
        <div class="content">
            <h2>Album Cover</h2>
            <div class="sections">
                <div class="factoids">
                    <ul>
                        <li>
                            Sire records spent $2,000 trying to recreate the
                            "With the Beatles" (released as "Meet the Beatles!" in
                            the U.S.) album cover with the Ramones.
                        </li>
                        <li>
                            The concept didn't work out, so Sire bought a picture
                            of the group against the brick wall of Albert's Garden in
                            the Bowery for $125 from Punk magazine. The photo was part
                            of a set taken by Roberta Bayley earlier that year.
                        </li>
                        <li>
                            During the shoot, DeeDee stepped in dog shit. After
                            scraping it off with a stick, he chased the rest of
                            the band members around with it, cutting the
                            session short.
                        </li>
                        <li>
                            Johnny slipped his middle finger into the shot. In his
                            autobiography "Commando", he says he was disappointed
                            that no one ever commented on it through all the years.
                        </li>
                        <li>
                            The album cover is ranked number 58 on Rolling Stone's
                            list of 100 Greatest Album Covers.
                        </li>
                    </ul>
                </div>
                <div class="images">
                    <a href="http://www.robertabayley.com/ramones/">
                        <img src="/img/contact-sheet-black.jpg"
                             alt="Contact Sheet from Roberta Bayley 1976 Photo Shoot" />
                    </a>
                    <p>
                        To see more photos from this iconic photo shoot please visit
                        <a href="http://www.robertabayley.com/ramones/">Roberta Bayley's Website</a>.
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'AlbumCover',
};
</script>

<style lang="scss">
    @import "../defaults/colors";
    @import "../defaults/devices";
    @import "../defaults/typography";


    .AlbumCover {
        background: $color-gray-98;
        color: $color-gray-20;
        padding: 1.0em 0;

        .sections {
            display: flex;
            flex-wrap: wrap;
            font-size: $fontsize-small;
            line-height: $fontsize-small * 1.35;
            padding-top: 1.0em;

            .factoids {
                width: 100%;
            }

            .images {
                text-align: center;
                width: 100%;

                img {
                    border: 1px solid $color-black;
                    border-radius: 7px;
                    box-shadow: 0 0 3.0em transparentize($color-gray-20, 0.65);
                    width: 100%;

                    &:hover {
                        box-shadow: 0 0 3.0em transparentize($color-gray-20, 0.45);
                    }
                }

                p {
                    color: $color-gray-40;
                    font-style: italic;
                    text-align: left;
                }
            }

            ul {
                list-style: none;
                margin: 0;
                padding: 0;
            }

            li {
                border-bottom: 1px solid $color-gray-85;
                margin-bottom: 1.0em;
                padding: 0 0 1.0em 0;
            }

            @include desktop {
                flex-wrap: nowrap;

                .factoids {
                    width: 60%;
                }

                .images {
                    padding-left: 2.0em;
                    width: 40%;
                }

                li {
                    &:last-child {
                        border-bottom: none;
                    }
                }
            }
        }
    }
</style>
