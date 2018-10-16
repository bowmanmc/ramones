<template>
    <div class="Footer">
        <section class="centered">
            <h2>Ramones</h2>
            <img class="seal" src="/img/logo_grande-trans.png" alt="Ramones Presidential Seal" />
            <p>
                * The Ramones presidential seal logo designed by
                <a href="https://en.wikipedia.org/wiki/Arturo_Vega">Arturo Vega</a>.
            </p>
        </section>

        <section>


        </section>

        <section>
            <a href="https://www.chilitime.design" alt="Chilitime Design">
                <ChilitimeLogo />
            </a>
            <p>
                Designed and Developed by
                Michael Bowman in October of 2018.
                Please visit my site at
                <a href="https://www.chilitime.design">Chilitime Design</a>.
            </p>
        </section>
    </div>
</template>

<script>
    import ChilitimeLogo from './ChilitimeLogo.vue';

    export default {
        name: 'Footer',
        components: {
            ChilitimeLogo,
        },
    };
</script>

<style lang="scss">
    @import "../defaults/colors";
    @import "../defaults/devices";
    @import "../defaults/typography";


    .Footer {
        background-color: $color-gray-20;
        color: $color-gray-90;
        display: flex;
        flex-direction: column;
        min-height: 480px;
        padding: 1.0em;

        @include desktop {
            flex-direction: row;
        }

        .centered {
            text-align: center;
        }

        .chilitime {
            fill: $color-gray-90;
        }

        .seal {
            height: 256px;
            width: 256px;
        }

        a {
            color: $color-primary;
            text-decoration: none;

            &:hover {
                color: $color-primary-lt;
            }
        }

        p {
            font-size: $fontsize-small;
            line-height: $fontsize-small * 1.33;
        }

        section {
            flex: 1;
            padding: 0 1.0em;
        }
    }
</style>
