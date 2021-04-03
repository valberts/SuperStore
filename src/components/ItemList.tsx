import { useState } from 'react'
import { useEffect } from 'react'
import Item from './../components/Item'

function ItemList(props) {
  const [error, setError] = useState(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [items, setItems] = useState([])
  const [total, setTotal] = useState(0)

  function checkTotal() {
    return total;
  }

  useEffect(() => {
    fetch(props.url)
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true)
          setItems(result.items)
          setTotal(result.total)
        },
        (error) => {
          setIsLoaded(true)
          setError(error)
        },
      )
  }, [])

  if (error) {
    return <div>Error: {error.message}</div>
  } else if (!isLoaded) {
    return <div>Loading...</div>
  } else {
    return (
      <div className="itemlist-container">
        <div className="item-list">
          {items.map((item) => (
            <Item
              _id={item._id}
              name={item.name}
              description={item.description}
              price={item.price}
              avgRating={item.avgRating}
              isOnSale={item.isOnSale}
              stockCount={item.stockCount}
              imageUrl={item.imageUrl}
            />
          ))}
        </div>
      </div>
    )
  }
}

export default ItemList
