import Header from "./Header";
import Footer from "./Footer";
import Static_Page_Content from "./Static_Page_Content";

const Simple_Static_Page = () => {
  return <>
      <div className="container">
        <Header />
        <Static_Page_Content />
        <Footer />
      </div>
  </>;
};

export default Simple_Static_Page;
