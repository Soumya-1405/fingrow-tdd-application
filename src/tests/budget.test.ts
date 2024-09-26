import { Budget } from "../functionalities/budget";

describe("Should set and track the budgets different categories",()=>{
    test("should set the budget for specific category", ()=>{
        expect(Budget('groceries', 2500)).toBe(`groceries budget:${2500}`)
    })

})