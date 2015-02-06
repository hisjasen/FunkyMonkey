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
            templateUrl: "/FunkyMonkey/Peons/Home/DropzoneTemplate",
            transclude: true,
            scope: {
                action: "@",
                method: "@",
                //processQueue: "&"
            },
            link: function (scope, element, attrs, uploadController)
            {
                $(".dropzone").sortable({
                    items: ".dz-preview",
                    containment: "parent",
                    update: function (e, ui) { console.log("sortable update", e); }
                });
                console.log("mah controller", scope, uploadController);

                uploadController.init(".dropzone", element, getOptions(scope), { "pid": uploadController.pid });
            },
            controller: "FileUploadController as uploadController"
        };

        function getOptions(scope)
        {
            var dzOptions = {
                url: scope.action,
                maxFilesize: 100,
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