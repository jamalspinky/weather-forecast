<template>
    <div v-show='toggle'>
        <div v-for="simpleForecast in forecasts.list" :key="simpleForecast.id">
            <div class="forecast">
                <div class="forecast-box">
                    <div class="forecast-datetime">
                        <div class="date">
                            {{simpleForecast.dt | convertDate}}
                        </div>
                        <div class="time"><span class="weathericons">&#xf08a; </span>
                            {{simpleForecast.dt | convertTime}}
                        </div>
                    </div>
                    <div class="prediction" :class="getTempClass(simpleForecast.main.temp)">
                        <div class="prediction-box">
                            <span class="temperature">{{ Math.round(simpleForecast.main.temp)}} °C</span><br>
                        </div>
                        <div class="prediction-box">
                            <img :src="'http://openweathermap.org/img/wn/' + simpleForecast.weather[0].icon + '.png'"
                                 v-bind:alt="simpleForecast.weather[0].description"
                                 v-bind:title="simpleForecast.weather[0].description">
                            <br>
                            <span>{{simpleForecast.weather[0].description | capitalize}}</span>
                        </div>
                        <div class="prediction-box">
                        <span v-if="simpleForecast.snow" class="weathericons snowp"
                              title="Snow prepositions">&#xf04e;</span>
                            <span v-else class="weathericons rainp" title="Rain prepositions">&#xf04e;</span><br>
                            <span v-if="simpleForecast.rain" class="rainp">{{simpleForecast.rain["3h"] | roundPrep }}</span>
                            <span v-else-if="simpleForecast.snow" class="snowp">{{simpleForecast.snow["3h"] | roundPrep }}</span>
                            <span v-else class="no-prep rainp">No rain</span>
                            <span v-if="simpleForecast.rain" class="rainp">mm / 3h</span>
                            <span v-else-if="simpleForecast.snow" class="snowp">mm / 3h</span>
                            <span v-else class="no-prep"></span>
                        </div>
                    </div>



                    <table border="0">
                        <tr>
                            <td><span class="weathericons" title="Maximal temperature">&#xf055;</span></td>
                            <td>Feels like</td>
                            <td><span class="weathericons" title="Humidity">&#xf07a;</span></td>
                            <td><span class="weathericons" title="Atmosferic pressure">&#xf079;</span></td>
                            <td :style="{ transform: 'rotate('+ simpleForecast.wind.deg +'deg)'}"><span
                                    class="weathericons" title="Wind speed">&#xf0b1;</span></td>
                        </tr>
                        <tr>
                            <td>{{simpleForecast.main.temp_max| roundTemp}} °C</td>
                            <td>{{simpleForecast.main.feels_like | roundTemp}} °C</td>
                            <td>{{simpleForecast.main.humidity}} %</td>
                            <td>{{simpleForecast.main.pressure}} hPa</td>
                            <td>{{simpleForecast.wind.speed}} m/s</td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            forecasts: {
                type: Object
            },
        },
        data() {
            return {
                toggle: false,
            }
        }
    }
</script>

<style scoped>

</style>
