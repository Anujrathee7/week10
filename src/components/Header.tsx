import React from "react";
import { useState } from "react";
import { useTranslation } from "react-i18next";


const Header: React.FC = ()=>{
    const {t , i18n} = useTranslation()

    const changeLanguage = (lng:string)=>{
        i18n.changeLanguage(lng)
    }
    return(
        <header className="header">
                <h1>My Website</h1>
                <ul>
                    <li><a href="/">{t('home')}</a></li>
                    <li ><a href="/about">{t('about')}</a></li>
                    <li><button id="fi" onClick={()=>changeLanguage('fi')}>FI</button></li>
                    <li><button id="en" onClick={()=> changeLanguage('en')}>EN</button></li>
                </ul>
        </header>
    )
}

export default Header