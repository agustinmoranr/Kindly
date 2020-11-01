const API = 'http://localhost:3000/book/'

const getData = async(id) => {
  const route = id ? `${API}${id}` : API

  try {
    const results = await fetch(route)
    const response = await results.json()
    return response;
  }
  catch(error) {
    console.error('[getData ERROR]: ', error)
  }
}

export default getData;