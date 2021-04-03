import ItemList from './../components/ItemList'

function Home() {
  return (
    <div className="home-container">
      <h1>Home Page</h1>
      <ItemList 
        url='https://gp-super-store-api.herokuapp.com/item/list?size=30'
      />
    </div>
  )
}

export default Home
