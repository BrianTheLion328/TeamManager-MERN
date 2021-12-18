import "./App.css";
import { Router } from "@reach/router";
import ListPlayers from "./components/ListPlayers";
import AddPlayer from "./components/AddPlayer";
import { useState, useEffect } from "react";
import PlayerStatus from "./components/PlayerStatus";
import Nav from "./components/Nav";
import axios from 'axios';

function App() {

  const [players, setPlayers] = useState([])
  const [listPageIsActive, setListPageIsActive] = useState(true);
  const [managePlayerStatusTabIsActive, setManagePlayerStatusTabIsActive] = useState(false);

  useEffect( () => {
    axios.get("http://localhost:8000/api/players")
    .then(res => setPlayers(res))
    .catch(err => console.log(err.response) )
  })

  return (
    <div>
      <Nav
        managePlayerStatusTabIsActive={managePlayerStatusTabIsActive}
        setManagePlayerStatusTabIsActive={setManagePlayerStatusTabIsActive}
      />
      <Router>
        <ListPlayers
          path="/players/list"
          default
          listPageIsActive={listPageIsActive}
          setListPageIsActive={setListPageIsActive}
          setManagePlayerStatusTabIsActive={setManagePlayerStatusTabIsActive}
        />
        <AddPlayer
          player={players}
          setPlayers={setPlayers}
          path="/players/addplayer"
          listPageIsActive={listPageIsActive}
          setListPageIsActive={setListPageIsActive}
          setManagePlayerStatusTabIsActive={setManagePlayerStatusTabIsActive}
        />
        <PlayerStatus
          path="/status/game/:gameId"
          setManagePlayerStatusTabIsActive={setManagePlayerStatusTabIsActive}
        />
      </Router>
    </div>
  );
}

export default App;
