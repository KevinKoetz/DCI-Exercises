{
  const cite = document.querySelector("cite");
  let parent = cite?.parentElement;
  let parentPath = getElementNameWithClasses(parent) + " > " + getElementNameWithClasses(cite)

   while(parent?.tagName.toLowerCase() !== "html"){
      parent = parent?.parentElement
      parentPath = getElementNameWithClasses(parent) + " > " + parentPath
  } 

  function getElementNameWithClasses(element: HTMLElement | null | undefined){
      if(!element) return ""
      const classes = Array.from(element.classList).join(".")
      return (element.tagName + (classes.length > 0 ? "." + classes: "")).toLowerCase()
  }
  console.log(parentPath);
}
