import React, { useState } from 'react'
import CategoryFilter from '../../components/accueil/CategoryFilter'
import Header from '../../components/layout/Header'

export default function products() {
  // const router = useRouter()
  // const { category } = router.query

  // const [products, setProducts] = useState([])

  // axios
  //   .get(`http://localhost:124/findProiduits/${category}`)
  //   .then((response) => {
  //     setProducts(response.data)
  //   })

  return (
    <div>
      {/* <Header /> */}
      <CategoryFilter />
    </div>
  )
}
