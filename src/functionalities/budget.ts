const User: any = {
  username: "soumya",
  password: 123,
  currentIncome: 25000,
  Budget: [
    { category: "groceries", allocated_amt: 2000, spent:0 },
    { category: "entertainment", allocated_amt: 4000, spent:0 },
    { category: "rent", allocated_amt: 6000,spent:0},
  ],
  savings: [
    { title: "emergency fund", target_amt: 10000, current_amt_saved: 5000 },
    { title: "trip", target_amt: 3000, current_amt_saved: 1000 },
  ],
};

export function Budget(category: String, amount: Number) {
  let amt;
  let budget = User.Budget;
  if (amount >= User.currentIncome) {
    return `Unable to set the budget as budegt is more than our income`;
  }
  budget.filter((item: any) => {
    if (item.category == category) {
      item.allocated_amt = amount;
      amt = item.allocated_amt;
    }
  });
  return `groceries budget:${amt}`;
}

export function updateBudget(category: string, amount: Number) {
  let budget = User.Budget;
  let amt;
  if (budget.some((item: { category: string }) => item.category === category)) {
    budget.filter((item: any) => {
      if (item.category == category) {
        item.allocated_amt = amount;
        amt = item.allocated_amt;
      }
    });
    return `updated:${{ category: category, allocated_amt: amt }}`;
  } else {
    budget.push({ category: category, allocated_amt: amount });
    return `updated:${budget[budget.length - 1]}`;
  }
}

export function budgetSpent(category:string, spentAmount:Number){
    
}