export const fetchOrdersData = () => {
  const data = []
    for (let i = 0; i < 46; i++) {
        data.push({
          key: i,
          id: Math.floor(Math.random() * 1000000),
          seller: 'Vendedor' + Math.floor(Math.random() * 5),
          value: Math.floor(Math.random() * 1000),
          date: '02/06/2023'
        });
    }
    return(data)
}