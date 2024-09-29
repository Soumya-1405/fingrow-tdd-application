import { User } from "../staticData/userData";
export function addGoal(
  title: string,
  target_amt: number,
  current_amt_saved: number
) {
  let flag = 0;
  if (
    User.savings.some((item: { title: string }) => {
      if (item.title === title) {
         
      }
    })
  ) {
    flag = 1;
  } else {
    User.savings.push({
      title: title,
      target_amt: target_amt,
      current_amt_saved: current_amt_saved,
    });
    return `New goal was added successfully`;
  }
}
