const Filter =({filter, onChange})=>{
  return <>
    Filter by name: <input filter={filter} onChange={onChange}/>
  </>
}
export default Filter