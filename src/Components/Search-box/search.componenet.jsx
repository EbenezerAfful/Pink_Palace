import './search.styles.css'


const SearchBox=()=>{
    const onSearch=()=>{}
    return(
        <div className="search-box">
            <input type="text" placeholder='Search...' />
            <a href='#'>
                <i class='fas fa-search'></i>

            </a>

        </div>
    )
}


export default SearchBox;