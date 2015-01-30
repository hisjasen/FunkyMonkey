(function ()
{
    angular.module("funkymonkey.controllers")
        .controller("FileUploadController", ["$scope", function ($scope)
        {
            console.log("FileUploadController", $scope);

            var _this = this;
            this.pid = "54321";
            this.uploadFile = null;
            this.dropzone = null;

            this.processQueue = function ()
            {
                console.log("processQueue", _this.dropzone);
                _this.dropzone.processQueue();
            };
        }]);
})();