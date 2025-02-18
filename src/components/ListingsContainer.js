import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({listings, handleDelete}) {

  const listingArr = listings.map(listing => <ListingCard key={listing.id} listing={listing} handleDelete={handleDelete}   />)

  return (
    <main>
      <ul className="cards">
        {listingArr}
      </ul>
    </main>
  );
}

export default ListingsContainer;
