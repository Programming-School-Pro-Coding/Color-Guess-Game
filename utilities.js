//Function To grab id/class For usability
//First parameter is The Element Type (class/id )
//Second parameter is the Name of the Element You want to Grab 

const getElement =(eleType,eleName)=>{
    if(eleType=="class"){
        return document.getElementsByClassName(eleName);
    }else if(eleType=="id"){
        return document.getElementById(eleName);
    }
}
//Function to Generate A random number Between x => y
// First parameter Is the Max number You want to get
// Second  parameter Is the Min number You want to get , it is set to 0 by Default

const random = (max,min = 0 )=>{
    return Math.floor(Math.random() * (max - min + 1) + min)
}

