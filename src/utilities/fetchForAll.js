
function fetchForAll(setIsLoaded, setError, setItems, uri) {

    const url = "http://localhost:3000/"

    fetch(url + uri, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(res => {
            if (!res.ok) {
                throw new Error('Erreur lors de la requête.');
            }
            return res.json()
        })
        .then(
            (result) => {
                setIsLoaded(true);
                setItems(result);
            },
            (error) => {
                setIsLoaded(true);
                setError(error);
            }
        )
}

export default fetchForAll;