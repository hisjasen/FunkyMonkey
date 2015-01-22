(function ()
{
    angular.module("funkymonkey.services")
        .provider("Session", [function ()
        {
            // from config
            this.userOption = {
                rank: null,
                date: null
            };

            this.site = "FunkyMonkey";

            this.guid = Date.now();

            this.$get = function ()
            {
                var _this = this;
                return {
                    create: function (rank, date)
                    {
                        console.log("create", rank, date);
                        _this.userOption.rank = rank;
                        _this.userOption.date = date;
                    },
                    destroy: function ()
                    {
                        _this.userOption.rank = null,
                        _this.userOption.date = null
                    },
                    setUserOption: function (userOption)
                    {
                        _this.userOption = userOption;
                    },
                    userOption: this.userOption,
                    guid: this.guid
                };
            };
        }]);
})();