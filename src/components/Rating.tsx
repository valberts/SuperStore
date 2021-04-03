import { useEffect } from 'react'
import { useState } from 'react'

function Rating(props) {
    let count = 5
    let value = props.value
  const [fullStar] = useState(
    'https://guidedprojects.dev/assets/files/star_full-f757f2a6eb46312ac3b0a9f4923add12.svg',
  )
  const [halfStar] = useState(
    'https://guidedprojects.dev/assets/files/star-half-c86abc67a14feafe9a821fd5e06e5833.svg',
  )
  const [emptyStar] = useState(
    'https://guidedprojects.dev/assets/files/star-empty-849812a23c4515e156571518674ae723.svg',
  )

  function chooseStar() {
    for (count; count > 0; count--) {
      if (value <= 0) {
        return emptyStar
      } else if (value === 0.5) {
        value = value - 0.5
        return halfStar
      } else {
        value = value - 1
        return fullStar
      }
    }
  }

  return (
    <div className="rating-container">
      <img src={chooseStar()} alt="" />
      <img src={chooseStar()} alt="" />
      <img src={chooseStar()} alt="" />
      <img src={chooseStar()} alt="" />
      <img src={chooseStar()} alt="" />
    </div>
  )
}

export default Rating
