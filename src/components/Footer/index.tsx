import React from "react";
import style from "./Footer.module.scss"

export default function Footer(){
    return(
        <div className={style.footer}>
            <p>Desenvolvido por Leonardo D. Ceretta <span>&copy; 2023</span></p>
        </div>
    )
}