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
      main: '#779ce6'
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
      default: '#ccc'
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
    color: 'white',
    fontSize: 'inherit',
    flex: 1,
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column'
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
    <Container textAlign='center' margin={3}>
      <Typography>&copy; 2019 picklu</Typography>
    </Container>
  );
};

// Drum Machine
const DrumMachine = () => (
  <Box>
    <Typography variant='h3'>
      Hello, World!
    </Typography>
    <Typography variant='p'>
      Under development
    </Typography>
  </Box>
)

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
