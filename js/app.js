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
      default: colors.grey[800],
      main: colors.grey[900]
    },
    secondary: {
      main: colors.grey[400]
    },
    tertiary: {
      main: colors.green.A400
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
    backgroundColor: theme.palette.secondary.main,
    border: '1px solid #777',
    borderRadius: theme.spacing(0.5),
    boxShadow: '3px 5px 10px #222',
    fontSize: '1.2rem',
    maxWidth: theme.spacing(60),
    minWidth: theme.spacing(20),
    margin: 'auto',
    marginTop: theme.spacing(10),
    padding: theme.spacing(3),
    display: 'flex',
    flexDirection: 'column'
  },
  control: {
    borderRadius: 'inherit'
  },
  display: {
    backgroundColor: theme.palette.tertiary.main,
    borderRadius: 'inherit',
    margin: theme.spacing(0),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(1),
    textAlign: 'center'
  },
  drumPad: {
    borderRadius: 'inherit',
    padding: theme.spacing(0.5),
    display: 'flex',
    flexWrap: 'wrap'
  },
  enclose: {
    border: `2px solid ${theme.palette.primary.main}`
  },
  buttonContainer: {
    boxSizing: 'borderBox',
    flexBasis: '33.333%',
    padding: theme.spacing(0.5),
    display: 'flex',
    margin: 'auto'
  },
  button: {
    color: 'white',
    fontSize: theme.spacing(2.5),
    paddingTop: theme.spacing(2.8),
    paddingBottom: theme.spacing(2),
    height: '100%',
    width: '100%',
    transition: theme.transitions.create(
      ['background-color', 'box-shadow', 'border'],
      {
        duration: theme.transitions.duration.short
      }
    ),
    '&:hover': {
      backgroundColor: theme.palette.primary.default
    },
    '&:active': {
      backgroundColor: theme.palette.tertiary.main
    }
  },
  active: {
    backgroundColor: theme.palette.tertiary.main
  },
  inactive: {
    backgroundColor: theme.palette.primary.main
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

// Drum Sound Effect & Loops in MP3 Format
// Source: http://audiosoundclips.com
const buttons = {
  Q: {
    description: 'Drum sound effect loop 1',
    src: 'http://audiosoundclips.com/wp-content/uploads/2011/12/Drum1.mp3'
  },
  W: {
    description: 'Drum sound effect loop 2',
    src: 'http://audiosoundclips.com/wp-content/uploads/2011/12/Drum2.mp3'
  },
  E: {
    description: 'Drum sound effect loop 3',
    src: 'http://audiosoundclips.com/wp-content/uploads/2011/12/Drum3.mp3'
  },
  A: {
    description: 'Drum sound effect loop 4',
    src: 'http://audiosoundclips.com/wp-content/uploads/2011/12/Drum4.mp3'
  },
  S: {
    description: 'Drum sound effect loop 5',
    src: 'http://audiosoundclips.com/wp-content/uploads/2011/12/Drum5.mp3'
  },
  D: {
    description: 'Drum sound effect loop 6',
    src: 'http://audiosoundclips.com/wp-content/uploads/2011/12/Drum6.mp3'
  },
  Z: {
    description: 'Drum sound effect loop 7',
    src: 'http://audiosoundclips.com/wp-content/uploads/2011/12/Drum7.mp3'
  },
  X: {
    description: 'Drum sound effect loop 8',
    src: 'http://audiosoundclips.com/wp-content/uploads/2011/12/Drum8.mp3'
  },
  C: {
    description: 'Drum sound effect loop 9',
    src: 'http://audiosoundclips.com/wp-content/uploads/2011/12/Drum9.mp3'
  }
};

// Display
const Display = ({ displayText, ...props }) => {
  const classes = useStyles();

  return (
    <Box id='control' className={classes.control}>
      <Typography
        id='display'
        variant='subtitle2'
        display='block'
        className={clsx(classes.enclose, classes.display)}
      >
        {displayText}
      </Typography>
    </Box>
  );
};

// DrumpadButton
const DrumpadButton = ({ label, index, handleDrumpadClick, ...props }) => {
  const classes = useStyles();
  const [backgroundColor, setBackgroundColor] = React.useState(
    classes.inactive
  );

  const handleClick = async event => {
    event.persist();
    setBackgroundColor(classes.active);
    await handleDrumpadClick(event);
    setTimeout(() => setBackgroundColor(classes.inactive), 200);
  };

  return (
    <Box
      className={classes.buttonContainer}
      key={'drum-pad-container-' + label}
      onClick={handleClick}
    >
      <Button
        variant='contained'
        color='primary'
        id={'drum-pad-' + label}
        className={clsx('drum-pad', classes.button, backgroundColor)}
        key={'button-' + index}
        disableRipple={true}
      >
        <audio
          id={label}
          className='clip'
          src={buttons[label]['src']}
          type='audio/mpeg'
          key={'audio-' + index}
        >
          Your browser does not support the audio tag.
        </audio>
        {label}
      </Button>
    </Box>
  );
};

// Drumpads
const Drumpads = ({ handleDrumpadClick }) => {
  const classes = useStyles();

  return (
    <Box id='drum-pad' className={clsx(classes.enclose, classes.drumPad)}>
      {Object.keys(buttons).map((label, index) => (
        <DrumpadButton
          key={'drupad-button-' + index}
          label={label}
          index={index}
          handleDrumpadClick={handleDrumpadClick}
        />
      ))}
    </Box>
  );
};

// Drum Machine
const DrumMachine = () => {
  const classes = useStyles();
  const [displayText, setDisplayText] = React.useState('...');

  const pauseAllAudio = () => {
    document.querySelectorAll('audio').forEach(item => {
      item.pause();
    });
  };

  const playAudio = audioPlayer => {
    pauseAllAudio();
    setDisplayText(buttons[audioPlayer.id].description);
    const promise = audioPlayer.play();
    if (promise !== undefined) {
      promise
        .then(() => console.log('Played'))
        .catch(error => console.log(error));
    }
  };

  const handleKeyDown = async event => {
    const id = String.fromCharCode(event.which || event.keyCode);
    const button = document.getElementById('drum-pad-' + id);
    if (button) {
      button.click();
    } else {
      pauseAllAudio();
    }
  };

  const handleDrumpadClick = async event => {
    const audioPlayer = event.target.querySelector('.clip');
    await playAudio(audioPlayer);
  };

  React.useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <Container id='drum-machine' className={classes.drumMachine}>
      <Display displayText={displayText} />
      <Drumpads {...{ handleDrumpadClick }} />
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
