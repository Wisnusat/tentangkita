/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Image } from 'theme-ui';
import { Link } from 'components/link';
import Logopath from 'assets/logo-path-alt.png'

export default function Logo({ src, ...rest }) {
  return (
    <Link
      path="/"
      sx={{
        variant: 'links.logo',
        display: 'flex',
        cursor: 'pointer',
        mr: 15,
      }}
      {...rest}
    >
      {/* <Image
        width="130"
        height="90"
        src={Logopath}
        alt="startup landing logo"
      /> */}
       <h1 sx={{
        //  ml: -2,
       }}>bemboo</h1>
    </Link>
  );
}
