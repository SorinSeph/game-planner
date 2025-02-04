import React from "react";

interface TabBarProps {
    onTabChange: (tab: string) => void;
}

export default function TabBar({ onTabChange }: TabBarProps) {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <button onClick={() => onTabChange("gamePlanner")}>Game Planner</button>
            <button onClick={() => onTabChange("glossary")}>Glossary</button>
            <button onClick={() => onTabChange("events")}>Events</button>
        </div>
    );
}