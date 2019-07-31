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
  display: {
    backgroundColor: theme.palette.tertiary.main,
    borderRadius: 'inherit',
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
    '&:active': {
      backgroundColor: theme.palette.tertiary.main
    }
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

// Drum Machine
const DrumMachine = () => {
  const [displayText, setDisplayText] = React.useState('***');
  const classes = useStyles();

  const pauseAllAudio = () => {
    document.querySelectorAll('audio').forEach(item => {
      item.pause();
    });
  };

  const playAudio = audioPlayer => {
    pauseAllAudio();
    audioPlayer
      .play()
      .then(() => {
        setDisplayText(buttons[audioPlayer.id].description);
      })
      .catch(error => {
        setDisplayText(error);
      });
  };

  const handleKeyDown = async event => {
    const id = String.fromCharCode(event.which || event.keyCode);
    const button = document.getElementById(`drum-pad-${id}`);
    if (button) {
      button.click();
    } else {
      pauseAllAudio();
    }
  };

  const handleClick = async event => {
    // event.persist();
    const audioPlayer = event.target.querySelector('.clip');
    playAudio(audioPlayer);
  };

  React.useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <Container id='drum-machine' className={classes.drumMachine}>
      <Box
        id='display'
        component='p'
        display='block'
        className={clsx(classes.enclose, classes.display)}
      >
        {displayText}
      </Box>
      <Box id='drum-pad' className={clsx(classes.enclose, classes.drumPad)}>
        {Object.keys(buttons).map((item, index) => (
          <Box
            className={classes.buttonContainer}
            key={`drum-pad-container${item}`}
          >
            <Button
              variant='contained'
              color='primary'
              id={`drum-pad-${item}`}
              className={clsx('drum-pad', classes.button)}
              key={`button-${index}`}
              onClick={handleClick}
              disableRipple={true}
            >
              <audio
                id={item}
                className='clip'
                src={buttons[item]['src']}
                type='audio/mpeg'
                key={`audio-${index}`}
              >
                Your browser does not support the audio tag.
              </audio>
              {item}
            </Button>
          </Box>
        ))}
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
