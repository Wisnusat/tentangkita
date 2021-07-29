/** @jsxRuntime classic */
import React, { useState } from 'react';
/** @jsx jsx */
import {
  jsx,
  Container,
  Box,
  Grid,
  Text,
  Heading,
  Button,
  Image,
} from 'theme-ui';
import { keyframes } from '@emotion/core';
import TextFeature from 'components/text-feature';
import ModalVideo from 'react-modal-video';
import { IoIosPlay } from 'react-icons/io';

import ServiceThumb from 'assets/video-banner.png';
import shapePattern from 'assets/shape-pattern1.png';

import Smart from 'assets/icons/service5.png';
import Secure from 'assets/icons/service1.png';

const data = {
  subTitle: 'Bukan ada kamu dicerita ini, malah isinya kamu semua haha, untung kamu dulu waktu tes spensa sakit perut, akhirnya sekolah di spenda jadinya ketemu aku deh, emang takdirnya gitu. Aku jadi ketemu sama yang namanya sahabat yang bener bener selalu ada, eak selalu ada dong. Jalannya kita buat sampek ke titik ini gak gampang sih, dari yang awalnya takut buat kenalan terus sempet musuhan, punya perasaan masing masing ke orang lain, sampek akhirnya sekarang kita beneran pacaran. Aku nggak nyangka sih.',
  title: 'Tentang Kita.',
  features: [
    {
      id: 1,
      imgSrc: Smart,
      altText: 'Biomedical Engineering',
      title: 'Biomedical Engineering',
      text:
        'Combination between medical field and technology to create a new biomedical method to cure disease.',
    },
    {
      id: 2,
      imgSrc: Secure,
      altText: 'Early Detection Technology',
      title: 'Early Detection Technology',
      text:
        'We using the power of Artificial Intelligence to detect your disease and cure it faster.',
    },
  ],
};

export default function ServiceSection() {
  // modal popup video handler
  const [videoOpen, setVideoOpen] = useState(false);
  const handleClick = (e) => {
    e.preventDefault();
    setVideoOpen(true);
  };
  return (
    <section sx={{ variant: 'section.services' }} id="services">
      <Container sx={styles.containerBox}>
        <Box sx={styles.thumbnail}>
          <Image src={ServiceThumb} alt="Thumbnail" />
          <Button
            sx={styles.videoBtn}
            onClick={handleClick}
            aria-label="Play Button"
          >
            <span>
              <IoIosPlay />
            </span>
          </Button>

          <Box sx={styles.shapeBox}>
            <Image src={shapePattern} alt="Shape" />
          </Box>
        </Box>
        <Box sx={styles.contentBox}>
            <Heading sx={styles.title}>
              Tentang Kita.
            </Heading>
            <Text as="p" sx={styles.summary}>
            Bukan ada kamu di cerita ini, malah isinya tentang kamu semua haha, 
            untung kamu dulu waktu tes spensa sakit perut, akhirnya sekolah di spenda jadinya ketemu aku deh, 
            emang takdirnya gitu. Aku jadi ketemu sama yang namanya sahabat yang bener bener selalu ada, eak selalu ada dong.
            Jalannya kita buat sampek ke titik ini gak gampang sih, dari yang awalnya takut buat kenalan terus sempet musuhan,
            punya perasaan masing masing ke orang lain, sampek akhirnya sekarang kita beneran pacaran. Aku nggak nyangka sih.
            </Text>
        </Box>
      </Container>
      <ModalVideo
        channel="youtube"
        isOpen={videoOpen}
        videoId="AGCOCcoDCQE"
        onClose={() => setVideoOpen(false)}
      />
    </section>
  );
}

const playPluse = keyframes`
  from {
    transform: translateX(-50%) translateY(-50%) translateZ(0) scale(1);
    opacity: 1;
  }

  to {
	transform: translateX(-50%) translateY(-50%) translateZ(0) scale(1.5);
    opacity: 0;
  }
`;

