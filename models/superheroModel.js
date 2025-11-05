const axios = require('axios');

exports.fetchSuperheros = async () => {
    const responce = await axios.get('https://akabab.github.io/superhero-api/api/all.json')
    const superheros = responce.data.map(element => ({
        id: element.id,
        name: element.name,
        fullName: element.biography.fullName,
        strength: element.powerstats.strength,
        image: element.images.sm
    }));
    return superheros
}

exports.fetchSuperheroById = async (id) => {
    const response = await axios.get(`https://akabab.github.io/superhero-api/api/id/${id}.json`);
    const superhero = response.data;
    return {
        id: superhero.id,
        name: superhero.name,
        fullName: superhero.biography.fullName,
        strength: superhero.powerstats.strength,
        image: superhero.images.sm
    };
}