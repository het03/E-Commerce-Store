import getBillboard from "@/actions/get-billboard";
import getProducts from "@/actions/get-products";
import Billboard from "@/components/billboard";
import ProductList from "@/components/product-list";
import Container from "@/components/ui/container";

export const revalidate = 0;
const HomePage = async () => {

    const billboard = await getBillboard("4361c019-990c-4a78-ad27-67995a5d52e0");
    const products = await getProducts({isFeatured: true});

    return (
        <Container>
            <div className="space-y-10 pb-10">
                <Billboard data={billboard}/>
                <div className="fle flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
                    <ProductList title="Featured Products" items={products} />
                </div>
            </div>
        </Container>
    );
}
 
export default HomePage;