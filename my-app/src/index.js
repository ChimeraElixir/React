import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css';

const books=[
    {
      img:'https://m.media-amazon.com/images/I/419aJfhczCL._SY445_SX342_.jpg',
      title:'Atomic habit',
      author:'James Clear',
    },
    {
      img:'https://m.media-amazon.com/images/I/41656QTKoZL._SY445_SX342_.jpg',
      title:'King of Sloth',
      author:'Ana Huang',
    }
];

const BookList = () => {

    return (
      <section className='booklist'>
        {
          books.map((book)=>{
            const {img,title,author} = book;
            return <Book img={img} title={title} author={author}/>;
          })
        }
        
      </section>
    );

};

const Book = (props) => {
  return (
      <article className='book'>
          <img src={props.img} alt={props.title}></img>
          <h2>{props.title}</h2>
          <h4>{props.author}</h4>
      </article>
  );
};





const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(<BookList/>);