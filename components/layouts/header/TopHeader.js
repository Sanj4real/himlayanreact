import { Row, Col } from "antd";
import Link from "next/link";
import { BsFillTelephoneFill } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";

function TopHeader() {
  const SITEINFO = [
    {
      icon: <BsFillTelephoneFill />,
      path: "#!",
      name: "+9770921738",
    },
    {
      icon: <AiOutlineMail />,
      path: "#!",
      name: "info@himalayancircuit.de",
    },
  ];
  return (
    <>
      <div className="bg-primaryBlue ">
        <div className="container">
          <div className="flex justify-between items-center text-sm text-white ">
            <ul className="flex items-center">
              {SITEINFO.map((item, index) => (
                <li
                  key={index}
                  item={item}
                  className="py-3 m-0 first:pr-5 first:mr-5 first:divide-white first:border-r"
                >
                  <div className="flex items-center space-x-2 group text-sm">
                    <div>{item.icon}</div>
                    <Link href={item.path}>
                      <a>{item.name}</a>
                    </Link>
                  </div>
                </li>
              ))}
            </ul>
            <ul className="flex items-center text-white text-sm">
              <li className="py-3 m-0 border-r divide-white first:pr-5 first:mr-5">
                <div className="text-white text-sm">Gov. Reg: 143047/072/073</div>
              </li>
              <li className="py-3 m-0">
                <div className="flex items-center space-x-2 text-sm">
                  <div>
                    <BsFillTelephoneFill />
                  </div>
                  <div>Enquiry Now</div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default TopHeader;
