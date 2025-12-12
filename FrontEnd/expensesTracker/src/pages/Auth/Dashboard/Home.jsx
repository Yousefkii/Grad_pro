import React, { useState } from 'react'
import DashboardLayout from '../../../components/layouts/DashboardLayout'
import { UserContext } from '../../../context/UserContext'
import { UseUserAuth } from '../../../hooks/UseUserAuth';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../../../utils/axiosinstance';
import { API_PATHS } from '../../../utils/apiPaths';
import { useEffect } from 'react';

const Home = () => {
  UseUserAuth();

  const navigate = useNavigate();

  const [dashboardData, setDashboardData] = useState(null);
  const [loading, setLoading] = useState(false);

const fetchDashboardData = async ()=>{
  if(loading ) return ;

  setLoading(true);
  try {
    const response = await axiosInstance.get(`${API_PATHS.DASHBOARD.GET_DATA}`);

    if(response.data){
      setDashboardData(response.data);
    }
  
}catch (error){
  console.log("something went wrong, please try again later", error);
}finally {
  setLoading(false);
};}

useEffect(() => {
fetchDashboardData();
  return () => {
  }
}, [])


  return (
    <DashboardLayout activeMenu = "Dashboard">
    <div className='my-5 mx-auto'>

    </div>
    </DashboardLayout>
  )
}

export default Home