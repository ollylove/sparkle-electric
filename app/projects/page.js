import { montserrat } from "../ui/Fonts";
import { palatino } from "../ui/Fonts";

import Stripes from "../ui/Stripes";

import Image from "next/image";
import p1 from '../img/projects/1.jpeg';
import p2 from '../img/projects/2.jpeg';
import p3 from '../img/projects/3.jpeg';
import p4 from '../img/projects/4.jpeg';

export default function Contacts() {
    return (
        <>
            <div className="d-flex align-items-center justify-content-center main-inner projectsInner">
                <h1 className={montserrat.className}>Projects</h1>
                <Stripes />
            </div>
            <section className="projectsInner-wrapper d-flex justify-content-center">
                <div className="projectsInner-project text-center">
                    <Image src={p1} alt="frisco" />
                    <div className="text-left">
                        <h6 className={montserrat.className}>Project Details</h6>
                        <p className={palatino.className}>
                            <strong className={montserrat.className}>Client</strong>
                            Frisco Paintball
                        </p>
                        <p className={palatino.className}>
                            <strong className={montserrat.className}>Location</strong>
                            London, England
                        </p>
                        <p className={palatino.className}>
                            <strong className={montserrat.className}>Completion date</strong>
                            April 2017
                        </p>
                        <p className={palatino.className}>
                            <strong className={montserrat.className}>General Contractor</strong>
                            Commercial Construction Group Ltd
                        </p>
                    </div>
                </div>
                <div className="projectsInner-project text-center">
                    <Image src={p2} alt="sunbelt" />
                    <div className="text-left">
                        <h6 className={montserrat.className}>Project Details</h6>
                        <p className={palatino.className}>
                            <strong className={montserrat.className}>Client</strong>
                            Sunbelt Pools
                        </p>
                        <p className={palatino.className}>
                            <strong className={montserrat.className}>Location</strong>
                            Aberdeen, Scotland
                        </p>
                        <p className={palatino.className}>
                            <strong className={montserrat.className}>Completion date</strong>
                            August 2018
                        </p>
                        <p className={palatino.className}>
                            <strong className={montserrat.className}>General Contractor</strong>
                            Commercial Construction Group Ltd
                        </p>
                    </div>
                </div>
                <div className="projectsInner-project text-center">
                    <Image src={p3} alt="cibodivino" />
                    <div className="text-left">
                        <h6 className={montserrat.className}>Project Details</h6>
                        <p className={palatino.className}>
                            <strong className={montserrat.className}>Client</strong>
                            CiboDivino Marketplace
                        </p>
                        <p className={palatino.className}>
                            <strong className={montserrat.className}>Location</strong>
                            Manchester, England
                        </p>
                        <p className={palatino.className}>
                            <strong className={montserrat.className}>Completion date</strong>
                            November 2019
                        </p>
                        <p className={palatino.className}>
                            <strong className={montserrat.className}>General Contractor</strong>
                            Commercial Construction Group Ltd
                        </p>
                    </div>
                </div>
                <div className="projectsInner-project text-center">
                    <Image src={p4} alt="splash dayz" />
                    <div className="text-left">
                        <h6 className={montserrat.className}>Project Details</h6>
                        <p className={palatino.className}>
                            <strong className={montserrat.className}>Client</strong>
                            The Town of White Settlements
                        </p>
                        <p className={palatino.className}>
                            <strong className={montserrat.className}>Location</strong>
                            Exeter, England
                        </p>
                        <p className={palatino.className}>
                            <strong className={montserrat.className}>Completion date</strong>
                            May 2020
                        </p>
                        <p className={palatino.className}>
                            <strong className={montserrat.className}>General Contractor</strong>
                            Hawaiian Falls Ltd
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}
