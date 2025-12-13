import React, { useState } from 'react'
import DashboardLayout from '../../../components/layouts/DashboardLayout'
import { UserContext } from '../../../context/UserContext'
import { UseUserAuth } from '../../../hooks/UseUserAuth';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../../../utils/axiosinstance';
import { API_PATHS } from '../../../utils/apiPaths';
import { useEffect } from 'react';
import InfoCard from '../../../components/Cards/InfoCard';
import { LuHandCoins, LuWalletMinimal } from 'react-icons/lu';
import { IoMdCard } from 'react-icons/io';
import { addThousandsSeparator } from '../../../utils/helper';

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
      <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
         <InfoCard 
           icon = {<IoMdCard/>}
           label = "total Balance"
           value = {addThousandsSeparator(dashboardData?.totalBalance || 0)}
           color = "bg-primary"
           />

           <InfoCard 
           icon = {<LuHandCoins/>}
           label = "total Income"
           value = {addThousandsSeparator(dashboardData?.totalIncome || 0)}
           color = "bg-orange-500"
           />

           <InfoCard 
           icon = {<LuWalletMinimal/>}
           label = "total Expense"
           value = {addThousandsSeparator(dashboardData?.totalExpenses || 0)}
           color = "bg-red-500"
           />
      </div>
    </div>
    </DashboardLayout>
  );
};

export default Home