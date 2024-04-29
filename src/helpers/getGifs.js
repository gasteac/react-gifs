export const getGifs = async (category) => {
const url = `https://api.giphy.com/v1/gifs/search?api_key=GdA37uwcn1ClQx5AaeOifK7jjJQyJ0Kf&q=${category}&limit=6`
    const resp = await fetch(url)
    const { data } = await resp.json();
    const gifs = data.map(img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized.url
    }))
    return gifs;
}

