import React from 'react';
import { Checkbox, FormControlLabel, Grid, TextField } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { useAuth } from '../../contexts/AuthContext';
import { useHistory } from 'react-router';
import { useTranslation } from 'react-i18next';
import { validIsEmpty, validLogin } from '../../api/Validator';

import md5 from 'md5';

const useStyles = makeStyles({
  root: {
    maxWidth: "400px",
    padding: "1.5em"
  },
  title: {
    color: "#5e35b1",
    fontSize: "1.5rem",
    fontWeight: 700,
    marginBottom: "0.4em"
  },
  textbox: {
    width: "100%",
    margin: "8px 0"
  },
  btnSignIn: {
    color: "#fff",
    width: "100%"
  }
});

const LoginPage = () => {
  const classes = useStyles();
  const history = useHistory();
  const auth = useAuth();
  const { t } = useTranslation();

  const doLogin = () => {

    let sEncryptAccount = md5(paramAccount);
    let sEncryptPwd = md5(paramPassword);

    let sErrorMsg = validLogin(sEncryptAccount, sEncryptPwd);

    if (!validIsEmpty(sErrorMsg)) {
      return alert(t(sErrorMsg));
    }

    auth.login(sEncryptAccount, sEncryptPwd)

    history.push(history.location.state ? history.location.state.from.pathname : "/");

  }

  const updateAccount = (e) => {
    setAccount(e.target.value)
  }

  const updatePassword = (e) => {
    setPassword(e.target.value)
  }

  const [paramAccount, setAccount] = React.useState("admin");
  const [paramPassword, setPassword] = React.useState("1234");

  return (

    <Grid container
      direction="row"
      justifyContent="center"
      alignItems="center">

      <Card className={classes.root} elevation={10}>
        <CardContent>
          <Typography className={classes.title} gutterBottom variant="h5" component="h2">
            Hi, Welcome Back
          </Typography>

          <br />
          <Typography variant="body2" color="textSecondary" component="p">
            Enter your credentials to continue
          </Typography>
          <br />

          <TextField className={classes.textbox}
            id="account"
            label="Account"
            required
            variant="outlined"
            value={paramAccount}
            onChange={updateAccount} />
          <TextField className={classes.textbox}
            id="password"
            label="Password"
            type="password"
            required
            variant="outlined"
            autoComplete="current-password"
            value={paramPassword}
            onChange={updatePassword} />

          <Grid container alignItems="flex-end">
            <Grid item>
              <FormControlLabel
                control={
                  <Checkbox
                    name="rememberMe"
                    color="primary"
                  />
                }
                label="Remember me"
              />
            </Grid>
          </Grid>

          <Button className={classes.btnSignIn} variant="contained" color="primary" onClick={doLogin}>Sign In</Button>
        </CardContent>

        <CardActions>

        </CardActions>
      </Card>
    </Grid>
  )
}

export default LoginPage;