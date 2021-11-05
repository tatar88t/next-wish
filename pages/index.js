import Link from 'next/link';
const Home = () => {
    return(
        <>
        <h1>Home Page</h1>
        <Link href='/blog'>
            <a>
                Blog
            </a>
        </Link>
        <br/>
        <Link href='/product'>
            <a>
                Products
            </a>
        </Link>
        <br />
        <Link href='/users'>
            <a>
                Users
            </a>
        </Link>
        <br />
        <Link href='/posts'>
            <a>
                Posts
            </a>
        </Link>

        </>
    )
}

export default Home;

