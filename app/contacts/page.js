import { montserrat } from "../ui/Fonts";

import Stripes from "../ui/Stripes";

export default function Contacts() {
    return (
        <>
            <div className="d-flex align-items-center justify-content-center main-inner contact">
                <h1 className={montserrat.className}>Contacts</h1>
                <Stripes />
            </div>
            <iframe className="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2233987.71935724!2d-5.58300616551146!3d53.45834425092436!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x25a3b1142c791a9%3A0xc4f8a0433288257a!2sUnited%20Kingdom!5e0!3m2!1sen!2suk!4v1733929622498!5m2!1sen!2suk" allowFullScreen scrollwheel='false' loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </>
    )
}
