import { useRouter } from 'next/router';

const Doc = () => {
    const router = useRouter();
    console.log(router, 'ROUTER_DOCS');
    const { params = [] } = router.query;

    if (params.length === 2) {
        return (
            <h1>
                Viewing doc feature {params[0]} and concept {params[1]}
            </h1>
        )
    } else if (params.length === 1) {
        return(
            <h1>
                Viewing doc feature {params[0]}
            </h1>
        )
    }
    return (
       <h1>Docs Home</h1> 
    )
}

export default Doc;