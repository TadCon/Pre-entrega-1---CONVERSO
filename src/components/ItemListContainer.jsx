import Toast from 'react-bootstrap/Toast';

function ItemListContainer() {
  return (
    <Toast className='m-3'>
      <Toast.Header>
        <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
        <strong className="me-auto">¡Tienda Tadeo te saluda!</strong>
      </Toast.Header>
      <Toast.Body>Te damos la bienvenida a nuestro sitio en construcción :D </Toast.Body>
    </Toast>
  );
}

export default ItemListContainer;