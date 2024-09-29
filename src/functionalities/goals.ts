import { User } from "../staticData/userData";
export function addGoal(title:string, target_amt:number, current_amt_saved:number){
    let flag =0;
    if ((User.savings).some((item: { title: string }) => item.title === title)) {
       return `Goal was already added to savings goals`     
    }
    else{
        (User.savings).push({title:title, target_amt:target_amt, current_amt_saved:current_amt_saved});
        return `New goal was added successfully`
    }
}