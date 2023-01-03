import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { getIsLoggedIn } from 'redux/selectors';
import { signUp } from 'redux/authorization/authOperation';
import { Button, InputGroup, InputRightElement, Input } from '@chakra-ui/react';
import { useState } from 'react';
import { Form, ButtonStyle, Label } from 'pages/login/login.style';
export default function SignUp() {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const email = form.email.value.trim();
    const name = form.name.value.trim();
    const password = form.password.value.trim();
    dispatch(signUp({ email, name, password }));
    form.reset();
  };
  const handleClick = () => setShow(!show);
  const isLoggedIn = useSelector(getIsLoggedIn);
  if (isLoggedIn) {
    return <Navigate to="/PhoneBook" replace={true} />;
  }
  return (
    <Form onSubmit={handleSubmit}>
      <Label>
        Email
        <Input
          borderColor={'#181818'}
          variant="outline"
          w="400px"
          type="email"
          name="email"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </Label>
      <Label>
        Name
        <Input
          borderColor={'#181818'}
          variant="outline"
          w="400px"
          type="text"
          name="name"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </Label>
      <Label>
        Password
        <InputGroup size="md" width="400px">
          <Input
            borderColor={'#181818'}
            name="password"
            pr="4.5rem"
            type={show ? 'text' : 'password'}
            placeholder="Enter password"
          />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={handleClick}>
              {show ? 'Hide' : 'Show'}
            </Button>
          </InputRightElement>
        </InputGroup>
      </Label>
      <ButtonStyle type="submit" colorScheme="blue">
        Register
      </ButtonStyle>
    </Form>
  );
}
