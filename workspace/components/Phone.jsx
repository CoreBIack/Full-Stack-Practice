const Phone =({number, onChange})=>{
  return <>
    phone: <input value={number} onChange={onChange}/>
  </>
}
export default Phone