const generateId = (() => {
    let id = 0;
    return (overwrite?: number) => {
      id = overwrite ? overwrite : id + 1
      return id
    }
  })()

export default generateId