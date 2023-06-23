const clearErrorAfterDelay = (setError, time) => {
    setTimeout(() => {
        setError(null);
    }, time);
};

export { clearErrorAfterDelay };