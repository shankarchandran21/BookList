import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'

function BookList(){
  return(<section className='BookList'>
    <Book/>
    <Book/>
    <Book/>
    <Book/>
    <Book/>
    <Book/>
    <Book/>
    <Book/>
    <Book/>
    <Book/>
  </section>);
};

const Book =()=>{return(<article className='book'>
  <Image/>
  <Title/>
  <Author/>
</article>)};

const Image=()=><img src='https://images-eu.ssl-images-amazon.com/images/I/71g2ednj0JL._AC_UL604_SR604,400_.jpg'/>
const Title=()=><h1>The Alchemist</h1>
const Author=()=><h4>Paulo Coelho</h4>
ReactDOM.render(<BookList/>,document.getElementById('root'))