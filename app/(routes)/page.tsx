import getBillboard from "@/actions/get-billboards";
import Container from "../components/ui/container";
import getProducts from "@/actions/get-products";
import ProductList from "../components/product-list";
import Billboard from "../components/ui/billboard";


export const revalidate=0;

const Home = async() => {

    const products = await getProducts({isFeatured: true})
    const billboard = await getBillboard('9a1de143-fae0-44b6-abcc-d77bb64b73ea');
    
    console.log(products);
    return (
    <Container>
    <div className="space-y-10 pb-10">
        <Billboard
        data={billboard}
        />
      </div>
      <ProductList title='Featured Products' items={products} />
      </Container>)
}
export default Home;