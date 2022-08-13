import React from 'react';

const Footer: React.FunctionComponent = () => {
  return (
    <div className='footer px-5 py-3'>
      <h5>
        Powered by &nbsp;
        <a
          href='https://brawlify.com/'
          target='_blank'
          rel='noopener noreferrer'
        >
          Brawlify
        </a>
        .
      </h5>
      <h5>
        This material is unofficial and is not endorsed by Supercell. For more
        information see &nbsp;
        <a
          href='https://supercell.com/en/fan-content-policy/'
          target='_blank'
          rel='noopener noreferrer'
        >
          Supercell's Fan Content Policy
        </a>
        .
      </h5>
    </div>
  );
};

export default Footer;
