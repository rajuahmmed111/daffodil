fetch(`https://jsonplaceholder.typicode.com/posts`)
    .then(res => res.json())
    .then(posts => posts.map((post, idx) => {
        if (post.id % 2 === 0) {
            console.log(idx, post.title);
        }
    }))


