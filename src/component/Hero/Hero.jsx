// Hero.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import HeroStyles from './Hero.module.css';

export default function Hero() {
  const navigate = useNavigate();
  const handleEnrollClick = () => {
    navigate('/enrollment-form');
  };
  return (
    <div className={HeroStyles.hero}>
      <h1 className={HeroStyles.heading}>Empower Your Academic Vision</h1>
      <p className={HeroStyles.description}>
        "We aim to bridge the educational gap for low-income students, empowering them to achieve their maximum potential"
      </p>
      <div className={HeroStyles.buttons}>
        <button className={HeroStyles.button } onClick={handleEnrollClick}>Enroll Now</button>
        <button className={HeroStyles.button}>Contact us</button>
      </div>
    </div>
  );
}