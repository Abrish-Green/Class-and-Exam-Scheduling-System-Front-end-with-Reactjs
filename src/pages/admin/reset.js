import react from 'react'

const ResetPassword = ()=>{
    return (
     <div className="splash-container Admin-reset">
        <div className="card">
            <div className="card-header text-center">
                <img style={{height:'18vh'}} className="logo-img" src="../assets/images/logo.png" alt="logo" />
                <span className="splash-description">Reset Password</span></div>
            <div className="card-body">
                <form>
                    <p>Don't worry, we'll send you an email to reset your password.</p>
                    <div className="form-group">
                        <input className="form-control form-control-lg" type="email" name="email" required="" placeholder="Your Email" />
                    </div>
                    <div className="form-group pt-1"><a className="btn btn-block btn-primary btn-xl" href="../index.html">Reset Password</a></div>
                </form>
            </div>
            <div className="card-footer text-center">
                <span>Don't have an account? <a href="/admin/register">Sign Up</a></span>
            </div>
        </div>
    </div>
    
    )
}

export default ResetPassword;