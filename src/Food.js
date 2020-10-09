import React from 'react';
import img1 from './images/1.jpg';
import img2 from './images/2.jpg';
import img3 from './images/3.jpg';
import img4 from './images/4.jpg';
import img5 from './images/5.jpg';
function Food({ name, picture }) {
  return (
    <div>
      <h2>I like {name}</h2>
    <img src={picture} alt={name} />
    </div>
  );
}
const foodILike = [
  {
    id: 1,
    name: '떡볶이',
    image: img1,
    alt: '떡볶이 사진'
  },
  {
    id: 2,
    name: '만두',
    image: img2,
    alt: '만두 사진'
  },
  {
    id: 3,
    name: '햄버거',
    image: img3,
    alt: '햄버거 사진'
  },
  {
    id: 4,
    name: '치킨',
    image: img4,
    alt: '치킨 사진'
  },
  {
    id: 5,
    name: '파스타',
    image: img5,
    alt: '파스타 사진'
  },
];

function App() {
  return (
    <div>
      {foodILike.map(dish => (
        <Food key={dish.id} name={dish.name} picture={dish.image} />
      ))}
    </div>
  );
}

export default App;