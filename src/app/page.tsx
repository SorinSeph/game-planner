<<<<<<< HEAD
'use client';

import React from "react";
import GamePlanner from "../components/game-planner/game-planner";

const HomePage: React.FC = () => {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Game Planner</h1>
      <GamePlanner />
=======
"use client";

import React, { useState } from "react";
import GamePlanner from "../components/game-planner/game-planner";
import TabBar from "../components/tab-bar/tab-bar";
import Glossary from "../components/glossary/glossary";

const HomePage: React.FC = () => {
  const [activeTab, setActiveTab] = useState("gamePlanner");

  return (
    <div style={{ backgroundColor: "rgb(25, 30, 80)" }}>
      <h1 style={{ textAlign: "center" }}>Game Planner</h1>
      <TabBar onTabChange={setActiveTab} />
      {activeTab === "gamePlanner" && <GamePlanner />}
      {activeTab === "glossary" && <Glossary />}
      {/* For "events" tab, you can add the corresponding component */}
>>>>>>> b484a6c8e2d339889b6a9dcdfe3be74b3a530ade
    </div>
  );
};

export default HomePage;