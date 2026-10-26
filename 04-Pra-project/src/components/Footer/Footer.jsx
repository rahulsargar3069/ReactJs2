import "../Footer/Footer.css";
import {RiInstagramLine , RiTwitterLine , RiMessengerLine , RiReactjsLine  } from "@remixicon/react";

const Footer = () => {
  return (
    <div className="footer">
        <div className="f1">
         <img src="https://cdn.vectorstock.com/i/500p/90/63/qr-code-icon-isolated-on-white-background-vector-50759063.jpg" alt="" />
         <p>Amrut CHS , Room No - 3 , Sector - 14 , Kalamboli , Navi Mumbai - 410218 </p>
        </div >
        <div className="f2">
        <RiInstagramLine />
        <RiTwitterLine />
        <RiMessengerLine />
        <RiReactjsLine />
        </div>
    </div>
  )
}

export default Footer
