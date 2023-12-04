export const fetchProductsData = () => {
    const data = []
      for (let i = 0; i < 46; i++) {
          data.push({
            id: i,
            key: i,
            name: `Produto ${i}`,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            price: i,
            stock: i,
          });
      }
      return(data)
  }