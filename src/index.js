import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
const BookFullList=[
  {
    Id:1,
Title:'The Alchemist',
 Author:'Paulo Coelho',
 Image:'https://images-eu.ssl-images-amazon.com/images/I/71g2ednj0JL._AC_UL604_SR604,400_.jpg',
},
{
  Id:2,
 Title:'DO EPIC SHIT',
  Author:'Ankur Warikoo',
  Image:'https://images-eu.ssl-images-amazon.com/images/I/41+grDTP2FL._AC_UL604_SR604,400_.jpg',
},
{
  Id:3,
 Title:'The Subtle Art of Not Giving a F*ck',
  Author:'Mark Manson',
  Image:'https://images-eu.ssl-images-amazon.com/images/I/814jC+rODgL._AC_UL604_SR604,400_.jpg',
},
]

function BookList(){
  return(<section className='BookList'>
    {BookFullList.map((book)=>{
      return<div>
          <Book key={book.Id} {...book}/>
      </div>
    })}
  </section>);
};

const Book =(props)=>{
  const{Image,Title,Author}=props;
  const ClickHandler=(e)=>{
    console.log(e);
    console.log(e.target)
    alert('Hellow World!!')};
  const ComplexClick=(author)=>{
    console.log(author)
  }
  return(<article className='book' onMouseOver={()=>{console.log(Title)}}>
  <img src={Image}/>
  <h1 onClick={()=>console.log(Title)}>{Title}</h1>
  <h4>{Author}</h4>
  <button type='button' onClick={ClickHandler}>Click</button>
  <button onClick={ComplexClick(Author)}>ComplexClick</button>
</article>)};

ReactDOM.render(<BookList/>,document.getElementById('root'))