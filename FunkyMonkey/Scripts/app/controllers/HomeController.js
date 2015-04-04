(function ()
{
    angular.module("funkymonkey.controllers")
        .controller("HomeController", ["$modal", "$http", "Session", "UserOptionService", "$sanitize",
        function ($modal, $http, Session, UserOptionService, $sanitize)
        {
            var foo = $sanitize("some string");
            console.log("HomeController", foo);

            var _this = this;
            this.date = null;
            this.doIt = doIt;

            this.doIt();

            function doIt()
            {
                console.log("doIt", Session);
                _this.date = Session.userOption.date;

                $http({
                    url: "FunkyMonkey/Home/Pingback",
                    method: "POST",
                    data: { "msg": "echo" },
                    headers: {"X-Requested-With": "XMLHttpRequest"}
                })
                .success(function (result)
                {
                    console.log("pingback", result);
                });
            };
        }]);
})();