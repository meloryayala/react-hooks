import P from "prop-types";
import {useEffect, useMemo, useState} from "react";

const Post = ({post}) => {
    console.log('Children rendered');
    return (
        <div key={post.id} className="post">
            <h1>{post.title}</h1>
            <p>{post.body}</p>
        </div>
    )
}

Post.propTypes = {
    post: P.shape({
        id: P.number,
        title: P.string,
        body: P.string,
    })
}

const HookUseMemo = () => {
    const [posts, setPosts] = useState([]);
    const [value, setValue] = useState('')

    console.log('Father rendered');

    //componentDidMount
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(response => setPosts(response));
    }, [])

    return (
        <>
            <p>
                <input
                    type="search"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                />
            </p>
            {
                useMemo(() => {
                    return (
                        posts.map(post => (<Post key={post.id} post={post}/>))
                    )
                }, [posts])
            }
        </>
    );
};

export default HookUseMemo