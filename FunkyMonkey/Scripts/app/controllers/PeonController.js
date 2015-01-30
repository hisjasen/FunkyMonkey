(function ()
{
    angular.module("funkymonkey.controllers")
        .controller("PeonController", ["Session",
        function (Session)
        {
            var _this = this;
            this.rank = Session.userOption.rank;
            this.dropzone = { "foo": "bar" };

            this.process = function ()
            {
                console.log(_this.dropzone);
            };
        }]);
})();