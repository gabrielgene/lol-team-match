import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'column',
      marginTop: theme.spacing(10),
      paddingLeft: theme.spacing(20),
      paddingRight: theme.spacing(20),
    },
    button: {
      marginTop: theme.spacing(4),
    },
  }),
);

const Register: React.FC<RouteComponentProps> = ({ location: { state } }) => {
  const classes = useStyles();
  const { googleId, email } = state;
  const [values, setValue] = React.useState({
    name: '',
    state: '',
    role: '',
    subRole: '',
    champ: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => console.log({ ...values, googleId, email });

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <Typography variant="h3" gutterBottom>
        League Match Profile
      </Typography>
      <TextField
        name="name"
        label="Nome de invocador"
        fullWidth
        value={values.name}
        onChange={handleChange}
        margin="normal"
        variant="outlined"
      />
      <TextField
        name="state"
        label="Estado"
        fullWidth
        value={values.state}
        onChange={handleChange}
        margin="normal"
        variant="outlined"
      />
      <TextField
        name="role"
        label="Role"
        fullWidth
        value={values.role}
        onChange={handleChange}
        margin="normal"
        variant="outlined"
      />
      <TextField
        name="subRole"
        label="SubRole"
        fullWidth
        value={values.subRole}
        onChange={handleChange}
        margin="normal"
        variant="outlined"
      />
      <TextField
        name="champ"
        label="Champion"
        fullWidth
        value={values.champ}
        onChange={handleChange}
        margin="normal"
        variant="outlined"
      />
      <Button
        variant="contained"
        className={classes.button}
        color="primary"
        size="large"
        fullWidth
        onClick={handleSubmit}
      >
        Entrar
      </Button>
    </form>
  );
};

export default Register;
