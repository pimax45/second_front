import Header from "./Header";
import Center_2 from "./Center_main";
import Connect_with_us from "./Connect_with_us";
import Menu from "./Menu";
//import Out_put from "./Text_out";

export default function MainPage_center() {
  return (
    <div>
      <section>
        <Header />
      </section>
      <section>
        <Center_2 />
      </section>
      <section>
        <Connect_with_us />
      </section>
      <section>
        <Menu />
      </section>
    </div>
  );
}
