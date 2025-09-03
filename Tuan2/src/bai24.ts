const post = { title: "New Post", body: "Content", userId: 1 };
async function postData(post: object): Promise<void> {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(post),
    });
    const data = await response.json();
    console.log("Posted data:", data);
}
postData(post);
