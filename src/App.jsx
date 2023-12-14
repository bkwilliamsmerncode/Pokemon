
import { useState } from 'react';
import './App.css';
import User from "./views/User.jsx"

function App() {

  const [view, setView] = useState("")
  const [input, setInput] = useState("")
  const [pokémon, setPokemon] = useState([
    { "id": 1, "name": "Bulbasaur", "types": ["poison", "grass"] },
    { "id": 5, "name": "Charmeleon", "types": ["fire"] },
    { "id": 9, "name": "Blastoise", "types": ["water"] },
    { "id": 12, "name": "Butterfree", "types": ["bug", "flying"] },
    { "id": 16, "name": "Pidgey", "types": ["normal", "flying"] },
    { "id": 23, "name": "Ekans", "types": ["poison"] },
    { "id": 24, "name": "Arbok", "types": ["poison"] },
    { "id": 25, "name": "Pikachu", "types": ["electric"] },
    { "id": 37, "name": "Vulpix", "types": ["fire"] },
    { "id": 52, "name": "Meowth", "types": ["normal"] },
    { "id": 63, "name": "Abra", "types": ["psychic"] },
    { "id": 67, "name": "Machamp", "types": ["fighting"] },
    { "id": 72, "name": "Tentacool", "types": ["water", "poison"] },
    { "id": 74, "name": "Geodude", "types": ["rock", "ground"] },
    { "id": 87, "name": "Dewgong", "types": ["water", "ice"] },
    { "id": 98, "name": "Krabby", "types": ["water"] },
    { "id": 115, "name": "Kangaskhan", "types": ["normal"] },
    { "id": 122, "name": "Mr. Mime", "types": ["psychic"] },
    { "id": 133, "name": "Eevee", "types": ["normal"] },
    { "id": 144, "name": "Articuno", "types": ["ice", "flying"] },
    { "id": 145, "name": "Zapdos", "types": ["electric", "flying"] },
    { "id": 146, "name": "Moltres", "types": ["fire", "flying"] },
    { "id": 148, "name": "Dragonair", "types": ["dragon"] }
  ]

  )
  const [choice, setChoice] = useState("")

  let dict = {
    All: "",
    '🔥': "fire",
    '⚡': "electric",
    '💧': "water",
    '🔮': "psychic",
    '🐲': "dragon",
    '😀': "normal",
    '🧊': "ice",
    '🤢': "poison",
    '🧱': "rock",
    '🏕': "ground",
    '🐱‍🏍': "flying",
    '🐛': "bug"
  }


  const changeView = (e) => {
    e.preventDefault()
    setView(dict[e.target.innerText])
  }

  const handleChange = (e) => {
    console.log('e', e.target.value)
    setInput(e.target.value)
  }

  const handleSubmit = (e) => {
    // e.preventDefault()
    setView(choice)
  }
  const handleChoice = (e) => {
    setChoice(e.target.value)
  }



  return (
    <>
      {console.log('chioice', choice)}
      {console.log('input', input)}
      <div id='app'>

        <div className="content">
          <header ><h1 id="app-header">Pokémon Index</h1></header>
          <input type="radio" name="choice" id="" value="id" onChange={handleChoice} />
          <label htmlFor="Id">Id</label>
          <input type="radio" name="choice" id="" value="name" onChange={handleChoice} />
          <label htmlFor="Name">Name</label>
          <input type="radio" name="choice" id="" value="types" onChange={handleChoice} />
          <label htmlFor="Types">Types</label>
          <input type="search" placeholder='Search' id="searchBar" onChange={(e) => handleChange(e)} />
          <button id='submit' onClick={(e) => handleSubmit(e)}>Submit</button>
          <div className="buttons">
            <button className="btn" onClick={(e) => changeView(e)}>All</button>
            <button className="btn" onClick={(e) => changeView(e)}>🔥</button>
            <button className="btn" onClick={(e) => changeView(e)}>⚡</button>
            <button className="btn" onClick={(e) => changeView(e)}>💧</button>
            <button className="btn" onClick={(e) => changeView(e)}>🔮</button>
            <button className="btn" onClick={(e) => changeView(e)}>🐲</button>
            <button className="btn" onClick={(e) => changeView(e)}>😀</button>
            <button className="btn" onClick={(e) => changeView(e)}>🧊</button>
            <button className="btn" onClick={(e) => changeView(e)}>🤢</button>
            <button className="btn" onClick={(e) => changeView(e)}>🧱</button>
            <button className="btn" onClick={(e) => changeView(e)}>🏕</button>
            <button className="btn" onClick={(e) => changeView(e)}>🐱‍🏍</button>
            <button className="btn" onClick={(e) => changeView(e)}>🐛</button>
          </div>


          {
            pokémon.map((item) => ({...item, id: item.id.toString()})).filter((u) => {
              return view ? u.types.includes(view) : choice ? u[
                choice].includes(input) : u
            }).map((item, k) => {
              return <User pokémon={item} key={k} />
            })
          }




        </div>



      </div>
    </>
  );
}

export default App;
