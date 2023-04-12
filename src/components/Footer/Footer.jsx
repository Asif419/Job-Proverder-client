import React from 'react';

const Footer = () => {
  return (
    <div className='bg-black mt-5'>
      <div className='footer-container'>
        <div className='grid grid-cols-2 text-gray-400 md:grid-cols-6 pt-10 md:pt-25'>
          <div className='col-span-2 flex flex-col ps-3 md:ps-0 pe-5 md:pe-10 pt-3 md:pt-5'>
            <p className='font-bold'>Job Provider</p>
            <p className='my-2 text-xs font-thin'>You will find job here. Try to find best job for you by looking details. Just click on the apply now button and get ready for your interview.</p>
            <img className='my-3 w-1/3' src="Group.png" alt="" />
          </div>
          <div className='col-span-1 flex flex-col p-3 md:p-5'>
            <p className='mb-1 font-bold'>Company</p>
            <p className='my-1 text-xs font-thin'>About Us</p>
            <p className='my-1 text-xs font-thin'>Work</p>
            <p className='my-1 text-xs font-thin'>Latest News</p>
            <p className='my-1 text-xs font-thin'>Careers</p>
          </div>
          <div className='col-span-1 flex flex-col p-3 md:p-5'>
            <p className='mb-1 font-bold'>Product</p>
            <p className='my-1 text-xs font-thin'>Prototype</p>
            <p className='my-1 text-xs font-thin'>Plans & Pricing</p>
            <p className='my-1 text-xs font-thin'>Customers</p>
            <p className='my-1 text-xs font-thin'>Integrations</p>
          </div>
          <div className='col-span-1 flex flex-col p-3 md:p-5'>
            <p className='mb-1 font-bold'>Support</p>
            <p className='my-1 text-xs font-thin'>Help Desk</p>
            <p className='my-1 text-xs font-thin'>Sales</p>
            <p className='my-1 text-xs font-thin'>Become a Partner</p>
            <p className='my-1 text-xs font-thin'>Developers</p>
          </div>
          <div className='col-span-1 flex flex-col p-3 md:p-5'>
            <p className='mb-1 font-bold'>Contact</p>
            <p className='my-1 text-xs font-thin'>524 Broadway , NYC</p>
            <p className='my-1 text-xs font-thin'>+1 777 - 978 - 5570</p>
          </div>
        </div>
        <div className="border-t border-gray-800 w-full mx-auto"></div>
        <div className='text-gray-300 p-5 md:p-10 flex justify-between items-center'>
          <p className='text-[0.5rem]'>@2023 Job provider. All Rights Reserved</p>
          <p className='text-[0.5rem]'>Powered by Asif Shahariar</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;