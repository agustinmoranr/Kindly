const getHash = () => location.hash.slice(1).toLocaleLowerCase().split('/')[1]|| '/';
console.log(location.hash)
console.log(location.hash.slice(1))
console.log(location.hash.slice(1).toLocaleLowerCase())
console.log(location.hash.slice(1).toLocaleLowerCase().split('/'))
console.log(location.hash.slice(1).toLocaleLowerCase().split('/')[1])

export default getHash;