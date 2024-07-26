import Image from 'next/image'
import Team from '@/public/images/oy.png'

export default function Story() {
  return (
    <section className="relative mt-32">

      {/* Blurred shape */}
      <div className="absolute top-0 -mt-32 left-1/2 -translate-x-1/2 ml-10 blur-2xl opacity-70 pointer-events-none -z-10" aria-hidden="true">
        <svg xmlns="http://www.w3.org/2000/svg" width="434" height="427">
          <defs>
            <linearGradient id="bs4-a" x1="19.609%" x2="50%" y1="14.544%" y2="100%">
              <stop offset="0%" stopColor="#A855F7"></stop>
              <stop offset="100%" stopColor="#6366F1" stopOpacity="0"></stop>
            </linearGradient>
          </defs>
          <path fill="url(#bs4-a)" fillRule="evenodd" d="m0 0 461 369-284 58z" transform="matrix(1 0 0 -1 0 427)"></path>
        </svg>
      </div>

      <div className="px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="pb-12 md:pb-20">

            {/* Section header */}
            <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
              <h2 className="h2 bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60">Our story so far</h2>
            </div>

            <div className="md:flex justify-between space-x-6 md:space-x-8 lg:space-x-14">
              <figure className="min-w-[240px]">
                <Image className="sticky top-8 mx-auto mb-12 md:mb-0 rounded-lg -rotate-[4deg]" src={Team} width={420} height={280} alt="Team" />
              </figure>
              <div className="max-w-[548px] mx-auto">
                <div className="text-slate-400 space-y-6">
                <p>
    It all started in April 2024 when Othmane and Younes teamed up on a project. We clicked right away, and before we knew it, we were showcasing our AI ideas at a major tech show in Morocco (GITEX). That’s when it hit us – businesses everywhere were struggling to keep up with customer service around the clock.
</p>
<p>
    We saw firsthand how challenging it was for business owners and managers to set up AI phone systems. Most solutions out there seemed to be designed for tech experts, not for the regular folks trying to run their companies. So, we rolled up our sleeves and got to work on something different – an AI phone agent that anyone could set up, no coding required.
</p>
<p>
    Every day since then, we've been listening to what businesses really need and tweaking our system to make it faster and easier to use. Whether you're running a small shop or a big company, whether you're in healthcare, online sales, or anything in between, we’re here to help you talk to your customers anytime, day or night. 
</p>
<p>
    That’s our promise at NELOVOICE – making AI work for you, not the other way around.
</p>

                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}