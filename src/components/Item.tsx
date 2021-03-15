import { useState } from 'react'
import PropTypes from 'prop-types'
import Rating from './Rating'
import { NavLink } from 'react-router-dom'

function Item(props) {
  const [_id] = useState(props._id)
  const [name] = useState(props.name)
  const [description] = useState(props.description)
  const [price] = useState(props.price)
  const [avgRating] = useState(props.avgRating)
  const [isOnSale] = useState(props.isOnSale)
  const [stockCount] = useState(props.stockCount)
  const [imageUrl] = useState(props.imageUrl)

  return (
    <div className="item">
      <div className="img-container">
        <img src={imageUrl} alt="" />
      </div>
      <p className="name">{name}</p>
      <p>
        <Rating value={avgRating} />
      </p>
      <p className="price">
        ${price}&nbsp;
        {isOnSale ? <text className="sale">On sale</text> : <text></text>}
      </p>
      <div className="button-container">
      <NavLink
          activeClassName="selected"
          className="view-product"
          to={`/item/${_id}`}
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
