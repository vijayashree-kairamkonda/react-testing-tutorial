import React from "react";
import "./App.css";
import { Application } from "./components/Application/application";
import { Counter } from "./components/counter/counter";
import { MuiMode } from "./components/mui/mui";
import { Skills } from "./components/skills/skills";
import { SkillProps } from "./components/skills/skills.types";
import { AppProviders } from "./providers/AppProvider";

function App() {
  return (
    <AppProviders>
      <div className="App">
        <MuiMode />
      </div>
    </AppProviders>
  );
}

export default App;
