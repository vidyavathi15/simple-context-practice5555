import {userContext} from "./App.js"
const ComponentC = () => {



    return(


    
        <userContext.Consumer>
            {value => {
                const {changeDetails, employee} = value 



            const onClickUpdateDetails = () => {
                changeDetails()
                console.log(employee)
            }
            console.log(employee)



            return(
                <>
                <p>{employee.name}</p>
          <p>{employee.salary}</p>
           

        <button type="button" className="update" onClick = {onClickUpdateDetails}>update</button>
          
         </>
           
            )



            }}


        </userContext.Consumer>


    )
            }
      




    




export default ComponentC