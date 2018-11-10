<template>
    <div class="Introduction">
        <div class="content">
            <h1>Hey Ho Let's Go</h1>
            <p>
                Recorded over seven days in January of 1976, the debut record
                from the Ramones is one of the most influential records in
                rock & roll history.

                At just over twenty nine minutes long, fourteen of the
                bands most recognizable songs are jam-packed, seven songs a side,
                onto an album ranked at number thirty three on
                <a href="https://www.rollingstone.com/music/music-lists/500-greatest-albums-of-all-time-156826/">Rolling Stone's 500 Greatest Albums of All Time</a>
                list.
            </p>
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

    .Introduction {
        background: $color-gray-98;
        color: $color-gray-20;
        padding: 1.0em 0;
    }
</style>
