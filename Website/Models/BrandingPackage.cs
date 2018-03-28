using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Net.Http.Headers;

namespace Website.Models
{
    public class BrandingPackage
    {
        public String id = "";
        public List<String> colours = new List<String>();
        public List<String> images = new List<String>();
        public String rootURL = "";

        public class BrandDetails
        {
            public List<String> logoList = new List<String>();
            public List<String> iconList = new List<String>();
            public List<String> colourList = new List<String>();
            public String rootURL = "";
        }

        public static BrandingPackage get(String id)
        {
            String apiuri = System.Configuration.ConfigurationManager.AppSettings["APIURI"].ToString();
            String organisationId = System.Configuration.ConfigurationManager.AppSettings["organisationId"].ToString();

            HttpClient client = new HttpClient();
            client.BaseAddress = new Uri(apiuri);

            client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));

            String variables = "api/Localisation/GetBrandingPackage?";
            variables += "organisationId=" + organisationId;
            variables += "&id=" + id;

            HttpResponseMessage response = client.GetAsync(variables).Result;

            if (response.IsSuccessStatusCode)
            {
                return response.Content.ReadAsAsync<BrandingPackage>().Result;
            }
            else
            {
                return null;
            }
        }

        public static BrandDetails getBrandDetails()
        {
            String apiuri = System.Configuration.ConfigurationManager.AppSettings["APIURI"].ToString();
            String organisationId = System.Configuration.ConfigurationManager.AppSettings["organisationId"].ToString();

            HttpClient client = new HttpClient();
            client.BaseAddress = new Uri(apiuri);

            client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));

            String variables = "api/Localisation/GetBrandDetails?";
            variables += "organisationId=" + organisationId;

            HttpResponseMessage response = client.GetAsync(variables).Result;

            if (response.IsSuccessStatusCode)
            {
                BrandingPackage.BrandDetails brandDetails = response.Content.ReadAsAsync<BrandingPackage.BrandDetails>().Result;

                return brandDetails;
            }
            else
            {
                return null;
            }
        }
    }

}