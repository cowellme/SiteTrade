import React, { useState } from "react";

import { Start } from "./MainComponent";

import { NewGameI, NewGameII, NewGameIII, NewGameVI, NewGameV, NewGameIV } from "./MainComponent";


function Home() {

  const [newGameI, setNewGameI] = useState(false);
  const [newGameII, setNewGameII] = useState(false);
  const [newGameIII, setNewGameIII] = useState(false);
  const [newGameVI, setNewGameVI] = useState(false);
  const [newGameV, setNewGameV] = useState(false);
  const [newGameIV, setNewGameIV] = useState(false);
  const [newGameIIV, setNewGameIIV] = useState(false);

  const [namePlayer, setNamePlayer] = useState(false);
  const [taskPlayer, setTaskPlayer] = useState(false);

  var content = Start(setNewGameI);

  if (newGameI) {
    content = NewGameI(setNewGameII);
  }

  if (newGameII) {
    content = NewGameII(setNewGameIII);
  }

  if (newGameIII) {
    content = NewGameIII(setNewGameVI, setNamePlayer);
  }

  if (newGameVI) {
    content = NewGameVI(setNewGameV, setTaskPlayer);
  }

  if (newGameV) {
    content = NewGameV(setNewGameIV, setTaskPlayer);
  }

  if (newGameIV) {
    content = NewGameIV(setNewGameIIV, setTaskPlayer);
  }

  if (newGameIIV) {
  
  }

  return (
    <>
      <div className="window">{content}</div>
    </>
  );
}

export default Home;
