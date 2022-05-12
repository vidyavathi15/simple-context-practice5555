import ComponentC from "./ComponentC"
import './App.css';
// import ComponentB from "./ComponentB";
import React, {useState} from "react"




const personObj1 = {
  id:1, name: "vidya", salary: 10000
}
export const userContext = React.createContext({personObj1, changeDetails: () => {}})
const  App = () =>  {

  const [employee, setEmployee] = useState(userContext)
const updateEmployeeDetails = () => {
  setEmployee(prevState => {


    return{
      ...prevState, salary: 100, name:"GET"
    }
  })
    
}
  
  return (
    <div className="App">
      <center>
        <userContext.Provider value ={{employee, changeDetails: updateEmployeeDetails}}>
        
        <ComponentC />


        </userContext.Provider>
        
       

      </center>
    </div>
  );
}

export default App 
