import { alert } from "../functionalities/alert";

describe("should throw a aleert when user savings reached the targeted amount",()=>{
    test("shiuld",()=>{
        expect(alert("emergency fund")).toBe(`hurray!! you have reached ${83.33333333333334} of targeted amount`);
    })
})