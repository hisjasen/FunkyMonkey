(function ()
{
    angular.module("funkymonkey.services")
        .service("DropzoneService", ["$rootScope", function ($rootScope)
        {
            var DropzoneService = function (selector, element, options)
            {
                var UPLOAD_QUEUE_COMPLETE = "uploadQueueComplete";
                var RESIZE_QUEUE_COMPLETE = "resizeQueueComplete";

                console.log("DropzoneService constructor", selector, options);
                Dropzone.autoDiscover = false;
                var _this = this;
                var toResizeQueue = [];
                var inResizeQueue = [];
                var toProcessQueue = [];
                var inProgressQueue = [];
                this.dropzone = null;
                this.selector = selector;
                this.element = element;
                this.dzOptions = {
                    url: options.url,
                    maxFilesize: options.maxFilesize,
                    maxFiles: options.maxFiles,
                    acceptedFiles: options.acceptedFiles,
                    paramName: options.paramName,
                    createImageThumbnails: options.createImageThumbnails,
                    maxThumbnailFilesize: options.maxThumbnailFilesize,
                    thumbnailHeight: options.thumbnailHeight,
                    thumbnailWidth: options.thumbnailWidth,
                    autoProcessQueue: options.autoProcessQueue,
                    uploadMultiple: options.uploadMultiple,
                    parallelUploads: options.parallelUploads
                };
                this.listensForDelete = false;
                this.resizedFiles = [];
                this.canvas = null;
                this.formData = null;
                this.data = {};

                this.initialize = function ()
                {
                    _this.canvas = document.createElement("canvas");

                    _this.dropzone = $(_this.selector, _this.element).dropzone(_this.dzOptions).get(0).dropzone;
                    _this.dropzone.on("error", onError);
                    _this.dropzone.on("drop", _this.onDrop);
                    _this.dropzone.on("addedfile", _this.onAddedFile);
                    _this.dropzone.on("queueComplete", _this.onQueueComplete);
                    _this.dropzone.on("thumbnail", _this.onThumbnail);
                    _this.dropzone.on("sending", _this.onSending);
                    _this.dropzone.uploadFiles = _this.uploadFiles;
                    _this.dropzone.uploadProgress = _this.uploadProgress;
                };

                function onError(file, errorMessage, xhr)
                {

                };

                this.onUploadQueueComplete = function (scope, handler)
                {
                    scope.$on(UPLOAD_QUEUE_COMPLETE, function (event, message)
                    {
                        handler(message);
                    });
                };

                this.onResizeQueueComplete = function (scope, handler)
                {
                    //console.log("RESIZE_QUEUE_COMPLETE");
                    //for (var i = 0; i < _this.dropzone.files.length; i++)
                    //{
                    //    _this.dropzone.files[i];
                    //    console.log("add handler", _this.dropzone.files[i].name, i);
                    //    _this.dropzone.files[i].previewElement.addEventListener("click", function ()
                    //    {
                    //        console.log("REMOVE REMOVE", _this.dropzone.files[i].name);
                    //        _this.onRemoveFile(_this.dropzone.files[i]);
                    //    });
                    //}
                    scope.$on(RESIZE_QUEUE_COMPLETE, function (event, message)
                    {
                        _this.listensForDelete = true;
                        handler(message);
                    });
                };

                this.uploadFiles = function (files)
                {

                };

                this.uploadProgress = function (file, progress, byteSent)
                {

                };

                this.onAddedFile = function (file)
                {
                    toResizeQueue.push(file);
                    _this.listensForDelete = false;

                    file.previewElement.addEventListener("click", function ()
                    {
                        _this.onRemoveFile(file);
                    });
                };

                this.onRemoveFile = function (file)
                {
                    if (_this.listensForDelete)
                    {
                        _this.dropzone.removeFile(file);
                        //removeResizedImage(file);
                        popQueue(_this.resizedFiles, file.name);
                        popQueue(toProcessQueue, file.name);
                        popQueue(toResizeQueue, file.name);
                    }
                };

                this.onDrop = function (event)
                {
                    console.log("drop", event);
                };

                this.onThumbnail = function (file, dataUrl)
                {
                    var height = file.height;
                    var width = file.width;

                    console.log("thumbnail", file, dataUrl, { "h": height, "w": width });
                    
                    if (file.accepted)
                    {
                        resizeImage(file);
                        //_this.resizedFiles.push(file);
                    }
                    else
                    {
                        popQueue(toResizeQueue, file.name);
                    }
                };

                this.onSending = function (file, xhr, formData)
                {
                    console.log("before sending", file, xhr, formData);
                };

                this.onQueueComplete = function ()
                {
                    console.log("queueComplete");
                };

                this.processQueue = function (data)
                {
                    var files = _this.resizedFiles;

                    for (var i = 0; i < files.length; i++)
                    {
                        var imgBase64 = files[i].imgBase64;

                        console.log(i, "processQueue ", files, files[i]);

                        popQueue(toProcessQueue, files[i].name);
                        inProgressQueue.push(files[i]);

                        $.ajax({
                            url: _this.dzOptions.url,
                            type: "POST",
                            //contentType: "application/x-www-form-urlencoded",
                            data: {
                                uploadFile: imgBase64,
                                name: files[i].name,
                                pid: data.pid,
                                seq: i + 1
                            }
                        })
                        .always(function (result)
                        {
                            console.log("uploaded", result, files[i]);
                            popQueue(inProgressQueue, result.name);
                            popQueue(toProcessQueue, result.name);

                            if (result.result == "success")
                            {
                                var filename = result.filename;
                                var name = result.name;
                                var pid = result.pid;
                                var height = result.height;
                                var width = result.width;

                                if (toProcessQueue.length <= 0 && inProgressQueue <= 0)
                                {
                                    alert("Upload Completed Successfully");
                                    $rootScope.$broadcast(UPLOAD_QUEUE_COMPLETE, {});
                                }

                            }
                        });
                    }

                    //angular.forEach(_this.dropzone.getAcceptedFiles(), function (file)
                    //{
                    //    _this.dropzone.processFile(file);
                    //});

                };
                function resizeImage(file)
                {
                    var fileReader = new FileReader();
                    fileReader.onload = function (x)
                    {
                        var img = new Image();
                        img.src = fileReader.result;

                        img.onload = function ()
                        {
                            inResizeQueue.push(file); console.log("inResizeQueue", toResizeQueue, inResizeQueue);
                            var canvas = document.createElement("canvas");
                            var context = canvas.getContext("2d");
                            canvas.width = img.width;
                            canvas.height = img.height;
                            context.drawImage(img, 0, 0);

                            // need to calculate dimensions to maintain aspect ratio to fit within 600x400
                            // default is 96dpi (I don't know if this can be directly changed)
                            var resized = {
                                height: 400,
                                width: 600
                            };

                            resample_hermite(canvas, canvas.width, canvas.height, resized.width, resized.height);
                            
                            var dataUrl = canvas.toDataURL("image/jpeg");

                            var blob = dataURItoBlob(dataUrl);
                            var formData = new FormData();  // FormData is an add-only container
                            formData.append("imageBlob", blob);

                            file.imgBase64 = dataUrl;
                            console.log("resizeImage", file, dataUrl, formData["imageBlob"]);

                            popQueue(inResizeQueue, file.name);
                            popQueue(toResizeQueue, file.name);

                            if (toResizeQueue.length <= 0 && inResizeQueue.length <= 0)
                            {
                                console.log("Ready to upload", toResizeQueue, inResizeQueue, _this.resizedFiles);
                                alert("Ready to upload");
                                $rootScope.$broadcast(RESIZE_QUEUE_COMPLETE, {});
                            }

                            _this.resizedFiles.push(file);
                            toProcessQueue.push(file);

                            canvas = null;
                        };

                        //context.drawImage(img, 0, 0, w, h);
                    };
                    fileReader.readAsDataURL(file);
                };

                //function removeResizedImage(file)
                //{
                //    var filename = file.name;

                //    for (var i = 0; i < _this.resizedFiles.length; i++)
                //    {
                //        if (_this.resizedFiles[i].name === filename)
                //        {
                //            _this.resizedFiles.splice(i, 1);
                //            return _this.resizedFiles[i];
                //        }
                //    }
                //};

                function popQueue(queue, filename)
                {
                    console.log("pop", queue, filename);
                    
                    for (var i = 0; i < queue.length; i++)
                    {
                        if (queue[i].name === filename)
                        {
                            queue.splice(i, 1);
                            return queue[i];
                        }
                    }
                };

                this.initialize();
            };

            return DropzoneService;


            // http://stackoverflow.com/a/5100158/2030565
            function dataURItoBlob(dataURI)
            {
                var byteString;
                if (dataURI.split(',')[0].indexOf("base64") >= 0)
                {
                    byteString = atob(dataURI.split(',')[1]);
                }
                else
                {
                    byteString = unescape(dataURI.split(',')[1]);
                }

                var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];

                var ia = new Uint8Array(byteString.length);
                for (var i = 0; i < byteString.length; i++)
                {
                    ia[i] = byteString.charAt(i);
                }

                return new Blob([ia], { type: mimeString });
            };

            // https://github.com/viliusle/Hermite-resize
            function resample_hermite(canvas, W, H, W2, H2)
            {
                var time1 = Date.now();
                W2 = Math.round(W2);
                H2 = Math.round(H2);
                var img = canvas.getContext("2d").getImageData(0, 0, W, H);
                var img2 = canvas.getContext("2d").getImageData(0, 0, W2, H2);
                var data = img.data;
                var data2 = img2.data;
                var ratio_w = W / W2;
                var ratio_h = H / H2;
                var ratio_w_half = Math.ceil(ratio_w / 2);
                var ratio_h_half = Math.ceil(ratio_h / 2);

                for (var j = 0; j < H2; j++)
                {
                    for (var i = 0; i < W2; i++)
                    {
                        var x2 = (i + j * W2) * 4;
                        var weight = 0;
                        var weights = 0;
                        var weights_alpha = 0;
                        var gx_r = gx_g = gx_b = gx_a = 0;
                        var center_y = (j + 0.5) * ratio_h;
                        for (var yy = Math.floor(j * ratio_h) ; yy < (j + 1) * ratio_h; yy++)
                        {
                            var dy = Math.abs(center_y - (yy + 0.5)) / ratio_h_half;
                            var center_x = (i + 0.5) * ratio_w;
                            var w0 = dy * dy //pre-calc part of w
                            for (var xx = Math.floor(i * ratio_w) ; xx < (i + 1) * ratio_w; xx++)
                            {
                                var dx = Math.abs(center_x - (xx + 0.5)) / ratio_w_half;
                                var w = Math.sqrt(w0 + dx * dx);
                                if (w >= -1 && w <= 1)
                                {
                                    //hermite filter
                                    weight = 2 * w * w * w - 3 * w * w + 1;
                                    if (weight > 0)
                                    {
                                        dx = 4 * (xx + yy * W);
                                        //alpha
                                        gx_a += weight * data[dx + 3];
                                        weights_alpha += weight;
                                        //colors
                                        if (data[dx + 3] < 255)
                                            weight = weight * data[dx + 3] / 250;
                                        gx_r += weight * data[dx];
                                        gx_g += weight * data[dx + 1];
                                        gx_b += weight * data[dx + 2];
                                        weights += weight;
                                    }
                                }
                            }
                        }
                        data2[x2] = gx_r / weights;
                        data2[x2 + 1] = gx_g / weights;
                        data2[x2 + 2] = gx_b / weights;
                        data2[x2 + 3] = gx_a / weights_alpha;
                    }
                }
                console.log("hermite = " + (Math.round(Date.now() - time1) / 1000) + " s");
                canvas.getContext("2d").clearRect(0, 0, Math.max(W, W2), Math.max(H, H2));
                canvas.width = W2;
                canvas.height = H2;
                canvas.getContext("2d").putImageData(img2, 0, 0);
            }
        }]);
})();