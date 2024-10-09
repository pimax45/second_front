import Header from "./Header";
import Center_1 from "./Center";
import Connect_with_us from "./Connect_with_us";
import Menu from "./Menu";
//import Out_put from "./Text_out";

export default function MainPage() {
  return (
    <div>
      <section>
        <Header />
      </section>
      <section>
        <Center_1 />
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
