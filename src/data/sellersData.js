export const fecthSellersData = () => {
    const data = []
    for (let i = 0; i < 100; i = i+5) {
        data.push({
          name: `Vendedor ${i}`,
          sales: i,
          goal: 100,
          progress: i
        });
    }
    return(data)
}