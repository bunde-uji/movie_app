export const TMDB_CONFIG = {
    BASE_URL: "https://api.themoviedb.org/3",
    API_KEY: process.env.EXPO_PUBLIC_API_KEY,
    headers: {
        accept: "application/json",
        Authorization: `Bearer ${process.env.EXPO_PUBLIC_API_KEY}`,
    }
}   

export const fetchMovies = async ({ query }: { query: string }) => {
    const endpoint = query ? `${TMDB_CONFIG.BASE_URL}/search/movie?query=${encodeURIComponent(query)}` : `${TMDB_CONFIG.BASE_URL}/discover/movie?sort_by=popularity.desc`

    const response = await fetch(endpoint, {
        method: "GET",
        headers: TMDB_CONFIG.headers,
    })

    if (!response.ok) {
        throw new Error("Failed to fetch movies")
    }


    const data = await response.json();


    return data.results;
}

export const fetchMovieDetails = async (movieId: string): Promise<Movie> => {
    try {
        const response = await fetch(`${TMDB_CONFIG.BASE_URL}/movie/${movieId}?api_key=${TMDB_CONFIG.API_KEY }`, {
            method: "GET",
            headers: TMDB_CONFIG.headers,
            // signal: 
        })

        if (!response.ok) throw new Error("Failed to fetch movie details") 
        
        const data = await response.json()

        return data
    } catch (error) {
       console.log(error);
       throw error;   
    }
}

export const fetchSimilarMovies = async (movieId: number): Promise<Movie[]> => {
    const query = `${TMDB_CONFIG.BASE_URL}/movie/${movieId}/similar`
    console.log(query)

    try {
        const response = await fetch(query, {
            method: "GET",
            headers: TMDB_CONFIG.headers
        })

        if (!response.ok) throw new Error("Failed to fetch similar movies")

        const data = await response.json()

        return data;
    } catch (error) {
        console.log("error")
        throw(error)
    }
}