import React from 'react';

// const H1_DOM_El = document.createElement('H1');
// const b  = document.createElement('b');
// b.innerHTML = 'H1 with DOM in bold';
// H1_DOM_El.appendChild(b);


/* ----------------------------- React Elemement ---------------------------- */
// Variant1: with React.createElement
// const H1_React_El = React.createElement('h1', {id:"vip"},
//   React.createElement('b', null, 'H1 in bold'),
//   React.createElement('b', null, 'Again'),
// );

// Varint2: with JSX syntax
const H2_React_El = <h2 id="vip">
    <b>H1 in bold</b>
    <b>Again</b>
  </h2>;

// console.dir(H1_DOM_El);
// console.dir(H1_React_El);
// console.dir(H2_React_El);

/* ----------------------------- React Component ---------------------------- */
// function Component1(props) {
//   console.dir(props);
//   return React.createElement('div', {className:'red',}, 'Div Node')
// }

// render must have 1 React Element
// root.render( React.createElement('hr') );
// root.render( <hr></hr> );
// root.render( <hr/> );
// root.render( <hr> ); // error

// const el = Component1()
// const el = <Component1/>
// console.dir(el);
// root.render( <div/> )

export {H2_React_El};
