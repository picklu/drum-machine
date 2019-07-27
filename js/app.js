/***************************************
 *
 * Material-Ui styles
 *
 * *************************************/
const {
  colors,
  CssBaseline,
  MuiThemeProvider,
  Typography,
  Container,
  makeStyles,
  createMuiTheme,
  Box,
  Input,
  Icon,
  Link,
  CircularProgress
} = MaterialUI;

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#f00'
    },
    secondary: {
      main: '#19857b'
    },
    tertiary: {
      main: 'ff2255'
    },
    error: {
      main: colors.red.A400
    },
    background: {
      default: '#aaa'
    }
  }
});

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: 'white',
    fontSize: '1.5rem',
    height: '500px',
    marginTop: '100px',
    display: 'flex',
    padding: '0'
  },
  container: {
    marginTop: '25%',
    display: 'flex',
    justifyContent: 'center',
    textAlign: 'center'
  },
  footer: {
    fontSize: 'inherit',
    marginTop: '30px',
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center'
  }
}));

/***************************************
 *
 * Javascript
 *
 * *************************************/

//  Concatenation of classes
const clsx = (...classes) => {
  return Array.from(classes).join(' ');
};

// Footer
const Footer = () => {
  const classes = useStyles();

  return (
    <Box className={classes.footer}>
      <Typography variant='caption'>&copy; 2019 picklu</Typography>
    </Box>
  );
};

// Drum Machine
const DrumMachine = () => {
  const classes = useStyles();

  return (
    <Container className={classes.container}>
      <Box>
        <Typography variant='h3'>Hello, World!</Typography>
        <Typography variant='body1'>Under development</Typography>
      </Box>
    </Container>
  );
};

// Main app
const App = () => {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <DrumMachine />
      <Footer />
    </MuiThemeProvider>
  );
};

// Mouting app to the DOM
ReactDOM.render(<App />, document.getElementById('app'));
