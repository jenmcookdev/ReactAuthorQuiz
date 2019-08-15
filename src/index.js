import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom'
import './index.css';
import AuthorQuiz from './AuthorQuiz';
import * as serviceWorker from './serviceWorker';
import {shuffle, sample} from 'underscore';

const authors = [
    {
        name: 'Mark Twain',
        imageURL: 'images/authors/marktwain.jpg',
        imageSource: 'Wikimedia Commons',
        books: ['The Adventures of Huckleberry Finn',]
    },
    {
        name: 'Charles Dickens',
        imageURL: 'images/authors/charlesdickens.jpg',
        imageSource: 'Wikimedia Commons',
        books: ['David Copperfield', 'A Tale of Two Cities']
    },
    {
        name: 'Joseph Conrad',
        imageURL: 'images/authors/josephconrad.jpg',
        imageSource: 'Wikimedia Commons',
        books: ['Heart of Darkness',]
    },
    {
        name: 'J.K. Rowling',
        imageURL: 'images/authors/jkrowling.jpg',
        imageSource: 'Wikimedia Commons',
        books: ['Harry Potter and the Sorcerers Stone',]
    },
    {
        name: 'Stephen King',
        imageURL: 'images/authors/stephenking.jpg',
        imageSource: 'Wikimedia Commons',
        books: ['The Shining', 'IT']
    },
    {
        name: 'William Shakespeare',
        imageURL: 'images/authors/williamshakespeare.jpg',
        imageSource: 'Wikimedia Commons',
        books: ['Hamlet', 'Macbeth', 'Romeo and Juliet']
    }
];

function getTurnData(authors) {
    const allBooks = authors.reduce(function (p, c, i) {
        return p.concat(c.books);
    }, []);
    const fourRandomBooks = shuffle(allBooks).slice(0,4);
    const answer = sample(fourRandomBooks);

    return {
        books: fourRandomBooks,
        author: authors.find((author) => 
            author.books.some((title) => 
                title === answer))
    }
}

const state ={
    turnData: getTurnData(authors),
    highlight: '' 
};

function onAnswerSelected(answer) {
    const isCorrect = state.turnData.author.books.some((book) => book === answer);
    state.highlight = isCorrect ? 'correct' : 'wrong';
    render();
}

function AddArthorForm() {
    return <div>
        <h1>Add Author</h1>
        <p></p>
    </div>;
}

function App() {
    return <AuthorQuiz {...state} onAnswerSelected={onAnswerSelected} />;
}

function render() {
    ReactDOM.render(
    <BrowserRouter>
        <Route exact path="/" component={App} />
        <Route path="/add" component={AddArthorForm} />
    </BrowserRouter>, document.getElementById('root'));
}

render();
serviceWorker.unregister();
