function fetchForAll(setIsLoaded, setError, setItems, uri) {

    const url = "http://localhost:3000/"

    fetch(url + uri)
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