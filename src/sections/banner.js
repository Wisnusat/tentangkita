/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Container, Heading, Text, Button, Image } from 'theme-ui';
import banner from 'assets/banner-thumb.png';
import microsoft from 'assets/widget/microsoft.png';
import google from 'assets/widget/google.png';
import ibm from 'assets/widget/ibm_alt.png';
import paint1 from 'assets/paint1.svg';


const Banner = () => {
  return (
    <Box id="home" as="section" variant="section.banner">
      <Container>
        <Box sx={styles.contentWrapper}>
          <Box sx={styles.content}>
            <Heading sx={styles.title}>
            Hai, Yulia Adinda Yuda. <span sx={{ background: `url(${paint1})` }}>Love U</span>
            </Heading>
            <Text as="p" sx={styles.text}>

            </Text>
            {/* <Button variant="secondary" sx={styles.button}>
              Explore Now
            </Button> */}
            {/* <Box sx={styles.clients}>
              <Image src={microsoft} alt="microsoft" />
              <Image src={google} alt="google" />
              <Image src={ibm} alt="ibm_alt" />
            </Box> */}
          </Box>
          <Box sx={styles.illustration}>
            <Image src={banner} alt="banner" />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Banner;

const styles = {
  contentWrapper: {
    display: [null, null, null, 'flex', 'grid'],
    gridTemplateColumns: 'repeat(2, 1fr)',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: [null, null, null, null, null, '100vh'],
    pt: [100, null, null, 120, 130, 120, 0],
  },
  content: {
    maxWidth: [507, null, null, 324, 450],
  },
  title: {
    fontWeight: 'bold',
    fontSize: ['30px', null, null, null, '42px', '40px', '60px'],
    lineHeight: 1.33,
    letterSpacing: '-1px',
    color: 'textSecondary',
    pl: 4,    
  },
  text: {
    fontSize: ['14px', '14px', '14px', '16px', '16px', '18px'],
    lineHeight: [1.85, 1.85, 1.85, 1.85, 1.85, 2.33],
    color: 'textSecondary',
    mt: ['14px', '19px'],
    pl: 4,
  },
  button: {
    display: ['none', 'flex'],
    mt: [45, 45, 45, 25, 25],
    ml: 4,
  },
  clients: {
    display: 'flex',
    alignItems: 'center',
    mt: ['20px', '45px', '45px', '30px', '45px'],
    img: {
      maxWidth: ['80px', '100%', '100%', '100%'],
      '+ img': {
        ml: ['14px', '28px', '28px', '20px'],
      },
    },
    pl: 4,
  },
  illustration: {
    display: ['block', 'block'],
    mt: ['30px', '30px', 0],
    mb: ['60px', '60px', 0],
    img: {
      maxWidth: ['100%', '100%', '100%', '100%', '100%', '100%', '100%'],
    },
  },
  pl: 10,
};
