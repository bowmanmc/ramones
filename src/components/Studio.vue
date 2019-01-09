<template>
    <div class="Studio">
        <div class="content">
            <h2>Plaza Sound Studios</h2>
            <p>
                The Ramones headed to the Radio City Music Hall
                building at Rockefeller Center in Manhattan to record
                their debut album. On the seventh floor, past the Rockette's
                dance rehearsal rooms, was Plaza Sound Studios, where the
                Ramones would make Rock & Roll history.
            </p>
            <div class="sections">
                <div class="factoids">
                    <ul>
                        <li>
                            The Ramones spent only $6,400 at the studio
                            because they had to pay for the time
                            themselves out of their advance from Sire records.
                        </li>
                        <li>
                            Recording Engineer Rob Freeman had trouble isolating
                            the instruments during tracking because they were
                            so loud.
                        </li>
                        <li>
                            Johnny resisted double tracking the guitar parts
                            (a common recording technique),
                            saying that he wanted the album to reflect
                            their live shows.
                        </li>
                        <li>
                            Craig Leon (Producer), Rob Freeman (Engineer), and
                            Mickey Leigh (Joey's brother) provided uncredited
                            backup vocals, percussion, pipe organ, and
                            other effects for the album.
                        </li>
                        <li>
                            Seven days is a laughably short amount of time
                            to record an album.
                            Jimmy Iovine famously
                            spent three weeks just setting up the drum sounds
                            for Bruce Springsteen's Born to Run.
                        </li>
                    </ul>
                </div>
                <div class="chart">
                    <StudioSession />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import StudioSession from './charts/StudioSession.vue';


export default {
    name: 'Studio',
    components: {
        StudioSession,
    },
};
</script>

<style lang="scss">
@import "../defaults/colors";
@import "../defaults/devices";
@import "../defaults/typography";


.Studio {
    background: $color-alt-dk;
    background-image: url('/img/studio-blue.jpg');
    background-position: top center;
    background-repeat: no-repeat;
    background-size: cover;
    color: $color-white;
    padding: 1.0em 0;
    text-shadow: 0 1px 0 $color-black;

    .sections {
        display: flex;
        flex-wrap: wrap;

        .factoids {
            font-size: $fontsize-small;
            line-height: $fontsize-small * 1.35;
            width: 100%;
        }

        .chart {
            width: 100%;
        }

        ul {
            list-style: none;
            margin: 0;
            padding: 0;
        }

        li {
            border-bottom: 1px solid $color-alt-dk;
            margin-bottom: 1.0em;
            padding: 0 0 1.0em 0;
        }

        @include desktop {
            flex-wrap: nowrap;

            .factoids {
                width: 40%;
            }

            .chart {
                width: 60%;
            }

            li {
                &:last-child {
                    border-bottom: none;
                }
            }
        }
    }

    p {
        margin-top: 0;
    }
}
</style>
