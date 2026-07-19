import React, { useState } from 'react';
import './MagicBall.css';
import { answers, languages, welcome } from './variables';
import Ball from './Ball';
import LanguageMenu from './LanguageMenu';


const MagicBall = () => {
  const [lang, setLang] = useState(languages.ukr);
  const [answer, setAnswer] = useState(welcome[lang]);


  const updateLanguage = (langName) => {
    setLang(langName);
    setAnswer(welcome[langName]);
  }

  const updateAnswer = () => {
    let answersList = answers[lang];
    let answer = answersList[Math.floor(Math.random() * answersList.length)];
    setAnswer(answer);
  }


  return (
    <div className='project-container'>
      <LanguageMenu languages={languages} lang={lang} updateLanguage={updateLanguage} />
      <div className='ball-container'>
        <Ball message={answer} updateAnswer={updateAnswer} />
      </div>
    </div>
  );
}

export default MagicBall;
