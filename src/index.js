// import React from 'react';
import ReactDOM from 'react-dom/client';
import { H2_React_El } from "./elementDemos";
import Header from "./header";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render( <Header appTitle="Todo App"/>)
// root.render( Header({appTitle:"Todo App"}) )
// root.render( (new Header({appTitle:"Todo App"})).render() )

