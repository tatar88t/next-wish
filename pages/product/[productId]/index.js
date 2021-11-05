import { useRouter } from 'next/router';


const ProductDetail = () => {
    const router = useRouter();
    console.log(router, 'ROUTER');
    const { productId } = router.query

    return(
        <>
        <h1>Product {productId} Details </h1>

        </>
    )
}

export default ProductDetail;