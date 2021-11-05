import { useRouter } from 'next/router';


const ReviewDetail = () => {
    const router = useRouter();
    console.log(router, 'ROUTER review');
    const { reviewId, productId } = router.query

    return(
        <>
        <h1>Review {reviewId} Details for {productId} Product</h1>

        </>
    )
}

export default ReviewDetail;