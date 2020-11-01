import React from 'react';
import PropTypes from 'prop-types';
import img1 from './images/1.jpg';
import img2 from './images/2.jpg';
import img3 from './images/3.jpg';
import img4 from './images/4.jpg';
import img5 from './images/5.jpg';
function Food({ name, picture, message, rating}) {
  return (
    <div>
            <h3>I Love {name}</h3>
            <h4>{rating}/5.0</h4>
            <img src={picture} alt={message} />
        </div>
  );
}
const foodILike = [
  {
    id: 1,
    name: '떡볶이',
    image: img1,
    message: '떡볶이 사진',
    rating: 5
  },
  {
    id: 2,
    name: '만두',
    image: img2,
    message: '만두 사진',
    rating: 4
  },
  {
    id: 3,
    name: '햄버거',
    image: img3,
    message: '햄버거 사진',
    rating: 3
  },
  {
    id: 4,
    name: '치킨',
    image: img4,
    message: '치킨 사진',
    rating: 2
  },
  {
    id: 5,
    name: '파스타',
    image: img5,
    message: '파스타 사진',
    rating: 1
  }
];

function App() {
  return (
    <div>
      {foodILike.map(dish => (
        <Food key={dish.id} name={dish.name} picture={dish.image} message={dish.message} rating={dish.rating} />
      ))}
    </div>
  );
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  rating: PropTypes.number
}
export default App;