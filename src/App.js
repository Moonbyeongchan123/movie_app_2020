import React from 'react';

function Food(porps) {
  return( 
    <h1>I like {porps.fav}</h1>
  )
}

function App() {
    return (
      <div>
        <h1>Hello</h1>  
        <Food fav="김치" />
        <Food fav="짜장면" />
        <Food fav="짬뽕" />
        <Food fav="만두" />
        <Food fav="피자" />
      </div>  
    );
}

export default App;