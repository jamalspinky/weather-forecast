import Vue from 'vue';

Vue.mixin({
    methods: {
        getTempClass(property){
            return {
                'freeze': Math.round(property) <= (-5),
                'cold': Math.round(property) > (-5),
                'moderate-cold': Math.round(property) > 4,
                'moderate-hot': Math.round(property) > 15,
                'hot': Math.round(property) > 25
            }
        }
    }
})