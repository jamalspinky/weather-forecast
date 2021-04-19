<template>
    <div class="navigation">
        <router-link
                to="/">Actual & Forecast</router-link>|
<!--        <router-link-->
<!--                to="/maps">Weather maps</router-link>|-->
        <router-link
                to="/about">About</router-link>
    </div>
</template>


<style lang="scss" scoped>

    .navigation {
        padding: 1.5em;
        border: 1px solid gold;
        box-shadow: 0 0 5px gold;
        width: max-content;
        margin: 3em auto;
        border-radius: 3em;
        background: $nav-bg;

        @media screen and (max-width: 500px) {
            margin-top: 1em;
            padding: 0.8em 0.6em;
            max-width: 100%;
        }

        @media screen and (max-width: 350px) {
            margin-top: 1em;
            padding: 0.8em 0.2em 0.8em 0.2em;
            max-width: 90%;
            font-size: 0.9em;
        }

        &:hover {
            transform: scale(1.05);
        }

        a {
            font-weight: bold;
            color: #42b983;
            margin: 0.5em;
            text-decoration: none;
            &.router-link-exact-active {
                color: gold;
            }
            &:first-child {

            }

        }
    }
</style>