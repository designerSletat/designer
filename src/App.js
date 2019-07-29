import React, { Component } from 'react';
import {Route} from 'react-router-dom';

import './App.css';
import state from './DATA/state';

import ContainerAllTypeMaketCentr from './components/AllTypeMaketCentr/ContainerAllTypeMaketCentr';
import ContainerAllTypeMaketTop from './components/AllTypeMaketTop/ContainerAllTypeMaketTop';
import ContainerMaket from './components/Maket/ContainerMaket';
import PreviewMaket from './components/PreviewMaket/PreviewMaket';



import data from './DATA/DATA';

//let type = this.props.type;

//let arrRoute = data.map((data,i) =>  <Route key={data.SVG +'-'+ i} path={"/preview/" +'/'+ data.SVG }  render={ () => <ContainerMaket key={data.SVG +'_'+ i}  name={data.SVG} src={data.img} /> }/>);
//let arrRoute = data.map((data,i) => <Route path={"/preview/"+data.type +'/'+data.maket.SVG} render={ () =>  data.type +'/' +data.maket.SVG }/>);

// let arr = data.map((allData,i)=> allData.maket.map((oneTypeData,j)=><Route key={"route" +i +"_" +j } path={"/preview/"+allData.type +'/'+oneTypeData.SVG} render={()=>
//    <ContainerMaket key ={"ContainerMaket_"+i+"_"+ j} name={oneTypeData.SVG} src={oneTypeData.img} /> }/> ))

function App() {
  return (

    
    <div className="App">
      <Route exact path='/' render={ () =><ContainerAllTypeMaketCentr data={data} state={state} />} /> 
      <Route path='/preview' render={ () =><ContainerAllTypeMaketTop data={data} state={state} />} />  
      
      
   
    
    </div>
    
  );
}

export default App;
