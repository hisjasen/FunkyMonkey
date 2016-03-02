(function ()
{
    var app = angular.module("funkymonkey.app");

    app.service("IdService", [IdService]);

    function IdService()
    {

    }

    IdService.prototype.getId = function (label)
    {
        var id = (Date.now() + "").substr(-4);
        return (label + "-" + id);
    };

})();