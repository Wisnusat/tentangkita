/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid } from 'theme-ui';
import SectionHeader from 'components/section-header-2';
import FeatureCard from 'components/feature-card.js';
import Performance from 'assets/feature/performance.svg';
import Partnership from 'assets/feature/support.svg';
import Subscription from 'assets/feature/subscription.svg';
import Support from 'assets/feature/partnership.svg';
import PatternBG from 'assets/patternBG.png';

const data = [
  {
    id: 1,
    imgSrc: Performance,
    altText: 'Faster disease detection',
    title: 'Faster disease detection',
    text:
      'With the help of Artificial Intelligence and Deep Learning Method, we can detect your disease more faster.',
  },
  {
    id: 2,
    imgSrc: Partnership,
    altText: '24 hours customer service',
    title: '24 hours customer service',
    text:
      'We believe it’s important for everyone to have access to software – especially when it comes to digital application. Our 24 hours customer service will help you anytime you need.',
  },
  {
    id: 3,
    imgSrc: Subscription,
    altText: 'Handled by the experts',
    title: 'Handled by the experts',
    text:
      'Our team are the most qualified and talented individuals in their field, with years of experience',
  },
  {
    id: 4,
    imgSrc: Support,
    altText: 'Licensed Company',
    title: 'Licensed Company',
    text:
      'Our company is officially registered with goverment agencies',
  },
];

export default function Feature() {
  return (
    <section sx={styles.feature}>
      <Container>
        <SectionHeader
          slogan="^"
          title="Founded by experts in medical and biotechnology field"
        />

        <Grid sx={styles.grid}>
          {data.map((item) => (
            <FeatureCard
              key={item.id}
              src={item.imgSrc}
              alt={item.altText}
              title={item.title}
              text={item.text}
            />
          ))}
        </Grid>
      </Container>
    </section>
  );
}

const styles = {
  feature: {
      pb: [8, null, 9, null, null, 10, null, '170px'],
      backgroundColor: 'fourth',
      backgroundImage: `url(${PatternBG})`,
      backgroundRepeat: `no-repeat`,
      backgroundPosition: 'center center',
      backgroundSize: 'cover',
      position: 'relative',
      mb: 6,
  },
  grid: {
    pt: [0, null, null, null, null, null, 2],
    px: [5, 6, 0, null, 7, 8, 7],
    gridGap: [
      '40px 0',
      null,
      '45px 30px',
      null,
      '60px 50px',
      '70px 50px',
      null,
      '80px 90px',
    ],
    gridTemplateColumns: ['repeat(1,1fr)', null, 'repeat(2,1fr)'],
  },
};
