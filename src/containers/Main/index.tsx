import { ReactNode } from "react";
import Footer from "../Footer";
import Header from "../Header";
import "./index.scss";

type ComponentProps = {
  children: ReactNode;
};

const Main: React.FC<ComponentProps> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Main;
