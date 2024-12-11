import { montserrat } from "../ui/Fonts";
import { palatino } from "../ui/Fonts";

import Service from "../ui/Service";
import Stripes from "../ui/Stripes";

import Link from "next/link";
import Image from "next/image";
import commercial from '../img/commercial/commercial.jpg';
import commercial1 from '../img/commercial/commercial1.jpeg';
import commercial2 from '../img/commercial/commercial2.jpeg';

export default function Commercial() {
    return (
        <>
            <div className="d-flex align-items-center justify-content-center main-inner commercial-service">
                <h1 className={montserrat.className}>Commercial Services</h1>
                <Stripes />
            </div>
            <section className="commercial">
                <div className="commercial-wrapper d-flex justify-content-center">
                    <div>
                        <h2 className={montserrat.className + ' text-left'}>Professional and Efficient Commercial Electrical Contractors</h2>
                        <p className={montserrat.className}>
                            For more than four decades, Sparkle Electric has maintained a reputation for excellence, achieved by ensuring our customers receive the
                            highest levels of craftsmanship, value and reliability on every job.
                        </p>
                        <p className={montserrat.className}>
                            We service what we build, and will remain your source for electrical service and maintenance far beyond your project's completion.
                        </p>
                    </div>
                    <Image src={commercial} alt="Commercial Service" />
                </div>
            </section>
            <section className="commercial-capabilities text-center">
                <h2 className={montserrat.className}>Our Commercial Electrical Capabilities</h2>
                <div className="text-center">
                    <Image src={commercial1} alt="Construction" />
                    <p className={montserrat.className}><strong>New Commercial Construction</strong></p>
                    <p className={montserrat.className}>
                        Sparkle Electric provides commercial and industrial electrical contracting services to general contractors,
                        commercial and industrial facility owners, local governments and developers throughout the UK.
                    </p>
                </div>
                <div className="text-center">
                    <Image src={commercial2} alt="Maintenance" />
                    <p className={montserrat.className}><strong>Commercial Service & Maintenance</strong></p>
                    <p className={montserrat.className}>
                        For commercial and industrial customers throughout the UK, Sparkle Electric offers a full suite of service,
                        maintenance and emergency support capabilities. Offerings range from renovations, LED retrofits, tenant finish projects
                        and new additions; to responding to emergency calls.
                    </p>
                </div>
                <div>
                    <h5 className={palatino.className}>our reputation is built upon four decades of excellence</h5>
                    <p className={montserrat.className}><strong><i>We are ready to work with you!</i></strong></p>
                    <Link href='/contacts' className="button text1-bg">Contact us</Link>
                </div>
            </section>
            <Service />
        </>
    )
}
