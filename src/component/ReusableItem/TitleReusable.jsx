import React from 'react';

const TitleReusable = ({textOne,textTwo,style}) => {
    return (
        <div style={style}>
            <h1>{textOne}<br/>{textTwo}</h1>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="253"
                height="33"
                viewBox="0 0 253 33"
            >
                <defs>
                    <clipPath id="a">
                        <path fill="none" d="M0 0H253V33H0z"></path>
                    </clipPath>
                </defs>
                <g
                    fill="none"
                    stroke="#1a1818"
                    strokeLinecap="round"
                    strokeMiterlimit="10"
                    clipPath="url(#a)"
                >
                    <path
                        strokeWidth="1.788"
                        d="M126.495 27.426l8.965-8.732-8.965-8.732-8.955 8.732 8.965 8.732"
                    ></path>
                    <path
                        strokeWidth="1.788"
                        d="M126.495 18.712l8.965-8.732-8.965-8.732-8.955 8.732z"
                    ></path>
                    <path
                        strokeWidth="1.811"
                        d="M98.316 0L0 0"
                        transform="translate(.906 17.154)"
                    ></path>
                    <path
                        strokeWidth="1.788"
                        d="M154.236 17.162l-5.638 5.491-11.054-10.765 2.155-2.1 4.679 4.558-4.679 4.558-13.21-12.866-13.19 12.866-4.678-4.561 4.679-4.558 2.155 2.1-11.053 10.766-5.638-5.491"
                    ></path>
                    <path
                        strokeWidth="1.811"
                        d="M98.316 0L0 0"
                        transform="translate(153.778 17.154)"
                    ></path>
                    <path
                        strokeWidth="1.788"
                        d="M0 0H7.344V7.153H0z"
                        transform="rotate(-45 92.857 -133.092)"
                    ></path>
                    <path
                        strokeWidth="1.788"
                        d="M158.362 21.965h-4.3l-5.428-5.287-9.673 9.422-12.464-12.14-12.464 12.14-9.673-9.422-5.428 5.287h-4.3"
                    ></path>
                </g>
            </svg>
        </div>
    );
};

export default TitleReusable;