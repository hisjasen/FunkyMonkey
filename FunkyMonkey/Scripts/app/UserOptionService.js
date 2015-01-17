(function ()
{
    angular.module("funkymonkey.services")
        .factory("UserOptionService", ["$http", "$q", "$rootScope", function ($http, $q, $rootScope)
        {
            var OPTIONS_LOADED = "optionsLoaded";

            var svc = {
                loadOptions: loadOptions,
                onLoaded: onLoaded
            };

            return svc;

            function loadOptions()
            {
                var deferred = $q.defer();

                $http({
                    method: "GET",
                    url: "FunkyMonkey/Home/GetUserOption"
                })
                .success(function (userOption)
                {
                    deferred.resolve(userOption);
                    $rootScope.$broadcast(OPTIONS_LOADED);
                });

                return deferred.promise;
            };

            function onLoaded(scope, handler)
            {
                scope.$on(OPTIONS_LOADED, function (event, message)
                {
                    handler(message);
                });
            };
        }]);
})();