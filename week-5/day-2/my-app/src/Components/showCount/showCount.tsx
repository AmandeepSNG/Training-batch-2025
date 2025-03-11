
type PropTypes = {
  count: number;
}
function ShowCount (props: PropTypes) {
  const { count }  = props
  return (
    <p>count is = {count}</p>
  )
}


export default ShowCount