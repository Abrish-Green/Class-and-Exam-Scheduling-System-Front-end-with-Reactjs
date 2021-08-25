import react from 'react'

const Colleges = ()=> {
    return(
        <div style={{ position:'relative',left:'25em' }}>
               
        <div className="card">
        <div className="card-header">
            <h5 className="mb-0">Colleges of Addis Ababa Science and Technology University </h5>
            <p></p>
        </div>
        <div className="card-body">
            <div className="table-responsive">
                <table id="example2" className="table table-striped table-bordered" style={{ width:"100%" }}>
                    <thead>
                        <tr>
                            <th>College</th>
                            <th>Dean Email</th>
                            <th>Departments</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Tiger Nixon</td>
                            <td>System Architect</td>
                            <td>Edinburgh</td>
                            <td><button type="button" class="btn btn-warning">Edit</button></td>
                            <td><button type="button" class="btn btn-danger">Delete</button></td>
                           
                        </tr>
                        <tr>
                            <td>Tiger Nixon</td>
                            <td>System Architect</td>
                            <td>Edinburgh</td>
                            <td><button type="button" class="btn btn-warning">Edit</button></td>
                            <td><button type="button" class="btn btn-danger">Delete</button></td>
                           
                        </tr>
                        <tr>
                            <td>Tiger Nixon</td>
                            <td>System Architect</td>
                            <td>Edinburgh</td>
                            <td><button type="button" class="btn btn-warning">Edit</button></td>
                            <td><button type="button" class="btn btn-danger">Delete</button></td>
                           
                        </tr>
                        <tr>
                            <td>Tiger Nixon</td>
                            <td>System Architect</td>
                            <td>Edinburgh</td>
                            <td><button type="button" class="btn btn-warning">Edit</button></td>
                            <td><button type="button" class="btn btn-danger">Delete</button></td>
                           
                        </tr>
                        <tr>
                            <td>Tiger Nixon</td>
                            <td>System Architect</td>
                            <td>Edinburgh</td>
                            <td><button type="button" class="btn btn-warning">Edit</button></td>
                            <td><button type="button" class="btn btn-danger">Delete</button></td>
                           
                        </tr>
                        
                        
                                
                    </tbody>
                </table>
            </div>
        </div>
    </div>

        </div>
    )
}

export default Colleges

