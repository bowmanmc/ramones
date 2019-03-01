<template>
    <div class="Introduction">
        <div class="content">
            <h1>Hey Ho Let's Go</h1>
            <p>
                Recorded over seven days in February of 1976, the debut
                self-titled record from the Ramones is one of the most
                influential records in rock & roll history.

                At just over twenty nine minutes long, fourteen of the
                bands most recognizable songs are jam-packed, seven songs a side,
                onto an album ranked at number thirty three on
                <a href="https://www.rollingstone.com/music/music-lists/500-greatest-albums-of-all-time-156826/">Rolling Stone's 500 Greatest Albums of All Time</a>
                list.
            </p>
            <p>
                Playing against the high-minded
                lyrics and musical virtuosity common for rock bands of the era,
                The Ramones played loud, fast, simple songs with buzzsaw guitars
                and outrageous lyrics.

                Even though the album sold poorly, it helped kickstart
                the fledgling punk scene in the United States and has
                influenced countless bands in the forty years since it was released.
            </p>

            <div class="covers">
                <div class="cover">
                    <img src="img/cover-front.jpg" alt="Album Front Cover" />
                    <span>Front Cover</span>
                </div>
                <div class="cover">
                    <img src="img/cover-back.jpg" alt="Album Back Cover" />
                    <span>Back Cover</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Introduction',
};
</script>

<style lang="scss">
    @import "../defaults/colors";
    @import "../defaults/typography";

    .Introduction {
        background: $color-gray-98;
        color: $color-gray-20;
        padding: 1.0em 0;

        .covers {
            display: flex;

            .cover {
                display: flex;
                flex-direction: column;
                margin-right: 1.0em;
                text-align: center;

                img {
                    border: 1px solid $color-primary;
                    height: 256px;
                }

                span {
                    color: $color-gray-50;
                    font-size: $fontsize-small;
                }
            }
        }
    }
</style>
