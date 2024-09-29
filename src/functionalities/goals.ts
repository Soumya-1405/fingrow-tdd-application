import { User } from "../staticData/userData";
export function addGoal(
  title: string,
  target_amt: number,
  current_amt_saved: number
) {
  let flag = 0;
  if (User.savings.some((item: { title: string }) => item.title === title)) {
    return `Goal was already added to savings goals`;
  } else {
    User.savings.push({
      title: title,
      target_amt: target_amt,
      current_amt_saved: current_amt_saved,
    });
    return `New goal was added successfully`;
  }
}

export function checkProgress(title: string) {
  let leftAmount;
  let f = 0;
  if (User.savings.some((item: { title: string }) => item.title === title)) {
    console.log(title);
    User.savings.filter((item: any) => {
      if (item.title == title) {
        leftAmount = item.target_amt - item.current_amt_saved;
        f = 0;
        if (leftAmount == item.target_amt) {
          f = 1;
        }
      }
    });
  }
  if (f == 0) {
    return `yeah! you need to save ${leftAmount} more rupees`;
  } else {
    return `you haven't saved for your goal`;
  }
}
