const ReloadAfterDelay = (setMessage, time) => {
    setTimeout(() => {
        setMessage(null);
        location.reload();
    }, time);
};

export { ReloadAfterDelay };