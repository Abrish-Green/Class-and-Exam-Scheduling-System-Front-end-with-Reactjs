import react from 'react'

const NotFound404 = ()=>{

    return(
        <div className="" style={{ marginLeft: '30em' }}>
            <div className="authincation h-100">
                <div className="container-fluid h-100">
                    <div className="row justify-content-center h-100 align-items-center">
                        <div className="col-md-5">
                            <div className="form-input-content text-center">
                                <div className="mb-5">
                                    <a className="btn btn-primary" href="/">Back to Home</a>
                                </div>
                                <h1 className="error-text font-weight-bold">404</h1>
                                <h4 className="mt-4"><i className="fa fa-exclamation-triangle text-warning"></i> The page you were looking for is not found!</h4>
                                <p>You may have mistyped the address or the page may have moved.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NotFound404;