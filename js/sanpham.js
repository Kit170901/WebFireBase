var app = angular.module("app", ["firebase"]);
app.config(function() {
    var config = {
        apiKey: "AIzaSyDB6I0WHWB1QElMYzn6SAHbZoQkYaqn1tU",
        authDomain: "it16317-ps13132-lanhquockhanh.firebaseapp.com",
        databaseURL: "https://it16317-ps13132-lanhquockhanh-default-rtdb.firebaseio.com",
        projectId: "it16317-ps13132-lanhquockhanh",
        storageBucket: "it16317-ps13132-lanhquockhanh.appspot.com",
        messagingSenderId: "433036550329",
        appId: "1:433036550329:web:26fdd221d494a7aa713b68",
        measurementId: "G-9B39PD9DCZ"
    };
    firebase.initializeApp(config);
});
app.controller("MyCtrl", ["$scope", "$firebaseArray",
    function($scope, $firebaseArray) {
        var ref = firebase.database().ref('Product');
        var list = $firebaseArray(ref);
        $scope.products = list;

        $scope.prop = "name";
        $scope.sortBy = function(prop) {
            $scope.prop = prop;
        }
        $scope.begin = 0;
        $scope.pageCount = Math.ceil($scope.products.length / 4);


        $scope.first = function() {
            $scope.begin = 0;
        }

        $scope.secound = function() {
            $scope.begin = 3;
        }
        $scope.third = function() {
            $scope.begin = 6;
        }
        $scope.prev = function() {
            if ($scope.begin > 0) {
                $scope.begin -= 3;
            }
        }



    }
]);

app.filter("percentage", function($filter) {
    return function(input, decimals) {
        return $filter('number')(input * 100, decimals) + "%";
    }
});