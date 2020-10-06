import fetch from 'isomorphic-fetch';

export const fetcherBackend = async (url: string, options?: any) => {
    try {
        const response = await fetch(`http://backend:3000/api/${url}`, {
            ...options,
            headers: {
                'Content-Type': 'application/json'
            },
        })
        return response.json();
    } catch (error) {
        console.log('error: ', error)
    }
};

export const fetcherFrontend = async (url: string, options?: any) => {
    try {
        const response = await fetch(`http://localhost:3000/api/${url}`, {
            ...options,
            headers: {
                'Content-Type': 'application/json'
            },
        })
        return response.json();
    } catch (error) {
        console.log('error: ', error)
    }
};