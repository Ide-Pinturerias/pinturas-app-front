import React from 'react'


function UserIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className="bi bi-person-circle" viewBox="0 0 16 16"
            width="100%"
            height="100%"
            fill="currentColor"
        >
            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
            <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
        </svg>
    )
};

function Cart() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 512 512" id="shopping-cart"
            width="100%"
            height="100%"
        >
            <path d="M199.039 373.884A46.058 46.058 0 1 0 245.1 419.941 46.111 46.111 0 0 0 199.039 373.884zM380.316 373.884a46.058 46.058 0 1 0 46.059 46.057A46.111 46.111 0 0 0 380.316 373.884zM455.132 127.679H141.567l-6.8-40.047A49.869 49.869 0 0 0 85.475 46H56.868a10 10 0 1 0 0 20H85.474A29.92 29.92 0 0 1 115.05 90.979l36.21 213.315a49.871 49.871 0 0 0 49.3 41.632H413.729a10 10 0 0 0 0-20H200.556a29.92 29.92 0 0 1-29.576-24.979L167.34 279.5H376.362a59.816 59.816 0 0 0 57.131-41.666l31.161-97.1a10 10 0 0 0-9.522-13.055z"></path>
        </svg>
    )
};

function Magnifier() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"
            width="100%"
            height="100%"
            className="fill-inherit transition-colors bi bi-search"
        >
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
        </svg>
    )
};

function Bag() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className="shrink-0 mr-3 h-5 w-5" viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
            />
        </svg>
    )
};

function Bookmark() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" class="bi bi-bookmark" viewBox="0 0 16 16"
            width="16"
            height="16"
            fill="currentColor"
        >
            <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1z" />
        </svg>
    );
};

function Star() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" class="bi bi-star-fill" viewBox="0 0 16 16"
            width="16"
            height="16"
        >
            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
        </svg>
    );
};

function Plus() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" class="bi bi-plus" viewBox="0 0 16 16"
            width="16"
            height="16"
        >
            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
        </svg>
    );
};

function Minus() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" class="bi bi-dash" viewBox="0 0 16 16"
            width="16"
            height="16"
            fill="currentColor"
        >
            <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8" />
        </svg>
    );
};

function Facebook() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 13 25"
            width="100%"
            height="auto"
        >
            <path d="M10.7189 4.89311H12.8845V1.13988C11.836 1.02817 10.7824 0.973011 9.72824 0.974645C6.59501 0.974645 4.45243 2.93388 4.45243 6.52187V9.61416H0.916016V13.8159H4.45243V24.5799H8.69151V13.8159H12.2164L12.7463 9.61416H8.69151V6.93497C8.69151 5.69569 9.01405 4.89311 10.7189 4.89311Z" />
        </svg>
    )
};

