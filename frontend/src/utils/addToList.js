import getData from './getData';

const API = 'http://localhost:3000/book'
//const formData = new FormData()

const addToList = async (where, id) => {
  // get data from our book
  console.log(where)
  console.log(id)
  const bookInfo = await getData(id)

  //buildURL
  const URL = `${API}?where=${where}`

  //formData.append(bookInfo)

  try {
    const results = await fetch(URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(bookInfo.body)
      
    })
    return results;
  }
  catch (error) {
    console.error('[getData ERROR]: ', error)
    throw new Error('[Error]: ', bookInfo.error)
  }
}

export default addToList;