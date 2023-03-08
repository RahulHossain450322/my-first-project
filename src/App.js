import React from 'react'

import style from './Components/AllResetCss/Index.css'
import Popular from './Components/Popular/Popular'
import Banner from './Components/Banner/Banner'
import Header from './Components/Header/Header'
import Home from './Components/Home_section/Home'
import Menu from './Components/MenuList/Menu'
import Ship from './Components/Shiping/Ship'
import Shop from './Components/ShopDepartment/Shop'
import Topbar from './Components/TOPBAR/Topbar'
import Fashion from './Components/Fashion/Fashion'
import Outdoor from './Components/Outdoors/Outdoor'
import Customar from './Components/Customar/Customar'
import Brands from './Components/Brands/Brands'
import SFooter from './Components/SecondaryFooter/SFooter'
import Footer from './Components/Footer/Footer'



function App() {
  return (
    <>
      <Topbar />
      <Header />
      <Menu />
      <Banner />
      <Shop />
      <Ship />
      <Home />
      <Popular />
      <Fashion />
      <Outdoor />
      <Customar />
      <Brands />
      <SFooter />
      <Footer />
    </>
  )
}

export default App
