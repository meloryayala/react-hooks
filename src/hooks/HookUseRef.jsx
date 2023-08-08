import P from "prop-types";
import {useEffect, useMemo, useRef, useState} from "react";

const Post = ({post, handleClick}) => {
    console.log('Children rendered');
    return (
        <div key={post.id} className="post">
            <h1 onClick={() => handleClick(post.title)} >{post.title}</h1>
            <p>{post.body}</p>
        </div>
    )
}

Post.propTypes = {
    post: P.shape({
        id: P.number,
        title: P.string,
        body: P.string,
    }),
    handleClick: P.func,
};

const HookUseRef = () => {
    const [posts, setPosts] = useState([]);
    const [value, setValue] = useState('');
    const inputRef = useRef(null);

    console.log('Father rendered');

    //componentDidMount
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(response => setPosts(response));
    }, []);

    useEffect(() => {
        inputRef.current.focus();
        console.log((inputRef.current))
    }, [value]);

    const handleClick = (value) => {
    setValue(value)
    };

    return (
        <>
            <p>
                <input
                    ref={inputRef}
                    type="search"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                />
            </p>
            {
                useMemo(() => {
                    return (
                        posts.map(post => (<Post key={post.id} post={post} handleClick={handleClick} />))
                    )
                }, [posts])
            }
        </>
    );
};

export default HookUseRef