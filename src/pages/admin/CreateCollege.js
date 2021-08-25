import react from 'react'

const CreateCollege = () => {
    return(
        <div style={{ position:'relative',left:'25em' }}>
        <div className="card" >
        <h5 className="card-header">Create College</h5>
        <div className="card-body">
            <form id="form" data-parsley-validate="" >
                <div className="form-group row">
                    <p style={{ marginLeft:'1em' }}>College Name</p>
                    <div className="col-9 col-lg-10">
                        <input id="inputEmail2" type="email" required="" data-parsley-type="email" placeholder="Email" className="form-control" />
                    </div>
                </div>
                <div className="form-group row">
                   
                       <p style={{ marginLeft:'1em' }}>Dean Email</p> 
                    <div className="col-9 col-lg-10">
                        <input id="inputPassword2" type="password" required="" placeholder="Password" className="form-control" />
                    </div>
                </div>
                     <div className="col-sm-6 pl-0">
                        <p className="text-right">
                            <button type="submit" className="btn btn-space btn-primary">Submit</button>
                            <a href="/admin/home" className="btn btn-space btn-secondary">Cancel</a>
                        </p>
                    </div>
            </form>
        </div>
    </div>
    </div>
    )
}

export default CreateCollege
