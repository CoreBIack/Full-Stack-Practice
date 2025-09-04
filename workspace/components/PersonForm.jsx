import Name from "./Name"
import Phone from "./Phone"
const PersonForm =(props)=>{
  return <>
    <form onSubmit={props.onSubmit}>
      <Name name={props.nameComp.name} onChange={props.nameComp.onChange}/>
      <Phone number={props.phoneComp.number} onChange={props.phoneComp.onChange}/>
      <button type="submit">
          Add
      </button>
    </form>
    
  </>
}
export default PersonForm