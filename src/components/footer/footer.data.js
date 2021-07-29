import google from 'assets/widget/google.png';
import ibm from 'assets/widget/ibm_alt.png';
import microsoft from 'assets/widget/microsoft.png';

export default {
  widgets: [
    {
      id: 1,
      iconSrc: google,
      altText: 'Community',
      title: ' ',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit sed eiusmod tempor.',
    },
    {
      id: 2,
      iconSrc: ibm,
      altText: 'Chat',
      title: 'Our sponsorship',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit sed eiusmod tempor.',
    },
    {
      id: 3,
      iconSrc: microsoft,
      altText: 'Github',
      title: ' ',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit sed eiusmod tempor.',
    },
  ],
  menuItem: [
    {
      path: '/',
      label: 'Home',
    },
    {
      path: '/',
      label: 'Adversite',
    },
    {
      path: '/',
      label: 'Supports',
    },
    {
      path: '/',
      label: 'Marketing',
    },
    {
      path: '/',
      label: 'Contact',
    },
  ],
};
