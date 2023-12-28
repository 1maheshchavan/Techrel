import React from 'react';
import './Css/About.css'

function AboutTechrel() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-12 text-center">
        <a
            href="#"
            className="d-inline-flex focus-ring py-1 px-2 text-decoration-none border rounded-2 bg-success text-white"
          >
            TechRel Institute Ideologies & Approach
          </a>
          
          <p>
            Technology is here to stay forever, and it would only continue to strengthen its grip over the business world
            in the years to come. Amidst such a situation, companies would continue requiring technology specialists,
            programmers, testers in large numbers. However, supporting this need and further fulfilling it will be possible
            only when the fundamental element of the entire ecosystem – education, would be correct, comprehensive, and
            focused.
          </p>
        </div>
      </div>



      <div className="container mt-5">
        <div className="row">
          <div className="col-md-12 text-center">
            <a
              href="#"
              className="d-inline-flex focus-ring py-2 px-3 text-decoration-none border rounded-3 bg-primary text-white"
            >
                Why choose TechRel Institute?
            </a>

            <p>
              Here are ten solid reasons that make us the best IT training institute in Pune, and why you must choose us
              for a promising career-start.
            </p>
            <ul className="list-group">
              <li className="list-group-item">
                Gain access to a wide range of programming courses, software testing courses, and others, including Java
                Course, UI UX, AWS, DevOps, etc.
              </li>
              <li className="list-group-item">Get live exposure to the latest technologies.</li>
              <li className="list-group-item">Get exposure to challenging real-world projects.</li>
              <li className="list-group-item">Interact and learn with industry experts.</li>
              <li className="list-group-item">
                Avail 24/7 lab facility that offers continual learning and training support.
              </li>
              <li className="list-group-item">Competitive course fees to help every aspiring professional enroll for the course.</li>
              <li className="list-group-item">
                Profound Scholarship Program to offer financial assistance to lower-income and bright students.
              </li>
              <li className="list-group-item">Get 100% placement assistance.</li>
              <li className="list-group-item">
                Participate in a lot of IT-related workshops to gain a better understanding of the industry.
              </li>
              <li className="list-group-item">
                Learn through certified, experienced and expert technology trainers, working with reputed IT companies, and
                with a minimum 5-year experience in IT.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
export default AboutTechrel;