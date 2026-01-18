import moment from "moment";

export const validateEmail = (email) => {
    const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return regex.test(email);
};

export const getInitials = (name) =>{
    if(!name) return "";

    const words = name.split(" ");
    let initials = "";

    for(let i = 0; i < Math.min(words.length, 2); i++){
        initials += words[i][0];
    }
return initials.toUpperCase();
}

export const addThousandsSeparator = (num)=>{
    if(num == null || isNaN(num)) return "";
    
    const [integerPart, fractionalPart] = num.toString().split(".");
    const formattedInteger = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g,",");

    return fractionalPart
    ? `${formattedInteger}.${fractionalPart}`:formattedInteger;
};

export const prepareExpenseBarChartData = (data = []) => {
  const monthlyTotals = {};

  data.forEach((item) => {
    const date = new Date(item.date);
    const month = date.toLocaleString("default", { month: "short" }); 

    if (!monthlyTotals[month]) {
      monthlyTotals[month] = 0;
    }

    monthlyTotals[month] += item.amount;
  });

  return Object.keys(monthlyTotals).map((month) => ({
    month,
    amount: monthlyTotals[month],
  }));
};


export const prepareIncomeBarChartData = (data =[]) =>{
    const sortedData = [...data].sort((a,b) => new Date(a.date) - new Date(b.date));

    const chartData = sortedData.map((item) => ({
       month: moment(item?.date).format("DD MMM"),
         amount: item?.amount,
         Source: item?.source,
    }));
    return chartData;   
};

export const prepareExpenseLineChartData = (data =[]) =>{
    const sortedData = [...data].sort((a,b) => new Date(a.date) - new Date(b.date));
    const chartData = sortedData.map((item) => ({
        month: moment(item?.date).format("DD MMM"),
        amount: item?.amount,
        category: item?.category,
    }));
    return chartData;
    };
