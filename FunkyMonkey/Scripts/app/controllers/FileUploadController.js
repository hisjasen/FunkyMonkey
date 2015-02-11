(function ()
{
    angular.module("funkymonkey.controllers")
        .controller("FileUploadController", ["$rootScope", "$scope", "DropzoneService", function ($rootScope, $scope, DropzoneService)
        {
            console.log("FileUploadController", $scope);

            var _this = this;
            this.pid = "12345";
            this.dropzone = null;
            this.uploadDisabled = true;
            this.action = "";
            this.method = "";
            var _ctrl = this;

            //var scope = $scope.$new();

            this.init = function (selector, element, options)
            {
                console.log("init", options);
                _this.dropzone = new DropzoneService(selector, element, options);
                _this.dropzone.onResizeQueueComplete($scope, _this.onResizeQueueComplete);
                _this.dropzone.onUploadQueueComplete($scope, _this.onUploadQueueComplete);
                _this.dropzone.onFooComplete($scope, _this.fooComplete);
            };

            this.toggle = function ()
            {
                _this.uploadDisabled = !_this.uploadDisabled;
            };


            this.foo = function ()
            {
                _this.dropzone.startFoo();
            };

            this.fooComplete = function ()
            {
                _this.uploadDisabled = false;
            };

            this.processQueue = function ()
            {
                _this.uploadDisabled = true;
                _this.pid = "98765";
                console.log("controller process queue", _this.pid);
                _this.dropzone.processQueue({ pid: _this.pid });
            };

            this.onResizeQueueComplete = function (data)
            {
                _this.uploadDisabled = false;
                console.log("CONTROLLER SAY HI", _this, $rootScope, $scope);
            };

            this.onUploadQueueComplete = function (data)
            {
                _this.uploadDisabled = true;
                console.log("CONTROLLER SAY BYE", _this.uploadDisabled);
            };

            this.updateDisabledFlag = function (newVal)
            {
                _this.uploadDisabled = newVal;
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