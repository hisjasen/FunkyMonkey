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

    app.config(["$logProvider", "$stateProvider", "$urlRouterProvider", function ($logProvider, $stateProvider, $urlRouterProvider)
    {
        console.log("app config");
        
        $urlRouterProvider.otherwise('/home');

        $stateProvider.state("root", {
            url: "",
            abstract: true,
            onEnter: function () { console.log("root"); },
            resolve: [
                "$timeout", "Session", "LoginService",
                function ($timeout, Session, LoginService)
                {
                    console.log("root resolve");
                    return LoginService.login();
                }
            ]
        });

        $stateProvider.state("root.home", {
            parent: "root",
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
            onEnter: function () { console.log("root.home"); }
        });

        $stateProvider.state("root.admin", {
            parent: "root",
            url: "/admin/home",
            views: {
                "contentContainer@": {
                    templateUrl: "/FunkyMonkey/Admin/Home/Index",
                    controller: "AdminController as adminController"
                }
            },
            data: {
                title: "Admin"
            },
            onEnter: function () { console.log("root.admin"); }
        });

        $stateProvider.state("root.peons", {
            parent: "root",
            url: "/peons/home",
            views: {
                "contentContainer@": {
                    templateUrl: "/FunkyMonkey/Peons/Home/Index",
                    controller: "PeonController as peonController"
                }
            },
            onEnter: function () { console.log("root.peons"); }
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