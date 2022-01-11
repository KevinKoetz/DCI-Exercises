import {ITask} from "./types";

export default function isITaskArray(input: unknown): input is ITask[]{

    if(!Array.isArray(input)) return false
  
    for(const item of input as unknown[] ){
      if(typeof item !== "object") return false
      if(item === null) return false
      if(!("text" in item)) return false
      if(!("done" in item)) return false
      const narrowedItem = item as {text: unknown; done: unknown};
      if(typeof narrowedItem.text !== "string") return false
      if(typeof narrowedItem.done !== "boolean") return false
    }
    return true
  }