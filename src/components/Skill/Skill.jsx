import React from "react";
import "./Skill.css";
import html from '../../assets/html.png'
import js from '../../assets/js.png'
import java from '../../assets/java.png'
import express from '../../assets/express.png'
import ps from '../../assets/ps.png'
import node from '../../assets/node.png'
import mongo from '../../assets/mongo.png'
import mysql from '../../assets/mysql.png'
import react from '../../assets/react.png'
import figma from '../../assets/figma.png'
import jquery from '../../assets/jquery.png'

const Skill = () => {
  return (
    <div className="skill-section">
      <h1>My Skills</h1>
      <div className="skill-tiles">
        <div className="skill"><img src={html} alt="" /><p>HTML & CSS</p></div>
        <div className="skill"><img src={js} alt="" /><p>JavaScript</p></div>
        <div className="skill"><img src={java} alt="" /><p>Java</p></div>
        <div className="skill"><img src={mysql} alt="" /><p>MySql</p></div>
        <div className="skill"><img src={mongo} alt="" /><p>MongoDB</p></div>
        <div className="skill"><img src={express} alt="" /><p>Express</p></div>
        <div className="skill"><img src={react} alt="" /><p>React</p></div>
        <div className="skill"><img src={node} alt="" /><p>Nodejs</p></div>
        <div className="skill"><img src={figma} alt="" /><p>Figma</p></div>
        <div className="skill"><img src={ps} alt="" /><p>PhotoShop</p></div>
        <div className="skill"><img src={jquery} alt="" /><p>JQuery</p></div>

      </div>
    </div>
  );
};

export default Skill;
