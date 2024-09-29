import { User } from "../staticData/userData";
export function alert(title: string) {
  let per: any;
  if (User.savings.some((item: { title: string }) => item.title === title)) {
    User.savings.filter((item: any) => {
      if (item.title == title) {
        per = (item.current_amt_saved / item.target_amt) * 100;
      }
    });
  }
  if (per >= 80) {
    return `hurray!! you have reached ${per} of targeted amount`;
  }
}
