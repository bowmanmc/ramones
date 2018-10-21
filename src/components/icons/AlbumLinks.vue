/* eslint-disable max-len */
<template>
<ul class="AlbumLinks">
    <li><a href="https://open.spotify.com/album/3ToX9inehiXTv17hpaOyie?si=A1E8kspdT5Sdr6rtv1yvXA">
        <SpotifyIcon /> Spotify
    </a></li>
    <li><a href="https://itunes.apple.com/us/album/ramones/847972873">
        <ItunesIcon /> iTunes
    </a></li>
    <li><a href="https://play.google.com/music/m/B6jajl2vezvj5coh36vtu6fsujq?t=Ramones_-_Ramones">
        <GoogleIcon /> Google
    </a></li>
    <li><a href="https://music.youtube.com/playlist?list=OLAK5uy_kLYXzWrEvAL-1ydH3JBDtvj07t7dRwSqs">
        <YoutubeIcon /> YouTube
    </a></li>
</ul>
</template>

<script>
import GoogleIcon from './GoogleIcon.vue';
import ItunesIcon from './ItunesIcon.vue';
import SpotifyIcon from './SpotifyIcon.vue';
import YoutubeIcon from './YoutubeIcon.vue';


export default {
    name: 'AlbumLinks',

    components: {
        GoogleIcon, ItunesIcon, SpotifyIcon, YoutubeIcon,
    },
};
</script>

<style lang="scss">
    @import "../../defaults/colors";
    @import "../../defaults/typography";


    .AlbumLinks {

        list-style-type: none;

        li {
            display: inline-block;
            margin: 0.5em;
        }

        a {
            align-items: center;
            background: rgba($color-gray-20, 0.75);
            border-radius: 24px;
            color: $color-white;
            display: flex;
            font-family: $fontstack-heading;
            font-weight: $fontweight-heading;
            justify-content: center;
            padding: 0.5em 1.0em;
            text-decoration: none;
            text-transform: uppercase;

            &:hover {
                background: rgba($color-gray-20, 0.85);
            }
        }
    }
</style>
