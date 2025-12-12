import React from 'react'
import DashboardLayout from '../../../components/layouts/DashboardLayout'
import { UserContext } from '../../../context/UserContext'
import { UseUserAuth } from '../../../hooks/UseUserAuth';

const Home = () => {
  UseUserAuth();
  return (
    <DashboardLayout activeMenu = "Dashboard">
    <div className='my-5 mx-auto'>
Home
    </div>
    </DashboardLayout>
  )
}

export default Home