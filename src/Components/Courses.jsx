import React from 'react';
import javaImage from '../Images/java.jpg';
import uiux from '../Images/uiux.jpg';
import angular from '../Images/angular.jpg';
import reactImage from '../Images/React.jpg';
import software from '../Images/software-testing.jpg';
import devops from '../Images/devops.jpg';
import aws from '../Images/aws.jpg';
import './Css/Courses.css';

function Courses() {
  const coursesDataLine1 = [
    { image: javaImage, title: 'Java Developer', duration: '4 Months' },
    { image: uiux, title: 'UI/UX Design', duration: '4 Months' },
    { image: angular, title: 'Angular Developer', duration: '4 Months' },
  ];

  const coursesDataLine2 = [
    { image: reactImage, title: 'React Developer', duration: '4 Months' },
    { image: software, title: 'Software Testing', duration: '4 Months' },
    { image: devops, title: 'DevOps Engineer', duration: '4 Months' },
  ];

  const coursesDataLine3 = [
    { image: aws, title: 'AWS Solutions Architect', duration: '4 Months' },
  ];

  return (
    <div className="container mt-6">
      <div className="row justify-content-center">
        {coursesDataLine1.map((course, index) => (
          <div key={index} className="col-md-4 mb-4">
            <div className="card custom-card">
              <a href="#read-more">
                <img src={course.image} className="card-img-top zoom-in-image" alt="" />
              </a>
              <div className="card-body text-center">
                <h5 className="card-title">{course.title}</h5>
                <p className="card-text">Course Duration: {course.duration}</p>
              </div>
              <div className="card-body text-center">
                <button type="button" className="btn btn-outline-primary">Read More</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="row justify-content-center">
        {coursesDataLine2.map((course, index) => (
          <div key={index} className="col-md-4 mb-4">
            <div className="card custom-card">
              <a href="#read-more">
                <img src={course.image} className="card-img-top zoom-in-image" alt="" />
              </a>
              <div className="card-body text-center">
                <h5 className="card-title">{course.title}</h5>
                <p className="card-text">Course Duration: {course.duration}</p>
              </div>
              <div className="card-body text-center">
                <button type="button" className="btn btn-outline-primary">Read More</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="row justify-content-center">
        {coursesDataLine3.map((course, index) => (
          <div key={index} className="col-md-4 mb-4">
            <div className="card custom-card">
              <a href="#read-more">
                <img src={course.image} className="card-img-top zoom-in-image" alt="" />
              </a>
              <div className="card-body text-center">
                <h5 className="card-title">{course.title}</h5>
                <p className="card-text">Course Duration: {course.duration}</p>
              </div>
              <div className="card-body text-center">
                <button type="button" className="btn btn-outline-primary">Read More</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Courses;