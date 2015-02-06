(function ()
{
    angular.module("funkymonkey.controllers")
        .controller("PeonController", ["Session",
        function (Session)
        {
            var _this = this;
            this.rank = Session.userOption.rank;

            this.processQueue = function ()
            {
                console.log("peonController process");
            };
        }]);
})();