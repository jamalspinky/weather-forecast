<template>
    <div v-if="forecasts.city" class="card">
        <div class="additional-data">
            <div class="demographical">
                <div class="left sm-none">GPS: {{forecasts.city.coord.lat}}, {{forecasts.city.coord.lon}}</div>
                <div class="left">Country: {{forecasts.city.country}}</div>
                <div class="left sm-none">Population: {{forecasts.city.population}}</div>
            </div>
            <div class="sun">
                <div class="right sm-none"><span class="weathericons">&#xf051; </span>{{forecasts.city.sunrise |
                    convertTime}}
                </div>
                <div class="right sm-none"><span class="weathericons">&#xf052; </span>{{forecasts.city.sunset |
                    convertTime}}
                </div>
                <div class="right"><span class="weathericons">&#xf08a; </span>Updated {{actual.dt | convertTime}}</div>
            </div>
        </div>
        <div id="weather_wrapper">
            <div class="weatherCard" :class="getTempClass(actual.main.temp)">
                    <div class="currentTemp">
                        <span class="temp">{{Math.round(actual.main.temp)}}&deg;C</span>
                        <span class="location">{{forecasts.city.name}}</span>
                    </div>

                <div class="currentWeather">
                    <div>
                        <span v-if='actual.weather[0].main == "Clear"' class="conditions">&#xf00d;</span>
                        <span v-else-if='actual.weather[0].id >= 700 && actual.weather[0].id < 800'
                              class="conditions">&#xf014;</span>
                        <span v-else-if='actual.weather[0].main == "Clouds"' class="conditions">&#xf041;</span>
                        <span v-else-if='actual.weather[0].main == "Snow"' class="conditions">&#xf01b;</span>
                        <span v-else-if='actual.weather[0].main == "Thunderstorm"' class="conditions">&#xf01e;</span>
                        <span v-else-if='actual.weather[0].main == "Drizzle"' class="conditions">&#xf014;</span>
                        <span v-else-if='actual.weather[0].main == "Rain"' class="conditions">&#xf019;</span>
                        <span v-else-if='actual.weather[0].main == "Drizzle"' class="conditions">&#xf014;</span>
                        <span class="actual-description">{{actual.weather[0].main}}</span><br>
                        <span class="actual-description-info">{{actual.weather[0].description | capitalize}}</span>
                    </div>
                </div>
            </div>

            <div class="info" :class="getTempClass(actual.main.temp)">
                <span class="pressure">{{actual.main.pressure}} hPa</span>
                <span class="wind">{{actual.wind.speed}} m/s</span>
                <span class="weathericons"
                      :style="{ transform: 'rotate('+ actual.wind.deg +'deg)','margin-right': '15px','font-size': '1.8em'}">&#xf0b1;</span>
            </div>


            <div class="actual">
                <table class="info-table" :class="getTempClass(actual.main.temp)">
                    <tr>
                        <td><span class="weathericons" title="Minimal temperature">&#xf053; min</span></td>
                        <td><span class="weathericons" title="Maximal temperature">&#xf055; max</span></td>
                        <td >Feels like</td>
                        <td><span class="weathericons" title="Humidity">&#xf07a;</span></td>
<!--                        <td><span class="weathericons" title="Atmosferic pressure">&#xf079;</span></td>-->
<!--                        <td :style="{ transform: 'rotate('+ actual.wind.deg +'deg)'}">-->
<!--                            <span class="weathericons" title="Wind speed and direction">&#xf0b1;</span>-->
<!--                        </td>-->
                    </tr>
                    <tr class="actual-row">
                        <td>{{actual.main.temp_min | roundTemp}} °C</td>
                        <td>{{actual.main.temp_max | roundTemp}} °C</td>
                        <td>{{actual.main.feels_like | roundTemp}} °C</td>
                        <td>{{actual.main.humidity}} %</td>
<!--                        <td>{{actual.main.pressure}} hPa</td>-->
<!--                        <td>{{actual.wind.speed}} m / s</td>-->


                    </tr>
                </table>
            </div>

            <button class="show-forecast" v-show='!toggle' @click='toggle = !toggle'>Show forecast for next 5 days
            </button>
            <button class="show-forecast" v-show='toggle' @click='toggle = !toggle'>Hide forecast for next 5 days
            </button>
            <city-prediction v-show="toggle" :forecasts="forecasts"></city-prediction>
        </div>
    </div>

    <div v-else-if="error != ''" class="search-error">
        Ooooops ! Something went wrong !
        Please, check if you wrote correctly name of location and try it again or try find nearest city (population at least 1000 people) !
    </div>
    <div v-else> Find actual weather and weather prediction for your city !</div>

</template>

<script>

    import CityPrediction from "./CityPrediction.vue";

    export default {

        components: {
            CityPrediction
        },

        filters: {

        },
        data() {
            return {
                forecasts: '',
                cities: '',
                actual: '',
                toggle: false,
                error:''

            }
        },
        mounted() {
            this.$root.$on('new-forecasts', (data) => this.forecasts = (data));
            this.$root.$on('actual-weather', (data) => this.actual = (data));
            this.$root.$on('api-error', (data) => this.error = (data));
        }
    }
</script>

<style lang="scss">

</style>