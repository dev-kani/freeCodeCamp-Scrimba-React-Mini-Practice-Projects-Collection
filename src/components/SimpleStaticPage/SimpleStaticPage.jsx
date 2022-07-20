import Header from "./Header";
import Footer from "./Footer";
import StaticPageContent from "./StaticPageContent";

const SimpleStaticPage = () => {
  return <>
    <div className="container">
      <Header />
      <StaticPageContent />
      <Footer />
    </div>
  </>;
};

export default SimpleStaticPage;
