import Stripes from "./ui/Stripes";
import Service from "./ui/Service";
import Image from "next/image";
import Link from "next/link";

// import all fonts for optimized rendering

import { palatino } from "./ui/Fonts";
import { openSans } from "./ui/Fonts";
import { montserrat } from "./ui/Fonts";

// import images for optimized rendering

import project1 from './img/home/1.jpeg';
import project2 from './img/home/2.jpeg';
import project3 from './img/home/3.jpeg';
import project4 from './img/home/4.jpeg';

export default function Home() {
  return (
    <>
      <main className="d-flex justify-content-center align-items-center">
        <h1 className={openSans.className}>Proudly serving our service since 1981!</h1>
        <Stripes />
      </main>
      <Service />
      <section className="services-image d-flex justify-content-center">
        <div>
          <h3 className={montserrat.className + ' text-left'}>Residential</h3>
          <p className={montserrat.className}>
            When the time comes to select an electrical contractor for your home, remember just one thing: experience counts.
            Since 1981 we have served homeowners with practical expertise and electrical solutions. New construction, remodel,
            addition, preventive maintenance or service upgrades.
          </p>
          <Link href='/residential' className={montserrat.className + ' button'}>Learn more</Link>
        </div>
        <div className="text-right">
          <h3 className={montserrat.className + ' text-right'}>Commercial</h3>
          <p className={montserrat.className}>
            Commercial jobs are always about high pressure, short deadlines and tight budgets. The next time you hire an electrical
            contractor, choose one that, for more than 40 years, has consistently and reliably delivered in this challenging environment.
          </p>
          <Link href='/commercial' className={montserrat.className + ' button'}>Learn more</Link>
        </div>
      </section>
      <section className="projects-wrapper text-center">
        <h5 className={palatino.className}>explore our top quality work</h5>
        <h2 className={montserrat.className}>Our latest projects</h2>
        <div className="projects d-flex">
          <Link href='/projects' className="project text-left">
            <Image src={project1} alt="Frisco" />
            <h6 className={palatino.className + ' text-left'}>London</h6>
            <p className={montserrat.className}>Frisco Paintball</p>
            <small className={openSans.className}>Learn More &gt;</small>
          </Link>
          <Link href='/projects' className="project text-left">
            <Image src={project2} alt="Sunbelt" />
            <h6 className={palatino.className + ' text-left'}>Aberdeen</h6>
            <p className={montserrat.className}>Sunbelt Pools</p>
            <small className={openSans.className}>Learn More &gt;</small>
          </Link>
          <Link href='/projects' className="project text-left">
            <Image src={project3} alt="CiboDivino" />
            <h6 className={palatino.className + ' text-left'}>Manchester</h6>
            <p className={montserrat.className}>CiboDivino Marketplace</p>
            <small className={openSans.className}>Learn More &gt;</small>
          </Link>
          <Link href='/projects' className="project text-left">
            <Image src={project4} alt="Splash Dayz" />
            <h6 className={palatino.className + ' text-left'}>Exeter</h6>
            <p className={montserrat.className}>Splash Dayz Waterpark</p>
            <small className={openSans.className}>Learn More &gt;</small>
          </Link>
        </div>
      </section>
    </>
  );
}
