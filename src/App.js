import React from "react";
import Profile from "./components/Profile/Profile";
import PricingPlan from "./components/PricingPlan/PricingPlan";
import pricingPlanItems from "./components/PricingPlan/pricing-plan.json";
import TransactionHistory from "./components/TransactionHistory/TransactionHistory";
import transactions from "./components/TransactionHistory/transactions.json";
import Stats from "./components/Stats/Stats";
import user from "./db/user.json";
import stats from "./db/stats.json";
import "./App.css";

const App = () => (
  <div>
    <Profile user={user} />
    <PricingPlan items={pricingPlanItems} />
    <TransactionHistory items={transactions} />
    <Stats title="Upload stats" stats={stats} />
  </div>
);

export default App;
