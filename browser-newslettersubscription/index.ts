
interface Special extends EventListenerObject {
    mouseEnterY: null | number,
}

const handleMouseIn:Special = {
    mouseEnterY: null,
    handleEvent(e: MouseEvent){
        
        
        if(!(e.type === "mousemove")) {
            e.currentTarget?.removeEventListener(e.type, this)
        }
        if(this.mouseEnterY === null) this.mouseEnterY = e.clientY
        if(e.clientY - this.mouseEnterY > 10 || this.mouseEnterY + 10 > window.innerHeight){
            document.body.append(document.createElement("newsletter-popup"))
            e.currentTarget?.removeEventListener(e.type, this)
        } 
        console.log("innerHeight",window.innerHeight);
        console.log("mouseEnterY",this.mouseEnterY);
    }
}

window.addEventListener("mousemove", handleMouseIn)

