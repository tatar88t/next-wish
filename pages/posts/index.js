import Link from 'next/link';

const PostList = ({posts}) => {
    return (
        
        posts.map((post) => <div key={post.id}>
            <Link href={`posts/${post.id}`} passHref>
                <a>
                    <h3>
                        {post.title}
                    </h3>
                </a>
            </Link>
            
            <p>
                {post.body}
            </p>
            <hr />
        </div>)
    
    )
}

export const getStaticProps = async () => {
    const data = await (await fetch(`https://jsonplaceholder.typicode.com/posts`)).json();

    return {
        props: {
            posts: data
        }
    }
};

export default PostList;