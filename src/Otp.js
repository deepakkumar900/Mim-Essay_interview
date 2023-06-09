import React, { Component, ReactDOM } from 'react';
import react from 'react'
import './otp.css'
class Otp extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: '', otp1: "", otp2: "", otp3: "", otp4: "", otp5: "",otp6: "", disable: true };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
      handleChange(value1, event) {

        
        this.setState({ [value1]: event.target.value });

        
      }
      handleSubmit(event) {
        const data = new FormData(event.target);
        console.log(this.state);
       
        const regex = /^[0-9\b]+$/;
        if ( (this.state.otp2!=regex) &&  (this.state.otp2!=regex) &&  (this.state.otp3!=regex)
            && (this.state.otp3!=regex) &&  (this.state.otp4!=regex) && (this.state.otp5!=regex) && (this.state.otp6!=regex)) {
          alert('Please Fill Numeric Value')
        }
        
        // if(this.state.otp1!=1){
        //     alert('Otp is not Valid')
        // }
        event.preventDefault();
      }
    
      inputfocus = (elmnt) => {

        
        if (elmnt.key === "Delete" || elmnt.key === "Backspace") {
          const next = elmnt.target.tabIndex - 2;
          if (next > -1) {
    
            elmnt.target.form.elements[next].focus()
          }
        }
        else {
          
            const next = elmnt.target.tabIndex;
            if (next < 6) {
              elmnt.target.form.elements[next].focus()
            }
        }
    
      }

    render(){
    return(
        <>
        
        <form onSubmit={this.handleSubmit}>
        
      <div className='Container'>
      
        <h2>Phone Verfication</h2>
        <div className='main' >
            <h3>Enter the OTP you received on 89206-6XXXX</h3>

        </div>
        <div className='otp'>
            <input  name="otp1"
            type="text"
            autoComplete="off"
            className="otpInput"
            value={this.state.otp1}
            onKeyPress={this.keyPressed}
            onChange={e => this.handleChange("otp1", e)}
            tabIndex="1" maxLength="1" onKeyUp={e => this.inputfocus(e)}
            />

            <input
            name="otp2"
            type="text"
            autoComplete="off"
            className="otpInput"
            value={this.state.otp2}
            onChange={e => this.handleChange("otp2", e)}
            tabIndex="2" maxLength="1" onKeyUp={e => this.inputfocus(e)}
             />

            <input 

            name="otp3"
            type="text"
            autoComplete="off"
            className="otpInput"
            value={this.state.otp3}
            onChange={e => this.handleChange("otp3", e)}
            tabIndex="3" maxLength="1" onKeyUp={e => this.inputfocus(e)}
            
            />
            <input 
             
             name="otp4"
             type="text"
             autoComplete="off"
             className="otpInput"
             value={this.state.otp4}
             onChange={e => this.handleChange("otp4", e)}
             tabIndex="4" maxLength="1" onKeyUp={e => this.inputfocus(e)}
            
            />
            <input 
            name="otp5"
            type="text"
            autoComplete="off"
            className="otpInput"
            value={this.state.otp5}
            onChange={e => this.handleChange("otp5", e)}
            tabIndex="5" maxLength="1" onKeyUp={e => this.inputfocus(e)}

            ></input>
            <input  

            name="otp6"
            type="text"
            autoComplete="off"
            className="otpInput"
            value={this.state.otp6}
            onChange={e => this.handleChange("otp6", e)}
            tabIndex="6" maxLength="1" onKeyUp={e => this.inputfocus(e)}
             />
           

        </div>
        <div className='btn1'> 
        <button>Change Number</button>
        <button id='space'>Re-send OTP</button>
        </div>
        <div className='btn2'>
        <button type='submit'>Verify Phone Number</button>
        </div>
       

      </div>
      </form>

        </>

    );
}

}
export default Otp;
