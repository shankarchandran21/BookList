import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
import{BookFullList} from './Books';
import Book from './Book';
function BookList(){
  return(<section className='BookList'>
    {BookFullList.map((book)=>{
      return<div>
          <Book key={book.Id} {...book}/>
      </div>
    })}
  </section>);
};



ReactDOM.render(<BookList/>,document.getElementById('root'))