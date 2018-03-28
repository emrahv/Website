using System;
using System.Collections.Specialized;
using System.Configuration;
using System.Net.Http;
using System.Web.Http;
using System.Web.Script.Serialization;
using Website.Models;

namespace Website.Controllers
{
    [RoutePrefix("api/Product")]
    public class ProductController : ApiController
    {
        [HttpGet]
        public HttpResponseMessage Get(String id, String language)
        {
            String mappeProductId = MappedProduct.get(id);

            if (!mappeProductId.Equals("")) { id = mappeProductId; }

            string serialisedProduct = new JavaScriptSerializer().Serialize(Product.get(id, language));

            return new HttpResponseMessage()
            {
                Content = new StringContent(serialisedProduct, System.Text.Encoding.UTF8, "application/json")
            };
        }

        [HttpGet]
        [Route("GetFullProduct")]
        public HttpResponseMessage GetFullProduct(String id, String language)
        {
            String mappeProductId = MappedProduct.get(id);

            if (!mappeProductId.Equals("")) { id = mappeProductId; }

            string serialisedProduct = new JavaScriptSerializer().Serialize(FullProduct.get(id, language));

            return new HttpResponseMessage()
            {
                Content = new StringContent(serialisedProduct, System.Text.Encoding.UTF8, "application/json")
            };
        }

        [HttpGet]
        [Route("GetParents")]
        public HttpResponseMessage GetParents(String id, String language)
        {
            String mappeProductId = MappedProduct.get(id);

            if (!mappeProductId.Equals("")) { id = mappeProductId; }

            Product product = new Product();

            string serialisedProduct = new JavaScriptSerializer().Serialize(product.getParents(id, language));

            return new HttpResponseMessage()
            {
                Content = new StringContent(serialisedProduct, System.Text.Encoding.UTF8, "application/json")
            };
        }

        [HttpGet]
        [Route("GetChildren")]
        public HttpResponseMessage GetChildren(String id, String language)
        {
            String mappeProductId = MappedProduct.get(id);

            if (!mappeProductId.Equals("")) { id = mappeProductId; }

            Product product = new Product();

            string serialisedProduct = new JavaScriptSerializer().Serialize(product.getChildren(id, language));

            return new HttpResponseMessage()
            {
                Content = new StringContent(serialisedProduct, System.Text.Encoding.UTF8, "application/json")
            };
        }

        [HttpGet]
        [Route("GetProductTree")]
        public HttpResponseMessage GetProductTree(String language, Boolean includeBranding)
        {
            Product product = new Product();

            string serialisedProduct = new JavaScriptSerializer().Serialize(product.getProductTree(language, includeBranding));

            return new HttpResponseMessage()
            {
                Content = new StringContent(serialisedProduct, System.Text.Encoding.UTF8, "application/json")
            };
        }

        [HttpGet]
        [Route("GetTopLevelProducts")]
        public HttpResponseMessage GetTopLevelProducts(String language)
        {
            Product product = new Product();

            string serialisedProduct = new JavaScriptSerializer().Serialize(product.getTopLevelProducts(language));

            return new HttpResponseMessage()
            {
                Content = new StringContent(serialisedProduct, System.Text.Encoding.UTF8, "application/json")
            };
        }


        [HttpGet]
        [Route("GetSections")]
        public HttpResponseMessage GetSections(String id, String language)
        {
            String mappeProductId = MappedProduct.get(id);

            if (!mappeProductId.Equals("")) { id = mappeProductId; }

            Product product = new Product();

            string serialisedProductSections = new JavaScriptSerializer().Serialize(product.getSections(id, language));

            return new HttpResponseMessage()
            {
                Content = new StringContent(serialisedProductSections, System.Text.Encoding.UTF8, "application/json")
            };
        }

        [HttpGet]
        [Route("GetRelatedProducts")]
        public HttpResponseMessage GetRelatedProducts(String id, String language)
        {
            String mappeProductId = MappedProduct.get(id);

            if (!mappeProductId.Equals("")) { id = mappeProductId; }

            Product product = new Product();

            string serialisedProduct = new JavaScriptSerializer().Serialize(product.getRelatedProducts(id, language));

            return new HttpResponseMessage()
            {
                Content = new StringContent(serialisedProduct, System.Text.Encoding.UTF8, "application/json")
            };
        }

        [HttpGet]
        [Route("GetModels")]
        public HttpResponseMessage GetModels(String id, String language)
        {
            String mappeProductId = MappedProduct.get(id);

            if (!mappeProductId.Equals("")) { id = mappeProductId; }

            Product product = new Product();

            string serialisedProduct = new JavaScriptSerializer().Serialize(product.getModels(id, language));

            return new HttpResponseMessage()
            {
                Content = new StringContent(serialisedProduct, System.Text.Encoding.UTF8, "application/json")
            };
        }

    }
}
