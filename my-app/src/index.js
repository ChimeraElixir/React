import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css';

const books=[
    {
      img:'https://m.media-amazon.com/images/I/419aJfhczCL._SY445_SX342_.jpg',
      title:'Atomic habit',
      author:'James Clear',
      id:1,
    },
    {
      img:'https://m.media-amazon.com/images/I/41656QTKoZL._SY445_SX342_.jpg',
      title:'King of Sloth',
      author:'Ana Huang',
      id:2,
    }
];

const BookList = () => {

    return (
      <section className='booklist'>
        <ExamppleEventHandler/>
        {
          books.map((book)=>{
            return <Book {...book} />;
          })
        }
        
      </section>
    );

};

const ExamppleEventHandler = () => {
  const handleForm = () => {
    return("On form Change");
  };
  const handleButton = () => {
    alert("On Button");
  }
  return(
    <section>
      <form>
        <h2>Form Input</h2>
        <input type='text' 
        name='example' 
        onChange={handleForm} 
        style={{ margin: '1rem 0' }}/>
      </form>
      <button onClick={handleButton}>Click Me</button>
    </section>
  );
};

const Book = (props) => {
  const {img,title,author}=props;
  return (
      <article className='book'>
          <img src={img} alt={title}></img>
          <h2>{title}</h2>
          <h4>{author}</h4>
      </article>
  );
};





const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(<BookList/>);