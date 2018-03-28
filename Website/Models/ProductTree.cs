using System.Collections.Generic;

namespace Website.Models
{
    public class ProductTree
    {
        public ShortProduct parent = new ShortProduct();
        public List<ProductTree> children = new List<ProductTree>();

    }
    
}