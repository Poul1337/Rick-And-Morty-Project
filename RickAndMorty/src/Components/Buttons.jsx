import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { v4 } from 'uuid';

const Buttons = ({ item }) => {
  return (
    <Stack direction="row" spacing={5} paddingRight={20}>
      {item?.map((item) => (
        <Button variant="text" key={v4()}>
          {item}
        </Button>
      ))}
    </Stack>
  );
};

export default Buttons;
