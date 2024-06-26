import { useState } from 'react';
import { formValidation } from './formValidation';
import { formatAndSend } from './formatAndSend';
import { useDispatch } from 'react-redux';
import Swal from 'sweetalert2';

const ContactForm = () => {
  const dispatch = useDispatch();

  const [inputs, setInputs] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: '',
    form: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInputs({ ...inputs, [name]: value });
    setErrors(formValidation(inputs));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const { name, email, message } = inputs;
    if (!name || !email || !message) {
      Swal.fire({
        icon: 'error',
        text: 'Por favor, complete todos los campos obligatorios.'
      });
      return;
    }

    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!emailRegex.test(email)) {
      Swal.fire({
        icon: 'error',
        text: 'Por favor, ingrese un correo electrónico válido.'
      });
      return;
    }

    const errores = formValidation(inputs);
    setErrors(errores);
    if (Object.keys(errors).length === 0) {
      formatAndSend(inputs, dispatch);
    }
    setInputs({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <div className="flex justify-center items-center px-4">
      <div className="p-2 w-full max-w-md">
        <div className="container mx-auto flex flex-col rounded-lg bg-hightlight px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]dark:shadow-black/20">
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col mb-4">
              <label htmlFor="name" className="rounded-t-xl px-4 py-2">
                Nombre:
              </label>
              <input
                className="rounded-b-lg px-4 py-2 placeholder:italic text-black"
                id="name"
                name="name"
                type="text"
                maxLength={35}
                value={inputs.name}
                onChange={handleChange}
                placeholder="Nombre"
              />
              {errors.name && <p className="text-warning text-xs font-extrabold mt-2">{errors.name}</p>}
            </div>

            <div className="flex flex-col mb-4">
              <label htmlFor="email" className="rounded-t-xl px-4 py-2">
                Correo:
              </label>
              <input
                className="rounded-b-lg px-4 py-2 placeholder:italic text-black"
                id="email"
                name="email"
                type="email"
                maxLength={35}
                value={inputs.email}
                onChange={handleChange}
                placeholder="Correo electrónico"
              />
              {errors.email && <p className="text-warning text-xs font-extrabold mt-2">{errors.email}</p>}
            </div>

            <div className="flex flex-col mb-4">
              <label htmlFor="message" className="rounded-t-xl px-4 py-2">
                Tu Mensaje:
              </label>
              <textarea
                className="rounded-b-lg px-4 py-2 placeholder:italic resize-none text-black"
                id="message"
                name="message"
                rows="4"
                maxLength={500}
                value={inputs.message}
                onChange={handleChange}
                placeholder="escribe tu mensaje aquí..."
              />
              {errors.message && <p className="text-warning text-xs font-extrabold mt-2">{errors.message}</p>}
            </div>

            <button
              type="submit"
              className="rounded px-4 py-2 hover:bg-accentClear  bg-fadepa text-white flex items-center justify-center mx-auto"
            >
                Enviar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
