import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Registro() {
  return (
    
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Nombre Completo</Form.Label>
        <Form.Control type="text" placeholder="Ingrese su nombre completo" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Correo Electronico</Form.Label>
        <Form.Control type="email" placeholder="Ingrese su correo electronico" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicConfirmEmail">
        <Form.Label>Confirmar correo electronico</Form.Label>
        <Form.Control type="email" placeholder="Confirme su correo electronico" />
      </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Contraseña</Form.Label>
        <Form.Control type="password" placeholder="Ingrese su contraseña" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
        <Form.Label>Confirmar Contraseña</Form.Label>
        <Form.Control type="password" placeholder="Confirme su contraseña" />
      </Form.Group> 
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Crear cuenta 
      </Button>
    </Form>
  );
}

export default Registro;