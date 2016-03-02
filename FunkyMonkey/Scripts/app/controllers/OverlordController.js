(function ()
{
    var module = angular.module("funkymonkey.controllers");
    module.controller("OverlordController", ["$http", OverlordController]);

    function OverlordController($http)
    {
        this.title = "OverlordController";
        this.$http = $http;
        this.files = [];
        this.model = {
            "Name": "",
            "Id": 1
        };
    }

    OverlordController.prototype.titleChanged = function ()
    {
        console.log(this.title);
    };

    OverlordController.prototype.fileChanged = function (files)
    {
        this.files = files;
        console.log("changed", this.files);
    };

    OverlordController.prototype.upload = function ()
    {
        console.log("upload", this.data);
        var _this = this;

        this.$http({
            url: "FunkyMonkey/Overlords/Overlords/Upload",
            method: "POST",
            headers: { "Content-Type": undefined },
            transformRequest: function (data)
            {
                console.log("transformRequest", data);
                var formData = new FormData();
                formData.append("model", angular.toJson(data.model));
                for (var i = 0; i < data.files.length; i++)
                {
                    console.log("process file", data.files[i]);
                    formData.append("files[" + i + "]", data.files[i]);
                }
                return formData;
            },
            data: { model: _this.model, files: _this.files }
        })
        .success(function (result)
        {
            console.log(result);
        });
    };

})();