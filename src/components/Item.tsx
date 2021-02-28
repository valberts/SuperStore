import { useState } from 'react'
import PropTypes from 'prop-types'

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
    <div className="item-container">
      <div className="image-container">{<img src={imageUrl} alt="" />}</div>
      <p>{name}</p>
      <p>STARS RATING</p>
      <p>{price}</p>
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
