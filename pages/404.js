import Link from 'next/link';

const PageNotFound = () => {
    return(
        <>
            <h1 style={{color: "red"}}>
                Page not found
            </h1>
            <Link href="/">
                <a>
                    Home
                </a>
            </Link>
        </>
    )
}

export default PageNotFound;