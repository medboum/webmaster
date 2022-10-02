import { NextPage } from 'next'
import Head from 'next/head'
import AddProduct from '../components/AddProduct.js'
import Categories from '../components/Categories.js'
import Slide from '../components/Slide.js'
import Selected from '../components/Selected.js'
import Footer from '../components/layout/Footer.js'
import Header from '../components/layout/Header.js'
import SignUp from '../components/layout/SignUp.js'
import LoginForm from '../components/LoginForm.js'
import SignUpForm from '../components/SignUpForm.js'
import UploadFile from '../components/UploadFile'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../slices/counterSlice'
import ProductSearch from '../components/ProductSearch.js'
import CategoryFilter from '../components/accueil/CategoryFilter.js'
import MyModal from '../components/MyModal.js'
import UserService from '../services/User_Service.js'
import axios from 'axios'
import authHeader from '../services/auth_Header.js'
import AnnonceSlider from '../components/accueil/AnnoncesSlider.js'

export default function Home() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  const user = JSON.stringify(
    axios.get('http://localhost:128/getRoleUser', {
      headers: authHeader(),
    })
  )
  console.log('user ' + user)

  return (
    <div className="flex min-h-screen flex-col items-center bg-gray-100 ">
      <Head>
        <title>Mantooj Shop</title>
        <link rel="icon" href="/logo.png" />
      </Head>
      <AnnonceSlider />

      <Categories />
      <Selected />
      <Slide />
    </div>
  )
}
