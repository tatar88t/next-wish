const ArticleListByCategory = ({articles, category}) => {
    return(
        <>
            <h1>Showing news by Category</h1>
            {
                articles.map(item => {
                    return(
                    <div key={item.id}>
                        <h2>{item.title}</h2>
                        <p>{item.description}</p>
                        <p>{item.category}</p>
                        <hr />
                    </div>
                    )
                })
            }
        </>
    )
}

export default ArticleListByCategory;

export async function getServerSideProps(context) {
    
    const { params } = context;
    console.log(params, 'Params');
    // "category" comes from dynamic [pagename].js
    const { category } = params
    const resp = await fetch(`http://localhost:4000/news?category=${category}`);

    const data = await resp.json();

    return {
        props: {
            articles: data,
            category
        }
    }
}