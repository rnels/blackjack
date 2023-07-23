import React from "react";

enum GAME_STATE {
  NOT_STARTED = 0,
  PLAYER_START = 1,
  DEALER_START = 2,
  PLAYER_TURN = 3,
  DEALER_TURN = 4,
  PLAYER_WIN = 5,
  DEALER_WIN = 6,
  NOBODY_WIN = 7, // TODO: Implement
  CHECKING_BUST = 10, // TODO: Implement(?)
}

export const GameContext = React.createContext<GAME_STATE>(0)
