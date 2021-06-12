import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import BalancePage from './BalancePage';
import TransactionPage from './TransactionPage';

function App() {
  return (
    <Router>
      <Switch>
       
        <Route exact   path="/transaction">
          <TransactionPage />
        </Route>
        <Route exact path="/">
          <BalancePage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
