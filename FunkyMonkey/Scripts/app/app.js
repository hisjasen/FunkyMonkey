(function ()
{
    angular.module("funkymonkey.services", []);
    angular.module("funkymonkey.controllers", ["ui.bootstrap"]);
    angular.module("funkymonkey.filters", []);

    var app = angular.module("funkymonkey.app", [
        "ngSanitize",
        "ui.router",
        "ui.bootstrap",
        "funkymonkey.services",
        "funkymonkey.controllers",
        "funkymonkey.filters"
    ]);

    app.config(["$logProvider", "$stateProvider", "$urlRouterProvider", "AppConfig",
    function ($logProvider, $stateProvider, $urlRouterProvider, AppConfig)
    {
        console.log("app config");
        AppConfig.site = "FOO";

        $urlRouterProvider.otherwise('/home');

        $stateProvider.state("root", {
            url: "",
            abstract: true,
            onEnter: function () { console.log("root"); }
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

        console.log("AppConfig", AppConfig);
    }]);
    
    app.run(["$rootScope", "$state", "$stateParams", "AppConfig", "Session",
    function ($rootScope, $state, $stateParams, AppConfig, Session)
    {
        console.log("app run", AppConfig);
        Session.create(AppConfig.userOption.Rank, AppConfig.userOption.Date);
        console.log("SESSION", Session, AppConfig.userOption);

        $rootScope.$state = $state;
        $rootScope.$stateParams = $stateParams;

        $state.go("root.home");
    }]);

})();