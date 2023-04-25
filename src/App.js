import './App.css';
import McqQuiz from './questons';
import LoginPage from './login';
import StartExam from './start';
import { Route, Routes } from 'react-router-dom';
import React from 'react';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={<LoginPage />}
        />
        <Route
          path="/start"
          element={<StartExam />}
        />
        <Route path="/quiz" element={<McqQuiz />} />
      </Routes>
    </div>
  );
}

export default App;
