



export default function HeroAuto() {
  return <div className="relative bg-primary min-h-screen">
      <div className="relative md:left-0 md:absolute md:w-1/3 lg:w-1/2 h-80 md:h-full overflow-hidden">
        <img alt="" src="https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=60&blend=6366F1&sat=-100&blend-mode=multiply" className="rounded-2xl object-cover size-full" />
        <svg viewBox="0 0 926 676" aria-hidden="true" className="-bottom-24 left-24 absolute blur-[118px] w-[57.875rem] transform-gpu">
          <path d="m254.325 516.708-90.89 158.331L0 436.427l254.325 80.281 163.691-285.15c1.048 131.759 36.144 345.144 168.149 144.613C751.171 125.508 707.17-93.823 826.603 41.15c95.546 107.978 104.766 294.048 97.432 373.585L685.481 297.694l16.974 360.474-448.13-141.46Z" fill="url(#60c3c621-93e0-4a09-a0e6-4c228a0116d8)" fillOpacity=".4" />
          <defs>
            <linearGradient id="60c3c621-93e0-4a09-a0e6-4c228a0116d8" x1="926.392" x2="-109.635" y1=".176" y2="321.024" gradientUnits="userSpaceOnUse">
              <stop stopColor="#7fffff" />
              <stop offset={1} stopColor="#FF6500" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="relative mx-auto lg:px-8 py-24 sm:py-32 lg:py-40 max-w-7xl">
        <div className="md:ml-auto pr-6 lg:pr-0 pl-6 md:pl-16 lg:pl-24 xl:pl-32 md:w-2/3 lg:w-1/2">
          <h2 className="font-semibold text-base/7 text-secondary">
            Expert Support, Anytime You Need It
          </h2>
          <p className="mt-2 font-semibold text-4xl text-white sm:text-5xl tracking-tight">
            We’re here to help you scale smarter
          </p>
          <p className="mt-6 text-base/7 text-text">
            Maximize the power of marketing automation with Inteegrations. Our
            award-winning support team is ready to assist you with seamless
            API integration, workflow automation, and custom solutions
            tailored to your business needs. Whether you're just getting
            started or scaling up, we're here to ensure your success every
            step of the way.
          </p>
          <div className="mt-8">
            <a href="/signin" className="inline-flex bg-secondary hover:bg-secondary shadow-sm px-3.5 py-2.5 rounded-md font-semibold text-sm text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
              Get started
            </a>
          </div>
        </div>
      </div>
    </div>;
}
