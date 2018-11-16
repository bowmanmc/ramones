<template>
    <div class="AlbumCover">
        <div class="content">
            <h2>Album Cover</h2>
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
                        the band members around with it, ending the session.
                    </li>
                    <li>
                        Johnny slipped his middle finger into the shot. In his
                        autobiography "Commando", Johnny says he was disappointed
                        that no one ever commented on it through all the years.
                    </li>
                    <li>
                        The album cover is ranked number 58 on Rolling Stone's
                        list of 100 Greatest Album Covers.
                    </li>
                </ul>
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
    @import "../defaults/typography";


    .AlbumCover {
        background: $color-gray-98;
        color: $color-gray-20;
        padding: 1.0em 0;

        .factoids {
            font-size: $fontsize-small;
            line-height: $fontsize-small * 1.35;
            width: 100%;
        }

        ul {
            list-style: none;
            margin: 0;
            padding: 0;
        }

        li {
            border-bottom: 1px solid $color-gray-80;
            margin-bottom: 1.0em;
            padding: 0 0 1.0em 0;
        }
    }
</style>
