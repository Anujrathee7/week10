import React from "react";
import { useTranslation } from "react-i18next";

 const MyContainer: React.FC = ()=>{
    const {t} = useTranslation()
    return(
        <div>
            <p>{t('homepageText')}</p>
        </div>
    )
 }

 export default MyContainer