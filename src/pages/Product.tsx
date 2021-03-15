import { useParams } from "react-router-dom";

interface ParamTypes {
  _id: string
}

function Product() {
  const { _id } = useParams<ParamTypes>()

  return (
    <div className="product-container">
      <h1>Product</h1>
      {_id} 
    </div>
  )
}

export default Product
