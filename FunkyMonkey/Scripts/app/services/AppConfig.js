(function ()
{
    angular.module("funkymonkey.services")
        .constant("AppConfig", {
            guid: Date.now(),
            userOption: {},
            site: "HIS",
            valid: false,
            errorMsg: "n/a"
        });

})();