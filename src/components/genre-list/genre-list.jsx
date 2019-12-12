import React, {PureComponent} from "react";
import PropTypes from 'prop-types';
import withActiveItem from "../../hocs/with-active-item";

class GenreList extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {genres, onGenreClick, activeItem = -1, onChangeActiveItem = () => ({})} = this.props;

    return <ul className="catalog__genres-list">
      { genres.map((genre, i) =>
        (<li className={`catalog__genres-item ${activeItem === i ? `catalog__genres-item--active` : ``}`}
          key={`catalog__genres-item--${genre}-${i}`}
          onClick={(event)=>{
            event.preventDefault();
            onChangeActiveItem(i);
            onGenreClick(genre);
          }}>
          <a href="#" className="catalog__genres-link">
            {genre}
          </a>
        </li>))}
    </ul>;
  }
}

GenreList.propTypes = {
  genres: PropTypes.arrayOf(PropTypes.string),
  onGenreClick: PropTypes.func.isRequired,
  activeItem: PropTypes.number,
  onChangeActiveItem: PropTypes.func,
};

export default withActiveItem(GenreList);
