(function ()
{
    angular.module("funkymonkey.controllers")
        .controller("FileUploadController", ["$scope", "DropzoneService", function ($scope, DropzoneService)
        {
            console.log("FileUploadController", $scope);

            var _this = this;
            this.pid = $scope.pid;
            this.dropzone = null;
            var scope = $scope.$new();

            this.init = function (selector, element, options)
            {
                _this.dropzone = new DropzoneService(selector, element, options);
            };

            this.processQueue = function ()
            {
                console.log("controller process queue")
                _this.dropzone.processQueue({ pid: _this.pid });
            };

            //$scope.$on("addedFile", function (file)
            //{
            //    console.log("addedFile", file);
            //});

            //$scope.$on("$destroy", function ()
            //{
            //    console.log("cleanup");
            //    scope.$destroy();
            //});
        }]);
})();