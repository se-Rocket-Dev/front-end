import React from 'react'

export const DisplayBoard = ({numberOfMovies, getAllMovies}) => {

    return(
        <div style={{backgroundColor:'#87CEFA'}} className="display-board">
            <h4 style={{color: 'white' , textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>Movies Created</h4>
            <div className="stroke linear-hstripes rainbow-text">
            {numberOfMovies}
            </div>
            <div className="btn">
                <button type="button" onClick={(e) => getAllMovies()} className="btn btn-warning">Get all Movies</button>
            </div>
        </div>
    )
}
