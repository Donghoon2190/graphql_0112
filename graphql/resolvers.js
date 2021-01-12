
import { getMovie } from "./db";


const resolvers = {
    Query: {
        Movies: (_, { rating, limit }) => getMovie(rating, limit)

    }
}

export default resolvers;