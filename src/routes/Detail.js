import React from 'react';
import './Detail.css';

class Detail extends React.Component {
    componentDidMount() {
        const { location, history } = this.props;
        if (location.state === undefined) {
            history.push('/');
        }
    }

    render() {
        const { location } = this.props;
        if (location.state) {
            return (
                <div className="detail">
                    <img src={location.state.poster} />
                    <h3>{location.state.rating}</h3>
                    <div className="detail__data">
                        <h3 className="detail__title">{location.state.title}</h3>
                    </div>
                    <h5 className="detail__year">{location.state.year}</h5>
                    <ul className="detail__genres">
                        <li className="detail__genre">
                            {location.state.genre}
                        </li>
                    </ul>
                    <p className="detail__summary">{location.state.summary}</p>
                </div>

            );
        } else {
            return null;
        }
    }
}

export default Detail;