using Website.Models;
using System;
using System.Net.Http;
using System.Web.Http;
using System.Web.Script.Serialization;

namespace Website.Controllers
{
    [RoutePrefix("api/Localisation")]
    public class LocalisationController : ApiController
    {
        [HttpGet]
        [Route("Organisation")]
        public HttpResponseMessage Organisation(String language)
        {
            string serialisedData = new JavaScriptSerializer().Serialize(Models.Organisation.get(language));

            return new HttpResponseMessage()
            {
                Content = new StringContent(serialisedData, System.Text.Encoding.UTF8, "application/json")
            };
        }

        [HttpGet]
        [Route("GetOrganisationSections")]
        public HttpResponseMessage GetOrganisationSections(String language)
        {
            string serialisedData = new JavaScriptSerializer().Serialize(Models.Organisation.getSections(language));

            return new HttpResponseMessage()
            {
                Content = new StringContent(serialisedData, System.Text.Encoding.UTF8, "application/json")
            };
        }

        [HttpGet]
        [Route("BrandingPackage")]
        public HttpResponseMessage BrandingPackage(String id)
        {
            string serialisedProduct = new JavaScriptSerializer().Serialize(Models.BrandingPackage.get(id));

            return new HttpResponseMessage()
            {
                Content = new StringContent(serialisedProduct, System.Text.Encoding.UTF8, "application/json")
            };
        }

        [HttpGet]
        [Route("BrandDetails")]
        public HttpResponseMessage BrandDetails()
        {
            BrandingPackage brandingPackage = new BrandingPackage();

            string serialisedBrandDetails = new JavaScriptSerializer().Serialize(Models.BrandingPackage.getBrandDetails());

            return new HttpResponseMessage()
            {
                Content = new StringContent(serialisedBrandDetails, System.Text.Encoding.UTF8, "application/json")
            };
        }

        [HttpGet]
        [Route("Section")]
        public HttpResponseMessage Section(String id, String language)
        {
            Section section = new Section();

            string serialisedSection = new JavaScriptSerializer().Serialize(Models.Section.get(id, language));

            return new HttpResponseMessage()
            {
                Content = new StringContent(serialisedSection, System.Text.Encoding.UTF8, "application/json")
            };
        }
    }
}
