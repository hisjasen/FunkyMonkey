(function ()
{
    angular.module("funkymonkey.controllers")
        .controller("PeonController", ["Session",
        function (Session)
        {
            this.rank = Session.userOption.rank;
        }]);
})();