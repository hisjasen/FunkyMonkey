(function ()
{
    angular.module("funkymonkey.services", []);
    angular.module("funkymonkey.controllers", ["ui.bootstrap"]);
    angular.module("funkymonkey.filters", []);
    angular.module("funkymonkey.directives", []);

    var app = angular.module("funkymonkey.app", [
        "ngSanitize",
        "ngCookies",
        "ui.router",
        "ui.bootstrap",
        "ct.ui.router.extras",
        "funkymonkey.services",
        "funkymonkey.controllers",
        "funkymonkey.filters",
        "funkymonkey.directives"
    ]);

    app.config(["$logProvider", "$stateProvider", "$stickyStateProvider", "$urlRouterProvider", "AppConfig", "SessionProvider",
    function ($logProvider, $stateProvider, $stickyStateProvider, $urlRouterProvider, AppConfig, SessionProvider)
    {
        console.log("app config");
        AppConfig.site = "FOO";
        SessionProvider.userOption.date = AppConfig.userOption.Date;
        SessionProvider.userOption.rank = AppConfig.userOption.Rank;
        //SessionProvider.create(AppConfig.userOption.Rank, AppConfig.userOption.Date);

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
    
    app.run(["$rootScope", "$state", "$stateParams", "AppConfig", 
    function ($rootScope, $state, $stateParams, AppConfig)
    {
        console.log("app run", AppConfig);

        // Setting Session here may be too late

        $rootScope.$state = $state;
        $rootScope.$stateParams = $stateParams;

        $state.go("root.home");
    }]);

})();