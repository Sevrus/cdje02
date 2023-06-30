
function fetchForAll(setIsLoaded, setError, setItems, uri, token) {

    const url = "http://localhost:3000/"

    fetch(url + uri, {
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        }
    })
        .then(res => res.json())
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