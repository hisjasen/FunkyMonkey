using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.IO;
using System.Drawing;
using System.Drawing.Imaging;

namespace FunkyMonkey.Common
{
    public class ImageServiceResult
    {
        public int Height { get; set; }
        public int Width { get; set; }
    }

    public interface IImageService
    {
        ImageServiceResult UploadImage(HttpPostedFileBase image, string pid);
        ImageServiceResult UploadImage(string image, string pid, string filename);
    }

    public class ImageService : IImageService
    {
        public ImageService()
        {

        }

        public ImageServiceResult UploadImage(HttpPostedFileBase image, string pid)
        {
            var filename = image.FileName;
            var contentLength = image.ContentLength;
            var filteType = image.ContentType;
            var ext = Path.GetExtension(filename);

            byte[] data = new byte[contentLength];
            for (int pos = 0; pos < contentLength; )
            {
                int len = image.InputStream.Read(data, pos, contentLength - pos);
                if (len == 0)
                {
                    throw new IOException("aborted");
                }
                pos += len;
            }

            var result = ProcessImageByteArray(data, pid);
            return result;
        }

        public ImageServiceResult UploadImage(string image, string pid, string filename)
        {
            //var filename = image.FileName;
            //var contentLength = image.ContentLength;
            //var filteType = image.ContentType;
            //var ext = Path.GetExtension(filename);

            byte[] data = Convert.FromBase64String(image);
            //for (int pos = 0; pos < contentLength; )
            //{
            //    int len = image.InputStream.Read(data, pos, contentLength - pos);
            //    if (len == 0)
            //    {
            //        throw new IOException("aborted");
            //    }
            //    pos += len;
            //}

            var result = ProcessImageByteArray(data, filename);
            return result;
        }

        private ImageServiceResult ProcessImageByteArray(byte[] data, string filename)
        {
            ImageCodecInfo jqegInfo = ImageCodecInfo.GetImageEncoders().Where(codecInfo => codecInfo.MimeType == "image/jpeg").First();

            using (Stream stream = new MemoryStream(data))
            using (Image img = Image.FromStream(stream))
            {
                int width = img.Width;
                int height = img.Height;

                string writePath = Path.Combine(AppDomain.CurrentDomain.BaseDirectory + "uploads/", filename);
                using (FileStream fs = new FileStream(writePath,
                    FileMode.OpenOrCreate,
                    FileAccess.Write,
                    FileShare.None))
                {
                    fs.Write(data, 0, data.Length);
                }

                return new ImageServiceResult
                {
                    Height = img.Height,
                    Width = img.Width
                };
            }
        }
    }
}