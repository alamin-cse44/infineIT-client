import { useQuery } from "@tanstack/react-query"


const Query = () => {
    const {refetch, data: allPost=[]} = useQuery({
        queryKey: ['allPost'],
        queryFn: async() => {
            const res = await fetch("https://jsonplaceholder.typicode.com/posts")
            return res.json();
        }
    });

    return [allPost, refetch];
}

export default Query;