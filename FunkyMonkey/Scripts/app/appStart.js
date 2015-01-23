(function ()
{
    var app = angular.module("funkymonkey.app");
    
    appInitialize().then(bootstrapApplication);

    function appInitialize()
    {
        var injector = angular.injector(["ng", "ngCookies", "funkymonkey.services"]);
        var LoginService = injector.get("LoginService");
        var AppConfig = injector.get("AppConfig");
        var cookies = injector.get("$cookies");
        var cookieStroe = injector.get("$cookieStore");

        return LoginService.login().then(function (result)
        {
            AppConfig.userOption = result;
            console.log("appStart login", AppConfig);
        },
        function (error)
        {
            console.log(error);
        });
    };

    function bootstrapApplication()
    {
        angular.element(document).ready(function ()
        {
            angular.bootstrap(document, ["funkymonkey.app"]);
        });
    };
})();