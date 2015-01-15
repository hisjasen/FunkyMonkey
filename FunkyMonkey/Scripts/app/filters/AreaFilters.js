(function ()
{
    angular.module("funkymonkey.filters")
        .filter("AllAreas", [function ()
        {
            return function (items)
            {
                var filtered = [];
                var item = null;

                for (var i = 0; i < items.length; i++)
                {
                    item = items[i];
                    if (item.value === "")
                    {
                        filtered.push(item);
                        return filtered;
                    }
                    filtered.push(item);
                }

                return filtered;
            };
        }]);

    angular.module("funkymonkey.filters")
        .filter("OahuArea", [function ()
        {
            return function (items, key)
            {
                var filtered = [];
                var item = null;

                for (var i = 0; i < items.length; i++)
                {

                }
            };
        }]);
})();