(function ()
{
    angular.module("funkymonkey.services", []);
    angular.module("funkymonkey.controllers", ["ui.bootstrap"]);
    angular.module("funkymonkey.filters", []);

    var app = angular.module("funkymonkey.app", [
        "ui.router",
        "ui.bootstrap",
        "funkymonkey.services",
        "funkymonkey.controllers",
        "funkymonkey.filters"
    ]);

    app.config(["$stateProvider", "$urlRouterProvider", function ($stateProvider, $urlRouterProvider)
    {
        console.log("app config");

        this.title = "Some Randome Quote";

        $urlRouterProvider.otherwise('/home');

        $stateProvider.state("root", {
            url: "",
            abstract: true,
            onEnter: [function ()
            {
                console.log("root");
            }]
        });

        $stateProvider.state("root.home", {
            url: "/home",
            views: {
                "contentContainer@": {
                    templateUrl: "/FunkyMonkey/Home/LandingPage",
                    controller: "HomeController as homeController"
                }
            },
            data: {
                title: "Home"  
            },
            onEnter: [function ()
            {
                console.log("root.home");
            }]
        });

        $stateProvider.state("root.admin", {
            url: "/admin/home",
            views: {
                "contentContainer@": {
                    templateUrl: "/FunkyMonkey/Admin/Home/Index",
                    controller: function () { }
                }
            },
            data: {
                title: "Admin"
            },
            onEnter: [function ()
            {
                console.log("root.admin");
            }]
        });
    }]);

    app.run(["$rootScope", "$state", "$stateParams", function ($rootScope, $state, $stateParams)
    {
        console.log("app run");
        $rootScope.$state = $state;
        $rootScope.$stateParams = $stateParams;

        $state.go("root.home");
    }]);

})();