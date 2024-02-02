import React from 'react'


const CreateMovie = ({onChangeForm, createMovie }) => {


    return(
        <div className="container">
            <div className="row">
                <div className="col-md-7 mrgnbtm">
                <h2 >Create Movie</h2>
                <form>
                    <div className="row">
                        <div className="form-group col-md-6">
                            <label htmlFor="exampleInputEmail1">Title</label>
                            <input type="text" onChange={(e) => onChangeForm(e)}  className="form-control" name="movies_title" id="movies_title" aria-describedby="emailHelp" placeholder="Movies Title" />
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="exampleInputPassword1">Genre</label>
                            <input type="text" onChange={(e) => onChangeForm(e)} className="form-control" name="movies_genre" id="movies_genre" placeholder="Genre" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="form-group col-md-12">
                            <label htmlFor="exampleInputEmail1">Director</label>
                            <input type="text" onChange={(e) => onChangeForm(e)} className="form-control" name="movies_director" id="movies_director" aria-describedby="emailHelp" placeholder="Director" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="form-group col-md-6">
                            <label htmlFor="exampleInputEmail1">Release_year</label>
                            <input type="text" onChange={(e) => onChangeForm(e)} className="form-control" name="movies_release" id="movies_release" aria-describedby="emailHelp" placeholder="Release" />
                        </div>
                    </div>
                    <button type="button" onClick= {(e) => createMovie()} className="btn btn-success">Create</button>
                </form>
                </div>
            </div>
        </div>
    )
}

export default CreateMovie