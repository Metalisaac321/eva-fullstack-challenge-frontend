import fetch from 'isomorphic-fetch';

interface FetcherBackendOptions {
    method: 'POST' | 'GET';
    access_token?: string;
    body?: Object;
}

export const fetcher = async (url: string, options?: FetcherBackendOptions, backend: boolean = true) => {
    const fetchUrl = `http://${backend ? 'backend' : 'localhost'}:3000/api/${url}`;
    let response;
    const headersOption = {
        headers: {
            Authorization: `Bearer ${options?.access_token}`,
            'Content-Type': 'application/json',
        }
    }
    if (options?.method == 'GET') {
        response = await fetch(fetchUrl, {
            ...headersOption,
        });
    }
    if (options?.method == 'POST') {
        response = await fetch(fetchUrl, {
            ...headersOption,
            ...{
                method: 'POST',
                body: JSON.stringify(options.body)
            },
        })
    }

    return response.json();
};
