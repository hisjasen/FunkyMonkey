(function ()
{
    angular.module("funkymonkey.services")
        .service("Session", [function ()
        {
            this.userOption = {
                rank: null,
                date: null
            };

            this.create = function (rank, date)
            {
                this.userOption.rank = rank;
                this.userOption.date = date;
            }

            return this;
        }]);
})();