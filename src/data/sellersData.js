export const fecthSellersData = () => {
    const data = []
    const goal = 75000
    for (let i = 0; i < 10; i = i + 1) {
      let sales = Math.floor(Math.random() * 75000)
      let progress = (sales * 100 / goal).toFixed(1)
      let commission = sales * 0.05
      data.push({
        name: `Vendedor ${i}`,
        sales: new Intl.NumberFormat('pt-BR').format(sales),
        goal: new Intl.NumberFormat('pt-BR').format(goal),
        commission: new Intl.NumberFormat('pt-BR').format(commission),
        progress: progress,
        key: i
      });
    }
    const num = Math.floor(Math.random() * 2)
    if(num === 0){
      return(data)
    }else{
      return(data)
    }
}