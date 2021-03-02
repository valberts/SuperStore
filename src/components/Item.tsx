import { useState } from 'react'
import PropTypes from 'prop-types'
import Rating from './Rating'

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
      <img src={imageUrl} alt="" />
      <p>{name}</p>
      <p>{price}</p>
      <p>
        <Rating value={avgRating} />
      </p>
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
