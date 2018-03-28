using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Net.Http.Headers;

namespace Website.Models
{
    public class Section
    {
        public String id = "";
        public String templateName= "";
        public String dataModel = "";
        public BrandingPackage brandingPackage = new BrandingPackage();
        public List<SubSection> subSectionList = new List<SubSection>();

        public class SubSection
        {
            public Section section = new Section();
            public String width = "";
        }

        public static Section get(String id, String language)
        {
            String apiuri = System.Configuration.ConfigurationManager.AppSettings["APIURI"].ToString();
            String organisationId = System.Configuration.ConfigurationManager.AppSettings["organisationId"].ToString();
            
            HttpClient client = new HttpClient();
            client.BaseAddress = new Uri(apiuri);

            client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));

            String variables = "api/Localisation/GetSection?";
            variables += "organisationId=" + organisationId;
            variables += "&id=" + id;
            variables += "&language=" + language;

            HttpResponseMessage response = client.GetAsync(variables).Result;

            if (response.IsSuccessStatusCode)
            {
                return response.Content.ReadAsAsync<Section>().Result;
            }
            else
            {
                return null;
            }

        }
    }
}