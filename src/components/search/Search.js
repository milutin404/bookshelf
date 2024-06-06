function Search() {

    function doTheSearch(event) {
        
        console.log(event.target.value);

    }

    return (
        <div>
            <input onChange={doTheSearch} type="text"></input>
        </div>
    );
}

export default Search;