function Instagram() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 23"
            width="100%"
            height="auto"
        >
            <path d="M18.4031 3.979C18.1311 3.979 17.8651 4.05994 17.6389 4.21157C17.4127 4.36321 17.2365 4.57873 17.1323 4.8309C17.0282 5.08306 17.001 5.36053 17.0541 5.62822C17.1071 5.89592 17.2381 6.14181 17.4305 6.33481C17.6229 6.5278 17.8679 6.65924 18.1348 6.71248C18.4016 6.76573 18.6781 6.7384 18.9295 6.63395C19.1808 6.5295 19.3956 6.35263 19.5467 6.12569C19.6979 5.89875 19.7785 5.63194 19.7785 5.359C19.7785 4.993 19.6336 4.64199 19.3757 4.38319C19.1177 4.12439 18.7679 3.979 18.4031 3.979ZM23.6756 6.762C23.6533 5.80784 23.4752 4.86381 23.1484 3.9675C22.8569 3.2006 22.4033 2.50617 21.8188 1.932C21.2512 1.34254 20.5575 0.890303 19.79 0.6095C18.899 0.271585 17.957 0.0887915 17.0047 0.0689999C15.7897 -6.42613e-08 15.4 0 12.2824 0C9.16468 0 8.77497 -6.42613e-08 7.56 0.0689999C6.60768 0.0887915 5.66571 0.271585 4.77472 0.6095C4.00868 0.893146 3.31552 1.34499 2.74594 1.932C2.15842 2.50145 1.70768 3.19751 1.4278 3.9675C1.091 4.86144 0.908811 5.80653 0.889085 6.762C0.820312 7.981 0.820312 8.372 0.820312 11.5C0.820312 14.628 0.820312 15.019 0.889085 16.238C0.908811 17.1935 1.091 18.1386 1.4278 19.0325C1.70768 19.8025 2.15842 20.4985 2.74594 21.068C3.31552 21.655 4.00868 22.1069 4.77472 22.3905C5.66571 22.7284 6.60768 22.9112 7.56 22.931C8.77497 23 9.16468 23 12.2824 23C15.4 23 15.7897 23 17.0047 22.931C17.957 22.9112 18.899 22.7284 19.79 22.3905C20.5575 22.1097 21.2512 21.6575 21.8188 21.068C22.4059 20.496 22.8599 19.8009 23.1484 19.0325C23.4752 18.1362 23.6533 17.1922 23.6756 16.238C23.6756 15.019 23.7444 14.628 23.7444 11.5C23.7444 8.372 23.7444 7.981 23.6756 6.762ZM21.6125 16.1C21.6041 16.83 21.4723 17.5533 21.2228 18.239C21.0397 18.7395 20.7458 19.1917 20.3631 19.5615C19.9913 19.9416 19.5415 20.2359 19.045 20.424C18.3615 20.6744 17.6406 20.8066 16.913 20.815C15.7668 20.8725 15.3427 20.884 12.3282 20.884C9.31369 20.884 8.88959 20.884 7.74339 20.815C6.98791 20.8292 6.23567 20.7125 5.51975 20.47C5.04497 20.2723 4.6158 19.9787 4.25893 19.6075C3.87849 19.2381 3.58822 18.7855 3.41074 18.285C3.1309 17.5894 2.97569 16.8497 2.95225 16.1C2.95225 14.95 2.88348 14.5245 2.88348 11.5C2.88348 8.4755 2.88348 8.05 2.95225 6.9C2.95739 6.15371 3.09318 5.41414 3.35343 4.715C3.55521 4.2296 3.86494 3.79691 4.25893 3.45C4.60716 3.05459 5.03753 2.74056 5.51975 2.53C6.21842 2.27705 6.9548 2.14484 7.69754 2.139C8.84375 2.139 9.26784 2.07 12.2824 2.07C15.2969 2.07 15.721 2.07 16.8672 2.139C17.5948 2.14737 18.3156 2.27958 18.9991 2.53C19.52 2.72395 19.9875 3.03927 20.3631 3.45C20.7387 3.80326 21.0322 4.23514 21.2228 4.715C21.4775 5.41527 21.6094 6.15455 21.6125 6.9C21.6698 8.05 21.6812 8.4755 21.6812 11.5C21.6812 14.5245 21.6698 14.95 21.6125 16.1ZM12.2824 5.6005C11.1199 5.60277 9.98418 5.9507 9.01872 6.60033C8.05326 7.24996 7.30139 8.17213 6.8581 9.25032C6.41481 10.3285 6.3 11.5143 6.52818 12.658C6.75635 13.8016 7.31727 14.8517 8.14006 15.6756C8.96285 16.4995 10.0106 17.0603 11.1509 17.287C12.2912 17.5137 13.4729 17.3962 14.5467 16.9493C15.6204 16.5025 16.5381 15.7463 17.1837 14.7764C17.8293 13.8065 18.1738 12.6663 18.1739 11.5C18.1754 10.7239 18.0239 9.9551 17.7283 9.2379C17.4326 8.5207 16.9985 7.86923 16.451 7.32096C15.9034 6.77269 15.2533 6.33843 14.5379 6.04317C13.8225 5.74791 13.0559 5.59747 12.2824 5.6005ZM12.2824 15.3295C11.5275 15.3295 10.7895 15.1049 10.1618 14.6841C9.53415 14.2633 9.04493 13.6652 8.75604 12.9655C8.46715 12.2657 8.39156 11.4958 8.53884 10.7529C8.68611 10.0101 9.04963 9.3277 9.58343 8.79213C10.1172 8.25657 10.7973 7.89184 11.5377 7.74408C12.2781 7.59632 13.0456 7.67216 13.743 7.962C14.4404 8.25185 15.0366 8.74269 15.456 9.37244C15.8754 10.0022 16.0992 10.7426 16.0992 11.5C16.0992 12.0029 16.0005 12.5009 15.8087 12.9655C15.6169 13.4301 15.3357 13.8523 14.9813 14.2079C14.6269 14.5635 14.2061 14.8455 13.743 15.038C13.2799 15.2304 12.7836 15.3295 12.2824 15.3295Z" />
        </svg>
    )
};

