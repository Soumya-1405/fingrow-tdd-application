import { addGoal } from "../functionalities/goals"
describe("should check the users saving goals",()=>{
    test("should able to add a saving goal",()=>{
        expect(addGoal("function",2000,1000)).toBe(`New goal was added successfully`)
    })
    test('should able to throw a message if the sae goal was added',()=>{
        expect(addGoal("trip",2000, 1000)).toBe(`Goal was already added to savings goals`)
    })
})