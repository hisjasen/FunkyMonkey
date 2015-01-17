(function ()
{
    angular.module("funkymonkey.controllers")
        .controller("HomeController", ["$modal", "$http", "$timeout", "Session", "UserOptionService", "LoginService",
        function ($modal, $http, $timeout, Session, UserOptionService, LoginService)
        {
            console.log("HomeController");

            var _this = this;
            this.date = null;
            this.doIt = doIt;

            //$timeout(function ()
            //{
            //    LoginService.login().then(function ()
            //    {
            //        _this.doIt();
            //    });
            //}, 2000);

            this.doIt();

            function doIt()
            {
                console.log("doIt", Session.userOption.date);
                _this.date = Session.userOption.date;
            };
        }]);
})();