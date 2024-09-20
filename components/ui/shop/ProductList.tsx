import NoResults from "./no-result";
import ProductCard from "./ProductCards";
import PackageCard from "./ProductCards";
import { packagesList } from "@/utils";
import { Product } from "@/types";


interface ProductListProps {
  title: string;
  items: Product[];
}

const ProductList: React.FC<ProductListProps> = ({
  title,
  items
}) => {
  return (
    <div className="space-y-4">
      <h3 className="font-bold text-slate-950 text-3xl">{title}</h3>
      {items.length === 0 && <NoResults />}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {items.map((item) => (
          <ProductCard key={item.id} data={item} />
          ))} 
      </div>
    </div>
   );
}
 
export default ProductList;