function Linkedin() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
            width="100%"
            height="auto"
        >
            <path d="M0.65332 3.49896C0.65332 2.73314 0.912498 2.10135 1.43083 1.60359C1.94917 1.10581 2.62302 0.856934 3.45236 0.856934C4.26691 0.856934 4.92592 1.10198 5.42946 1.5921C5.9478 2.09754 6.20697 2.75611 6.20697 3.56788C6.20697 4.30305 5.95522 4.91568 5.45168 5.40581C4.93334 5.91124 4.25209 6.16395 3.40793 6.16395H3.38572C2.57118 6.16395 1.91216 5.91124 1.40862 5.40581C0.905079 4.90038 0.65332 4.26475 0.65332 3.49896ZM0.94211 23.6013V8.25459H5.87376V23.6013H0.94211ZM8.60615 23.6013H13.5378V15.032C13.5378 14.4959 13.597 14.0823 13.7155 13.7914C13.9228 13.2706 14.2376 12.8303 14.6596 12.4703C15.0817 12.1104 15.6112 11.9305 16.248 11.9305C17.9067 11.9305 18.736 13.0868 18.736 15.3995V23.6013H23.6677V14.8022C23.6677 12.5354 23.1493 10.8162 22.1126 9.64453C21.076 8.47285 19.7061 7.88701 18.0029 7.88701C16.0925 7.88701 14.6041 8.73705 13.5378 10.4371V10.4831H13.5156L13.5378 10.4371V8.25459H8.60615C8.63577 8.7447 8.65058 10.2686 8.65058 12.8264C8.65058 15.3842 8.63577 18.9758 8.60615 23.6013Z" />
        </svg>
    )
};

function Twitter() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 27 21"
            width="100%"
            height="auto"
        >
            <path d="M26.8465 2.51594C25.8668 2.93655 24.8308 3.21459 23.7706 3.34143C24.8891 2.68016 25.7273 1.63987 26.1297 0.41352C25.0786 1.03272 23.928 1.46898 22.7279 1.70335C21.9257 0.842481 20.8575 0.269441 19.6908 0.0741029C18.5241 -0.121235 17.3249 0.0721772 16.2812 0.624006C15.2375 1.17584 14.4085 2.05487 13.924 3.12324C13.4396 4.19161 13.3271 5.38889 13.6044 6.52731C11.4791 6.42093 9.4003 5.87331 7.50289 4.92C5.60547 3.9667 3.93193 2.62905 2.59097 0.993942C2.12064 1.80675 1.87349 2.72724 1.87412 3.66389C1.87245 4.53373 2.08815 5.39048 2.50202 6.15786C2.91589 6.92524 3.51508 7.57944 4.24624 8.06221C3.39642 8.03932 2.56475 7.81366 1.82199 7.40439V7.46889C1.82836 8.68763 2.25991 9.8668 3.04365 10.8069C3.82738 11.747 4.9152 12.3904 6.12308 12.6282C5.65811 12.7682 5.17537 12.8421 4.68938 12.8475C4.35297 12.8436 4.0174 12.8134 3.68579 12.7572C4.02976 13.8056 4.69541 14.7218 5.5901 15.3783C6.4848 16.0349 7.56404 16.3991 8.67767 16.4203C6.79718 17.8846 4.47548 18.6838 2.08266 18.6904C1.64699 18.6918 1.21167 18.666 0.779297 18.613C3.22235 20.174 6.0694 21.0027 8.97744 20.9992C10.9842 21.0198 12.975 20.6445 14.8336 19.8952C16.6922 19.1459 18.3812 18.0376 19.8021 16.6351C21.223 15.2325 22.3473 13.5638 23.1092 11.7265C23.8711 9.88915 24.2555 7.91997 24.2398 5.93399C24.2398 5.71472 24.2398 5.48255 24.2398 5.25038C25.2625 4.49558 26.1446 3.57028 26.8465 2.51594Z" />
        </svg>
    )
};

