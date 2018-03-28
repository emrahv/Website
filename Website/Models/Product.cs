using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.IO;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Reflection;

namespace Website.Models
{
    public class ProductSection
    {
        public String section = "";
        public String location = "";
        public Section sectionDetails = new Section();
    }

    public class FullProduct
    {
        public Product product = new Product();
        public List<Model> models = new List<Model>();
        public List<Product> children = new List<Product>();
        public List<ShortProduct> parents = new List<ShortProduct>();
        public List<Product> relatedProducts = new List<Product>();
        public List<ProductSection> sections = new List<ProductSection>();

        public static FullProduct get(String id, String language)
        {
            String apiuri = System.Configuration.ConfigurationManager.AppSettings["APIURI"].ToString();
            String organisationId = System.Configuration.ConfigurationManager.AppSettings["organisationId"].ToString();

            HttpClient client = new HttpClient();
            client.BaseAddress = new Uri(apiuri);

            client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));

            String variables = "api/Product/GetFullProduct?";
            variables += "organisationId=" + organisationId;
            variables += "&id=" + id;
            variables += "&language=" + language;

            HttpResponseMessage response = client.GetAsync(variables).Result;

            if (response.IsSuccessStatusCode)
            {
                return response.Content.ReadAsAsync<FullProduct>().Result;
            }
            else
            {
                return null;
            }
        }
    }

    public class ShortProduct
    {
        public String id = "";
        public String name = "";
    }

    public class Product
    {
        public String id = "";
        public String name;
        public String productId = "";
        public Boolean status = false;
        public BrandingPackage brandingPackage = new BrandingPackage();

        private String apiuri = System.Configuration.ConfigurationManager.AppSettings["APIURI"].ToString();
        private String organisationId = System.Configuration.ConfigurationManager.AppSettings["organisationId"].ToString();

        public static Product get(String productId, String language)
        {
            String apiuri = ConfigurationManager.AppSettings["APIURI"].ToString();
            String organisationId = ConfigurationManager.AppSettings["organisationId"].ToString();

            HttpClient client = new HttpClient();
            client.BaseAddress = new Uri(apiuri);

            client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));

            String variables = "api/Product/Get?";
            variables += "organisationId=" + organisationId;
            variables += "&id=" + productId;
            variables += "&language=" + language;

            HttpResponseMessage response = client.GetAsync(variables).Result;

            if (response.IsSuccessStatusCode)
            {
                return response.Content.ReadAsAsync<Product>().Result;
            }
            else
            {
                return null;
            }

        }

        public List<Product> getParents(String productId, String language)
        {
            HttpClient client = new HttpClient();
            client.BaseAddress = new Uri(apiuri);

            client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));

            String variables = "api/Product/GetParents?";
            variables += "organisationId=" + organisationId;
            variables += "&id=" + productId;
            variables += "&language=" + language;

            HttpResponseMessage response = client.GetAsync(variables).Result;

            if (response.IsSuccessStatusCode)
            {
                List<Product> productList = response.Content.ReadAsAsync<List<Product>>().Result;

                return productList;
            }
            else
            {
                return null;
            }

        }

        public List<Product> getChildren(String productId, String language)
        {
            HttpClient client = new HttpClient();
            client.BaseAddress = new Uri(apiuri);

            client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));

            String variables = "api/Product/GetChildren?";
            variables += "organisationId=" + organisationId;
            variables += "&id=" + productId;
            variables += "&language=" + language;

            HttpResponseMessage response = client.GetAsync(variables).Result;

            if (response.IsSuccessStatusCode)
            {
                List<Product> productList = response.Content.ReadAsAsync<List<Product>>().Result;

                return productList;
            }
            else
            {
                return null;
            }

        }

        public List<ProductSection> getSections(String productId, String language)
        {
            HttpClient client = new HttpClient();
            client.BaseAddress = new Uri(apiuri);

            client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));

            String variables = "api/Product/GetSections?";
            variables += "organisationId=" + organisationId;
            variables += "&id=" + productId;
            variables += "&language=" + language;

            HttpResponseMessage response = client.GetAsync(variables).Result;

            if (response.IsSuccessStatusCode)
            {
                List<ProductSection> sectionList = response.Content.ReadAsAsync<List<ProductSection>>().Result;

                return sectionList;
            }
            else
            {
                return null;
            }

        }
        public List<ProductTree> getProductTree(String language, Boolean includeBranding)
        {
            HttpClient client = new HttpClient();
            client.BaseAddress = new Uri(apiuri);

            client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));

            String variables = "api/Product/GetProductTree?";
            variables += "organisationId=" + organisationId;
            variables += "&language=" + language;
            variables += "&includeBranding=" + includeBranding;

            HttpResponseMessage response = client.GetAsync(variables).Result;

            if (response.IsSuccessStatusCode)
            {
                List<ProductTree> productTreeList = response.Content.ReadAsAsync<List<ProductTree>>().Result;

                return productTreeList;
            }
            else
            {
                return null;
            }

        }
        public List<Product> getTopLevelProducts(String language)
        {
            HttpClient client = new HttpClient();
            client.BaseAddress = new Uri(apiuri);

            client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));

            String variables = "api/Product/GetTopLevelProducts?";
            variables += "organisationId=" + organisationId;
            variables += "&language=" + language;

            HttpResponseMessage response = client.GetAsync(variables).Result;

            if (response.IsSuccessStatusCode)
            {
                List<Product> productTreeList = response.Content.ReadAsAsync<List<Product>>().Result;

                return productTreeList;
            }
            else
            {
                return null;
            }

        }
        public List<Product> getRelatedProducts(String productId, String language)
        {
            HttpClient client = new HttpClient();
            client.BaseAddress = new Uri(apiuri);

            client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));

            String variables = "api/Product/GetRelatedProducts?";
            variables += "organisationId=" + organisationId;
            variables += "&id=" + productId;
            variables += "&language=" + language;

            HttpResponseMessage response = client.GetAsync(variables).Result;

            if (response.IsSuccessStatusCode)
            {
                List<Product> productList = response.Content.ReadAsAsync<List<Product>>().Result;

                return productList;
            }
            else
            {
                return null;
            }

        }

        public List<Model> getModels(String productId, String language)
        {
            HttpClient client = new HttpClient();
            client.BaseAddress = new Uri(apiuri);

            client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));

            String variables = "api/Product/GetModels?";
            variables += "organisationId=" + organisationId;
            variables += "&id=" + productId;
            variables += "&language=" + language;

            HttpResponseMessage response = client.GetAsync(variables).Result;

            if (response.IsSuccessStatusCode)
            {
                List<Model> modelList = response.Content.ReadAsAsync<List<Model>>().Result;

                foreach (Model model in modelList)
                {
                    model.sectionList =  model.getSections(model.id);
                }

                return modelList;
            }
            else
            {
                return null;
            }

        }

    }
}