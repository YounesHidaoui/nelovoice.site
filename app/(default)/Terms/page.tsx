export const metadata = {
    title: 'Terms of Service - Nelovoice',
    description: 'Terms of Service page description',
  }
  
  import Image from 'next/image'
  import Illustration from '@/public/images/page-illustration.svg'
  import Particles from '@/components/particles'
  
  export default function Terms() {
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
                <h1 className="h1 bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-4">Terms of Service</h1>
              </div>
  
              {/* Terms of Service */}
              <div className="max-w-3xl mx-auto">
                <p className="text-white mb-4">Welcome to Nelovoice. These Terms of Service ("Terms") govern your use of our website and AI phone agent builder service (collectively, the "Service"). By accessing or using the Service, you agree to be bound by these Terms.</p>
  
                <h3 className="text-2xl font-semibold mb-4 text-white">1. Use of Service</h3>
                <h4 className="text-xl font-semibold mb-2 text-white">1.1. Eligibility</h4>
                <p className="text-white mb-4">You must be at least 18 years old to use the Service.</p>
  
                <h4 className="text-xl font-semibold mb-2 text-white">1.2. Account Registration</h4>
                <p className="text-white mb-4">To use certain features of the Service, you may need to create an account. You are responsible for maintaining the confidentiality of your account information.</p>
  
                <h4 className="text-xl font-semibold mb-2 text-white">1.3. Acceptable Use</h4>
                <p className="text-white mb-4">You agree to use the Service only for lawful purposes and in accordance with these Terms. You may not use the Service in any way that violates applicable laws or regulations.</p>
  
                <h3 className="text-2xl font-semibold mb-4 text-white">2. Intellectual Property</h3>
                <h4 className="text-xl font-semibold mb-2 text-white">2.1. Ownership</h4>
                <p className="text-white mb-4">Nelovoice retains all rights, title, and interest in and to the Service, including all related intellectual property rights.</p>
  
                <h4 className="text-xl font-semibold mb-2 text-white">2.2. License</h4>
                <p className="text-white mb-4">We grant you a limited, non-exclusive, non-transferable license to use the Service for your internal business purposes.</p>
  
                <h3 className="text-2xl font-semibold mb-4 text-white">3. User Content</h3>
                <h4 className="text-xl font-semibold mb-2 text-white">3.1. Ownership</h4>
                <p className="text-white mb-4">You retain ownership of any content you submit to the Service ("User Content").</p>
  
                <h4 className="text-xl font-semibold mb-2 text-white">3.2. License</h4>
                <p className="text-white mb-4">By submitting User Content, you grant Nelovoice a worldwide, non-exclusive, royalty-free license to use, reproduce, and display such content in connection with providing and improving the Service.</p>
  
                <h3 className="text-2xl font-semibold mb-4 text-white">4. Disclaimer of Warranties</h3>
                <p className="text-white mb-4">THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT ANY WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED.</p>
  
                <h3 className="text-2xl font-semibold mb-4 text-white">5. Limitation of Liability</h3>
                <p className="text-white mb-4">TO THE FULLEST EXTENT PERMITTED BY LAW, Nelovoice SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES ARISING OUT OF OR RELATING TO YOUR USE OF THE SERVICE.</p>
  
                <h3 className="text-2xl font-semibold mb-4 text-white">6. Termination</h3>
                <p className="text-white mb-4">We may terminate or suspend your access to the Service immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach these Terms.</p>
  
                <h3 className="text-2xl font-semibold mb-4 text-white">7. Changes to Terms</h3>
                <p className="text-white mb-4">We reserve the right to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days' notice prior to any new terms taking effect.</p>
  
                <h3 className="text-2xl font-semibold mb-4 text-white">8. Governing Law</h3>
                <p className="text-white mb-4">These Terms shall be governed by and construed in accordance with the laws of Morocco, without regard to its conflict of law provisions.</p>
  
                <h3 className="text-2xl font-semibold mb-4 text-white">9. Contact Us</h3>
                <p className="text-white">If you have any questions about these Terms, please contact us at:</p>
                <p className="text-white">Email: contact@Nelovoice.com</p>
                <p className="text-white">Last updated: 21/07/2024</p>
              </div>
  
            </div>
          </div>
  
        </section>
      </>
    )
  }
  