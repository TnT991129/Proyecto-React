
export function HeroE() {
  return (
    <div className="relative pt-14 isolate">
      <svg
        aria-hidden="true"
        className="[mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)] -z-10 absolute inset-0 size-full stroke-primary"
      >
        <defs>
          <pattern
            x="50%"
            y={-1}
            id="83fd4e5a-9d52-42fc-97b6-718e5d7ee527"
            width={200}
            height={200}
            patternUnits="userSpaceOnUse"
          >
            <path d="M100 200V.5M.5 .5H200" fill="none" />
          </pattern>
        </defs>
        <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
          <path
            d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
            strokeWidth={0}
          />
        </svg>
        <rect
          fill="url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)"
          width="100%"
          height="100%"
          strokeWidth={0}
        />
      </svg>
      <div className="lg:flex lg:items-center lg:gap-x-10 mx-auto px-6 lg:px-8 py-24 sm:py-32 lg:py-40 max-w-7xl">
        <div className="lg:flex-auto mx-auto lg:mx-0 max-w-2xl">
          <h1 className="mt-10 font-semibold text-5xl text-gray-900 text-pretty sm:text-7xl tracking-tight">
            Boost Your Digital Marketing Strategy with Twilio
          </h1>
          <p className="mt-8 font-medium text-gray-500 text-lg text-pretty sm:text-xl/8">
            Discover how Twilio is revolutionizing business communication by
            integrating messaging, calls, and automated notifications. Enhance
            customer engagement, personalize your campaigns, and optimize your
            digital marketing results with effective and secure communication
            tools.
          </p>
          <div className="flex items-center gap-x-6 mt-10">
            <a
              href="/signin"
              className="bg-secondary hover:bg-secondary shadow-sm px-3.5 py-2.5 rounded-md font-semibold text-sm text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Get started
            </a>
          </div>
        </div>
        <div className="mt-16 sm:mt-24 lg:mt-0 lg:shrink-0 lg:grow">
          <svg
            role="img"
            viewBox="0 0 366 729"
            className="drop-shadow-xl mx-auto w-[22.875rem] max-w-full"
          >
            <title>App screenshot</title>
            <defs>
              <clipPath id="2ade4387-9c63-4fc4-b754-10e687a0d332">
                <rect rx={36} width={316} height={684} />
              </clipPath>
            </defs>
            <path
              d="M363.315 64.213C363.315 22.99 341.312 1 300.092 1H66.751C25.53 1 3.528 22.99 3.528 64.213v44.68l-.857.143A2 2 0 0 0 1 111.009v24.611a2 2 0 0 0 1.671 1.973l.95.158a2.26 2.26 0 0 1-.093.236v26.173c.212.1.398.296.541.643l-1.398.233A2 2 0 0 0 1 167.009v47.611a2 2 0 0 0 1.671 1.973l1.368.228c-.139.319-.314.533-.511.653v16.637c.221.104.414.313.56.689l-1.417.236A2 2 0 0 0 1 237.009v47.611a2 2 0 0 0 1.671 1.973l1.347.225c-.135.294-.302.493-.49.607v377.681c0 41.213 22 63.208 63.223 63.208h95.074c.947-.504 2.717-.843 4.745-.843l.141.001h.194l.086-.001 33.704.005c1.849.043 3.442.37 4.323.838h95.074c41.222 0 63.223-21.999 63.223-63.212v-394.63c-.259-.275-.48-.796-.63-1.47l-.011-.133 1.655-.276A2 2 0 0 0 366 266.62v-77.611a2 2 0 0 0-1.671-1.973l-1.712-.285c.148-.839.396-1.491.698-1.811V64.213Z"
              fill="#4B5563"
            />
            <path
              d="M16 59c0-23.748 19.252-43 43-43h246c23.748 0 43 19.252 43 43v615c0 23.196-18.804 42-42 42H58c-23.196 0-42-18.804-42-42V59Z"
              fill="#343E4E"
            />
            <foreignObject
              width={316}
              height={684}
              clipPath="url(#2ade4387-9c63-4fc4-b754-10e687a0d332)"
              transform="translate(24 24)"
            >
              <img
                alt=""
                src="https://tailwindui.com/plus/img/component-images/mobile-app-screenshot.png"
              />
            </foreignObject>
          </svg>
        </div>
      </div>
    </div>
  );
}
