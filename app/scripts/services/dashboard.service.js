/**
 * Created by santosh on 8/17/15.
 */

app.factory("dashboardService", ['$http',
    function ($http) { // This service connects to our REST API

        var serviceBase = 'scripts/json/';

        var obj = {};

        obj.login = function (data) {
            console.log(JSON.stringify(data));
            return $http.get(serviceBase + 'login.json').then(function (results) {
                return results.data;
            });
        };

        obj.load = function (data) {

        };

        obj.get = function (q) {
            return $http.get(serviceBase + q).then(function (results) {
                return results.data;
            });
        };
        obj.post = function (q, object) {
            return $http.post("http://localhost:8080/api", object).then(function (results) {
                return results.data;
            });
        };
        obj.put = function (q, object) {
            return $http.put(serviceBase + q, object).then(function (results) {
                return results.data;
            });
        };
        obj.delete = function (q) {
            return $http.delete(serviceBase + q).then(function (results) {
                return results.data;
            });
        };

        return obj;
    }]);
/**
 * Created by santosh on 3/3/16.
 */
