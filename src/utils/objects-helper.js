export const updateObjectInArray = (items, itemId, objPropName, newObjProps) => {
    
    return items.map(u=>{
        if(u[objPropName] === itemId){
            return {...u, ...newObjProps}
        }
        console.log("sdf");
        return u;
    })
}