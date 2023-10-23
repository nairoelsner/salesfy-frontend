export const fetchOrdersData = () => {
  const data = []
    for (let i = 0; i < 46; i++) {
        data.push({
          key: i,
          id: i,
          seller: 'Vendedor',
          value: i,
          date: '02/06/2023'
        });
    }
    return(data)
}