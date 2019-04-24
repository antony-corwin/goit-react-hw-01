import React from "react";
import Profile from "./components/Profile/Profile";
import PricingPlan from "./components/PricingPlan/PricingPlan";
import pricingPlanItems from "./components/PricingPlan/pricing-plan.json";
import TransactionHistory from "./components/TransactionHistory/TransactionHistory";
import transactions from "./components/TransactionHistory/transactions.json";
import Stats from "./components/Stats/Stats";
import "./App.css";

const items = pricingPlanItems;

const user = {
  name: "Jacques Gluke",
  tag: "@jgluke",
  location: "Ocho Rios, Jamaica",
  avatar:
    "http://okcolab.sasquatchstudio.co/wp-content/uploads/2017/05/avatar-sample.jpg",
  stats: {
    followers: 5603,
    views: 4827,
    likes: 1308
  }
};

const stats = [
  { id: "id-1", label: ".docx", percentage: 22 },
  { id: "id-2", label: ".pdf", percentage: 4 },
  { id: "id-3", label: ".mp3", percentage: 17 },
  { id: "id-4", label: ".psd", percentage: 47 },
  { id: "id-5", label: ".pdf", percentage: 10 }
];

const App = () => (
  <div>
    <Profile user={user} />
    <PricingPlan items={items} />
    <TransactionHistory items={transactions} />
    <Stats title="Upload stats" stats={stats} />
  </div>
);

export default App;
