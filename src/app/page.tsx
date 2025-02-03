'use client';

import React from "react";
import GamePlanner from "../components/game-planner/game-planner";

const HomePage: React.FC = () => {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Game Planner</h1>
      <GamePlanner />
    </div>
  );
};

export default HomePage;