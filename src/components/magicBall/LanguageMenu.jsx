import React from 'react';
import './LanguageMenu.css';


const LanguageMenu = ({languages, lang, updateLanguage}) => {

  const languagesKeys = Object.keys(languages);

  return (
    <>
      <menu className='language-menu'>
        {languagesKeys.map((langName) => (
          <button className={langName === lang ? "language-active" : ""}
          key={langName}
          onClick={() => updateLanguage(langName)}
          >{langName}</button>
        ))}
      </menu>
    </>
  );
}

export default LanguageMenu;
