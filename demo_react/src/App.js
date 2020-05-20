import React from 'react';
import papercss from '../node_modules/papercss/dist/paper.css';
import './App.css';
import axios from 'axios';

 
class Flow extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      script:[],
      devname:[],
      entries:[],
      latestRequest:[],
      list:[],
      
     }
  }
 
 
  
 
  data(){
    var url = 'https://flow.manywho.com/api/log/3b79907c-7f35-4933-9b55-b8206d099144/1b2b5453-8bd5-4098-aa83-e3f73c9a61dd';
    
 
    axios.get(url, {
      method: 'GET',
      headers:{ 'ManyWhoTenant': 'fc44bda8-5857-4a9d-8634-8963c5e72f79'}
              })
    .then((res)=>{
       console.log("helooo",res.data)
          
       this.setState({
         script : res.data, Serach:null,
         devname : res.data.entries
     })
    })
 
    // this.generated()
  }
 
  // generated(){
  //   var button = 'btn-success';
  //   this.setState({button})
  // }
 
 
  generate(){
    var latestRequest=[];
 
    var newArr=new Array();
 
    JSON.parse(JSON.stringify(this.state.devname), function (key, value){
 
    if(Array.isArray(value)){
      //for array              
    }
    else {
    
    
    if(typeof value !== 'object' && key!=="level"  && value !== null){
 
      
            if(key === "id"){
               newArr.push(value);
            }
            if(key === "message"){
                newArr.push(value);
            }
 
            if(key ==="timestamp"){
               newArr.push(value);
            }
 
       }
         
    }
});
 
 
var length=(newArr.length)/3;
var j=0;
var i =0;
 
for(i=0;i<length;i++){
 
  let obj={
       "id":"",
       "message":1,
       "timestamp":""
   }
 
    obj.id=newArr[i+j];
    j++;
    obj.message=newArr[i+j];
    j++;
    obj.timestamp=newArr[i+j];
 
    latestRequest[i]=obj;
}
 
this.setState({latestRequest});
 
 
this.addlist();
}
 
addlist(){
  let l = this.state.list;
 
  for(let k=0;k<this.state.latestRequest.length;k++){
    l.push(
      <div className='card margin-large flex-center'>
        <li className='pad'>
          Steps : {this.state.latestRequest[k].message}
          
          <p>Date : {this.state.latestRequest[k].timestamp}</p>
        </li>
      </div>
    )
  }
  return l;
}
 
 
  render() { 
    return ( 
      <div>
        <h3 className='head'>Process Logs</h3>
        <button className='margin' onClick={(e)=>this.data()}>Generate Logs</button>
        <button className='margin' onClick={(e)=>this.generate()}>View Logs</button>
        <ul className='itemsss'>
            {this.addlist()}
        </ul>
        
      </div>
      
     );
  }
}
 
export default Flow;
 

