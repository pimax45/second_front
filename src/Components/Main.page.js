import Header from "./Header";
import My_posts from "./Profile/My_posts";
import Menu from "./Menu";
import { NavLink } from "react-router-dom";

export default function MainPage() {
  return (
    <div>
      <section>
        <Header />
        <Menu />
      </section>
    </div>
  );
}
