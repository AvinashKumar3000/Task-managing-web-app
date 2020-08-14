import React, { Component } from 'react';
import { withFirebase } from '../Firebase';

class Cards extends Component {
    inputKeys = ['time','topic','desc','content','link'];
    state = { 
        obj :{
            topic:"topic",
            desc:"description",
            link:"link",
            time:"time",
            content:"content"
        }
     }
     componentDidMount = () => {
         let ref = this.props.firebase.timeTable();
         ref.doc(this.props.data).onSnapshot((doc)=>{
            this.setState({obj:doc.data()})
         })
         
     }
     handleOnChange = (e) => {
       this.setState({
           obj: {
               ...this.state.obj,
               [e.target.name]:e.target.value
           }
       });
     }
     handleSaveBtn = (e) => {
         e.preventDefault();
        let ref = this.props.firebase.timeTable();
        ref.doc(this.props.data).set(this.state.obj);
     }
    render() { 
        return ( 
           
            <div class="portfolio-modal modal fade" id={this.props.data} tabindex="1" role="dialog"  aria-hidden="true">
                <div class="modal-dialog modal-xl" role="document">
                <div class="modal-content">
                    <button class="close" type="button" data-dismiss="modal" aria-label="Close"><span aria-hidden="true"><i class="fas fa-times"></i></span></button>
                    <div class="modal-body text-center">
                        <div class="container">
                            <div class="row justify-content-center">
                                <div class="col-lg-8">
                                    <h2 class="portfolio-modal-title text-secondary mb-0">{this.props.data}</h2>
                            
                                    <div class="divider-custom">
                                        <div class="divider-custom-line"></div>
                                        <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                                        <div class="divider-custom-line"></div>
                                    </div>

                                    <div class="card">
                                        <div class="card-body">
                                            <h3 class="time txt-right">{this.state.obj.time}</h3>
                                            <h4 class="card-title title">{this.state.obj.topic}</h4>
                                            <hr></hr>
                                            <div class="txt-left">
                                                <h5 class="title txt-left desc">Description</h5>
                                                <p class="card-text p-1 font-1">{this.state.obj.desc}</p>
                                                
                                                <p class="my-2 card-text font-2">{this.state.obj.content}</p>
                                            </div>
                                            <hr></hr>
                                            <span class="card-link p-3 text-info">{this.state.obj.link}</span>
                                        </div>
                                    </div>
                                    <div id="accordion" class="p-4">
                                        <div class="card">
                                            <div class="card-header" id="headingOne">
                                            <h5 class="mb-0">
                                                <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                EDIT THE CONTENT
                                                </button>
                                            </h5>
                                            </div>

                                            <div id="collapseOne" class="collapse" aria-labelledby="headingOne" data-parent="#accordion">
                                            <div class="card-body">
                                                    <form>
                                                        { this.inputKeys.map( k => {
                                                        return ( 
                                                            <div class="form-group row" key={k}>
                                                                <label for={`input${k}${this.props.data}`} key={k} class="col-sm-2 col-form-label form-label">{k}</label>
                                                                <div class="col-sm-10" key={k}>
                                                                    <input key={k} type="text" class="form-control" id={`input${k}${this.props.data}`} name={k} placeholder={k} onChange={this.handleOnChange} ></input>
                                                                </div>
                                                            </div>
                                                    )
                                                        })}
                                                    <button class="btn btn-secondary" onClick={this.handleSaveBtn}>save</button>
                                                    </form>
                                            </div>
                                            </div>
                                        </div>
                                    </div>

                                    <button class="btn btn-primary" href="#" data-dismiss="modal"><i class="fas fa-times fa-fw"></i>Close Window</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
           
        </div>
       
         );
    }
}
 

  
const Val = withFirebase(Cards);

export  {Val} ;