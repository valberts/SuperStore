import { useState } from 'react'
import { useEffect } from 'react'
import Item from './../components/Item'

function ItemList() {
  const [error, setError] = useState(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [items, setItems] = useState([])
  const [total, setTotal] = useState(0)

  useEffect(() => {
    fetch('https://gp-super-store-api.herokuapp.com/item/list?size=13')
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
        {items.map((item) => (
          <Item
            _id={item.id}
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
    )
  }
}

export default ItemList
