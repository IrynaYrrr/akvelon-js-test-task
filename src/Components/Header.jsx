import React from 'react';

const Header = (props) => {
    return (
        <div>
            <div className="header">
                <p className="line">
                    <span className="text">{props.message}</span>
                </p>
            </div>
        </div>
    );
};

export default Header;