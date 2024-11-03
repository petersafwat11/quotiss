import Image from "next/image";
import classes from "./page.module.css";
import AddQuoteBtn from "./ui/dashboard/addQuoteBtn/AddQuoteBtn";
import DashboardWrapper from "./ui/dashboard/dashboardWrapper/DashboardWrapper";

export default function Home() {
  return (
    <div className={"page"}>
      <div className={classes["top"]}>
        <div className={classes["first"]}>
          <h3 className={classes["title"]}>Good Afternoon, Venkat</h3>
          <p className={classes["welcome-text"]}>
            Welcome back to your team dashboard. Check out these performance
            statistics. My team
          </p>
        </div>

        <AddQuoteBtn />
      </div>
      <DashboardWrapper />
    </div>
  );
}
