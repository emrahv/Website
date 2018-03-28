using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Website.Models
{
    public class MappedProduct
    {

        public static String get(String id)
        {
            Dictionary<string, string> list = new Dictionary<string, string> {
                {"20106","05a65e8b-4705-46da-a194-010e212cb7b7"},
                {"20101","065c07b0-abcc-4c0e-9d4e-66dd02e99aac"},
                {"30203","067e13c7-073b-4790-96ac-f67a33985cb5"},
                {"10201","08ddea70-93af-4cf5-9b5c-59ac087f7172"},
                {"30202","127638a6-e24d-4612-8536-b6dc580f7ddb"},
                {"20111","188a5c4a-21b7-4d49-9a67-e0e320a5e084"},
                {"10102","30011421-eadf-41eb-9ff7-7876b7efaed2"},
                {"101","342aa6a7-55f8-48e3-b93d-fc7bef926bbc"},
                {"30205","4f040209-03bf-499a-8e83-383ee378edae"},
                {"20102","53b43526-7c14-4ba5-b9ff-80eed512b1fb"},
                {"10202","5dc609fc-718a-40f7-8c02-20db203ff7ab"},
                {"20105","833914e2-a86a-4008-81ec-d4fd695065cb"},
                {"20109","8da887f7-f254-4a74-8add-a9898b36db65"},
                {"20108","964a30d1-b458-448d-b2fa-47d22a1c7c47"},
                {"20104","9f5590c8-1676-434a-a12d-1a385bf45125"},
                {"302","a9aafb4e-e2fa-4e8c-9007-eb1d00b97735"},
                {"10101","b89fde4a-9f2c-4c65-a3e7-5bb666d55a3c"},
                {"30201","c4ca5df5-9103-48ac-ae7d-35b1886c293f"},
                {"20107","c8f137b6-32f0-4150-9645-edfe7c9ad2cf"},
                {"201","c9f17d20-4a10-4f78-b783-753e8e894c28"},
                {"20103","d813a209-2b4b-4e71-a79f-5f2a25bd0b37"},
                {"20110","da6e21db-35eb-4193-b194-74ade0fbcc36"},
                {"30204","dbcac5c8-0cf2-4350-91a4-a3e86d8d2f29"},
                {"30207","f863a319-e91d-4b03-b1d4-5c399c515d5d"},
                {"102","fbaf5c80-d486-4676-8ef3-a5b3ec73205a"},
                {"30206","fe9d7347-4038-42bb-a783-2144df10bb16"}
            };

            foreach(var item in list)
            {
                if (item.Key.Equals(id)) { return item.Value; }
            }

            return "";
            
        }

    }
}