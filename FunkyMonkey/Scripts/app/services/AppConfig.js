(function ()
{
    angular.module("funkymonkey.services")
        .constant("AppConfig", {
            guid: Date.now(),
            userOption: {},
            site: "HIS"
        });

})();