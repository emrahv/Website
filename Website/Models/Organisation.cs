using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Net.Http.Headers;

namespace Website.Models
{
    public class OrganisationSection
    {
        public Section section = new Section();
        public String location = "";
    }

    public class Organisation
    {
        public String id = "";
        public String name = "";
        public BrandingPackage brandingDetails = new BrandingPackage();
        public String owner = "";
        public String status = "";
        public String organisationDescription = "";
        public String analyticsID = "";
        public List<Address> addressList = new List<Address>();
        public List<Contact> contactList = new List<Contact>();

        public static Organisation get(String language)
        {
            String apiuri = System.Configuration.ConfigurationManager.AppSettings["APIURI"].ToString();
            String organisationId = System.Configuration.ConfigurationManager.AppSettings["organisationId"].ToString();

            HttpClient client = new HttpClient();
            client.BaseAddress = new Uri(apiuri);

            client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));

            String variables = "api/Localisation/Organisation?";
            variables += "organisationId=" + organisationId;
            variables += "&language=" + language;

            HttpResponseMessage response = client.GetAsync(variables).Result;

            if (response.IsSuccessStatusCode)
            {
                return response.Content.ReadAsAsync<Organisation>().Result;
            }
            else
            {
                return null;
            }
        }

        public static List<OrganisationSection> getSections(String language)
        {
            String apiuri = System.Configuration.ConfigurationManager.AppSettings["APIURI"].ToString();
            String organisationId = System.Configuration.ConfigurationManager.AppSettings["organisationId"].ToString();

            HttpClient client = new HttpClient();
            client.BaseAddress = new Uri(apiuri);

            client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));

            String variables = "api/Localisation/GetOrganisationSections?";
            variables += "organisationId=" + organisationId;
            variables += "&language=" + language;

            HttpResponseMessage response = client.GetAsync(variables).Result;

            if (response.IsSuccessStatusCode)
            {
                return response.Content.ReadAsAsync<List<OrganisationSection>>().Result;
            }
            else
            {
                return null;
            }
        }
    }
}