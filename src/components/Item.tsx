import { useState } from 'react'
import PropTypes from 'prop-types'
import Rating from './Rating'
import { NavLink } from 'react-router-dom'

function Item(props) {
  return (
    <div className="item">
      <div className="img-container">
        <img src={props.imageUrl} alt="" />
      </div>
      <p className="name">{props.name}</p>
      <p>
        <Rating value={props.avgRating} />
      </p>
      <p className="price">
        ${props.price}&nbsp;
        {props.isOnSale ? <text className="sale">On sale</text> : <text></text>}
      </p>
      <div className="button-container">
      <NavLink
          activeClassName="selected"
          className="view-product"
          to={`/item/${props._id}`}
        >
          <button>View item</button>
        </NavLink>
      </div>
    </div>
  )
}

Item.propTypes = {
  _id: PropTypes.string,
  name: PropTypes.string,
  description: PropTypes.string,
  price: PropTypes.number,
  avgRating: PropTypes.number,
  isOnSale: PropTypes.bool,
  stockCount: PropTypes.number,
  imageUrl: PropTypes.string,
}

export default Item
