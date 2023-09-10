import React from 'react'
import JobListing from './JobListing';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const JobPortal = () => {
    const Jobs = [
        {
          id: 1,
          title: "Software Engineer",
          company: "TechCo",
          location: "San Francisco, CA",
          type: "Full-time",
          description:
            "Join our team of talented engineers to develop cutting-edge software solutions. As a Software Engineer at TechCo, you'll have the opportunity to work on exciting projects, collaborate with a diverse team, and make a significant impact on the tech industry. We're looking for individuals with a Bachelor's degree in Computer Science and 3+ years of software development experience. Join us and be part of the future of technology.",
          requirements: "Bachelor's degree in Computer Science, 3+ years of experience in software development",
          salary: "$100,000 - $120,000 per year",
          image: "https://shorturl.at/gprs7",
        },
        {
          id: 2,
          title: "Data Analyst",
          company: "DataTech",
          location: "New York, NY",
          type: "Contract",
          description:
            "Join our team as a Data Analyst at DataTech and play a crucial role in analyzing and interpreting data to help our clients make informed decisions. In this role, you'll use your strong data analysis skills to extract insights and provide valuable recommendations. We're looking for candidates with a Bachelor's degree in Statistics or a related field. If you're passionate about data and analytics, we want to hear from you.",
          requirements: "Bachelor's degree in Statistics or related field, strong data analysis skills",
          salary: "$80,000 - $90,000 per year",
          image: "https://shorturl.at/ctIN7",
        },
        {
          id: 3,
          title: "UX/UI Designer",
          company: "DesignHub",
          location: "Los Angeles, CA",
          type: "Full-time",
          description:
            "Are you a creative individual with a passion for design? Join DesignHub as a UX/UI Designer and work on creating intuitive and visually appealing user interfaces for web and mobile applications. In this role, you'll have the opportunity to showcase your design skills and make a significant impact on user experiences. We're seeking candidates with a Bachelor's degree in Design or a related field and proficiency in design tools.",
          requirements: "Bachelor's degree in Design or related field, proficiency in design tools",
          salary: "$90,000 - $110,000 per year",
          image: "https://shorturl.at/ajyW6",
        },
        {
          id: 4,
          title: "Marketing Manager",
          company: "MarketPro",
          location: "Chicago, IL",
          type: "Full-time",
          description:
            "Join MarketPro as a Marketing Manager and take the lead in developing and executing marketing strategies to drive growth and brand awareness. In this role, you'll have the opportunity to make a significant impact on our company's success. We're looking for candidates with a Bachelor's degree in Marketing and 5+ years of marketing experience.",
          requirements: "Bachelor's degree in Marketing, 5+ years of marketing experience",
          salary: "$80,000 - $100,000 per year",
          image: "https://shorturl.at/rJR18",
        },
        {
          id: 5,
          title: "Customer Support Specialist",
          company: "SupportCo",
          location: "Austin, TX",
          type: "Part-time",
          description:
            "Join SupportCo as a Customer Support Specialist and provide excellent customer service while assisting customers with their inquiries. In this role, you'll be the front line of our customer interactions, ensuring a positive experience. We're seeking candidates with a high school diploma and strong communication skills.",
          requirements: "High school diploma, strong communication skills",
          salary: "$15 - $20 per hour",
          image: "https://shorturl.at/ruxH1",
        },
        {
          id: 6,
          title: "Graphic Designer",
          company: "Artistic Designs",
          location: "Seattle, WA",
          type: "Contract",
          description:
            "Join Artistic Designs as a Graphic Designer and unleash your creativity by designing graphics and visuals for marketing materials and digital content. In this role, you'll have the opportunity to showcase your design skills and contribute to our creative projects. We're looking for candidates with a Bachelor's degree in Graphic Design and proficiency in design software.",
          requirements: "Bachelor's degree in Graphic Design, proficiency in design software",
          salary: "$30 - $40 per hour",
          image: "https://shorturl.at/kCMXZ",
        },
        {
          id: 7,
          title: "Accountant",
          company: "FinanceCorp",
          location: "Dallas, TX",
          type: "Full-time",
          description:
            "Join FinanceCorp as an Accountant and take on the responsibility of managing financial records, preparing reports, and ensuring compliance with regulations. In this role, you'll play a critical role in our financial operations. We're looking for candidates with a Bachelor's degree in Accounting, and CPA certification is preferred.",
          requirements: "Bachelor's degree in Accounting, CPA certification preferred",
          salary: "$60,000 - $80,000 per year",
          image: "https://shorturl.at/arMPT",
        },
        {
          id: 8,
          title: "Sales Representative",
          company: "SalesPro",
          location: "Miami, FL",
          type: "Full-time",
          description:
            "Join SalesPro as a Sales Representative and be part of our dynamic sales team. You'll generate sales leads, build client relationships, and achieve sales targets. We're seeking candidates with a Bachelor's degree, and sales experience is preferred. This role offers a competitive base salary plus commission.",
          requirements: "Bachelor's degree, sales experience preferred",
          salary: "$50,000 - $70,000 per year (plus commission)",
          image: "https://shorturl.at/fqFY5",
        },
        {
          id: 9,
          title: "Human Resources Manager",
          company: "HR Solutions",
          location: "Denver, CO",
          type: "Full-time",
          description:
            "Join HR Solutions as a Human Resources Manager and lead HR functions, including recruitment, employee relations, and compliance. In this role, you'll play a pivotal role in shaping our workforce and ensuring HR compliance. We're seeking candidates with a Bachelor's degree in HR or a related field and 5+ years of HR experience.",
          requirements: "Bachelor's degree in HR or related field, 5+ years of HR experience",
          salary: "$70,000 - $90,000 per year",
          image: "https://shorturl.at/gGUZ5",
        },
        {
          id: 10,
          title: "Delivery Driver",
          company: "FastCourier",
          location: "Phoenix, AZ",
          type: "Part-time",
          description:
            "Join FastCourier as a Delivery Driver and play a crucial role in delivering packages and goods to customers in a timely and safe manner. We're seeking candidates with a valid driver's license and a reliable vehicle. This role offers competitive hourly pay.",
          requirements: "Valid driver's license, reliable vehicle",
          salary: "$15 - $20 per hour",
          image: "https://shorturl.at/fuzX7",
        },
      ];
      
    //   const element = <FontAwesomeIcon icon={faMagnifyingGlass} />
    return (
        <div>
            <div className="job-hero-part">
                <div className="search-job">
                    <input type="text" name="search" id="search" placeholder='Search your job'/>
                    <FontAwesomeIcon icon={faSearch} className="search-icon" />
                </div>
            </div>
            <div>
                {Jobs.map((job) => (
                    <JobListing key={job.id} job={job} />
                ))}
            </div>

        </div>
    )
}

export default JobPortal