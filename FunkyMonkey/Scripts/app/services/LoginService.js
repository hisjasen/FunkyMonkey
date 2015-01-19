(function ()
{
    angular.module("funkymonkey.services")
        .factory("LoginService", ["$q", "$rootScope", "Session", "UserOptionService",
        function ($q, $rootScope, Session, UserOptionService)
        {
            var LOGIN_SUCCESS = "loginSuccess";

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
                    Session.create(userOptionResult.Rank, userOptionResult.Date);
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