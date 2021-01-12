
import { delMovise, addMovise } from "./db";


const resolvers = {

    Mutation: {
        addMovise: (_, { name, score }) => addMovise(name, score),
        delMovise: (_, { id }) => delMovise(id),
    }
}


export default resolvers;