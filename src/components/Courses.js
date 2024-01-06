import React from "react";
import "./Courses.css";
import courses from "../data/courses";

const Courses =()=>{
    return(
        <div>
            <h2>Training</h2>
            <div>
                {
                    courses.map(course =>{
                        return <Course key={course.id} courseParam={course}/>
                    })
                }
            </div>
        </div>
    )
}

const Course =(props)=>{
    // let title=props.courseParam.title;
    // let description=props.courseParam.description;
    // let image=props.courseParam.image;
    // let link=props.courseParam.link;

    const {title , description , image , link} = props.courseParam;
    return(
        <div className="card">
            <img src={image} alt="course1" className="img_enroll"/>
            <h3>{title}</h3>
            <p>{description} </p>
            <button onClick={()=>{
                window.location.href=link;
            }}>Enroll</button>
        </div>
    );
}

export default Courses;
