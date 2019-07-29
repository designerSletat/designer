import React from 'react';
import $ from 'jquery';



import st from './Maket.module.css';





class Maket extends React.Component {

  constructor(props){
    super(props);
   this.state = this.props.state;




  }
    

componentWillMount(){
    let state = this.state;
console.log(this.state);
    //заполняем поля на превью значенияими из state
    // let fill_maket = () =>{
        
    //     let arrText = Array.from(document.getElementsByTagName('text'));
    //     arrText.map(data=>document.getElementById(data.id).innerHTML =this.state.render_value(data.id) );
    //     console.log('fill');
    //     }
        // let addText = () => {

        //     let arrTag = Array.from(document.getElementsByTagName('text')) ;
        //     document.getElementById('tags').innerHTML = '';
        //     let test = (id,text,idElem)=> {  (document.getElementById(id).insertAdjacentHTML('afterBegin', "<span class='tag' id='"+idElem +"_tag' ><span class='close'>&times;</span><span class='textClose'>"+text +"</span></span>") )};
        //     arrTag.map(data =>  test('tags',data.innerHTML,data.id))  ;
        //     console.log('addText')
        // }

        // так себе решение. заполняем поля на превью значенияими из state каждые 500ms 
        // setInterval(function() {
        //     fill_maket();
        //     console.log('interval');
        //   }, 500);

   //Получаем SVG по ссылке переданной в props и вставляем SVG в блок maket 
    fetch(this.props.src).then(function(response) {return response.text()}).then(svg=> 
    document.getElementById('maket').innerHTML = svg).then( state.fill_maket());
  


    //По 
    document.addEventListener("click", function (e) {

        console.log(e.target.id);
        
        e.target.id !== '' && e.target.id !== "tag-typer" && e.target.id !== "tags" ? state.createValue(e.target.id) :document.getElementById("tag-typer").disabled = true ;
        });
        
        
//  let createValue = (e) =>{

//     document.getElementById("tag-typer").disabled = false;
//             let addInputCrValue = (el) =>{
//                 document.getElementById('tag-typer').setAttribute('el', el);
//                 document.getElementById('tag-typer').setAttribute('class', el);
//                 document.getElementById('tag-typer').focus();
//                 document.getElementById('tag-typer').value = this.state.render_value(el) ;

                
//                 document.getElementById('tag-typer').oninput = function(e){
//                     console.log(e.target.value + ' ' +e.target.classList[0]); 
                  
//                     //state.add_value(e.target.value,e.target.classList[0]);
//                     fill_maket();
//                 };
//                 }
        
//          addInputCrValue(e);
//         }
        
      

}

componentDidMount(){
   
}



render(){
           
    

    let name = this.props.name;
    let src = this.props.src;
   
    


    return (
<div>    
    
<div id='maket' className={st.maket}></div>    


<div id="inputs" > </div>

 </div>
    );
}}



export default Maket;
