import React from 'react';

import PreviewMaket from './PreviewMaket';

class ContainerPreviewMaket extends React.Component {

render(){
    let data = this.props.data;
    let type = this.props.type;
    let type_name =this.props.nyoe_name;
    let state = this.props.state;


return(

<PreviewMaket state={state} dataMaket={data} type={type} type_name={type_name}/>

);
}} 

export default ContainerPreviewMaket;