import Header from "./Header";
import Footer from "./Footer";
import Banner from "../Banner";

export default function Layout(props) {
  return (
    <>
      <Header />
      <main className="container">
        <div className="row">
          <div className="col">
            <Banner />
            {props.children}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
