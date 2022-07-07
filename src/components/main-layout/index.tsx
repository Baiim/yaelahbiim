import Footer from "./footer";
import Header from "./header";
import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const MainLayout = ({ children }: Props) => {
  return (
    <>
      <Header />
      <Box as="main">{children}</Box>
      <Footer />
    </>
  );
};

export default MainLayout;
