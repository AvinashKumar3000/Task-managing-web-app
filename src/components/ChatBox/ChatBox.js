import React, { Component } from 'react';
import { withFirebase } from '../Firebase';

class ChatBox extends Component {
    state = { 
        user:{
            username:"US"
        },
        show : false,
        input_data:"",
        arr:[]
     }
    componentDidMount = () => {
        this.props.firebase.onAuthUserListener( ( user_arg ) => {
            this.setState({
                user:user_arg
            })
            //console.log(user_arg)
        });
       this.props.firebase.messages().onSnapshot((doc)=>{
        let a = [];   
        doc.forEach((item)=>
            {
                a.push(item.data());
            });
        this.setState({
            arr:a
        })
       })
      
    }
    sendChat = (e) => {
        let t = new Date();
        let doc_id = ''+t.getTime()
        let ti = `${t.getMonth()} ${t.getDate()} - ${t.getMinutes()}:${t.getSeconds()}`
        e.preventDefault();
        let ref = this.props.firebase.messages();
        ref.doc(doc_id).set({
            name:this.state.user.username,
            data:this.state.input_data,
            time:ti
        })
            
    }
    openForm = () => {
        this.setState({
            show:true
        })
    }
    closeForm= () => {
       this.setState({
           show:false
       })
    }


    render() { 
       
            return ( 
                <div>
                    <div class="container user-details">
            <div class="dp">
                <span class="dp-text">{this.state.user.username.substring(0,2)}</span>
            </div>
            <div class="col-2 btn btn-primary text-secondary my-4 view-btn">
        {this.state.user.username}
            </div>
            <input type="text" class="chat-input" placeholder="chat input" onChange={(e)=>{this.setState({input_data:e.target.value})}}></input>
            <button type="button" class="col-2 btn btn-primary my-4 move-left open-button" onClick={this.sendChat}>
        save
            </button>
                    </div>
                    <div class="container text-center scroll">
                    
                    {this.state.arr.map( (item) => {
                        return (
                            <div class="row">
                                <div class="chat-box">
                                    <div class="chat-name">{item.name}  </div>
                                    <div class="chat-content"> {item.data} </div>
                                    <div class="chat-time"> {item.time} </div>
                                </div>
                            </div>  
                        );
                    })}
                </div>    
  
    
                </div>
            
             );
        
        }
        
    }

 
export default withFirebase(ChatBox);