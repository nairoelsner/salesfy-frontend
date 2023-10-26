export const fecthSellersData = () => {
    const data = []
    for (let i = 0; i < 20; i = i + 1) {
        data.push({
          name: `Vendedor ${i}`,
          sales: Math.floor(Math.random() * 500),
          goal: Math.floor(Math.random() * 500),
          progress: Math.floor(Math.random() * 101),
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