import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { getisLoggedIn } from 'redux/selectors';
import { logIn } from 'redux/authorization/operation';
export const Login = () => {
  const dispatch = useDispatch();
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const email = form.elements.email.value.trim();
    const password = e.target.elements.password.value.trim();
    dispatch(logIn({ email, password }));
    form.reset();
  };
  const isLoggedIn = useSelector(getisLoggedIn);
  if (isLoggedIn) {
    return <Navigate to="/PhoneBook" replace={true} />;
  }
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Email
        <input
          type="email"
          name="email"
          // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label>
        Password
        <input
          type="password"
          name="password"
          // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <button type="submit">Login</button>
    </form>
  );
};
