import React from 'react'
import { Link } from 'react-router-dom'
import { setPostCrt } from '../actions/postAction'
import { connect } from 'react-redux'

class CreatePost extends React.Component{
    constructor(){
        super()
        this.state={
            title : '',
            text : '',
            flagTitle : false,
            flagText: false
        }
    }

    componentDidMount=()=>{
        // var b = JSON.parse(localStorage.getItem('session'))
        // console.log('ls value',b)
        // console.log('ls value in create page',b)
    }

    handleChange=(e)=>{
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    handleSubmit = (e) =>{
        e.preventDefault()
        const formData = {
            title : this.state.title,
            text : this.state.text
        }
        console.log(formData)
        {
            (!this.state.title ) ? this.setState({ flagTitle : true }) : this.setState({ flagTitle : false})
        }
        {
            (!this.state.text ) ? this.setState({ flagText : true }) : this.setState({ flagText : false})
        }
        if(formData.title && formData.text){
            this.props.dispatch(setPostCrt(formData))
        }
        this.setState({ title : '' , text : '' })
    }

    render(){
        console.log('posts list',this.props.postsInfo)
        return(
        <div className="bodyPublish"> 
            <div className="container">
                <div className="wrapper">
                    <div align="center" className="company-info">
                        <h1>PUBLISHER</h1>
                    </div>
                    <div className="contact">
                        <div align="center"><h3>Publish Your Post</h3></div>
                        <form className="contact-form" onSubmit={this.handleSubmit}>
                            <div className="contact-form-full">
                                <label className="contact-form-label"><b>Title*</b></label>
                                <input type="text" placeholder="Enter Title" name="title" value={this.state.title} onChange={this.handleChange} />
                                {this.state.flagTitle && <div className="text-danger">Please enter Title.</div>}
                            </div>
                            <div className="contact-form-full">
                                <label className="contact-form-label"><b>Body*</b></label>
                                <textarea placeholder="Enter Body" spellCheck='false' name="text" value={this.state.text} onChange={this.handleChange} />
                                {this.state.flagText && <div className="text-danger">Please enter Text.</div>}
                            </div>
                            <div>
                                <button type="submit">Publish Now</button> 
                            </div><br/>
                            <p>See the posts <Link to="/posts">here</Link></p>
                        </form>
                    </div>
                </div>
            </div>    
        </div>
        )
    }
}

const mstp = (state) => {
    return{
        postsInfo : state.postInfo
    }
}

export default connect(mstp)(CreatePost)