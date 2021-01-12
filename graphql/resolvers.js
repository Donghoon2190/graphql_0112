
import { delMovise, addMovise, getMovie } from "./db";


const resolvers = {
    Query: {
        Movies: () => getMovie()
    },
    Mutation: {
        addMovise: (_, { name, score }) => addMovise(name, score),
        delMovise: (_, { id }) => delMovise(id),
    }
}


export default resolvers;