export const TMDB_CONFIG = {
    BASE_URL: "https://api.themoviedb.org/3",
    API_KEY: process.env.EXPO_PUBLIC_API_KEY,
    headers: {
        accept: "application/json",
        Authorization: `Bearer ${process.env.EXPO_PUBLIC_API_KEY}`,
    }
}   

export const fetchMovies = async ({ query }: { query: string }) => {
    const endpoint = query ? `${TMDB_CONFIG.BASE_URL}/discover/movie?query=${query}` : `${TMDB_CONFIG.BASE_URL}/discover/movie?sort_by=popularity.desc`

    const response = await fetch(endpoint, {
        method: "GET",
        headers: TMDB_CONFIG.headers,
    })

    // console.log(response.json());

    console.log(response.status)

    if (!response.ok) {
        throw new Error("Failed to fetch movies")
    }

    const data = await response.json();

    console.log(data, "data oooo")

    return data.results;
}