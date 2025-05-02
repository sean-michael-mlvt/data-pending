import React from 'react';
import {Link} from "react-router-dom";
import styles from './Breadcrumbs.module.css'

function Breadcrumbs({crumbs}) {
    
    let paths = crumbs.map((page, index) => {
        return(
            <React.Fragment key={index}>
                <img src="/right.svg" alt={page.name} className={styles.arrow}/>
                <Link to={page.path} className='text-white body-fonts text-decoration-none fs-5'>
                    {page.name}
                </Link> 
            </React.Fragment>
    
        );
        
    })
    

    return (
    <span className='d-flex align-items-center p-2'>
        <Link to="/" className='text-white body-fonts text-decoration-none fs-5'>
            Home
        </Link> 

        {paths}

    </span>
    );
}

export default Breadcrumbs