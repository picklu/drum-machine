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
  Button,
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
    borderRadius: theme.spacing(0.5),
    boxShadow: '3px 5px 10px #222',
    fontSize: '1.5rem',
    height: theme.spacing(50),
    maxWidth: theme.spacing(50),
    margin: 'auto',
    marginTop: theme.spacing(10),
    padding: theme.spacing(3),
    display: 'flex',
    flexDirection: 'column'
  },
  display: {
    backgroundColor: theme.palette.secondary.main,
    borderRadius: 'inherit',
    marginBottom: theme.spacing(3),
    padding: theme.spacing(1)
  },
  drumPad: {
    borderRadius: 'inherit',
    height: '100%',
    padding: theme.spacing(1)
  },
  enclose: {
    border: `2px solid ${theme.palette.tertiary.main}`
  },
  button: {
    marginRight: theme.spacing(1),
    width: '30%'
  },
  footer: {
    fontSize: 'inherit',
    marginTop: theme.spacing(3),
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

// buttons label
const buttons = ['q', 'w', 'e', 'a', 's', 'd', 'z', 'x', 'c'];

// Drum Machine
const DrumMachine = () => {
  const classes = useStyles();

  return (
    <Container id='drum-machine' className={classes.drumMachine}>
      <Box id='display' className={clsx(classes.enclose, classes.display)}>
        <Typography variant='h3'>display</Typography>
      </Box>
      <Box id='drum-pad' className={clsx(classes.enclose, classes.drumPad)}>
        <Typography variant='h3'>
          {buttons.map((item, index) => (
            <Button
              variant='contained'
              className={classes.button}
              key={`button-${index}`}
            >
              {item}
            </Button>
          ))}
        </Typography>
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
