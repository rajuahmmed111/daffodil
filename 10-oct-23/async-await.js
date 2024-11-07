const handleAsync = async () => {
    const res = await fetch(`https://openapi.programming-hero.com/api/videos/categories`);
    const data = await res.json();
    const buttons = data.data;
    // console.log(buttons);
}