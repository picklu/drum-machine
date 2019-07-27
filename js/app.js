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
  drumMachine: {
    backgroundColor: '#aaa',
    border: '2px solid #555',
    fontSize: '1.5rem',
    height: '500px',
    maxWidth: '500px',
    margin: 'auto',
    marginTop: '100px',
    display: 'flex',
    padding: '0',
    display: 'flex',
    flexDirection: 'column'
  },
  display: {
    backgroundColor: '#9e9',
    border: '3px solid #555',
    padding: '10px'
  },
  drumPad: {
    backgroundColor: '#eee',
    border: '3px solid #555',
    height: '100%',
    padding: '10px'
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
    <Container id='drum-machine' className={classes.drumMachine}>
      <Box id='display' className={classes.display}>
        <Typography variant='h3'>display</Typography>
      </Box>
      <Box id='drum-pad' className={classes.drumPad}>
        <Typography variant='h3'>drum pad</Typography>
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
