import { useDispatch } from 'react-redux';

import { logIn } from 'redux/authorization/authOperation';
export default function Login () {
  const dispatch = useDispatch();
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const email = form.elements.email.value.trim();
    const password = e.target.elements.password.value.trim();
    dispatch(logIn({ email, password }));
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Email
        <input
          type="email"
          name="email"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label>
        Password
        <input
          type="password"
          name="password"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <button type="submit">Login</button>
    </form>
  );
};
