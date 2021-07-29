/** @jsx jsx */
import { jsx, Box, Container } from 'theme-ui';
import Masonry from 'react-masonry-component';
import SectionHeading from 'components/section-heading';
import BlogPost from 'components/cards/blog-post';
import thumb1 from 'assets/1.jpg';
import thumb2 from 'assets/3.jpg';
import thumb4 from 'assets/4.jpg';

const data = [
  {
    id: 1,
    slug: '#how-to',
    thumbnail: thumb1,
    showDescription: true,
    title: `Ini waktu main ice skating sama kamu`,
    description: `Sumpah ini seru banget. pertama kali main ice skatin, ternyata susah!. Agak ga tega sih lihat kamu jatuh, tapi lucu. Kapok :p. Just Kidding`,
  },
  {
    id: 2,
    slug: '#how-to',
    thumbnail: null,
    showDescription: false,
    title: `Maaf ya, gacukup ditampilin semua :(`,
    description: `The 2019 Innovation by Design Awards honor the designers and businesses solving the problems of today and tomorrow. It is one of the most sought-after design`,
  },
  {
    id: 3,
    slug: '#how-to',
    thumbnail: thumb4,
    showDescription: true,
    title: `Jatim Park 3`,
    description: `Ini seru parahh, ayok kapan-kapan lagi!`,
  },
  {
    id: 4,
    slug: '#how-to',
    thumbnail: thumb2,
    showDescription: true,
    title: `Main ke pintu langit`,
    description: `Ini salah satu yang the best sih. Kita ujan-ujan terus di pinggir jalan, romantis banget. bapak" villa pake beat ganggu banget. `,
  },
  // {
  //   id: 5,
  //   slug: '#how-to',
  //   thumbnail: thumb4,
  //   showDescription: false,
  //   title: `Team presentation with latest user interface & experience reach more`,
  //   description: `The 2019 Innovation by Design Awards honor the designers and businesses solving the problems of today and tomorrow. It is one of the most sought-after design`,
  // },
];

const masonryOptions = { originTop: true };

const Blog = () => {
  return (
    <Box as="section" id="blog" sx={styles.section}>
      <Container>
        <SectionHeading
          sx={styles.heading}
          slogan="Memories"
          title="Here are some memories we've made"
        />
        <Masonry options={masonryOptions} sx={styles.postContainer}>
          {data?.map((post) => (
            <BlogPost key={post.id} post={post} />
          ))}
        </Masonry>
      </Container>
    </Box>
  );
};

export default Blog;

const styles = {
  section: {
    pt: [6, null, null, 9, null, 13],
    pb: [8, null, null, 9, null, 17],
    position: 'relative',
  },
  heading: {
    mb: [6, null, null, 9],
  },
};
