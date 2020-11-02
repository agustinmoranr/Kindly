const API = 'http://localhost:3000/book/'

const getData = async(id) => {
  let response;

  const route = id ? `${API}${id}` : API

  try {
    const results = await fetch(route)
    response = await results.json()
    return response;
  }
  catch(error) {
    console.error('[Error]:', response.error)
    console.error('[getData ERROR]: ', error)
  }
}

export default getData;