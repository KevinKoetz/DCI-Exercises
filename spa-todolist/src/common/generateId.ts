const generateId = (() => {
    let id = 0;
    return (overwrite?: number) => {
      id = overwrite ? overwrite : id
      return id++
    }
  })()

export default generateId