/* eslint-disable react/no-unknown-property */
import "./styles/icons.scss";
const followerStats = [
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width="100"
        height="100"
        className="stats__icon"
        viewBox="0 0 48 48"
      >
        <path
          fill="#3F51B5"
          d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"
        ></path>
        <path
          fill="#FFF"
          d="M34.368,25H31v13h-5V25h-3v-4h3v-2.41c0.002-3.508,1.459-5.59,5.592-5.59H35v4h-2.287C31.104,17,31,17.6,31,18.723V21h4L34.368,25z"
        ></path>
      </svg>
    ),
    id: 1,
    userName: "@nathanf",
    border_color: "hsl(208, 92%, 53%)",
    followers: 1987,
    daily_stats: "12 Today",
    growth_color: "hsl(163, 72%, 41%)",
    growth_icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        viewBox="0 0 600 520"
        className="growth_icon"
        width="600"
        height="520"
      >
        <polygon points="300,0 600,520 0,520" fill="#007843" />
      </svg>
    ),
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width="100"
        height="100"
        viewBox="0 0 48 48"
        className="growth_icon"
      >
        <path
          fill="#03A9F4"
          d="M42,12.429c-1.323,0.586-2.746,0.977-4.247,1.162c1.526-0.906,2.7-2.351,3.251-4.058c-1.428,0.837-3.01,1.452-4.693,1.776C34.967,9.884,33.05,9,30.926,9c-4.08,0-7.387,3.278-7.387,7.32c0,0.572,0.067,1.129,0.193,1.67c-6.138-0.308-11.582-3.226-15.224-7.654c-0.64,1.082-1,2.349-1,3.686c0,2.541,1.301,4.778,3.285,6.096c-1.211-0.037-2.351-0.374-3.349-0.914c0,0.022,0,0.055,0,0.086c0,3.551,2.547,6.508,5.923,7.181c-0.617,0.169-1.269,0.263-1.941,0.263c-0.477,0-0.942-0.054-1.392-0.135c0.94,2.902,3.667,5.023,6.898,5.086c-2.528,1.96-5.712,3.134-9.174,3.134c-0.598,0-1.183-0.034-1.761-0.104C9.268,36.786,13.152,38,17.321,38c13.585,0,21.017-11.156,21.017-20.834c0-0.317-0.01-0.633-0.025-0.945C39.763,15.197,41.013,13.905,42,12.429"
        ></path>
      </svg>
    ),
    id: 1,
    userName: "@nathanf",
    followers: 1044,
    daily_stats: "99 Today",
    border_color: " hsl(203, 89%, 53%)",
    growth_color: "hsl(163, 72%, 41%)",
    growth_icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        viewBox="0 0 600 520"
        width="600"
        className="growth_icon"
        height="520"
      >
        <polygon points="300,0 600,520 0,520" fill="#007843" />
      </svg>
    ),
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width="100"
        height="100"
        viewBox="0 0 48 48"
        className="stats__icon"
      >
        <radialGradient
          id="yOrnnhliCrdS2gy~4tD8ma_Xy10Jcu1L2Su_gr1"
          cx="19.38"
          cy="42.035"
          r="44.899"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#fd5"></stop>
          <stop offset=".328" stopColor="#ff543f"></stop>
          <stop offset=".348" stopColor="#fc5245"></stop>
          <stop offset=".504" stopColor="#e64771"></stop>
          <stop offset=".643" stopColor="#d53e91"></stop>
          <stop offset=".761" stopColor="#cc39a4"></stop>
          <stop offset=".841" stopColor="#c837ab"></stop>
        </radialGradient>
        <path
          fill="url(#yOrnnhliCrdS2gy~4tD8ma_Xy10Jcu1L2Su_gr1)"
          d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"
        ></path>
        <radialGradient
          id="yOrnnhliCrdS2gy~4tD8mb_Xy10Jcu1L2Su_gr2"
          cx="11.786"
          cy="5.54"
          r="29.813"
          gradientTransform="matrix(1 0 0 .6663 0 1.849)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#4168c9"></stop>
          <stop offset=".999" stopColor="#4168c9" stopOpacity="0"></stop>
        </radialGradient>
        <path
          fill="url(#yOrnnhliCrdS2gy~4tD8mb_Xy10Jcu1L2Su_gr2)"
          d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"
        ></path>
        <path
          fill="#fff"
          d="M24,31c-3.859,0-7-3.14-7-7s3.141-7,7-7s7,3.14,7,7S27.859,31,24,31z M24,19c-2.757,0-5,2.243-5,5	s2.243,5,5,5s5-2.243,5-5S26.757,19,24,19z"
        ></path>
        <circle cx="31.5" cy="16.5" r="1.5" fill="#fff"></circle>
        <path
          fill="#fff"
          d="M30,37H18c-3.859,0-7-3.14-7-7V18c0-3.86,3.141-7,7-7h12c3.859,0,7,3.14,7,7v12	C37,33.86,33.859,37,30,37z M18,13c-2.757,0-5,2.243-5,5v12c0,2.757,2.243,5,5,5h12c2.757,0,5-2.243,5-5V18c0-2.757-2.243-5-5-5H18z"
        ></path>
      </svg>
    ),
    id: 1,
    userName: "@nathanf",
    followers: "11k",
    daily_stats: "1099 Today",
    border_color:
      "linear-gradient(to right, hsl(37, 97%, 70%), hsl(329, 70%, 58%))",
    growth_color: "hsl(163, 72%, 41%)",
    growth_icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        viewBox="0 0 600 520"
        width="600"
        className="growth_icon"
        height="520"
      >
        <polygon points="300,0 600,520 0,520" fill="#007843" />
      </svg>
    ),
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width="100"
        height="100"
        viewBox="0 0 48 48"
        className="growth_icon"
      >
        <path
          fill="#FF3D00"
          d="M43.2,33.9c-0.4,2.1-2.1,3.7-4.2,4c-3.3,0.5-8.8,1.1-15,1.1c-6.1,0-11.6-0.6-15-1.1c-2.1-0.3-3.8-1.9-4.2-4C4.4,31.6,4,28.2,4,24c0-4.2,0.4-7.6,0.8-9.9c0.4-2.1,2.1-3.7,4.2-4C12.3,9.6,17.8,9,24,9c6.2,0,11.6,0.6,15,1.1c2.1,0.3,3.8,1.9,4.2,4c0.4,2.3,0.9,5.7,0.9,9.9C44,28.2,43.6,31.6,43.2,33.9z"
        ></path>
        <path fill="#FFF" d="M20 31L20 17 32 24z"></path>
      </svg>
    ),
    id: 1,
    userName: "@nathanf",
    followers: 8239,
    daily_stats: "144 Today",
    border_color: " hsl(348, 97%, 39%)",
    growth_color: "hsl(356, 69%, 56%)",
    growth_icon: (
      <svg
        width="800px"
        height="800px"
        viewBox="0 0 36 36"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        aria-hidden="true"
        role="img"
        className="growth_icon"
        preserveAspectRatio="xMidYMid meet"
      >
        <path
          fill="#E75A70"
          d="M19.146 26.361c-.63.901-1.637.884-2.236-.038L6.09 9.677C5.491 8.754 5.9 8 7 8h23c1.1 0 1.483.737.854 1.639L19.146 26.361z"
        ></path>
      </svg>
    ),
  },
];

