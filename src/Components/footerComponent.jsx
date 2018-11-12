import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import logo from '../images/dory9.png';
import './footer.css'; 
 
 
export default class Footer extends Component {

  render(){
    return (
    <div className="app-footer">
      <div className="footer-logo">
      <img src={logo} width="150" height="100"/>
      </div>
      <div className="vl"></div>
     <div className="footer-content">
     <h2>CONTACT</h2>
     <p>4155 Essen Ln, New Jersey</p>
     <p>Main Phone: (631) 780-5000</p>
     <p>Fax: (866) 449-8844</p>
     <p>Hours : M to F: 8 AM – 6PM EST</p>
     </div>
  
  
    </div>
    
    );
  }
}