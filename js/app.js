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
      main: colors.grey[700]
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
    fontSize: '1.5rem',
    maxWidth: theme.spacing(50),
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
    padding: theme.spacing(1)
  },
  enclose: {
    border: `2px solid ${theme.palette.primary.main}`
  },
  button: {
    margin: theme.spacing(0.5),
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
const buttons = {
  Q: {
    description: 'drum Q',
    src: 'http://audiosoundclips.com/wp-content/uploads/2011/12/Drum1.mp3'
  },
  W: {
    description: 'drum W',
    src: 'http://audiosoundclips.com/wp-content/uploads/2011/12/Drum1.mp3'
  },
  E: {
    description: 'drum E',
    src: 'http://audiosoundclips.com/wp-content/uploads/2011/12/Drum1.mp3'
  },
  A: {
    description: 'drum A',
    src: 'http://audiosoundclips.com/wp-content/uploads/2011/12/Drum1.mp3'
  },
  S: {
    description: 'drum S',
    src: 'http://audiosoundclips.com/wp-content/uploads/2011/12/Drum1.mp3'
  },
  D: {
    description: 'drum D',
    src: 'http://audiosoundclips.com/wp-content/uploads/2011/12/Drum1.mp3'
  },
  Z: {
    description: 'drum Z',
    src: 'http://audiosoundclips.com/wp-content/uploads/2011/12/Drum1.mp3'
  },
  X: {
    description: 'drum X',
    src: 'http://audiosoundclips.com/wp-content/uploads/2011/12/Drum1.mp3'
  },
  C: {
    description: 'drum C',
    src: 'http://audiosoundclips.com/wp-content/uploads/2011/12/Drum1.mp3'
  }
};

// Drum Machine
const DrumMachine = () => {
  const classes = useStyles();

  const pauseAllAudio = () => {
    document.querySelectorAll('audio').forEach(item => {
      item.pause();
    });
  };

  const playAudio = audioPlayer => {
    const description = document.querySelector('#display');
    audioPlayer
      .play()
      .then(() => {
        description.innerText = buttons[audioPlayer.id].description;
      })
      .catch(error => {
        description.innerText = error;
      });
  };

  const handleKeyDown = event => {
    const whichKey = event.which || event.keyCode;
    const char = String.fromCharCode(whichKey);

    pauseAllAudio();

    document.querySelectorAll('.clip').forEach(item => {
      if (item.id === char) {
        playAudio(item);
      }
    });
  };

  const handleClick = event => {
    event.stopPropagation();
    pauseAllAudio();
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
      <Typography
        id='display'
        variant='subtitle2'
        className={clsx(classes.enclose, classes.display)}
      >
        ***
      </Typography>
      <Box id='drum-pad' className={clsx(classes.enclose, classes.drumPad)}>
        {Object.keys(buttons).map((item, index) => (
          <Button
            variant='contained'
            color='primary'
            id={`drum-pad-${item}`}
            className={clsx('drum-pad', classes.button)}
            key={`button-${index}`}
            onClick={handleClick}
          >
            <audio
              id={item}
              className='clip'
              src={buttons[item]['src']}
              type='audio/mpeg'
            >
              Your browser does not support the audio tag.
            </audio>
            {item}
          </Button>
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
