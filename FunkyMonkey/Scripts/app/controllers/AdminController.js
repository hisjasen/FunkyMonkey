(function ()
{
    angular.module("funkymonkey.controllers")
        .controller("AdminController", ["Session", "UserOptionService",
        function (Session, UserOptionService)
        {
            this.date = Session.userOption.date;
        }]);
})();