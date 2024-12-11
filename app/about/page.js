import { montserrat } from "../ui/Fonts";
import { palatino } from "../ui/Fonts";

import Service from "../ui/Service";
import Stripes from "../ui/Stripes";

import Image from "next/image";
import team from '../img/about/about-team.jpeg';
import team1 from '../img/about/team1.jpeg';
import team2 from '../img/about/team2.jpeg';
import team3 from '../img/about/team3.jpeg';
import team4 from '../img/about/team4.jpeg';
import team5 from '../img/about/team5.jpeg';
import team6 from '../img/about/team6.jpeg';

export default function About() {
    return (
        <>
            <div className="d-flex align-items-center justify-content-center main-inner about">
                <h1 className={montserrat.className}>About</h1>
                <Stripes />
            </div>
            <section className="about-team">
                <div className="about-team-wrapper d-flex justify-content-center">
                    <Image src={team} alt="The team" />
                    <div>
                        <h5 className={palatino.className + ' text-left'}>family owned operating since 1981</h5>
                        <h2 className={montserrat.className + ' text-left'}>The Generational Difference</h2>
                        <p className={montserrat.className}>
                            The Sparkle family has provided expert and trustworthy electrical services to the UK for 30+ years.
                            As a family owned and operated business, we&apos;ve been open since 1981, passing the company down through three generations.
                        </p>
                        <p className={montserrat.className}>
                            We are proud of our legacy and the relationship we have built with our community. We take our responsibility seriously,
                            treating every customer like we would treat a member of our own family.
                        </p>
                    </div>
                </div>
            </section>
            <section className="about-meet-team text-center">
                <h2 className={montserrat.className}>Meet The Team</h2>
                <div className="about-meet-team-wrapper d-flex justify-content-center">
                    <div>
                        <Image src={team1} width={234} height={234} alt="John Sparkle" />
                        <p className={montserrat.className}><strong>John Sparkle</strong></p>
                        <p className={montserrat.className}><i>Founder & President</i></p>
                    </div>
                    <div>
                        <Image src={team2} width={234} height={234} alt="Mark Sparkle" />
                        <p className={montserrat.className}><strong>Mark Sparkle</strong></p>
                        <p className={montserrat.className}><i>Commercial Division</i></p>
                    </div>
                    <div>
                        <Image src={team3} width={234} height={234} alt="Paul Sparkle" />
                        <p className={montserrat.className}><strong>Paul Sparkle</strong></p>
                        <p className={montserrat.className}><i>Service Manager</i></p>
                    </div>
                    <div>
                        <Image src={team4} width={234} height={234} alt="Matt Sparkle" />
                        <p className={montserrat.className}><strong>Matt Sparkle</strong></p>
                        <p className={montserrat.className}><i>Project Manager</i></p>
                    </div>
                    <div>
                        <Image src={team5} width={234} height={234} alt="Mary Sparkle" />
                        <p className={montserrat.className}><strong>Mary Sparkle</strong></p>
                        <p className={montserrat.className}><i>Office Manager</i></p>
                    </div>
                    <div>
                        <Image src={team6} width={234} height={234} alt="Bob Sparkle" />
                        <p className={montserrat.className}><strong>Bob Sparkle</strong></p>
                        <p className={montserrat.className}><i>Warehouse Manager</i></p>
                    </div>
                </div>
            </section>
            <Service />
        </>
    )
}
