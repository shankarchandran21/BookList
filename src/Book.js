import React from 'react';

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

export default Book;
