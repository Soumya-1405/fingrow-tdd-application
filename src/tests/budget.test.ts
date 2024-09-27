import { Budget } from "../functionalities/budget";
import { updateBudget } from "../functionalities/budget";

describe("Should set and track the budgets different categories",()=>{
    test("should set the budget for specific category", ()=>{
        expect(Budget('groceries', 2500)).toBe(`groceries budget:${2500}`)
    })
    test("should show a message when we set budget more than the currentIncome",()=>{
        expect(Budget('rent', 27000)).toBe(`Unable to set the budget as budegt is more than our income`)
        })
    test('should update the budget', ()=>{
        expect(updateBudget('currentbill', 1000)).toBe(`updated:${{category: 'currentbill', allocated_amt: 1000}}`)
    })
    test('should update the budget of catergory when we try to add same category instead of adding again',()=>{
        expect(updateBudget('rent',28000)).toBe(`updated:${{category: 'rent', allocated_amt: 28000}}`)
    })
    
})