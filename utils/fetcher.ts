import fetch from 'isomorphic-fetch';

const fetcher = async (url: string) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/${url}`)
    return response.json();
};

export default fetcher;