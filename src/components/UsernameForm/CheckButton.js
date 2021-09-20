import React from 'react';

const CheckButton = () => (
  <button
    type="submit"
    style={{ outline: 'none' }}
    className="bn flex align-center font-medium items-center bg-blue-light px-4 pointer text-white hover:bg-blue hover:bg-green-600 bg-green-500"
  >
    <svg className="mr-2" width="21" height="22" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0)">
        <path
          d="M16 22.5001V18.6301C16.0375 18.1532 15.9731 17.6739 15.811 17.2239C15.6489 16.7738 15.3929 16.3635 15.06 16.0201C18.2 15.6701 21.5 14.4801 21.5 9.02006C21.4997 7.62389 20.9627 6.28126 20 5.27006C20.4559 4.04857 20.4236 2.69841 19.91 1.50006C19.91 1.50006 18.73 1.15006 16 2.98006C13.708 2.35888 11.292 2.35888 9 2.98006C6.27 1.15006 5.09 1.50006 5.09 1.50006C4.57638 2.69841 4.54414 4.04857 5 5.27006C4.03013 6.28876 3.49252 7.64352 3.5 9.05006C3.5 14.4701 6.8 15.6601 9.94 16.0501C9.611 16.39 9.35726 16.7955 9.19531 17.24C9.03335 17.6845 8.96681 18.1581 9 18.6301V22.5001M9 19.5001C4 21.0001 4 17.0001 2 16.5001L9 19.5001Z"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0">
          <rect width="24" height="24" fill="white" transform="translate(0 0.5)" />
        </clipPath>
      </defs>
    </svg>
    CHECK CONTRIBUTION STATUS
  </button>
);

export default CheckButton;
