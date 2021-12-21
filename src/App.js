import InfiniteScroll from "react-infinite-scroller";
import { useInfiniteQuery } from "react-query";
import PokemonCard from "./components/PokemonCard";
import "./App.css";

export default function App() {
    const fetchPosts = async ({ pageParam = 1 }) => {

        // Fetching data from the api (pokemon api) and pageSize is setting the page limit
        const response = await fetch(
            `https://api.pokemontcg.io/v2/cards?page=${pageParam}&pageSize=10`
        );
        var results = await response.json();
        results = results.data; //Since the api has pokemon-data wrapped inside 'data', we need to extract that
        // console.log(results)
        // const res = results.data;
        return { results, nextPage: pageParam + 1, totalPages: 250 };
    };

    const {
        data,
        isLoading,
        isError,
        hasNextPage,
        fetchNextPage
    } = useInfiniteQuery("posts", fetchPosts, {
        getNextPageParam: (lastPage, pages) => {
            if (lastPage.nextPage < lastPage.totalPages) return lastPage.nextPage;
            return undefined;
        }
    });

    // console.log(data)
    return (
        <div className="App">
            <h2>Pokemon World...</h2>
            <marquee width="100%" direction="right" height="100px" className="marquee"> 
            Poke-Cards
            </marquee>
            
            <main>
                {isLoading ? (
                    <p>Loading...</p>
                ) : isError ? (
                    <p>There was an error</p>
                ) : (
                    <InfiniteScroll hasMore={hasNextPage} loadMore={fetchNextPage}>
                        {data.pages.map((page) =>
                            page.results.map((pokemon) => <PokemonCard key={pokemon.id} pokemon={pokemon} />)
                        )}
                    </InfiniteScroll>
                )}
            </main>
        </div>
    );
}