import React from 'react';
import {Route,NavLink} from 'react-router-dom';

import st from './PreviewMaket.module.css';
import ContainerMaket from '../Maket/ContainerMaket';

import Input from './InputMaket/Input';

class PreviewMaket extends React.Component {
   
    render(){
        
    let data = this.props.dataMaket;
    let state = this.props.state;

    let data_arr1 = data.slice();
    let data_arr2 = data_arr1.splice(0, Math.ceil(data_arr1.length / 2));

    let type = this.props.type;
    
    let type_name = this.props.type_name;
    
         let arrRoute = data.map((data,i) =>  <Route key={data.SVG +'-'+ i} path={"/preview/"+type +'/'+ data.SVG }  render={ () => <ContainerMaket state={state} key={data.SVG +'_'+ i}  name={data.SVG} src={data.img} /> }/>);

        let arrImg = data_arr1.map((data,i) => <NavLink   activeClassName={st.active} key={data.SVG +'-'+ i} to={"/preview/"+type +'/' + data.SVG}  name={data.SVG} className={st.PreviewMaket_div} ><img className={st.img}  alt='' src={data.img} name={data.SVG}  type={type} type_name={type_name} /></NavLink> );
        let arrImg2 = data_arr2.map((data,i) => <NavLink   activeClassName={st.active} key={data.SVG +'-'+ i} to={"/preview/"+type +'/' + data.SVG}  name={data.SVG} className={st.PreviewMaket_div} ><img className={st.img}  alt='' src={data.img} name={data.SVG}  type={type} type_name={type_name} /></NavLink> );
                
        return(
            <div>
            
            <div className={st.arrImg}>
           
              <div className={st.arrImg_Img}>{arrImg}</div>
              <div className={st.arrImg_Route}>{arrRoute}</div>
              <div className={st.arrImg_Img2}>{arrImg2}</div>
            </div>

            <Input state={state} />
            </div>

        );

    }
}




export default PreviewMaket;
