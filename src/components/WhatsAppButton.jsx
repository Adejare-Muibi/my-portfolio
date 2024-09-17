import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const WhatsAppButton = () => {
  return (
    <Link href={'https://wa.me/2348102780804'}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 left-5 text-white p-4 rounded-full shadow-lg z-50 animate-fade"
>
  <Image width={40} height={100} src={"/social.png"} alt="WhatsApp Logo" />
</Link>


  );
};

export default WhatsAppButton;
