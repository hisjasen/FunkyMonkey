(function ()
{
    angular.module("funkymonkey.controllers")
        .controller("FileUploadController", ["$rootScope", "$scope", "$timeout", "DropzoneService", function ($rootScope, $scope, $timeout, DropzoneService)
        {
            console.log("FileUploadController", $scope);

            var _this = this;
            this.pid = "12345";
            this.dropzone = null;
            this.uploadDisabled = true;
            this.prep = false;
            this.subsampled = false;
            this.action = "";
            this.method = "";
            this.algorithm = "basic";
            var _ctrl = this;

            //var scope = $scope.$new();


            this.init = function (selector, element, options)
            {
                options.algorithm = _this.algorithm;
                console.log("init", selector, element, options);
                _this.dropzone = new DropzoneService(selector, element, options);
                _this.dropzone.onResizeQueueComplete($scope, _this.onResizeQueueComplete);
                _this.dropzone.onUploadQueueComplete($scope, _this.onUploadQueueComplete);
                _this.dropzone.onDrop($scope, _this.onDrop);

                $scope.$watch("uploadController.algorithm", function ()
                {
                    _this.dropzone.changeAlgorithm(_this.algorithm);
                });
            };

            this.toggle = function ()
            {
                _this.uploadDisabled = !_this.uploadDisabled;
            };

            this.updatePrep = function (val)
            {
                $scope.$apply(function ()
                {
                    _this.prep = Boolean(val);
                });
            };

            this.onDrop = function (msg)
            {
                console.log("ctrl onDrop", msg);
                $timeout(function ()
                {
                    _this.updatePrep(true);
                }, 0);
            }

            this.processQueue = function ()
            {
                $(".funkymonkey-spinner").removeClass("hidden")
                _this.uploadDisabled = true;
                console.log("controller process queue", _this.pid);
                _this.dropzone.processQueue({ pid: _this.pid });
            };

            this.onResizeQueueComplete = function (data)
            {
                // need $apply because the dropzone service initiated the uploadDisabled change
                $timeout(function ()
                {
                    _this.uploadDisabled = false;
                    //$(".funkymonkey-generate-thumbnail").addClass("hidden");
                    console.log("CONTROLLER SAY HI", _this, $rootScope, $scope);
                    _this.subsampled = data.subsampled;
                    _this.updatePrep(false);
                });
            };

            this.onUploadQueueComplete = function (data)
            {
                $(".funkymonkey-spinner").addClass("hidden");
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