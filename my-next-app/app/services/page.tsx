import Link from "next/link";

const Services =()=>{
    return (
        <div className="services">
            <h1>Services</h1>
            <p>We offer a wide range of services to meet your needs.</p>

            <h3>All Services</h3>

            <p><Link href="/services/web-dev">Web Development</Link></p>
            <p><Link href="/">App Development</Link></p>
            <p><Link href="/">App/Web Development</Link></p>
            <p><Link href="/">SEO</Link></p>

        </div>
    )
}

export default Services;