import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
const BookFullList=[
  {
Title:'The Alchemist',
 Author:'Paulo Coelho',
 Image:'https://images-eu.ssl-images-amazon.com/images/I/71g2ednj0JL._AC_UL604_SR604,400_.jpg',
},
{
 Title:'DO EPIC SHIT',
  Author:'Ankur Warikoo',
  Image:'https://images-eu.ssl-images-amazon.com/images/I/41+grDTP2FL._AC_UL604_SR604,400_.jpg',
},
]

function BookList(){
  return(<section className='BookList'>
    {BookFullList.map((book)=>{
      const {Image,Title,Author}=book;
      return<div>
        <h3>{Title}</h3>
        <h6>{Author}</h6>

      </div>
    })}
  </section>);
};

const Book =(props)=>{
  const{img,title,author,children}=props;
  console.log(props)
  return(<article className='book'>
  <img src={img}/>
  <h1>{title}</h1>
  <h4>{author}</h4>
  {children}
</article>)};

ReactDOM.render(<BookList/>,document.getElementById('root'))