import Link from 'next/link'
import { useRouter } from 'next/router';

const Product = () => {
    const router = useRouter();
    const handleClick = () => {
        router.push('./docs/review')
    };

    return(
        <>
        <Link href='/product/1'>
            <a>
                Product 1
            </a>
        </Link>
        <h1>Product 2</h1>
        <h1>Product 3</h1>

        <Link href='/'>
            <a>
                Home
            </a>
        </Link>
        <br />
        <button onClick={handleClick}>
            go to
        </button>
        </>
    )
}

export default Product;