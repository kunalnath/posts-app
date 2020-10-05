import React from 'react'
import { Link } from 'react-router-dom'
// import { startGetTenantCrt } from '../actions/tenantAction'
import { connect } from 'react-redux'
import { GiCancel } from "react-icons/gi"
// import { BsSearch } from "react-icons/bs"

class ListPost extends React.Component{
    constructor(){
        super()
        this.state={
            data : [],
            search : '',
            filteredValue : ''
        }
    }

    componentDidMount=()=>{
        var b = JSON.parse(localStorage.getItem('session'))
        console.log('ls value in list page',b)
        this.setState({ data : b})
    }

    handleChange=(e)=>{
        this.setState({
            [e.target.name] : e.target.value,
            filteredValue : this.state.data.filter(ele => ele.title.split(' ')[0] == e.target.value)
        })
    }

    handleClr=()=>{
        this.setState({
            search : ''
        })
    }
   
    render(){
        // console.log('posts list',this.props.postsInfo)
        return(
        <div className="bodyPublish"> 
            <div className="container">
                <div className="wrapper">
                    <div className="company-info">
                        <h1>PUBLISHER</h1>
                    </div>
                    <div className="contact">
                        <div><h2>Published Posts</h2></div><br/>
                        <form className="contact-form" onSubmit={this.handleSubmit}>
                            <div className="contact-form-full">
                                <div className="row">
                                    <div className="col-md-10">
                                        <input type="text" placeholder="Search Title" name="search" value={this.state.search} onChange={this.handleChange} />
                                    </div>
                                    <div className="col-md-2">
                                        <button onClick={this.handleClr}><GiCancel size="25"/></button>
                                    </div>
                                </div>
                            </div>
                        </form>
                        <ul>
                            {this.state.data.filter(ele => ele.title.split(' ')[0] == this.state.search) != "" ?
                                this.state.filteredValue.map((ele,i)=>{
                                    return (   
                                        <div className="bannerAU">
                                            <h2>Title - {ele.title}</h2>
                                            {/* <div/> */}
                                            <p>{ele.text}</p><hr/>
                                        </div>
                                    )
                                })
                            : 
                                this.state.data.map((ele,i)=>{
                                    return (
                                        <>
                                            <div className="bannerAU">
                                                <h2>Title - {ele.title}</h2>
                                                {/* <div /> */}
                                                <p>{ele.text}</p><hr/>
                                            </div>
                                        </>
                                    )
                                })
                            } 
                        </ul>
                        <p>Go back to <Link to="/">home</Link></p>
                    </div>
                </div>
            </div>    
        </div>
        )
    }
}

// const mstp = (state) => {
//     return{
//         postsInfo : state.persistedState
//     }
// }

export default connect()(ListPost)