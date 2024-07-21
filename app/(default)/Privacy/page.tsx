  
  import Image from 'next/image'
  import Illustration from '@/public/images/page-illustration.svg'
  import Particles from '@/components/particles'

  
  export default function Privacy() {
    return (
      <>
        <section className="relative">
  
          {/* Radial gradient */}
          <div className="absolute flex items-center justify-center top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-[800px] aspect-square" aria-hidden="true">
            <div className="absolute inset-0 translate-z-0 bg-purple-500 rounded-full blur-[120px] opacity-30"></div>
            <div className="absolute w-64 h-64 translate-z-0 bg-purple-400 rounded-full blur-[80px] opacity-70"></div>
          </div>
  
          {/* Particles animation */}
          <Particles className="absolute inset-0 h-96 -z-10" quantity={15} />
  
          {/* Illustration */}
          <div className="md:block absolute left-1/2 -translate-x-1/2 -mt-16 blur-2xl opacity-90 pointer-events-none -z-10" aria-hidden="true">
            <Image src={Illustration} className="max-w-none" width={1440} height={427} alt="Page Illustration" />
          </div>
  
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="pt-32 md:pt-40">
  
              {/* Section header */}
              <div className="text-center pb-12 md:pb-20">
                {/* <div className="inline-flex font-medium bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-purple-200 pb-3">Leaders love Stellar</div> */}
                <h1 className="h1 bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-4">Privacy Policy</h1>
                {/* <div className="max-w-3xl mx-auto">
                  <p className="text-lg text-slate-400">Stellar powers thousands of high-impact product teams. From next-gen startups who reach for the stars to established greats who change the world.</p>
                </div> */}
              </div>
  
              {/* Privacy Policy */}
              <div className="max-w-3xl mx-auto">
                {/* <h2 className="text-3xl font-bold mb-6 text-white">Privacy Policy</h2> */}
                <p className="text-white mb-4">Nelovoice ("us", "we", or "our") operates the website https://nelovoice.com (the "Service").</p>
                <p className="text-white mb-4">This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service. By using the Service, you agree to the collection and use of information in accordance with this policy.</p>
  
                <h3 className="text-2xl font-semibold mb-4 text-white">Information Collection and Use</h3>
                <p className="text-white mb-4">We collect several types of information for various purposes to provide and improve our Service to you.</p>
  
                <h4 className="text-xl font-semibold mb-2 text-white">Types of Data Collected</h4>
  
                <h5 className="text-lg font-semibold mb-2 text-white">Personal Data</h5>
                <p className="text-white mb-4">While using our Service, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you ("Personal Data"). This may include, but is not limited to:</p>
                <ul className="list-disc list-inside text-white mb-4">
                  <li>Email address</li>
                  <li>First name and last name</li>
                  <li>Company name</li>
                  <li>Cookies and Usage Data</li>
                </ul>
  
                <h5 className="text-lg font-semibold mb-2 text-white">Usage Data</h5>
                <p className="text-white mb-4">We may also collect information on how the Service is accessed and used ("Usage Data"). This may include information such as your computer's Internet Protocol address, browser type, pages visited, time and date of your visit, and other diagnostic data.</p>
  
                <h3 className="text-2xl font-semibold mb-4 text-white">Use of Data</h3>
                <p className="text-white mb-4">Nelovoice uses the collected data for various purposes:</p>
                <ul className="list-disc list-inside text-white mb-4">
                  <li>To provide and maintain our Service</li>
                  <li>To notify you about changes to our Service</li>
                  <li>To provide customer support</li>
                  <li>To gather analysis or valuable information so that we can improve our Service</li>
                  <li>To monitor the usage of our Service</li>
                  <li>To detect, prevent and address technical issues</li>
                </ul>
  
                <h3 className="text-2xl font-semibold mb-4 text-white">Data Security</h3>
                <p className="text-white mb-4">The security of your data is important to us, but remember that no method of transmission over the Internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.</p>
  
                <h3 className="text-2xl font-semibold mb-4 text-white">Changes to This Privacy Policy</h3>
                <p className="text-white mb-4">We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.</p>
                <p className="text-white mb-4">You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.</p>
  
                <h3 className="text-2xl font-semibold mb-4 text-white">Contact Us</h3>
                <p className="text-white">If you have any questions about this Privacy Policy, please contact us at:</p>
                <p className="text-white">Email: contact@nelovoice.com</p>
              </div>
  
            </div>
          </div>
  
        </section>
      </>
    )
  }
  
 
  