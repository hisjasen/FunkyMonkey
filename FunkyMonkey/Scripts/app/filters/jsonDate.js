(function ()
{
    angular.module("funkymonkey.filters")
        .filter("jsonDate", ["$filter", function ($filter)
        {
            return function (input, format)
            {
                return $filter('date')(parseInt(input.substr(6)), format);
            }
        }]);
})();