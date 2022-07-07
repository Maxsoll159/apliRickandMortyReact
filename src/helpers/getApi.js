export const getApis = async() =>{
    let response = await fetch(`https://rickandmortyapi.com/api/character`);
    let personajes = await response.json();
    return personajes;
}
