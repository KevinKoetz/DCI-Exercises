const getIdGenerator = (startId = 0) => {
  let id = startId;
  return (overwrite?: number) => {
    id = overwrite ? overwrite : id
    return id++
  }
}

export default getIdGenerator