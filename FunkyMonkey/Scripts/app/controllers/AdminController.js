(function ()
{
    angular.module("funkymonkey.controllers")
        .controller("AdminController", ["Session", "LoginService", "UserOptionService",
        function (Session, LoginService, UserOptionService)
        {
            this.date = Session.userOption.date;
        }]);
})();