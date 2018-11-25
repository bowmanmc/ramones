<template>
    <div class="Band">
        <div class="content">
            <h2>The Band</h2>
            <div class="members">
                <div class="member">
                    <img class="face" src="/img/johnny.png" alt="Johnny" />
                </div>
                <div class="member">
                    <img class="face" src="/img/tommy.png" alt="Tommy" />
                </div>
                <div class="member">
                    <img class="face" src="/img/joey.png" alt="Joey" />
                </div>
                <div class="member">
                    <img class="face" src="/img/deedee.png" alt="Dee Dee" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
</script>

<style lang="scss">
    @import "../defaults/colors";

    .Band {
        background: $color-gray-98;
        color: $color-gray-20;
        padding: 1.0em 0;

        .member {

            .face {
                height: 128px;
                width: 128px;
            }
        }
    }
</style>
