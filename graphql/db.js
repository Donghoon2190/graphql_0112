export let movies = [
    {
        id: 0,
        name: "Star Wars - The new one",
        score: 1
    },
    {
        id: 1,
        name: "Avengers - The new one",
        score: 8
    },
    {
        id: 2,
        name: "The Godfather I",
        score: 99
    },
    {
        id: 3,
        name: "Logan",
        score: 2
    }
];
export const getById = id => {
    const filteredPeople = people.filter(person => person.id === String(id));
    return filteredPeople[0];
};

export const addMovise = (name, score) => {
    movies.push({
        id: movies.length,
        name: name,
        score: score
    }
    )
    return movies;
}

export const delMovise = (id) => {
    const cleanMovis = movies.filter(movie => movie.id !== id);

    if (movies.length > cleanMovis.length) {
        movies = cleanMovis;
        return movies;
    }
    return movies;
}



