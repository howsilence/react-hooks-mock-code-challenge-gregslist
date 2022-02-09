import React, {useState, useEffect} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {

  //deliverable one fetching and displaying **DONE
  const [listings, setListings] = useState([])
  const fetchUrl = () => {
    fetch("http://localhost:6001/listings")
    .then(r => r.json())
    .then(listings => setListings(listings))
  }
  useEffect(fetchUrl, [])

  //deliverable two inside listing card b/c its superficial **DONE

  //deliverable three: delete a listing by clicking on the trash icon, this change persists **DONE
  function handleDelete(id){
    //excludes the listing with the id we click and returns the rest of the listings
    let updatedListings = listings.filter(listing => listing.id !== id)
    setListings(updatedListings)

    //the settings for delete
    const config = {
      method: "DELETE"
    }
    //delete fetch, interpolate the id for easy grabbing and deleting when config is passed
    fetch(`http://localhost:6001/listings/${id}`, config)
  }

  //deliverable four: SEARCH
  //start with some state for the search
  const [search, setSearch] = useState("")
  const searchedListings = listings.filter(listing => listing.description.toUpperCase().includes(search.toUpperCase()))


  return (
    <div className="app">
      <Header search={search} setSearch={setSearch} />
      <ListingsContainer listings={searchedListings} handleDelete={handleDelete} />
    </div>
  );
}

export default App;
