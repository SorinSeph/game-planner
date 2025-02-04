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
    </div>
  );
};

export default HomePage;