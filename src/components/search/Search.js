function Search() {

    let searchOnTimeout;
    const timerForSearch = 700;

    function doTheSearch(event) {
        clearTimeout(searchOnTimeout);
        searchOnTimeout = setTimeout(() => {
            fetch('http://openlibrary.org/search.json?q=' + event.target.value)
                .then(value => value.json())
                .then(response => {
                    console.table(response);
                }
        }, timerForSearch);
    }

    return (
        <div>
            <input onChange={doTheSearch} type="text"></input>
        </div>
    );
}

export default Search;
