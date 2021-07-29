export default {
  // example colors with dark mode
  colors: {
    text: '#343D48', // body color and primary color
    textSecondary: '#02073E', // secondary body color
    heading: '#0F2137', // primary heading color
    headingSecondary: '#343D48', // heading color
    background: '#FFFFFF', // body background color
    backgroundSecondary: '#F9FBFD', // secondary background color
    borderColor: '#DCE5EA', // border color
    primary: '#4f73b8', // primary button and link color
    secondary: '#DB4A87', // secondary color - can be used for hover states
    muted: '#7B8188', // muted color
    accent: '#609', // a contrast color for emphasizing UI
    dark: '#10132D',
    link: '#4F96FF', // default link color

    // highlight	a background color for highlighting text
    modes: {
      dark: {
        text: '#fff',
        background: '#000',
        primary: '#0cf',
        secondary: '#09c',
        muted: '#111',
      },
    },
  },
  fonts: {
    body: 'DM Sans, sans-serif',
    // body:
    //   'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
    heading: 'DM Sans, sans-serif',
    monospace: 'Menlo, monospace',
  },
  fontSizes: [
    12, // 0
    14, // 1
    16, // 2
    18, // 3
    20, // 4
    22, // 5
    24, // 6
    26, // 7
    28, // 8
    30, // 9
    32, // 10
    36, // 11
    40, // 12
    42, // 13
    48, // 14
    52, // 15
    64, // 16
  ],
  fontWeights: {
    body: 'normal',
    // body: 400,
    heading: 500,
    // heading: 700,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    // body: 1.5,
    heading: 1.25,
    // heading: 1.125,
  },
  letterSpacings: {
    body: 'normal',
    caps: '0.2em',
    heading: '-0.5px',
  },
  space: [
    0, // 0
    5, // 1
    10, // 2
    15, // 3
    20, // 4
    25, // 5
    30, // 6
    35, // 7
    40, // 8
    45, // 9
    50, // 10
    55, // 11
    60, // 12
    65, // 13
    70, // 14
    80, // 15
    90, // 16
    100, // 17
    110, // 18
    120, // 19
    130, // 20
    140, // 21
    150, // 22
    160, // 23
  ],
  sizes: {},
  breakpoints: [
    '480px',
    '640px',
    '768px',
    '1024px',
    '1260px',
    '1367px',
    '1440px',
    '1600px',
  ],
  // variants can use custom, user-defined names
  layout: {
    container: {
      maxWidth: [
        '100%',
        null,
        null,
        '720px',
        '970px',
        '1140px',
        '1260px',
        '1366px',
      ],
      paddingLeft: [6],
      paddingRight: [6],
      m: '0 auto',
    },
    main: {
      background: `linear-gradient(180deg,#F9FAFC 0%,rgba(249,250,252,0) 100%)`,
    },
  },
  text: {
    heading: {
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
    },
  },
  links: {},
  images: {
    avatar: {
      width: 48,
      height: 48,
      borderRadius: 99999,
    },
  },
  // variants for buttons
  buttons: {
    default: {
      backgroundColor: 'transparent',
      fontFamily: 'body',
      fontWeight: 'bold',
      borderRadius: '5px',
      cursor: 'pointer',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: '0.3s ease-in-out 0s',
      whiteSpace: 'nowrap',
    },
    primary: {
      variant: 'buttons.default',
      color: 'white',
      bg: 'primary',
      minHeight: '60px',
      padding: '0 30px',
      '&:hover': {
        bg: 'dark',
      },
    },
    primaryMd: {
      variant: 'buttons.primary',
      minHeight: '50px',
      px: '25px',
    },
    secondary: {
      variant: 'buttons.primary',
      color: 'white',
      bg: 'secondary',
    },
    muted: {
      variant: 'buttons.default',
      backgroundColor: '#EDF0F2',
      color: 'text',
      ':hover': {
        backgroundColor: 'primary',
        color: '#fff',
      },
    },
    white: {
      variant: 'buttons.default',
      backgroundColor: 'white',
      color: '#020718',
    },
    text: {
      variant: 'buttons.default',
      color: 'text',
    },
  },
  cards: {
    primary: {
      padding: 2,
      borderRadius: 4,
      // boxShadow: '0 0 4px 1px rgba(0, 0, 0, 0.5)',
    },
    offer: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      flex: ['1 1 calc(50% - 16px)', '1 1 20%'],
      minHeight: 130,
      m: 2,
      background: '#FFFFFF',
      border: '1px solid #EDEFF6',
      borderRadius: 5,
    },
    featureCard: {
      display: 'flex',
      alignItems: ['center', 'flex-start'],
      flexDirection: ['column', 'row'],
      p: [0, 3],
    },
  },
  forms: {
    label: {
      fontSize: 1,
      fontWeight: 'bold',
    },
    input: {
      borderRadius: 8,
      borderColor: 'borderColor',
      fontFamily: 'body',
      px: 5,
      py: 0,
      minHeight: 60,
      '&:focus': {
        borderColor: 'primary',
        boxShadow: (t) => `0 0 0 2px ${t.colors.primary}`,
        outline: 'none',
      },
    },
  },

  badges: {
    primary: {
      color: 'background',
      bg: '#28A5FF',
      borderRadius: 30,
      p: '3px 11px',
      fontSize: 1,
      letterSpacing: '-0.5px',
    },
    outline: {
      color: 'primary',
      bg: 'transparent',
      boxShadow: 'inset 0 0 0 1px',
    },
  },

  styles: {
    // To add base, top-level styles to the <body> element, use theme.styles.root.
    root: {
      fontFamily: 'body',
      lineHeight: 'body',
      fontWeight: 'body',
    },
    // h1-h6 Heading styles
    h1: {
      // fontFamily: 'none',
      // variant: 'text.heading',
      // fontSize: 6,
    },
    h2: {
      // fontFamily: 'none',
      // variant: 'text.heading',
      // fontSize: 5,
    },
    h3: {
      variant: 'text.heading',
      fontSize: 4,
    },
    h4: {
      variant: 'text.heading',
      fontSize: 3,
    },
    h5: {
      variant: 'text.heading',
      fontSize: 2,
    },
    h6: {
      variant: 'text.heading',
      fontSize: 1,
    },
    // Divider styles
    hr: {
      border: 0,
      borderBottom: '1px solid',
      borderColor: '#D9E0E7',
    },
    // also you can use other HTML elements style here
    ul: {
      listStyle: 'none',
    },
    srOnly: {
      border: '0 !important',
      clip: 'rect(1px, 1px, 1px, 1px) !important',
      clipPath: 'inset(50%) !important',
      height: '1px !important',
      margin: '-1px !important',
      overflow: 'hidden !important',
      padding: '0 !important',
      position: 'absolute !important',
      width: '1px !important',
      whiteSpace: 'nowrap !important',
    },
  },
