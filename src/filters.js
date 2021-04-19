import Vue from 'vue';

Vue.filter('roundTemp', temp => {
    return Math.round(temp);
});

Vue.filter('roundPrep', prep => {
    return Math.round((prep  * 10)) / 10;
});


Vue.filter('capitalize', str => {
    return str.charAt(0).toUpperCase() + str.slice(1);
});

Vue.filter('convertDate', dt => {
    // Unixtimestamp
    var unixtimestamp = dt;

    // Months array
    var months_arr = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    // Convert timestamp to milliseconds
    var date = new Date(unixtimestamp * 1000);

    // Year
    var year = date.getFullYear();

    // Month
    var month = months_arr[date.getMonth()];

    // Day
    var day = date.getDate();

    // // Hours
    // var hours = date.getHours();
    //
    // // Minutes
    // var minutes = "0" + date.getMinutes();

    // // Seconds
    // var seconds = "0" + date.getSeconds();

    // Display date time in MM-dd-yyyy h:m:s format

    return day + '-' + month + '-' + year;
});



Vue.filter('convertTime', dt => {
    var date = new Date(dt * 1000);
    var hours = date.getHours();
    var minutes = "0" + date.getMinutes();
    // var seconds = "0" + date.getSeconds();
    var formattedTime = hours + ':' + minutes.substr(-2);

    return formattedTime
});