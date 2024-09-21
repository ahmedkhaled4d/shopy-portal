import { Alert } from "antd";
import TopMenu from "./TopMenu";
import Marquee from "react-fast-marquee";

function Header() {
  return (
    <>
      <Alert
        banner
        message={
          <Marquee pauseOnHover gradient={false}>
            Customers independently place orders through WhatsApp, specifying
            their choices and scheduling, which minimizes repetitive inquiries
          </Marquee>
        }
      />
      <TopMenu />
    </>
  );
}

export default Header;
