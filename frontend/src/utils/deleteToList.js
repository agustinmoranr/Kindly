const API = 'http://localhost:3000/book/'
//const formData = new FormData()

const DeleteToList = async (where, id) => {

  //buildURL
  const URL = `${API}${id}?where=${where}`
  console.log(URL)

  try {
    return await fetch(URL, {
      method: 'delete',
    })
    .then(response => response.json());
  }
  catch (error) {
    console.error('[getData ERROR]: ', error)
    throw new Error('[Error]: ', bookInfo.error)
  }
}

export default DeleteToList;