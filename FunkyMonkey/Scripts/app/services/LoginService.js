(function ()
{
    angular.module("funkymonkey.services")
        .factory("LoginService", ["$q", "$rootScope", "UserOptionService",
        function ($q, $rootScope, UserOptionService)
        {
            var LOGIN_SUCCESS = "loginSuccess";
            var injector = angular.injector(["ngCookies"]);
            var cookies = injector.get("$cookies");
            var cookieStore = injector.get("$cookieStore");
            var site = cookies.RE_SITE;
            var user = cookies.REUSER.split("&");
            console.log("SITE", site, user);

            var svc = {
                login: login
            };

            return svc;


            function login()
            {
                var deferred = $q.defer();

                var userOptions = UserOptionService.loadOptions().then(function (userOptionResult)
                {
                    console.log("login:loadOptions", userOptionResult);
                    
                    deferred.resolve(userOptionResult);
                },
                function (reason)
                {
                    deferred.reject(reason);
                });

                return deferred.promise;
            };
        }]);
})();