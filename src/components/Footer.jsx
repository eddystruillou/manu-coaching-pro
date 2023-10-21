import React from 'react';

const Footer = () => {
    return (
        <footer>
            <div className='primary-footer'>
                <p>© {new Date().getFullYear()} M.S Coaching Pro. All rights reserved</p>
            </div>
        </footer>
    );
}

export default Footer;