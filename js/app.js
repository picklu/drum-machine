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
      main: colors.grey[400]
    },
    secondary: {
      main: colors.green.A400
    },
    tertiary: {
      main: colors.grey[600]
    },
    error: {
      main: colors.red.A400
    },
    background: {
      default: colors.grey[50]
    }
  }
});

const useStyles = makeStyles(theme => ({
  drumMachine: {
    backgroundColor: theme.palette.primary.main,
    borderRadius: '3px',
    boxShadow: '3px 5px 10px #222',
    fontSize: '1.5rem',
    height: '500px',
    maxWidth: '500px',
    margin: 'auto',
    marginTop: '100px',
    display: 'flex',
    padding: '30px',
    display: 'flex',
    flexDirection: 'column'
  },
  display: {
    backgroundColor: theme.palette.secondary.main,
    borderRadius: 'inherit',
    marginBottom: '30px',
    padding: '10px'
  },
  drumPad: {
    borderRadius: 'inherit',
    height: '100%',
    padding: '10px'
  },
  enclose: {
    border: `2px solid ${theme.palette.tertiary.main}`
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
      <Box id='display' className={clsx(classes.enclose, classes.display)}>
        <Typography variant='h3'>display</Typography>
      </Box>
      <Box id='drum-pad' className={clsx(classes.enclose, classes.drumPad)}>
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
