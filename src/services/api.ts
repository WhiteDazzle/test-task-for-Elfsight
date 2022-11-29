const baseUrl = "https://rickandmortyapi.com/api/character";

const getResource = (additionUrl: string, options = {}): any => {
    const url = baseUrl + additionUrl;
    console.log(url)
    return fetch(url, options);
};

export default getResource