type PropTypes = {
  name: string,
  class: string,
  id: number,
  onClick: () => void
  onDoubleClick: () => void
}
export default function Button(props: PropTypes) {
  const { name, class:_class , id, onClick, onDoubleClick } = props
  return (
    <button className={_class} id={id.toString()} onClick={onClick} onDoubleClick={onDoubleClick} >{name}</button>
  )

}