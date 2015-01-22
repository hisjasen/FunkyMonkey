(function ()
{
    angular.module("funkymonkey.controllers")
        .controller("HomeController", ["$modal", "$http", "$timeout", "Session", "UserOptionService", "LoginService", "$sanitize",
        function ($modal, $http, $timeout, Session, UserOptionService, LoginService, $sanitize)
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
            };
        }]);
})();