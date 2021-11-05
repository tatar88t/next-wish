import { useRouter } from 'next/router';
const Post = ({post}) => {
    const router = useRouter();

    // if(router.isFallback) {
    //     return <h2>Loading...</h2>
    // }
    return (
        <div>
            {post.title}
        </div>
    )
}

export default Post;

export const getStaticPaths = async () => {
    const data = await (await fetch(`https://jsonplaceholder.typicode.com/posts`)).json();
    const paths = data.map(post => {
        return {
            params: {postId: `${post.id}`},    
        }
    })
    // const paths = [
    //    { params: {postId: '1'}},
    //    { params: {postId: '2'}},
    //    { params: {postId: '3'}},
    // ]
    return {
        // paths,
        // fallback: true  
        fallback: 'blocking' 
    }
}
export const getStaticProps = async (context) => {
    const { params } = context
    console.log(context, 'CONTEXT')
    const data = await (await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)).json();
    
    if(!data.id) {
        return {
            notFound: true
        }
    }
    
    console.log(`generating ${params.postId} post`)
    return {
        props: {
            post: data
        }
    }
};