const styles = {
  coreFeature: {
    py: [0, null, null, 2, null, 7],
    position: 'relative',
  },
  containerBox: {
    display: 'flex',
    alignItems: ['flex-start', null, null, 'center'],
    justifyContent: ['flex-start', null, null, 'space-between'],
    flexDirection: ['column', null, null, 'row'],
    pb: [0, null, null, null, null, 7],
  },
  thumbnail: {
    mr: ['auto', null, null, 6, 60, 85],
    order: [2, null, null, 0],
    ml: ['auto', null, null, 0],
    display: 'inline-flex',
    position: 'relative',
    '> img': {
      position: 'relative',
      zIndex: 1,
      height: [350, 'auto'],
    },
  },
  shapeBox: {
    position: 'absolute',
    bottom: -68,
    left: -160,
    zIndex: -1,
    display: ['none', null, null, null, null, 'inline-block'],
  },
  videoBtn: {
    zIndex: 2,
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    width: ['60px', null, '80px', null, '100px'],
    height: ['60px', null, '80px', null, '100px'],
    p: '0px !important',
    backgroundColor: 'transparent',
    '&::before': {
      position: 'absolute',
      content: '""',
      left: '50%',
      top: '50%',
      transform: 'translateX(-50%) translateY(-50%)',
      display: 'block',
      width: ['60px', null, '80px', null, '100px'],
      height: ['60px', null, '80px', null, '100px'],
      backgroundColor: 'secondary',
      borderRadius: '50%',
      animation: `${playPluse} 1.5s ease-out infinite`,
      opacity: 0.5,
    },
    '> span': {
      backgroundColor: 'rgba(255,255,255,0.5)',
      width: 'inherit',
      height: 'inherit',
      textAlign: 'center',
      borderRadius: '50%',
      cursor: 'pointer',
      transition: 'all 0.5s',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'relative',
      zIndex: 2,
    },
    svg: {
      fontSize: [40, null, 48, null, 62],
    },
  },
  contentBox: {
    width: ['100%', null, null, 315, 390, 450, null, 500],
    flexShrink: 0,
    mb: [7, null, 60, 0],
    textAlign: ['center', null, null, 'left'],
  },
  grid: {
    pr: [2, 0, null, null, 6, '70px'],
    pl: [2, 0],
    pt: [2, null, null, null, 3],
    mx: 'auto',
    width: ['100%', 370, 420, '100%'],
    gridGap: ['35px 0', null, null, null, '50px 0'],
    gridTemplateColumns: ['repeat(1,1fr)'],
  },
  card: {
    display: 'flex',
    alignItems: 'flex-start',
    transition: 'all 0.3s',
  },

  icon: {
    width: ['45px', null, null, null, '55px'],
    height: 'auto',
    flexShrink: 0,
    mr: [3, null, null, null, 4],
  },
  wrapper: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'left',
    mt: '-5px',
    title: {
      fontWeight: 'bold',
      fontSize: ['30px', null, null, null, '42px', '40px', '60px'],
      lineHeight: 1.33,
      letterSpacing: '-1px',
      color: 'textSecondary',
      textAlign: ['center', null, null, 'left'],
      span: {
        backgroundSize: 'cover',
        px: 2,
      },
    },

  },

  title: {
    fontWeight: 'bold',
    fontSize: ['30px', null, null, null, '42px', '40px', '60px'],
    lineHeight: 1.33,
    letterSpacing: '-1px',
    color: 'textSecondary',
    pl: -1,    
  },

  summary: {
      color: 'textSecondary',
      fontSize: [2, null, null, 3, '20px', 3],
      lineHeight: [1.86, null, null, null, 1.86, 2.25],
      mt: [4, null, null, 5, 3, 5],
      maxWidth: 470,
      textAlign: ['center', null, null, 'left'],
    },

  videoWrapper: {
    maxWidth: '100%',
    position: 'relative',
    width: '900px',
    '&:before': {
      content: '""',
      display: 'block',
      paddingTop: '56.25%',
    },
    iframe: {
      width: '100%',
      height: '100%',
      position: 'absolute',
      top: 0,
      left: 0,
    },
  },
};