function Rocket({ width }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 132 132"
            width={width}
            height="auto"
            fill="#831ED2"
        >
            <path d="M127.316 3.73851C125.347 3.73851 123.05 3.73851 121.081 3.73851C107.626 4.39483 94.8277 7.34829 82.6857 13.2552C67.9185 20.1466 55.4484 29.9914 45.6035 43.1178C38.7121 51.9782 33.7897 61.823 30.18 72.3242C29.8518 72.9805 30.18 73.3087 30.5081 73.6368C33.4616 76.5903 36.415 79.5437 39.3685 82.4972C39.6966 82.8253 40.0248 83.4817 40.0248 84.138C40.0248 84.7943 39.6966 85.4506 39.0403 85.7788C38.384 86.107 37.3995 86.1069 37.0713 85.4506C35.4305 83.8098 34.1179 82.4972 32.4771 80.8564C30.5081 78.8874 28.8673 76.9184 26.8983 75.2776C26.242 74.6213 25.9139 73.6368 26.242 72.6524C30.5081 59.8541 36.7432 48.0403 45.6035 37.5391C54.4639 26.7098 65.2932 18.1776 77.4352 11.9425C88.5926 6.03564 100.735 2.42587 113.205 0.785061C118.455 0.128739 123.706 -0.199422 128.956 0.128739C130.597 0.128739 130.925 0.785061 131.254 2.42587C131.91 23.7563 126.659 43.446 115.174 61.823C103.688 79.8719 87.9363 93.3265 68.2466 101.859C65.2932 103.171 62.0116 104.156 58.73 105.468C57.7455 105.797 57.0892 105.797 56.4328 104.812C53.1512 101.531 49.5415 97.9208 46.2598 94.6391C45.6035 93.9828 45.2754 92.9983 45.9317 92.0139C46.588 91.0294 47.9007 91.0294 48.8851 92.0139C51.8386 94.9673 54.792 97.9208 57.7455 100.874C58.4018 101.531 58.73 101.531 59.3863 101.202C73.8254 96.28 86.6237 88.4041 97.453 77.9029C110.251 65.4328 118.783 50.6656 123.706 33.9293C126.331 24.7408 127.644 15.2242 127.644 5.37932C127.644 4.72299 127.316 4.39483 127.316 3.73851Z" />
            <path d="M109.266 42.1333C109.266 53.2908 100.406 62.1511 89.2483 62.1511C78.0908 62.1511 69.2305 53.2908 69.2305 42.1333C69.2305 31.304 78.0908 22.1155 88.9201 22.1155C100.406 22.1155 109.266 30.9758 109.266 42.1333ZM105.328 42.4615C105.328 33.273 98.1086 26.0534 88.9201 26.0534C79.7316 26.0534 72.5121 33.273 72.5121 42.4615C72.5121 51.65 79.7316 58.8695 88.9201 58.8695C98.1086 58.5414 105.328 51.3218 105.328 42.4615Z" />
            <path d="M59.0574 126.142C61.3545 124.83 63.6517 123.189 65.6206 121.548C72.1838 115.641 75.7936 108.422 77.4344 99.8894C77.7626 98.5767 78.4189 97.9204 79.4034 97.9204C80.716 97.9204 81.3724 98.9049 81.3724 100.218C81.0442 101.858 80.716 103.827 80.0597 105.468C76.4499 116.626 69.8867 124.83 59.7137 130.408C57.4166 131.721 56.4321 131.065 56.1039 128.768C54.7913 121.876 53.4787 114.657 52.166 107.765C52.166 107.109 52.166 106.453 52.166 106.124C52.4942 105.468 53.1505 105.14 54.135 105.14C54.7913 105.14 55.4476 105.796 55.7758 106.453C56.1039 108.422 56.4321 110.391 57.0884 112.688C57.4166 117.282 58.4011 121.548 59.0574 126.142Z" />
            <path d="M4.91118 71.9961C6.88014 72.3242 8.84911 72.6524 10.4899 72.9805C15.0842 73.965 19.6784 74.6213 23.9445 75.6058C24.2727 75.6058 24.2727 75.6058 24.6008 75.6058C25.5853 75.934 26.2416 76.9185 25.9135 77.903C25.5853 78.8874 24.929 79.5438 23.6164 79.2156C20.9911 78.5593 18.0376 78.2311 15.4123 77.5748C11.1462 76.5903 6.88014 75.934 2.28589 74.9495C1.95773 74.9495 1.95773 74.9495 1.62956 74.9495C-0.011241 74.6213 -0.339402 73.6369 0.31692 71.9961C2.28589 68.3863 4.58301 64.7765 7.53646 61.8231C13.7715 55.2598 21.3192 51.6501 29.8514 49.6811C30.1796 49.6811 30.5077 49.6811 30.5077 49.3529C31.4922 49.0248 32.4767 49.6811 32.8049 50.6656C33.133 51.6501 32.4767 52.6346 31.1641 52.9627C29.1951 53.619 26.898 53.9472 24.929 54.6035C16.3968 57.557 9.83359 62.8076 4.91118 70.3553C5.23934 71.3397 5.23934 71.6679 4.91118 71.9961Z" />
            <path d="M28.2109 101.203C28.5391 100.874 28.8673 100.218 29.1954 99.8899C35.4305 93.6548 41.3374 87.7479 47.5724 81.5129C49.8696 79.2157 51.8385 77.2468 54.1357 74.9496C55.1201 73.9652 56.1046 73.9652 57.0891 74.6215C57.7454 75.2778 57.7454 76.5904 56.761 77.5749C49.5414 84.7945 42.3219 92.3422 34.7742 99.5617C33.7897 100.546 32.8052 101.859 31.4925 102.843C30.8362 103.5 30.1799 103.5 29.5236 103.171C28.5391 102.843 28.2109 102.187 28.2109 101.203Z" />
            <path d="M19.6782 109.735C20.3345 110.063 20.9908 110.391 21.319 111.047C21.6472 111.704 21.319 112.36 20.9908 113.016C20.6627 113.344 20.0064 114.001 19.6782 114.657C15.7403 118.595 11.8023 122.861 7.53623 126.799C6.87991 127.127 6.55174 127.455 5.89542 127.455C5.2391 127.455 4.58278 127.127 4.25462 126.471C3.92646 125.486 3.92646 124.83 4.58278 124.174C7.20807 121.548 9.83336 118.923 12.4586 116.298C14.4276 114.329 16.0684 112.688 18.0374 110.719C18.6937 110.391 19.0219 110.063 19.6782 109.735Z" />
            <path d="M16.7253 96.28C18.3661 96.28 19.3506 97.9208 18.6942 98.9053C18.3661 99.2335 18.3661 99.5616 18.0379 99.8898C13.7718 104.156 9.50573 108.422 5.23964 112.688L4.91148 113.016C3.92699 113.673 2.94251 114.001 2.28619 113.016C1.62986 112.36 1.62986 111.047 2.28619 110.391C5.5678 107.109 8.84941 103.828 12.131 100.546C13.4437 99.2335 14.4281 98.249 15.7408 97.2645C16.069 96.6082 16.7253 96.28 16.7253 96.28Z" />
            <path d="M35.1019 114.657C35.1019 114.985 34.7737 115.314 34.4455 115.97C29.8513 120.564 25.5852 124.83 20.9909 129.425C20.0065 130.409 19.022 130.409 18.0375 129.425C17.3812 128.768 17.3812 127.456 18.3657 126.799C22.9599 122.205 27.226 117.939 31.8203 113.345C32.4766 112.688 33.1329 112.36 34.1174 112.688C34.7737 113.016 35.1019 113.345 35.1019 114.657Z" />
        </svg>
    )
};

