import { montserrat } from "../ui/Fonts";

import Service from "../ui/Service";
import Stripes from "../ui/Stripes";

import Image from "next/image";
import residential from '../img/residential/residential.jpeg';
import residential1 from '../img/residential/residential-1.jpeg';
import residential2 from '../img/residential/residential-2.jpeg';

export default function Residentail() {
    return (
        <>
            <div className="d-flex align-items-center justify-content-center main-inner residential-service">
                <h1 className={montserrat.className}>Residential Services</h1>
                <Stripes />
            </div>
            <section className="residential">
                <div className="residential-wrapper d-flex justify-content-center">
                    <div>
                        <h2 className={montserrat.className + ' text-left'}>Professional and Dependable Residential Electricians</h2>
                        <p className={montserrat.className}>
                            When the time comes to select an electrical contractor for your home, remember just one thing: experience counts.
                            Since 1981 we have served homeowners across the UK with practical expertise and electrical solutions.
                            New home construction, remodels, additions, preventive maintenance or service upgrades, our goal is to fulfill our customers needs.
                        </p>
                        <p className={montserrat.className}>
                            Our maintenance and repair electricians will never try to sell you services you don't need. We're confident when you call
                            Sparkle Electric for your electrical needs, you'll be satisfied with our finished product.
                        </p>
                    </div>
                    <Image src={residential} alt="Residential Service" />
                </div>
            </section>
            <section className="residential-capabilities text-center">
                <h2 className={montserrat.className}>Our Residential Electrical Capabilities</h2>
                <div className="text-center">
                    <Image src={residential1} alt="Construction" />
                    <p className={montserrat.className}><strong>New Residential Construction</strong></p>
                    <p className={montserrat.className}>
                        Sparkle Electric provides residential electrical contracting services to general contractors,
                        architects and developers throughout the UK.
                    </p>
                </div>
                <div className="text-center">
                    <Image src={residential2} alt="Maintenance" />
                    <p className={montserrat.className}><strong>Residential Service & Maintenance</strong></p>
                    <p className={montserrat.className}>
                        For residential customers throughout the UK, Sparkle Electric offers a full suite of service,
                        maintenance and emergency support capabilities.
                    </p>
                </div>
                <div className="text-left">
                    <ul>
                        <li className={montserrat.className}>Add, Replace, or Troubleshoot Outlets, GFCIs, Switches</li>
                        <li className={montserrat.className}>Troubleshoot or Replace Electrical Panels</li>
                        <li className={montserrat.className}>Install Ceiling Fans</li>
                        <li className={montserrat.className}>Install New LED Lighting</li>
                        <li className={montserrat.className}>Meter Upgrades</li>
                        <li className={montserrat.className}>Home Safety Check</li>
                        <li className={montserrat.className}>Smoke & Carbon Detectors</li>
                        <li className={montserrat.className}>New Appliance Wiring</li>
                    </ul>
                    <p className={montserrat.className}><strong><i>And many more!</i></strong></p>
                </div>
            </section>
            <Service />
        </>
    )
}
