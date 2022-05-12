import {userContext} from "./App.js"


const ComponentB = () => {


    return(
        <div>
       
       <userContext.Consumer>
           {value => <div>{value}</div>}
        
       </userContext.Consumer>
      </div>




    )
}
export default ComponentB