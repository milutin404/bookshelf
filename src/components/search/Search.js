function Search() {

    let searchOnTimeout;
    const timerForSearch = 700;

    /**
     * Sends search value to server, after timeout.
     * @param {event} event 
     */
    function doTheSearch(event) {
        clearTimeout(searchOnTimeout);
        searchOnTimeout = setTimeout(() => {
            console.log(event.target.value);
        }, timerForSearch);
    }

    return (
        <div>
            <input onChange={doTheSearch} type="text"></input>
        </div>
    );
}

export default Search;