function LightBulb({ width }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 108 131"
            width={width}
            height="auto"
            fill="#831ED2"
        >
            <path d="M43.317 89.9159C42.0044 90.2441 41.0199 90.5722 40.0354 91.2286C38.7228 89.2596 37.7384 86.9625 36.4257 85.3217C34.1286 82.0401 31.5033 79.0866 29.2061 75.805C25.5964 70.8826 22.6429 65.9602 21.3303 59.7251C18.3769 44.3015 26.909 29.2061 41.6762 23.2992C61.0377 15.4233 83.3527 28.5498 86.3062 49.2239C87.6188 58.7406 84.6653 66.6165 79.4147 74.1642C77.1176 77.4458 74.1642 80.7274 71.8671 84.3372C70.2263 86.6343 69.2418 88.9314 67.601 91.2286C66.9447 92.213 66.2883 93.1975 65.3039 93.5257C57.7562 96.4791 50.2085 99.1044 42.6608 101.73C41.6763 102.058 41.0199 101.73 40.6918 101.073C40.3636 100.089 40.3637 99.1044 41.3481 98.7763C42.0045 98.4481 42.6607 98.1199 43.317 98.1199C49.8803 95.8228 56.4435 93.5257 63.0067 90.9004C63.663 90.5722 64.3193 89.9159 64.6475 89.2596C67.2728 84.3372 70.5545 80.3993 73.8361 75.805C77.1177 71.5389 80.0711 67.601 81.3837 62.3504C84.6653 51.8492 82.3682 42.6607 75.1487 34.7849C66.9447 25.5963 56.4436 22.6429 44.6298 26.2527C32.816 29.8624 26.2527 38.0665 23.9556 50.2084C22.3147 58.7406 25.2682 65.9602 30.1906 72.5234C33.144 76.4613 36.0975 80.3993 39.051 84.3372C41.0199 85.6498 42.0044 87.6188 43.317 89.9159Z" />
            <path d="M41.6758 122.404C41.3477 122.076 40.6914 121.747 40.6914 121.091C40.6914 120.435 41.0196 119.778 41.3478 119.122C41.3478 118.794 42.0041 118.794 42.3322 118.794C49.5518 116.169 57.0995 113.543 64.319 110.918C65.9598 110.262 66.6161 110.59 66.9443 111.574C67.2725 112.559 66.6161 113.543 65.3035 114.2C57.7558 116.825 50.5363 119.45 42.9886 122.404C42.6604 122.076 42.3322 122.076 41.6758 122.404Z" />
            <path d="M41.6758 111.575C41.3477 111.247 40.6914 110.919 40.6914 110.262C40.6914 109.606 41.0196 108.95 41.3478 108.293C41.3478 107.965 42.0041 107.965 42.3322 107.965C49.5518 105.34 57.0995 102.715 64.319 100.089C65.9598 99.4329 66.6161 99.7611 66.9443 100.746C67.2725 101.73 66.9443 102.715 65.3035 103.371C57.7558 105.996 50.5363 108.95 42.9886 111.575C42.6604 111.575 42.3322 111.575 41.6758 111.575Z" />
            <path d="M65.3033 120.763C63.0062 128.639 50.2079 133.233 42.332 128.967C49.8797 126.342 57.4274 123.388 65.3033 120.763Z" />
            <path d="M55.4593 5.9069C55.4593 7.21954 55.4593 8.53219 55.4593 9.84483C55.4593 10.8293 54.803 11.4856 53.8185 11.4856C52.8341 11.4856 52.1777 10.8293 52.1777 9.84483C52.1777 7.21954 52.1777 4.59426 52.1777 1.64081C52.1777 0.656322 52.8341 0 53.8185 0C54.803 0 55.4593 0.656322 55.4593 1.64081C55.4593 2.95345 55.4593 4.59425 55.4593 5.9069Z" />
            <path d="M5.90686 51.8496C7.2195 51.8496 8.53219 51.8496 9.84483 51.8496C11.1575 51.8496 11.8138 52.5059 11.8138 53.4904C11.8138 54.4749 11.1575 55.1312 9.84483 55.1312C7.21954 55.1312 4.59427 55.1312 1.96899 55.1312C0.656342 55.1312 0 54.4749 0 53.4904C0 52.5059 0.656342 51.8496 1.96899 51.8496C3.28163 51.8496 4.59421 51.8496 5.90686 51.8496Z" />
            <path d="M101.73 55.4593C100.418 55.4593 99.1048 55.4593 97.7922 55.4593C96.8077 55.4593 96.1514 54.803 96.1514 53.8185C96.1514 52.8341 96.8077 52.1777 97.7922 52.1777C100.417 52.1777 103.371 52.1777 105.996 52.1777C106.981 52.1777 107.637 52.8341 107.637 53.8185C107.637 54.803 106.981 55.4593 105.996 55.4593C104.355 55.4593 103.043 55.4593 101.73 55.4593Z" />
            <path d="M16.4076 14.439C17.0639 14.7671 17.3921 15.0953 17.7202 15.4234C19.6892 17.3924 21.33 19.0332 23.299 21.0022C24.2835 21.9867 24.2835 22.643 23.299 23.6275C22.6427 24.2838 21.6581 24.2838 20.6736 23.6275C18.7047 21.6585 16.7358 20.0177 15.095 18.0487C14.7668 17.7206 14.4386 16.7361 14.7668 16.0798C15.0949 15.0953 16.0794 14.7671 16.4076 14.439Z" />
            <path d="M84.9935 83.0251C85.6498 83.3533 85.9779 83.6815 86.3061 84.0096C88.2751 85.6504 89.9159 87.6194 91.8849 89.2602C92.8694 90.2447 92.8694 91.2292 92.2131 91.8855C91.5567 92.5418 90.5722 92.5418 89.5877 91.5573C87.6187 89.5884 85.978 87.9476 84.009 85.9786C83.6809 85.6504 83.3527 84.666 83.6808 84.0096C83.6808 83.6815 84.3371 83.3533 84.9935 83.0251Z" />
            <path d="M92.8692 16.4081C92.541 17.0644 92.2129 17.3926 91.8847 17.7207C89.9158 19.6897 88.2749 21.3305 86.306 23.2995C85.6496 23.9558 84.6652 24.2839 83.6807 23.2995C83.0244 22.6431 83.0244 21.6587 83.6807 20.6742C85.6497 18.7052 87.2904 16.7362 89.2594 15.0954C89.5876 14.7673 90.5721 14.4391 91.2284 14.7673C91.8847 15.0954 92.2129 16.0799 92.8692 16.4081Z" />
            <path d="M16.4077 92.5414C16.0795 92.2132 15.4232 91.885 15.0951 91.2287C14.7669 90.9005 15.0951 89.9161 15.0951 89.5879C17.064 87.6189 19.033 85.3218 21.3301 83.3528C21.9864 82.6965 22.9709 82.6965 23.6272 83.3528C24.2835 84.0092 24.2835 84.9936 23.6272 85.65C21.6582 87.6189 19.6893 89.5879 17.7203 91.5569C17.3922 92.2132 17.064 92.5414 16.4077 92.5414Z" />
        </svg>
    )
};

function Chevron({ width }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className="bi bi-chevron-compact-down" viewBox="0 0 16 16"
            width={width}
            height="auto"
            fill="currentColor"
        >
            <path fillRule="evenodd" d="M1.553 6.776a.5.5 0 0 1 .67-.223L8 9.44l5.776-2.888a.5.5 0 1 1 .448.894l-6 3a.5.5 0 0 1-.448 0l-6-3a.5.5 0 0 1-.223-.67z" />
        </svg>
    )
};


export {
    UserIcon,
    Cart,
    Magnifier,
    Bag,
    Bookmark,
    Star,
    Plus,
    Minus,
    Facebook,
    Instagram,
    Linkedin,
    Twitter,
    Rocket,
    LightBulb,
    Chevron
};