const todayStats = [
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width="100"
        height="100"
        viewBox="0 0 48 48"
        className="stats__icon"
      >
        <path
          fill="#3F51B5"
          d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"
        ></path>
        <path
          fill="#FFF"
          d="M34.368,25H31v13h-5V25h-3v-4h3v-2.41c0.002-3.508,1.459-5.59,5.592-5.59H35v4h-2.287C31.104,17,31,17.6,31,18.723V21h4L34.368,25z"
        ></path>
      </svg>
    ),
    stats: 87,
    text: "Page Views",
    growth_color: "hsl(163, 72%, 41%)",
    main_stats: "3%",
    growth_icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        viewBox="0 0 600 520"
        width="600"
        className="growth_icon"
        height="520"
      >
        <polygon points="300,0 600,520 0,520" fill="#007843" />
      </svg>
    ),
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        className="stats__icon"
        width="100"
        height="100"
        viewBox="0 0 48 48"
      >
        <path
          fill="#3F51B5"
          d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"
        ></path>
        <path
          fill="#FFF"
          d="M34.368,25H31v13h-5V25h-3v-4h3v-2.41c0.002-3.508,1.459-5.59,5.592-5.59H35v4h-2.287C31.104,17,31,17.6,31,18.723V21h4L34.368,25z"
        ></path>
      </svg>
    ),
    stats: 52,
    growth_color: "hsl(356, 69%, 56%)",
    text: "Likes",
    main_stats: "2%",
    growth_icon: (
      <svg
        width="800px"
        height="800px"
        viewBox="0 0 36 36"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        aria-hidden="true"
        role="img"
        className="growth_icon"
        preserveAspectRatio="xMidYMid meet"
      >
        <path
          fill="#E75A70"
          d="M19.146 26.361c-.63.901-1.637.884-2.236-.038L6.09 9.677C5.491 8.754 5.9 8 7 8h23c1.1 0 1.483.737.854 1.639L19.146 26.361z"
        ></path>
      </svg>
    ),
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width="100"
        height="100"
        viewBox="0 0 48 48"
        className="stats__icon"
      >
        <radialGradient
          id="yOrnnhliCrdS2gy~4tD8ma_Xy10Jcu1L2Su_gr1"
          cx="19.38"
          cy="42.035"
          r="44.899"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#fd5"></stop>
          <stop offset=".328" stopColor="#ff543f"></stop>
          <stop offset=".348" stopColor="#fc5245"></stop>
          <stop offset=".504" stopColor="#e64771"></stop>
          <stop offset=".643" stopColor="#d53e91"></stop>
          <stop offset=".761" stopColor="#cc39a4"></stop>
          <stop offset=".841" stopColor="#c837ab"></stop>
        </radialGradient>
        <path
          fill="url(#yOrnnhliCrdS2gy~4tD8ma_Xy10Jcu1L2Su_gr1)"
          d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"
        ></path>
        <radialGradient
          id="yOrnnhliCrdS2gy~4tD8mb_Xy10Jcu1L2Su_gr2"
          cx="11.786"
          cy="5.54"
          r="29.813"
          gradientTransform="matrix(1 0 0 .6663 0 1.849)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#4168c9"></stop>
          <stop offset=".999" stopColor="#4168c9" stopOpacity="0"></stop>
        </radialGradient>
        <path
          fill="url(#yOrnnhliCrdS2gy~4tD8mb_Xy10Jcu1L2Su_gr2)"
          d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"
        ></path>
        <path
          fill="#fff"
          d="M24,31c-3.859,0-7-3.14-7-7s3.141-7,7-7s7,3.14,7,7S27.859,31,24,31z M24,19c-2.757,0-5,2.243-5,5	s2.243,5,5,5s5-2.243,5-5S26.757,19,24,19z"
        ></path>
        <circle cx="31.5" cy="16.5" r="1.5" fill="#fff"></circle>
        <path
          fill="#fff"
          d="M30,37H18c-3.859,0-7-3.14-7-7V18c0-3.86,3.141-7,7-7h12c3.859,0,7,3.14,7,7v12	C37,33.86,33.859,37,30,37z M18,13c-2.757,0-5,2.243-5,5v12c0,2.757,2.243,5,5,5h12c2.757,0,5-2.243,5-5V18c0-2.757-2.243-5-5-5H18z"
        ></path>
      </svg>
    ),
    stats: 5462,
    text: "Likes",
    growth_color: "hsl(163, 72%, 41%)",
    main_stats: "2257%",
    growth_icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        viewBox="0 0 600 520"
        width="600"
        className="growth_icon"
        height="520"
      >
        <polygon points="300,0 600,520 0,520" fill="#007843" />
      </svg>
    ),
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width="100"
        height="100"
        viewBox="0 0 48 48"
        className="stats__icon"
      >
        <radialGradient
          id="yOrnnhliCrdS2gy~4tD8ma_Xy10Jcu1L2Su_gr1"
          cx="19.38"
          cy="42.035"
          r="44.899"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#fd5"></stop>
          <stop offset=".328" stopColor="#ff543f"></stop>
          <stop offset=".348" stopColor="#fc5245"></stop>
          <stop offset=".504" stopColor="#e64771"></stop>
          <stop offset=".643" stopColor="#d53e91"></stop>
          <stop offset=".761" stopColor="#cc39a4"></stop>
          <stop offset=".841" stopColor="#c837ab"></stop>
        </radialGradient>
        <path
          fill="url(#yOrnnhliCrdS2gy~4tD8ma_Xy10Jcu1L2Su_gr1)"
          d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"
        ></path>
        <radialGradient
          id="yOrnnhliCrdS2gy~4tD8mb_Xy10Jcu1L2Su_gr2"
          cx="11.786"
          cy="5.54"
          r="29.813"
          gradientTransform="matrix(1 0 0 .6663 0 1.849)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#4168c9"></stop>
          <stop offset=".999" stopColor="#4168c9" stopOpacity="0"></stop>
        </radialGradient>
        <path
          fill="url(#yOrnnhliCrdS2gy~4tD8mb_Xy10Jcu1L2Su_gr2)"
          d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"
        ></path>
        <path
          fill="#fff"
          d="M24,31c-3.859,0-7-3.14-7-7s3.141-7,7-7s7,3.14,7,7S27.859,31,24,31z M24,19c-2.757,0-5,2.243-5,5	s2.243,5,5,5s5-2.243,5-5S26.757,19,24,19z"
        ></path>
        <circle cx="31.5" cy="16.5" r="1.5" fill="#fff"></circle>
        <path
          fill="#fff"
          d="M30,37H18c-3.859,0-7-3.14-7-7V18c0-3.86,3.141-7,7-7h12c3.859,0,7,3.14,7,7v12	C37,33.86,33.859,37,30,37z M18,13c-2.757,0-5,2.243-5,5v12c0,2.757,2.243,5,5,5h12c2.757,0,5-2.243,5-5V18c0-2.757-2.243-5-5-5H18z"
        ></path>
      </svg>
    ),
    stats: "52k",
    text: "Profile Views",
    main_stats: "1376%",
    growth_color: "hsl(163, 72%, 41%)",
    growth_icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        viewBox="0 0 600 520"
        width="600"
        className="growth_icon"
        height="520"
      >
        <polygon points="300,0 600,520 0,520" fill="#007843" />
      </svg>
    ),
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width="100"
        height="100"
        viewBox="0 0 48 48"
        className="stats__icon"
      >
        <path
          fill="#03A9F4"
          d="M42,12.429c-1.323,0.586-2.746,0.977-4.247,1.162c1.526-0.906,2.7-2.351,3.251-4.058c-1.428,0.837-3.01,1.452-4.693,1.776C34.967,9.884,33.05,9,30.926,9c-4.08,0-7.387,3.278-7.387,7.32c0,0.572,0.067,1.129,0.193,1.67c-6.138-0.308-11.582-3.226-15.224-7.654c-0.64,1.082-1,2.349-1,3.686c0,2.541,1.301,4.778,3.285,6.096c-1.211-0.037-2.351-0.374-3.349-0.914c0,0.022,0,0.055,0,0.086c0,3.551,2.547,6.508,5.923,7.181c-0.617,0.169-1.269,0.263-1.941,0.263c-0.477,0-0.942-0.054-1.392-0.135c0.94,2.902,3.667,5.023,6.898,5.086c-2.528,1.96-5.712,3.134-9.174,3.134c-0.598,0-1.183-0.034-1.761-0.104C9.268,36.786,13.152,38,17.321,38c13.585,0,21.017-11.156,21.017-20.834c0-0.317-0.01-0.633-0.025-0.945C39.763,15.197,41.013,13.905,42,12.429"
        ></path>
      </svg>
    ),
    stats: 117,
    text: "Retweets",
    growth_color: "hsl(163, 72%, 41%)",
    main_stats: "303%",
    growth_icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        viewBox="0 0 600 520"
        width="600"
        className="growth_icon"
        height="520"
      >
        <polygon points="300,0 600,520 0,520" fill="#007843" />
      </svg>
    ),
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        className="stats__icon"
        width="100"
        height="100"
        viewBox="0 0 48 48"
      >
        <path
          fill="#03A9F4"
          d="M42,12.429c-1.323,0.586-2.746,0.977-4.247,1.162c1.526-0.906,2.7-2.351,3.251-4.058c-1.428,0.837-3.01,1.452-4.693,1.776C34.967,9.884,33.05,9,30.926,9c-4.08,0-7.387,3.278-7.387,7.32c0,0.572,0.067,1.129,0.193,1.67c-6.138-0.308-11.582-3.226-15.224-7.654c-0.64,1.082-1,2.349-1,3.686c0,2.541,1.301,4.778,3.285,6.096c-1.211-0.037-2.351-0.374-3.349-0.914c0,0.022,0,0.055,0,0.086c0,3.551,2.547,6.508,5.923,7.181c-0.617,0.169-1.269,0.263-1.941,0.263c-0.477,0-0.942-0.054-1.392-0.135c0.94,2.902,3.667,5.023,6.898,5.086c-2.528,1.96-5.712,3.134-9.174,3.134c-0.598,0-1.183-0.034-1.761-0.104C9.268,36.786,13.152,38,17.321,38c13.585,0,21.017-11.156,21.017-20.834c0-0.317-0.01-0.633-0.025-0.945C39.763,15.197,41.013,13.905,42,12.429"
        ></path>
      </svg>
    ),
    stats: 507,
    text: "Likes",
    main_stats: "553%",
    growth_color: "hsl(163, 72%, 41%)",
    growth_icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        viewBox="0 0 600 520"
        width="600"
        className="growth_icon"
        height="520"
      >
        <polygon points="300,0 600,520 0,520" fill="#007843" />
      </svg>
    ),
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width="100"
        height="100"
        viewBox="0 0 48 48"
        className="stats__icon"
      >
        <path
          fill="#FF3D00"
          d="M43.2,33.9c-0.4,2.1-2.1,3.7-4.2,4c-3.3,0.5-8.8,1.1-15,1.1c-6.1,0-11.6-0.6-15-1.1c-2.1-0.3-3.8-1.9-4.2-4C4.4,31.6,4,28.2,4,24c0-4.2,0.4-7.6,0.8-9.9c0.4-2.1,2.1-3.7,4.2-4C12.3,9.6,17.8,9,24,9c6.2,0,11.6,0.6,15,1.1c2.1,0.3,3.8,1.9,4.2,4c0.4,2.3,0.9,5.7,0.9,9.9C44,28.2,43.6,31.6,43.2,33.9z"
        ></path>
        <path fill="#FFF" d="M20 31L20 17 32 24z"></path>
      </svg>
    ),
    stats: 107,
    growth_color: "hsl(356, 69%, 56%)",
    text: "Likes",
    main_stats: "19%",
    growth_icon: (
      <svg
        width="800px"
        height="800px"
        viewBox="0 0 36 36"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        aria-hidden="true"
        role="img"
        className="growth_icon"
        preserveAspectRatio="xMidYMid meet"
      >
        <path
          fill="#E75A70"
          d="M19.146 26.361c-.63.901-1.637.884-2.236-.038L6.09 9.677C5.491 8.754 5.9 8 7 8h23c1.1 0 1.483.737.854 1.639L19.146 26.361z"
        ></path>
      </svg>
    ),
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        className="stats__icon"
        width="100"
        height="100"
        viewBox="0 0 48 48"
      >
        <path
          fill="#FF3D00"
          d="M43.2,33.9c-0.4,2.1-2.1,3.7-4.2,4c-3.3,0.5-8.8,1.1-15,1.1c-6.1,0-11.6-0.6-15-1.1c-2.1-0.3-3.8-1.9-4.2-4C4.4,31.6,4,28.2,4,24c0-4.2,0.4-7.6,0.8-9.9c0.4-2.1,2.1-3.7,4.2-4C12.3,9.6,17.8,9,24,9c6.2,0,11.6,0.6,15,1.1c2.1,0.3,3.8,1.9,4.2,4c0.4,2.3,0.9,5.7,0.9,9.9C44,28.2,43.6,31.6,43.2,33.9z"
        ></path>
        <path fill="#FFF" d="M20 31L20 17 32 24z"></path>
      </svg>
    ),
    stats: 1407,
    text: "Total Views",
    growth_color: "hsl(356, 69%, 56%)",
    main_stats: "12%",
    growth_icon: (
      <svg
        width="800px"
        height="800px"
        viewBox="0 0 36 36"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        aria-hidden="true"
        role="img"
        className="growth_icon"
        preserveAspectRatio="xMidYMid meet"
      >
        <path
          fill="#E75A70"
          d="M19.146 26.361c-.63.901-1.637.884-2.236-.038L6.09 9.677C5.491 8.754 5.9 8 7 8h23c1.1 0 1.483.737.854 1.639L19.146 26.361z"
        ></path>
      </svg>
    ),
  },
];

export { followerStats, todayStats };
