const formatDate = (dateString) => {
  const date = new Date(dateString);
  const day = date.getDate();
    const monthNames = [
        "Janvier", "Février", "Mars", "Avril", "Mai", "Juin",
        "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"
    ];
    const monthIndex = date.getMonth();
    const year = date.getFullYear();

    return `Le ${day} ${monthNames[monthIndex]} ${year}`;
}

export { formatDate };