import React from 'react'
// import { Link } from 'react-router-dom'
// import { connect } from 'react-redux'
// import { IoMdPersonAdd } from 'react-icons/io'

class Home extends React.Component{
    handleNewPost=(e)=>{
        const redirect=()=>{
            return this.props.history.push('/publish')
        }
        redirect()
    }

    handlePostPublished=(e)=>{
        const redirect=()=>{
            return this.props.history.push('/posts')
        }
        redirect()
    }
    render(){
        return(
        <div className="bodyHome"> 
            <div className="container">
                <div className="wrapper">
                    <div align="center" className="company-info">
                        <h1>PUBLISHER</h1>
                    </div>
                    <div className="contact">
                        <div align="center"><h3>Post Publisher</h3></div><hr/><br/>
                        <form className="contact-form" >
                            <div>
                                <button type="submit" onClick={this.handleNewPost}>New Post</button> 
                            </div>
                            <div>
                                <button type="submit" onClick={this.handlePostPublished}>Published</button> 
                            </div><br/>
                        </form>
                        <hr/>
                        <p><b>Note: </b>Publish your post in <b>"New Post"</b> section and see all your published posts in <b>"Published"</b> section</p>
                    </div>
                </div>
            </div>    
        </div>
        )
    }
}

export default Home