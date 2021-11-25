const form = document.getElementById('form');
const nombre = document.getElementById('nombre');
const apellido = document.getElementById('apellido');
const num_telefono = document.getElementById('num_telefono');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    CheckInputs();
});

function CheckInputs() {
    //get the Values from the inputs
    const nombreValue = nombre.value.trim();
    const apellidoValue = apellido.value.trim();
    const num_telefonoValue = num_telefono.value.trim();
    const num_seguroValue = num_seguroValue.value.trim();
    const HorafechaValue = HorafechaValue.value.trim();

    if(nombreValue === '') {
      setErrorFor(nombre, 'nombre cannot be blank');
    } else {
        setSuccessFor(nombre);
    }
    
    if(apellidoValue === '') {
        setErrorFor(apellido, 'apellido cannot be blank');
      } else {
          setSuccessFor(apellido);
      }

    if (num_telefonoValue === '') {
        setErrorFor(num_telefono, 'num_telefono cannot be blank');
    } else if (!isnum_telefono(num_telefonoValue)) {
        setErrorFor(num_telefono, 'num_telefono is not valid');
    } else { 
        setSuccessFor(num_telefono);
    }
    if (num_seguroValue === '') {
        setErrorFor(num_seguro, 'num_seguro cannot be blank');
    } else if (!isnum_seguro(num_seguroValue)) {
        setErrorFor(num_seguro, 'num_seguro is not valid');
    } else { 
        setSuccessFor(num_seguro);
    }
    
    if(especialistaValue === '') {
        setErrorFor(especialista, 'especialista cannot be blank');
      } else {
          setSuccessFor(especialista);
      }

      if(horafechaValue === '') {
        setErrorFor(horafecha, 'HoraFecha cannot be blank');
      } else {
          setSuccessFor(HoraFecha);
      }
        // show a success message

}
function setErrorFor(input, message) {
    const formControl = input.parentElement; // .form-control
    const small = formControl.queryselector('Small');

    // add error message inside small
    small.innerText = message;

    // add error class 
    formControl.className = 'form-control error';
}

function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

