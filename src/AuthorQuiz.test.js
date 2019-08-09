import React from 'react';
import ReactDOM from 'react-dom';
import AuthorQuiz from './AuthorQuiz';
import Enzyme, {mount, shallow, render} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

 const state = {
   turnData: {
      books: ['The Shining', 'IT', 'David Copperfield', 'A Tale of Two Cities', 
              'The Adventures of Huckleberry Finn', 'Heart of Darkness', 
              'Harry Potter and the Sorcerers Stone', 'Hamlet',
              'Hamlet', 'Macbeth', 'Romeo and Juliet']
      author: {
        name: 'Charles Dickens',
        imageUrl: 'images/authors/charlesdickens.jpg',
        imageSource: 'wikimedia Commons',
        books: ['David Copperfield', 'A Tale of Two Cities']
      },
   },
   highlight: 'none'
 }



describe("Author Quiz", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<AuthorQuiz />, div);
  });
});
