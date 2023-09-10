import React from 'react'

const JobListing = ({ job }) => {
  const { image, title, company, location, type, description, requirements, salary } = job
  return (
    <div className='job-listing'>
      <div className="job-listing-box">
        <div className="job-container">
          <div>
            <img src={image} alt="" />
          </div>
          <div className="job-content">
            <h3>Title : <i>{title}</i></h3>
            <h5>Company : {company}</h5>
            <h5>Location : {location}</h5>
            <h5>Type : {type}</h5>
            <h5>Salary : {salary}</h5>
          </div>
        </div>
        <div className="job-des">
          <p><span style={{
            "fontWeight":"600",
          }}>Requirements</span> : {requirements}</p>
          <p><span style={{
            "fontWeight":"600",
          }}>Description</span> : {description}</p>
          
        </div>
      </div>
    </div>
  )
}

export default JobListing