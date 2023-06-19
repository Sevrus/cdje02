function fetchForAll(setIsLoaded, setError, setItems, url) {

    fetch(url)
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