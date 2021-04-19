<template>
    <div class="search">
        <form action="#" @submit.prevent="getWeather()">

            <input v-model="query"
                   type="text"
                   autofocus>

        </form>
    </div>
</template>


<script>
    import axios from 'axios';

    export default {

        data() {
            return {
                query: '',
                appId: '0ca8a4a3d4b33ec01d49ac1cc1342faa',

            }
        },
        methods: {
            getWeather() {
                axios
                    .get(
                        `https://api.openweathermap.org/data/2.5/forecast?q=${encodeURI(this.$options.filters.normalizeQuery(this.query))}
                        &APPID=0ca8a4a3d4b33ec01d49ac1cc1342faa&units=metric`
                    )
                    .then(response => {

                        let forecasts = response.data;

                        this.$root.$emit('new-forecasts', forecasts);
                        this.$root.$emit('query', this.query);
                        this.$root.$emit('api-error', '');

                    }).catch(error => {
                        this.$root.$emit('api-error', error);
                    this.$root.$emit('new-forecasts', '');
                }),
                    axios
                        .get(
                            `https://api.openweathermap.org/data/2.5/weather?q=${encodeURI(this.$options.filters.normalizeQuery(this.query))}
                        &APPID=0ca8a4a3d4b33ec01d49ac1cc1342faa&units=metric`
                        )
                        .then(response => {

                            let actual = response.data;

                            this.$root.$emit('actual-weather', actual);
                        })
            },
        },
        filters: {
            normalizeQuery: function (str) {
                str = str.replace(/  +/g, ' ');
                return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
            }
        }
    }
</script>


<style lang="scss">

    form {
        min-width: 100vw;
    }
    input {
        padding: 0.25em 1em;
        font-size: 2.25em;
        text-align: center;
        border-radius: 0.1em;
        margin-bottom: 0.5em;

        @media (max-width: 550px) {
            max-width: 60%;
        }
    }

    .search {
        width: 90%;
        text-align: center;
        margin: 0 auto;
        display: flex;
        justify-content: center;
    }


</style>