import { montserrat, openSans } from "./Fonts";
import Link from "next/link";
import Image from "next/image";
import logo from '../img/logo.png';
import location from '../img/icons/location.svg';
import phone from '../img/icons/phone.svg';
import email from '../img/icons/email.svg';
import times from '../img/icons/times.svg';
import fb from '../img/icons/fb.svg';
import yt from '../img/icons/yt.svg';
import yelp from '../img/icons/yelp.svg';

export default function Footer() {
    return (
        <footer>
            <div className="footer-container">
                <div className="logo-box">
                    <Image src={logo} width='250' alt="Sparkle logo" />
                    <p className={montserrat.className + " d-flex align-items-center"}>
                        <Image src={location} width={24} height={24} alt="location" />
                        123 High Street<br />
                        UK0 0GB - UK
                    </p>
                    <p className={montserrat.className + " d-flex align-items-center"}>
                        <Image src={phone} width={24} height={24} alt="phone" />
                        123-456-789
                    </p>
                    <p className={montserrat.className + " d-flex align-items-center"}>
                        <Image src={times} width={24} height={24} alt="times" />
                        Mon - Fri: 7AM - 5PM<br />
                        Sat - Sun: Closed
                    </p>
                    <p className={montserrat.className + " d-flex align-items-center"}>
                        <Image src={email} width={24} height={24} alt="email" />
                        Sparkle@Sparkleelectric.com
                    </p>
                </div>
                <div className="about-box">
                    <h4 className={montserrat.className + ' text-left'}>About</h4>
                    <p className={montserrat.className}>
                        The Sparkle family has provided expert and trustworthy electrical services to the UK since 1981.
                        Whether you need help with new construction, a repair, or an electrical upgrade, we&apos;ll provide with high quality work done quickly.
                    </p>
                </div>
                <div className="findus-box">
                    <h4 className={montserrat.className + ' text-left'}>Find Us</h4>
                    <Link href='#'><Image src={fb} width={15} height={15} alt="FB" /></Link>
                    <Link href='#'><Image src={yt} width={15} height={15} alt="YT" /></Link>
                    <Link href='#'><Image src={yelp} width={15} height={15} alt="Yelp" /></Link>
                    <p>Thank you<br />for choosing us!</p>
                </div>
            </div>
            <div className="copy-right"><p className={openSans.className + ' text-center'}>Copyright &copy; Sparkle Electric</p></div>
        </footer>
    )
}
