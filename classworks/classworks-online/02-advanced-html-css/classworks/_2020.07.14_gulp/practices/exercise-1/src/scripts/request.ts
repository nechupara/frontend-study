const getRequest = async () => {
    const result = await fetch("https://ajax.test-danit.com/api/swapi/films/2");
    return result;
}
