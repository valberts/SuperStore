import ItemList from './../components/ItemList'

function Deals() {
  return (
    <div className="deals-container">
      <h1>Deals Page</h1>
      <ItemList 
        url='https://gp-super-store-api.herokuapp.com/item/list?size=30&isOnSale=true'
      />
    </div>
  )
}
  
export default Deals
