import React from 'react'

export const Header = () => {

    const headerStyle = {
        width: '100%',
        padding: '2%',
        backgroundColor: '#3498db', // สีน้ำเงิน
        color: 'white',
        textAlign: 'center',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', // เพิ่มเงา
        borderRadius: '10px', // เพิ่มมุมโค้ง
      };
    return(
        <div style={headerStyle}>
            <h1 className="header-text">React With NodeJS</h1>
        </div>
    )
}