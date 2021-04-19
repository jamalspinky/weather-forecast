<template>
    <div class="weather">
        <!--        <h1 v-if="city.name">in {{city.name}} </h1>-->
        <h1>Actual weather in your city </h1>
        <weather-search-form/>
        <city-list>
            <city-prediction></city-prediction>
        </city-list>
    </div>

</template>

<script>
    // @ is an alias to /src
    import WeatherSearchForm from '@/components/weather/WeatherSearchForm.vue'
    import CityList from '@/components/weather/CityList.vue'
    import CityPrediction from "../components/weather/CityPrediction";


    export default {
        components: {
            WeatherSearchForm,
            CityList,
            CityPrediction

        }
    };
</script>


<style lang="scss" scoped>





</style>
