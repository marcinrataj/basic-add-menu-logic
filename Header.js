
const Header = (props) => {

  const activeItems = props.items.filter(item => item.active)
  const number = activeItems.length


  return(
    <>
    <header><h2>Wielkość zamowienia: {activeItems.length}</h2></header>
    <header><h2>Do zapłaty: {number ? `${number+"0"} złotych` : 'nie kupujesz, to nie płacisz'} </h2></header>
    </>
  )
}
