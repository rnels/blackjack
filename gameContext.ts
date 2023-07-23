import React from "react";

enum GAME_STATE {
  NOT_STARTED = 0,
  IN_PROGRESS = 1,
  COMPLETED = 2,
}

export const GameContext = React.createContext<GAME_STATE>(0)