buttons: {
  menu: {
    display: [null, null, 'none'],
  }, // default variant for MenuButton
  // you can reference other values defined in the theme
  defaultBtn: {
    borderRadius: '45px',
    fontSize: ['14px', null, null, 2],
    letterSpacings: '-0.15px',
    padding: ['12px 20px', null, '15px 30px'],
    fontFamily: 'body',
    cursor: 'pointer',
    lineHeight: 1.2,
    transition: 'all 0.25s',
    fontWeight: 500,
    '&:focus': {
      outline: 0,
    },
  },
  primary: {
    variant: 'buttons.defaultBtn',
    border: '2px solid',
    borderColor: 'secondary',
    color: 'secondary',
    bg: 'transparent',
    padding: ['10px 15px', null, '15px 30px'],
    '&:hover': {
      color: 'white',
      bg: 'secondary',
    },
  },
  whiteButton: {
    variant: 'buttons.defaultBtn',
    color: 'heading_secondary',
    bg: 'white',
    '&:hover': {
      boxShadow: 'rgba(0, 0, 0, 0.5) 0px 12px 24px -10px',
    },
  },
  secondary: {
    variant: 'buttons.defaultBtn',
    color: 'white',
    bg: 'primary',
    '&:hover': {
      boxShadow: 'rgba(233, 76, 84, 0.57) 0px 9px 20px -5px',
    },
  },
  third: {
    variant: 'buttons.defaultBtn',
    border: '2px solid',
    borderColor: 'secondary',
    color: 'secondary',
    bg: 'transparent',
    padding: ['10px 15px', null, '15px 30px'],
    '&:hover': {
      color: 'white',
      bg: 'secondary',
    },
  },
  textButton: {
    variant: 'buttons.defaultBtn',
    backgroundColor: 'transparent',
    cursor: 'pointer',
    color: 'white',
    svg: {
      fontSize: [4, 6],
      mr: 2,
    },
  },
},
};