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

const Register: React.FC<RouteComponentProps> = ({
  location: { state },
  history,
}) => {
  const classes = useStyles();
  const { googleId, email } = state;
  const [values, setValue] = React.useState({
    name: 'elton jhin',
    state: 'Bahia',
    role: 'ADC',
    subRole: 'MID',
    champ: 'Jhin',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    const data = await (await fetch(
      `/api/profile.js?username=${values.name}`,
    )).json();
    const { username, winRate, tier, rank } = data.user;
    const userData = {
      ...values,
      googleId,
      email,
      leagueInfo: {
        username,
        winRate,
        tier,
        rank,
        champ: values.champ,
      },
    };
    await (await fetch('/api/user.js', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    })).json();
    history.push('/home');
  };

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
