(function ()
{
    // Usage:
    //    <dropzone-widget action="/FunkyMonkey/Peons/Home/UploadBase64" method="post"
    //     on-process="processQueue()"></dropzone-widget>
    //
    angular.module("funkymonkey.directives")
    .directive("dropzoneWidget", [function ()
    {
        var _this = this;

        return {
            restrict: "E",
            templateUrl: "FunkyMonkey/Peons/Home/DropzoneTemplate",
            scope: {
                action: "@",
                method: "@",
                //uploadDisabled: "&"
            },
            link: function (scope, element, attrs, uploadController)
            {
                //console.log("link", scope, attrs);
                uploadController.init(".dropzone", element, getOptions(attrs), { "pid": scope.pid });

                //console.log("mah controller", scope, uploadController);
            },
            controller: "FileUploadController as uploadController",
            bindToController: true
        };

        function getOptions(attrs)
        {
            var dzOptions = {
                url: attrs.action,
                maxFilesize: 4,
                maxFiles: 10,
                acceptedFiles: "image/jpeg",
                paramName: "uploadFile",
                createImageThumbnails: true,
                maxThumbnailFilesize: 10,
                thumbnailHeight: 120,
                thumbnailWidth: 120,
                autoProcessQueue: false,
                uploadMultiple: false,
                parallelUploads: 10
            };
            return dzOptions;
        };

    }]);

})();