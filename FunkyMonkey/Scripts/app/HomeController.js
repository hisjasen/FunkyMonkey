(function ()
{
    angular.module("funkymonkey.controllers")
        .controller("HomeController", ["$modal","$http", function ($modal, $http)
        {
            console.log("HomeController");

            this.options = [
                { "value": "A", "label": "Alice" },
                { "value": "B", "label": "Burt" },
                { "value": "C", "label": "Charlie" }
            ];
            this.foo = [{ "value": "C", "label": "Charlie" }];

            this.showModal = function (event)
            {
                var modalInstance = $modal.open({
                    templateUrl: "/FunkyMonkey/Home/Modal",
                    controller: "ModalController as modalCtrl",
                    size: null,
                    resolve: {}
                });
            };
            
            this.showFilterModal = function (event)
            {
                var modalInstance = $modal.open({
                    templateUrl: "/FunkyMonkey/Home/FilterModal",
                    controller: "FilterModalController as modalCtrl",
                    size: null,
                    resolve: {}
                });
            };
        }]);
})();