import { User } from "../staticData/userData";

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
    budget.push({ category: category, allocated_amt: amount, spent: 0 });
    return `updated:${budget[budget.length - 1]}`;
  }
}

export function budgetSpent(category: string, spentAmount: number) {
  let budget = User.Budget;
  let amt;
  let f = 0;
  if (budget.some((item: { category: string }) => item.category === category)) {
    budget.filter((item: any) => {
      if (item.category == category) {
        if (spentAmount > item.allocated_amt) {
          f = 1;
        }
        item.spent = item.spent + spentAmount;
        amt = item.allocated_amt;
      }
    });
  }
  if (f == 1) {
    return `you can't update the allocated amount`;
  } else {
    return `spentAmount:${{
      category: category,
      allocated_amt: amt,
      spentAmount: spentAmount,
    }}`;
  }
}
// budgetSpent("entertainment", 1000);
