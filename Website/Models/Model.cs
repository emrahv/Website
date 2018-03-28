using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Net.Http.Headers;

namespace Website.Models
{
    public class Model
    {
        public String id = "";
        public String name;
        public BrandingPackage brandingPackage = new BrandingPackage(); 
        public Boolean status = false;
        public List<ProductModelSection> sectionList = new List<ProductModelSection>();

        private String apiuri = System.Configuration.ConfigurationManager.AppSettings["APIURI"].ToString();
        private String organisationId = System.Configuration.ConfigurationManager.AppSettings["organisationId"].ToString();

        public class ProductModelSection
        {
            public String section = "";
            public String location = "";
        }

        public List<ProductModelSection> getSections(String modelId)
        {
            String apiuri = System.Configuration.ConfigurationManager.AppSettings["APIURI"].ToString();
            String organisationId = System.Configuration.ConfigurationManager.AppSettings["organisationId"].ToString();

            HttpClient client = new HttpClient();
            client.BaseAddress = new Uri(apiuri);

            client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));

            String variables = "api/Product/GetModelSections?";
            variables += "organisationId=" + organisationId;
            variables += "&id=" + modelId;

            HttpResponseMessage response = client.GetAsync(variables).Result;

            if (response.IsSuccessStatusCode)
            {
                return response.Content.ReadAsAsync<List<ProductModelSection>>().Result;
            }
            else
            {
                return null;
            }

        }
    }
}