const config = {
    url_api: 'https://newsapi.org/v2/top-headlines?country=id',
    apiKey: '40ac9c4d52ff4e0b890e1bd47a2bf9de',
}

const getNews = async () => {
    return new Promise((resolve, reject) => {
        fetch(`${config.url_api}&apiKey=${config.apiKey}`)
        .then(api => api.json())
        .then(response => resolve(response))
        .catch(err => reject(err))
    });
}

export {getNews}