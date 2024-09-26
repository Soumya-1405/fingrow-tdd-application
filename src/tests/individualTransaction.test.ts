import { individualTransaction } from "../functionalities/individualTransaction";
describe('Should get the transactions of the a user', () => {
    test('should show the current balance when the amount gets debited', () => {
      expect(individualTransaction("debit",2000)).toBe(`current balence: ${3000}`)
    });
    test('should get the current balance when the amounts gets credited', ()=>{
      expect(individualTransaction("credit", 3000)). toBe(`current balence: ${8000}`)
    })
    test('should show the message when we debit money when we have debited amount more than account balance', ()=>{
      expect(individualTransaction("debit",8000)). toBe(`Unable to make the transaction as current balance is less than the debited amount`)
    })
  });