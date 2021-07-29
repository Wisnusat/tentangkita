/** @jsx jsx */
import { jsx, Box, Container } from 'theme-ui';
import DonationForm from 'components/donation-form';
import { FaBorderNone } from 'react-icons/fa';
// import Image from 'components/image';
// import illustration from 'assets/images/banner.png';

const ContactUs = () => {
  return (
    <Box as="section" id="contact" sx={styles.section}>
      <Container>
        <Box sx={styles.contentWrapper}>
          <DonationForm />
          <Box as="figure" sx={styles.illustration}>
            {/* <Image
              src={illustration}
              width="836"
              height="458"
              alt="illustration"
            /> */}
            <iframe  
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3951.5750159968247!2d112.61985781385977!3d-7.939374481273632!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd6298a7445f333%3A0x92250a075a88925f!2sPT.%20PATHYA%20TEKNOLOGI%20INDONESIA!5e0!3m2!1sen!2sid!4v1626512194110!5m2!1sen!2sid" 
            width="600" 
            height="400"
            style={{border: 0, borderRadius: 8, boxShadow: '0px 24px 50px rgba(54, 91, 125, 0.05)'}}>
          </iframe>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default ContactUs;

const styles = {
  section: {
    // background: `linear-gradient(180deg, #F9FAFC 0%, rgba(249, 250, 252, 0) 100%)`,
    position: 'relative',
    zIndex: 0,
    pt: [17, null, null, 19, 21, 23],
    pb: [8, null, null, 10, null, null, 10],
    minHeight: [null, null, null, null, null, '100vh'],
  },
  contentWrapper: {
    gap: [12, null, null, 14, 12],
    display: 'grid',
    gridTemplateColumns: ['1fr', null, null, null, '385px 1fr', '470px 1fr'],
    alignItems: 'center',
  },
  illustration: {
    display: 'flex',
    // alignItems: 'center',
    pl: 8,
    pb: 200,
    border: 0,

  },
};
