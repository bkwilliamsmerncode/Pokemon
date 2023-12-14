import React from "react"


function User(props) {

    // console.log('props', props)
    return (
        <div className="user-card">
            <h2>{props.pokémon.name}</h2>
            <p><strong>{props.pokémon.id}</strong></p>
            <p><strong><em>{props.pokémon.types + " "}</em></strong></p>
        </div>
    )
}

export default User


// On Notes: 
// - User.jsx should be capital First U - matching the function name
 // ( not a technical requirement but a best practice )
//- 