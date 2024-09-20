
import Container from "@/components/ui/Container";
import ProductList from "@/components/ui/shop/ProductList";
import Nav from "@/components/ui/shop/Shop-Nav";
import { Product } from "@/types";

const Shop = async () => {
  

  // const products = await getProducts({ isFeatured: true });
  const products: Product[] = [];

  return (
    <div>
      {/* <div className="bg-no-repeat bg-top bg-contain lg:bg-cover bg-[url('../public/images/nobilis.png')] w-full h-[70vh]"></div> */}
      <Container>
        <div className="space-y-10 pb-20 sm:pb-10 px-4 sm:px-6 lg:px-8">
        
          <Nav />
          <p className="w-1/2">
            Browsing for your next legal apparel to be delivered to you within 48hours with no hassle? Look no further, we sell them all here, tailored your taste.
          </p>
          <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
            <ProductList 
            title="All Packages"
            items={products}
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Shop;
