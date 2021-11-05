import { useState } from "react"

const News = ({articles}) => {
    const [count, setCount] = useState(0);
    const handleClick = () => {
        setCount(count + 1)
    }
    return (
            <>
            <h1>List Of News Articles</h1>

            {
                articles.map((item) => (
                    <div key={item.id}>
                        <h2>{item.title}</h2>
                        <p>{item.description}</p>
                        <p>{item.category}</p>
                        <button onClick={handleClick}> CLICK </button>
                        <h4>{count}</h4>
                        <hr />
                    </div>
                    
                ))
            }
        </>
    )
}

export default News

export async function getServerSideProps() {
    const resp = await fetch('http://localhost:4000/news');
    const data = await resp.json();

    return {
        props: {
            articles: data
        }
    }
}