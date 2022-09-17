import React, { SVGProps } from "react";

const EmptyCart: React.FC<SVGProps<SVGSVGElement>> = ({className, ...props}) => (
  <svg width="91" height="85" viewBox="0 0 91 85" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} className={`w-full h-auto max-w-[8rem] ${className}`} >
    <path fillRule="evenodd" clipRule="evenodd" d="M0 3.03336C0 2.22886 0.319585 1.45732 0.888451 0.888454C1.45732 0.319589 2.22886 0 3.03336 0H12.1334C12.8101 0.000186925 13.4672 0.226596 14.0004 0.643223C14.5335 1.05985 14.9121 1.64277 15.0758 2.29929L17.5328 12.1334H87.9675C88.4282 12.1336 88.8829 12.2387 89.297 12.4407C89.7111 12.6428 90.0737 12.9366 90.3573 13.2997C90.6409 13.6628 90.8381 14.0858 90.9338 14.5365C91.0295 14.9872 91.0213 15.4538 90.9098 15.9009L81.8098 52.3012C81.646 52.9577 81.2675 53.5407 80.7343 53.9573C80.2012 54.3739 79.544 54.6003 78.8674 54.6005H24.2669C23.5903 54.6003 22.9331 54.3739 22.4 53.9573C21.8668 53.5407 21.4883 52.9577 21.3245 52.3012L9.76742 6.06672H3.03336C2.22886 6.06672 1.45732 5.74713 0.888451 5.17826C0.319585 4.6094 0 3.83786 0 3.03336ZM19.0495 18.2002L26.6329 48.5338H76.5014L84.0848 18.2002H19.0495ZM30.3336 66.734C28.7246 66.734 27.1815 67.3731 26.0438 68.5109C24.9061 69.6486 24.2669 71.1917 24.2669 72.8007C24.2669 74.4097 24.9061 75.9528 26.0438 77.0905C27.1815 78.2282 28.7246 78.8674 30.3336 78.8674C31.9426 78.8674 33.4857 78.2282 34.6234 77.0905C35.7612 75.9528 36.4003 74.4097 36.4003 72.8007C36.4003 71.1917 35.7612 69.6486 34.6234 68.5109C33.4857 67.3731 31.9426 66.734 30.3336 66.734ZM18.2002 72.8007C18.2002 69.5827 19.4785 66.4965 21.754 64.221C24.0294 61.9456 27.1156 60.6672 30.3336 60.6672C33.5516 60.6672 36.6378 61.9456 38.9133 64.221C41.1887 66.4965 42.4671 69.5827 42.4671 72.8007C42.4671 76.0187 41.1887 79.1049 38.9133 81.3803C36.6378 83.6558 33.5516 84.9341 30.3336 84.9341C27.1156 84.9341 24.0294 83.6558 21.754 81.3803C19.4785 79.1049 18.2002 76.0187 18.2002 72.8007ZM72.8007 66.734C71.1917 66.734 69.6486 67.3731 68.5109 68.5109C67.3731 69.6486 66.7339 71.1917 66.7339 72.8007C66.7339 74.4097 67.3731 75.9528 68.5109 77.0905C69.6486 78.2282 71.1917 78.8674 72.8007 78.8674C74.4097 78.8674 75.9528 78.2282 77.0905 77.0905C78.2282 75.9528 78.8674 74.4097 78.8674 72.8007C78.8674 71.1917 78.2282 69.6486 77.0905 68.5109C75.9528 67.3731 74.4097 66.734 72.8007 66.734ZM60.6672 72.8007C60.6672 69.5827 61.9456 66.4965 64.221 64.221C66.4965 61.9456 69.5827 60.6672 72.8007 60.6672C76.0187 60.6672 79.1048 61.9456 81.3803 64.221C83.6558 66.4965 84.9341 69.5827 84.9341 72.8007C84.9341 76.0187 83.6558 79.1049 81.3803 81.3803C79.1048 83.6558 76.0187 84.9341 72.8007 84.9341C69.5827 84.9341 66.4965 83.6558 64.221 81.3803C61.9456 79.1049 60.6672 76.0187 60.6672 72.8007Z" fill="#242424"/>
    <path d="M42.3182 29.5888C40.5271 29.8639 39.5106 28.1735 40.2364 26.1275C40.4994 25.3848 41.3323 24.9905 42.3182 25.1419C43.5221 25.3272 43.9607 25.9201 43.9607 27.3653C43.9607 28.8106 43.5221 29.4035 42.3182 29.5888Z" fill="#242424"/>
    <path d="M62.8501 29.4689C61.3264 30.102 59.4493 27.9977 60.0432 26.323C60.3018 25.5945 61.2965 25 62.2562 25C63.6364 25 64 25.4163 64 26.9956C64 28.0939 63.4826 29.2064 62.8501 29.4689Z" fill="#242424"/>
    <path d="M40.6816 38.4627C40.6816 37.9684 42.0979 37.5619 43 37.1693C48.3013 34.8639 57.5539 37.2737 60.9708 41.9728C63.3493 45.2449 62.1436 44.2756 58.8571 41.0634C57.2664 39.5086 55.0091 38.1583 53.2857 37.656C50.1924 36.7549 44.4359 37.6711 41.9568 38.7867C41.1778 39.1376 40.6816 39.0107 40.6816 38.4627Z" fill="#242424"/>
    <path d="M42.3182 29.5888C40.5271 29.8639 39.5106 28.1735 40.2364 26.1275C40.4994 25.3848 41.3323 24.9905 42.3182 25.1419C43.5221 25.3272 43.9607 25.9201 43.9607 27.3653C43.9607 28.8106 43.5221 29.4035 42.3182 29.5888Z" stroke="#242424" strokeWidth="3"/>
    <path d="M62.8501 29.4689C61.3264 30.102 59.4493 27.9977 60.0432 26.323C60.3018 25.5945 61.2965 25 62.2562 25C63.6364 25 64 25.4163 64 26.9956C64 28.0939 63.4826 29.2064 62.8501 29.4689Z" stroke="#242424" strokeWidth="3"/>
    <path d="M40.6816 38.4627C40.6816 37.9684 42.0979 37.5619 43 37.1693C48.3013 34.8639 57.5539 37.2737 60.9708 41.9728C63.3493 45.2449 62.1436 44.2756 58.8571 41.0634C57.2664 39.5086 55.0091 38.1583 53.2857 37.656C50.1924 36.7549 44.4359 37.6711 41.9568 38.7867C41.1778 39.1376 40.6816 39.0107 40.6816 38.4627Z" stroke="#242424" strokeWidth="3"/>
  </svg>
);

export default EmptyCart;
