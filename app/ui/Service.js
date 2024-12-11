import Image from "next/image";
import lightBulb from '../img/service/light-bulb.svg';
import teamwork from '../img/service/teamwork.svg';
import electrician from '../img/service/electrician.svg';
import { palatino } from "../ui/Fonts";
import { montserrat } from "../ui/Fonts";

export default function Service() {
    return (
        <section className="services d-flex flex-column align-items-center background-page">
            <h5 className={palatino.className}>Our promise and values</h5>
            <h2 className={montserrat.className}>Committed to superior electrical services</h2>
            <div className="services-wrapper d-flex justify-content-center">
                <div className="d-flex flex-column align-items-center">
                    <Image src={lightBulb} alt="proud" width={100} height={100} />
                    <p className={montserrat.className}>We are proud of our legacy and the relationship we have built with our community.</p>
                </div>
                <div className="d-flex flex-column align-items-center">
                    <Image src={teamwork} alt="teamwork" width={100} height={100} />
                    <p className={montserrat.className}>A family owned and operated business since 1981, passing down the company through three generations.</p>
                </div>
                <div className="d-flex flex-column align-items-center">
                    <Image src={electrician} alt="trust" width={100} height={100} />
                    <p className={montserrat.className}>Trust our skilled team for honesty, quality workmanship, teamwork, safety and dependability.</p>
                </div>
            </div>
        </section>
    )
}
