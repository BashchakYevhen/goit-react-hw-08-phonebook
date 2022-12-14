import { Button, Input, InputGroup, InputRightElement } from '@chakra-ui/react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { logIn } from 'redux/authorization/authOperation';
import { Form, ButtonStyle, Label } from './login.style';
export default function Login() {
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const email = form.email.value.trim();
    const password = form.password.value.trim();
    dispatch(logIn({ email, password }));
    form.reset();
  };
  const handleClick = () => setShow(!show);

  return (
    <Form onSubmit={handleSubmit}>
      <Label>
        Email
        <Input
          borderColor={'#181818'}
          variant="outline"
          w="300px"
          type="email"
          name="email"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </Label>
      <Label>
        Password
        <InputGroup size="md" width="300px">
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
      <ButtonStyle colorScheme="black" type="submit">
        Login
      </ButtonStyle>
    </Form>
  );
}
