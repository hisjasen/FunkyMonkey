(function ()
{
    angular.module("funkymonkey.services", []);
    angular.module("funkymonkey.controllers", ["ui.bootstrap"]);
    angular.module("funkymonkey.filters", []);

    angular.module("funkymonkey.app", [
        "ui.router",
        "ui.bootstrap",
        "funkymonkey.services",
        "funkymonkey.controllers",
        "funkymonkey.filters"
    ])
    .config([function ()
    {

    }]);

})();