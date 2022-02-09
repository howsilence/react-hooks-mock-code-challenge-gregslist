import React, {useState} from "react";

function ListingCard({listing, handleDelete}) {

  //deliverable TWO: sets toggle state and switches between states onbutton press
  //because this ONLY effects this component and is superficial it can be done in this component
  const[toggle, setToggle] = useState(false)
  const handleToggleClick = () => {
    setToggle(currentState => !currentState)
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={listing.image} alt={listing.description} />
      </div>
      <div className="details">
        {toggle ? (
          <button onClick={handleToggleClick}className="emoji-button favorite active">★</button>
        ) : (
          <button onClick={handleToggleClick} className="emoji-button favorite">☆</button>
        )}
        <strong>{listing.description}</strong>
        <span> · {listing.location}</span>
        <button onClick={() => handleDelete(listing.id)} className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
