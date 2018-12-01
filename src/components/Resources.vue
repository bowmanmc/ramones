<template>
    <div class="Resources">
        <div class="content">
            <h2>Data & Resources</h2>
            <p>
                Here's a list of data and resources I collected while putting this
                site together. It was fun verifying (or disproving) facts I came
                into the project with and learning new information about the
                album.
            </p>
            <div class="lists">
                <div class="list">
                    <h3>General Ramones</h3>
                    <ul>
                        <li><a href="https://en.wikipedia.org/wiki/Ramones">The Ramones - Wikipedia</a></li>
                        <li><a href="https://www.r-bloggers.com/the-ramones-punk-is-data-too/">Ramones Data Analysis with R</a></li>
                        <li><a href="https://www.theguardian.com/music/musicblog/2013/jun/10/arturo-vega-ramones-logo-seal">Arturo Vega - Ramones Logo</a></li>
                        <li><a href="http://www.robertabayley.com/ramones">Ramones Photos from Roberta Bayley</a></li>
                    </ul>
                </div>
                <div class="list">
                    <h3>Album</h3>
                    <ul>
                        <li><a href="https://en.wikipedia.org/wiki/Ramones_(album)">The Ramones (Album) - Wikipedia</a></li>
                        <li><a href="https://www.rollingstone.com/music/music-news/ramones-debut-lp-10-things-you-didnt-know-234045/">Ramones' Debut LP - 10 Things you Didn't Know</a></li>
                        <li><a href="http://titlewaveproductions.com/uploads/RobFreeman_RecordingRamones.pdf">Rob Freeman on Recording the Ramones</a></li>

                    </ul>
                </div>
            </div>
            <div class="lists">
                <div class="list">
                    <h3>Books</h3>
                </div>
                <div class="list">
                    <h3>Listen</h3>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Resources',
};
</script>

<style lang="scss">
    @import "../defaults/colors";
    @import "../defaults/devices";
    @import "../defaults/typography";

    .Resources {
        background: $color-primary;
        color: $color-gray-20;
        padding: 1.0em 0;

        .lists {
            display: flex;
            flex-wrap: wrap;
            font-size: $fontsize-small;
            line-height: $fontsize-small * 1.5;

            .list {
                width: 100%;

                ul {
                    list-style-type: none;
                    padding-left: 0;
                }
            }

            @include desktop {
                flex-wrap: nowrap;

                .list {
                    flex: 1;
                }
            }
        }
    }
</style>
