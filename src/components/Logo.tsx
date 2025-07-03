import React from "react";

export const Logo = ({
   width,
   arrow,
   box,
   className,
}: {
   width: number;
   arrow: string;
   box: string;
   className?: string;
}) => {
   return (
      <svg id="Layer_1" style={{ width }} version="1.1" viewBox="0 0 403 500" className={`${className}`}>
         <defs></defs>
         <polygon
            fill="transparent"
            points="336.5 229.2 201.5 284.8 66.5 229.2 145.6 190.6 145.6 222.3 143.8 223 143.8 226.3 201.5 247.3 259.2 226.3 259.2 223 257.4 222.3 257.4 190.6 336.5 229.2"
         />
         <polygon
            fill={box}
            points="403 201.3 403 397.9 201.5 496.2 0 397.9 0 201.3 146.2 130 146.2 191 67.8 229.2 201.5 284.3 335.2 229.2 256.8 191 256.8 130 403 201.3"
         />
         <path
            fill={arrow}
            d="M317.3,102.9L213,8.2c-6.4-5.8-16.6-5.8-23,0l-104.3,94.8c-10.4,9.4-3.1,25.7,11.5,25.7h38.8c5,0,9.1,3.7,9.1,8.4v88h0v-2.7l-1.8.7v3.3l58.2,21.2,58.2-21.2v-3.3l-1.8-.7v2.7h0s0-88,0-88c0-4.6,4.1-8.4,9.1-8.4h38.8c14.6,0,21.9-16.3,11.5-25.7Z"
         />
      </svg>
   );
};
