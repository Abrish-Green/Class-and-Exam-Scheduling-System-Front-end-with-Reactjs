import react, { Component } from 'react'

import Layout from './layout'
class Home extends Component{

    constructor(props){
        super(props);
        this.state = {}
    }



    render(){

        return(
            <div>
                <Layout />        
            </div>
        )
    }
}

export default Home