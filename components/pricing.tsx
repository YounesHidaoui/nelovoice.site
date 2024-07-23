// 'use client'

// import { useState } from 'react';

// export default function Pricing() {
//   const [annual, setAnnual] = useState<boolean>(true);

//   return (
//     <div className="relative">
//       {/* Blurred shape */}
//       <div className="max-w-md hidden md:absolute md:bottom-0 md:-mb-20 md:left-2/3 md:-translate-x-1/2 md:blur-2xl md:opacity-70 md:pointer-events-none" aria-hidden="true">
//         <svg xmlns="http://www.w3.org/2000/svg" width="434" height="427">
//           <defs>
//             <linearGradient id="bs5-a" x1="19.609%" x2="50%" y1="14.544%" y2="100%">
//               <stop offset="0%" stopColor="#A855F7" />
//               <stop offset="100%" stopColor="#6366F1" stopOpacity="0" />
//             </linearGradient>
//           </defs>
//           <path fill="url(#bs5-a)" fillRule="evenodd" d="m661 736 461 369-284 58z" transform="matrix(1 0 0 -1 -661 1163)" />
//         </svg>
//       </div>
//       {/* Content */}
//       <div className="grid md:grid-cols-4 text-sm max-w-7xl mx-auto gap-6 py-6 md:py-12">
//         {/* Pricing toggle */}
//         <div className="px-6 md:col-span-1 flex flex-col justify-end">
//           <div className="pb-5 md:border-b border-slate-800">
//             {/* Toggle switch */}
//             <div className="text-center md:text-left">
//               <div className="flex items-center justify-center md:justify-start">
//                 <div className="text-slate-500 font-medium mr-2 md:max-w-lg md:hidden">Monthly</div>
//                 <div className="relative">
//                   <input type="checkbox" id="toggle" className="peer sr-only" checked={annual} onChange={() => setAnnual(!annual)} />
//                   <label htmlFor="toggle" className="relative flex items-center h-6 w-11 cursor-pointer rounded-full bg-slate-400 px-0.5 outline-slate-400 transition-colors before:h-5 before:w-5 before:rounded-full before:bg-white before:shadow-sm before:transition-transform before:duration-150 peer-checked:bg-purple-500 peer-checked:before:translate-x-full peer-focus-visible:outline peer-focus-visible:outline-offset-2 peer-focus-visible:outline-gray-400 peer-checked:peer-focus-visible:outline-purple-500">
//                     <span className="sr-only">Pay Yearly</span>
//                   </label>
//                 </div>
//                 <div className="text-slate-500 font-medium ml-2">Yearly <span className="text-teal-500">(-20%)</span></div>
//               </div>
//             </div>
//           </div>
//         </div>
//         {/* Essential plan */}
//         <div className="px-6 md:col-span-1 flex flex-col justify-end">
//           <div className="pb-4 mb-4 border border-slate-800 rounded-lg">
//             <div className="text-base font-medium bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-purple-200 pb-0.5">Essential</div>
//             <div className="mb-1">
//               <span className="text-lg font-medium text-slate-500">$</span><span className="text-3xl font-bold text-slate-50">{annual ? '39' : '29'}</span><span className="text-sm text-slate-600 font-medium">/mo</span>
//             </div>
//             <div className="text-slate-500 leading-relaxed">Local phone number setup<br />Basic call routing<br />Three Functions Setup<br />Email Support<br />CRM Integration<br />Up to 240 minutes per month</div>
//           </div>
//           <div className="border border-slate-800 rounded-lg">
//             <a className="btn-sm text-slate-900 bg-gradient-to-r from-white/80 via-white to-white/80 hover:bg-white w-full transition duration-150 ease-in-out group" href="#0">
//               Get Started <span className="text-purple-500 group-hover:translate-x-0.5 transition-transform duration-150 ml-1">-&gt;</span>
//             </a>
//           </div>
//         </div>
//         {/* Professional plan */}
//         <div className="px-6 md:col-span-1 flex flex-col justify-end">
//           <div className="pb-4 mb-4 border border-slate-800 rounded-lg">
//             <div className="text-base font-medium bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-purple-200 pb-0.5">Professional</div>
//             <div className="mb-1">
//               <span className="text-lg font-medium text-slate-500">$</span><span className="text-3xl font-bold text-slate-50">{annual ? '99' : '54'}</span><span className="text-sm text-slate-600 font-medium">/mo</span>
//             </div>
//             <div className="text-slate-500 leading-relaxed">Local phone number setup<br />Premium call routing<br />Unlimited Functions Setup<br />Email Support<br />CRM Integration<br />Advanced call routing by name<br />Up to 600 minutes per month<br />Invite Team members</div>
//           </div>
//           <div className="border border-slate-800 rounded-lg">
//             <a className="btn-sm text-white bg-purple-500 hover:bg-purple-600 w-full transition duration-150 ease-in-out group" href="#0">
//               Get Started <span className="text-purple-300 group-hover:translate-x-0.5 transition-transform duration-150 ml-1">-&gt;</span>
//             </a>
//           </div>
//         </div>
//         {/* Enterprise plan */}
//         <div className="px-6 md:col-span-1 flex flex-col justify-end">
//           <div className="pb-4 mb-4 border border-slate-800 rounded-lg">
//             <div className="text-base font-medium bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-purple-200 pb-0.5">Enterprise: Contact Sales</div>
//             <div className="mb-1">
//               <span className="text-sm text-slate-600 font-medium">Custom/mo</span>
//             </div>
//             <div className="text-slate-500 leading-relaxed">Everything in Professional Plan<br />Multilingual support (100+ languages)<br />On-premises deployment options<br />Private internet backbone for reduced latency<br />Up to 5000 minutes per month<br />Custom integrations and API access<br />Dedicated account manager<br />24/7 premium support</div>
//           </div>
//           <div className="border border-slate-800 rounded-lg">
//             <a className="btn-sm text-slate-900 bg-gradient-to-r from-white/80 via-white to-white/80 hover:bg-white w-full transition duration-150 ease-in-out group" href="#0">
//               Get Started <span className="text-purple-500 group-hover:translate-x-0.5 transition-transform duration-150 ml-1">-&gt;</span>
//             </a>
//           </div>
//         </div>
//         {/* Most Popular */}
//         <div className="hidden md:flex md:col-start-2 md:col-end-4 flex-col justify-center items-center text-sm px-6">
//           <div className="font-medium text-slate-50 mb-1">Most Popular</div>
//           <svg className="fill-slate-500" xmlns="http://www.w3.org/2000/svg" width="12" height="4">
//             <path d="M11.707 3.707a1 1 0 0 0 0-1.414l-2.999-2.999a1 1 0 0 0-1.414 0L6 1.586V1a1 1 0 1 0-2 0v1.586L1.707.294a1 1 0 1 0-1.414 1.414l2.999 2.999c.512.512 1.341.372 1.707 0L6 2.414V3a1 1 0 1 0 2 0V2.414l1.293 1.293a1 1 0 0 0 1.414 0z" />
//           </svg>
//         </div>
//       </div>
//     </div>
//   );
// }


// import { useState } from 'react'

// export default function Pricing() {
//   const [annual, setAnnual] = useState<boolean>(true)

//   return (
//     <div className="relative">
//       {/* Blurred shape */}
//       <div className="max-w-md hidden md:absolute md:bottom-0 md:-mb-20 md:left-2/3 md:-translate-x-1/2 md:blur-2xl md:opacity-70 md:pointer-events-none" aria-hidden="true">
//         <svg xmlns="http://www.w3.org/2000/svg" width="434" height="427">
//           <defs>
//             <linearGradient id="bs5-a" x1="19.609%" x2="50%" y1="14.544%" y2="100%">
//               <stop offset="0%" stopColor="#A855F7" />
//               <stop offset="100%" stopColor="#6366F1" stopOpacity="0" />
//             </linearGradient>
//           </defs>
//           <path fill="url(#bs5-a)" fillRule="evenodd" d="m661 736 461 369-284 58z" transform="matrix(1 0 0 -1 -661 1163)" />
//         </svg>
//       </div>
//       {/* Content */}
//       <div className="grid md:grid-cols-4 text-sm max-w-7xl mx-auto gap-6 py-6 md:py-0">
//         {/* Pricing toggle */}
//         <div className="px-6 md:col-span-1 flex flex-col justify-end">
//           <div className="pb-5 md:border-b border-slate-800">
//             {/* Toggle switch */}
//             <div className="text-center md:text-left">
//               <div className="flex items-center justify-center md:justify-start">
//                 <div className="text-slate-500 font-medium mr-2 md:max-w-lg md:hidden">Monthly</div>
//                 <div className="relative">
//                   <input type="checkbox" id="toggle" className="peer sr-only" checked={annual} onChange={() => setAnnual(!annual)} />
//                   <label htmlFor="toggle" className="relative flex items-center h-6 w-11 cursor-pointer rounded-full bg-slate-400 px-0.5 outline-slate-400 transition-colors before:h-5 before:w-5 before:rounded-full before:bg-white before:shadow-sm before:transition-transform before:duration-150 peer-checked:bg-purple-500 peer-checked:before:translate-x-full peer-focus-visible:outline peer-focus-visible:outline-offset-2 peer-focus-visible:outline-gray-400 peer-checked:peer-focus-visible:outline-purple-500">
//                     <span className="sr-only">Pay Yearly</span>
//                   </label>
//                 </div>
//                 <div className="text-slate-500 font-medium ml-2">Yearly <span className="text-teal-500">(-20%)</span></div>
//               </div>
//             </div>
//           </div>
//         </div>
//         {/* Essential plan */}
//         <div className="px-6 md:col-span-1 flex flex-col justify-end">
//           <div className="pb-4 mb-4 border-b border-slate-800">
//             <div className="text-base font-medium bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-purple-200 pb-0.5">Essential</div>
//             <div className="mb-1">
//               <span className="text-lg font-medium text-slate-500">$</span><span className="text-3xl font-bold text-slate-50">{annual ? '39' : '29'}</span><span className="text-sm text-slate-600 font-medium">/mo</span>
//             </div>
//             <div className="text-slate-500">Local phone number setup<br />Basic call routing<br />Three Functions Setup<br />Email Support<br />CRM Integration<br />Up to 240 minutes per month</div>
//           </div>
//           <div className="border-b border-slate-800">
//             <a className="btn-sm text-slate-900 bg-gradient-to-r from-white/80 via-white to-white/80 hover:bg-white w-full transition duration-150 ease-in-out group" href="#0">
//               Get Started <span className="text-purple-500 group-hover:translate-x-0.5 transition-transform duration-150 ml-1">-&gt;</span>
//             </a>
//           </div>
//         </div>
//         {/* Professional plan */}
//         <div className="px-6 md:col-span-1 flex flex-col justify-end">
//           <div className="pb-4 mb-4 border-b border-slate-800">
//             <div className="text-base font-medium bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-purple-200 pb-0.5">Professional</div>
//             <div className="mb-1">
//               <span className="text-lg font-medium text-slate-500">$</span><span className="text-3xl font-bold text-slate-50">{annual ? '99' : '54'}</span><span className="text-sm text-slate-600 font-medium">/mo</span>
//             </div>
//             <div className="text-slate-500">Local phone number setup<br />Premium call routing<br />Unlimited Functions Setup<br />Email Support<br />CRM Integration<br />Advanced call routing by name<br />Up to 600 minutes per month<br />Invite Team members</div>
//           </div>
//           <div className="border-b border-slate-800">
//             <a className="btn-sm text-white bg-purple-500 hover:bg-purple-600 w-full transition duration-150 ease-in-out group" href="#0">
//               Get Started <span className="text-purple-300 group-hover:translate-x-0.5 transition-transform duration-150 ml-1">-&gt;</span>
//             </a>
//           </div>
//         </div>
//         {/* Enterprise plan */}
//         <div className="px-6 md:col-span-1 flex flex-col justify-end">
//           <div className="pb-4 mb-4 border-b border-slate-800">
//             <div className="text-base font-medium bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-purple-200 pb-0.5">Enterprise: Contact Sales</div>
//             <div className="mb-1">
//               <span className="text-sm text-slate-600 font-medium">Custom/mo</span>
//             </div>
//             <div className="text-slate-500">Everything in Professional Plan<br />Multilingual support (100+ languages)<br />On-premises deployment options<br />Private internet backbone for reduced latency<br />Up to 5000 minutes per month<br />Custom integrations and API access<br />Dedicated account manager<br />24/7 premium support</div>
//           </div>
//           <div className="border-b border-slate-800">
//             <a className="btn-sm text-slate-900 bg-gradient-to-r from-white/80 via-white to-white/80 hover:bg-white w-full transition duration-150 ease-in-out group" href="#0">
//               Get Started <span className="text-purple-500 group-hover:translate-x-0.5 transition-transform duration-150 ml-1">-&gt;</span>
//             </a>
//           </div>
//         </div>
//         {/* Most Popular */}
//         <div className="hidden md:flex md:col-start-2 md:col-end-4 flex-col justify-center items-center text-sm px-6">
//           <div className="font-medium text-slate-50 mb-1">Most Popular</div>
//           <svg className="fill-slate-500" xmlns="http://www.w3.org/2000/svg" width="12" height="4">
//             <path d="M11.707 3.707a1 1 0 0 0 0-1.414l-2.999-2.999a1 1 0 0 0-1.414 0L6 1.586V1a1 1 0 1 0-2 0v1.586L1.707.294a1 1 0 1 0-1.414 1.414l2.999 2.999c.512.512 1.341.372 1.707 0L6 2.414V3a1 1 0 1 0 2 0V2.414l1.293 1.293a1 1 0 0 0 1.414 0z" />
//           </svg>
//         </div>
//       </div>
//     </div>
//   )
// }


// 'use client'

// import { useState } from 'react'

// export default function Pricing() {
//   const [annual, setAnnual] = useState<boolean>(true)

//   return (
//     <div className="relative">
//       {/* Blurred shape */}
//       <div className="max-md:hidden absolute bottom-0 -mb-20 left-2/3 -translate-x-1/2 blur-2xl opacity-70 pointer-events-none" aria-hidden="true">
//         <svg xmlns="http://www.w3.org/2000/svg" width="434" height="427">
//           <defs>
//             <linearGradient id="bs5-a" x1="19.609%" x2="50%" y1="14.544%" y2="100%">
//               <stop offset="0%" stopColor="#A855F7" />
//               <stop offset="100%" stopColor="#6366F1" stopOpacity="0" />
//             </linearGradient>
//           </defs>
//           <path fill="url(#bs5-a)" fillRule="evenodd" d="m661 736 461 369-284 58z" transform="matrix(1 0 0 -1 -661 1163)" />
//         </svg>
//       </div>
//       {/* Content */}
//       <div className="grid md:grid-cols-4 xl:-mx-6 text-sm [&>div:nth-of-type(-n+4)]:py-6 [&>div:nth-last-of-type(-n+4)]:pb-6 max-md:[&>div:nth-last-of-type(-n+4)]:mb-8 max-md:[&>div:nth-of-type(-n+4):nth-of-type(n+1)]:rounded-t-3xl max-md:[&>div:nth-last-of-type(-n+4)]:rounded-b-3xl md:[&>div:nth-of-type(2)]:rounded-tl-3xl md:[&>div:nth-of-type(4)]:rounded-tr-3xl md:[&>div:nth-last-of-type(3)]:rounded-bl-3xl md:[&>div:nth-last-of-type(1)]:rounded-br-3xl [&>div]:bg-slate-700/20 [&>div:nth-of-type(4n+1)]:bg-transparent max-md:[&>div:nth-of-type(4n+5)]:hidden max-md:[&>div:nth-of-type(4n+2)]:order-1 max-md:[&>div:nth-of-type(4n+3)]:order-2 max-md:[&>div:nth-of-type(4n+4)]:order-3 max-md:md:[&>div:nth-of-type(n)]:mb-0 [&>div:nth-of-type(4n+3)]:relative before:[&>div:nth-of-type(4n+3)]:absolute before:[&>div:nth-of-type(4n+3)]:-inset-px before:[&>div:nth-of-type(4n+3)]:rounded-[inherit] before:[&>div:nth-of-type(4n+3)]:border-x-2 before:[&>div:nth-of-type(3)]:border-t-2 before:[&>div:nth-last-of-type(2)]:border-b-2 before:[&>div:nth-of-type(4n+3)]:border-purple-500 before:[&>div:nth-of-type(4n+3)]:-z-10 before:[&>div:nth-of-type(4n+3)]:pointer-events-none">
//         {/* Pricing toggle */}
//         <div className="px-6 flex flex-col justify-end">
//           <div className="pb-5 md:border-b border-slate-800">
//             {/* Toggle switch */}
//             <div className="max-md:text-center">
//               <div className="inline-flex items-center whitespace-nowrap">
//                 <div className="text-sm text-slate-500 font-medium mr-2 md:max-lg:hidden">Monthly</div>
//                 <div className="relative">
//                   <input type="checkbox" id="toggle" className="peer sr-only" checked={annual} onChange={() => setAnnual(!annual)} />
//                   <label htmlFor="toggle" className="relative flex h-6 w-11 cursor-pointer items-center rounded-full bg-slate-400 px-0.5 outline-slate-400 transition-colors before:h-5 before:w-5 before:rounded-full before:bg-white before:shadow-sm before:transition-transform before:duration-150 peer-checked:bg-purple-500 peer-checked:before:translate-x-full peer-focus-visible:outline peer-focus-visible:outline-offset-2 peer-focus-visible:outline-gray-400 peer-checked:peer-focus-visible:outline-purple-500">
//                     <span className="sr-only">Pay Yearly</span>
//                   </label>
//                 </div>
//                 <div className="text-sm text-slate-500 font-medium ml-2">Yearly <span className="text-teal-500">(-20%)</span></div>
//               </div>
//             </div>
//           </div>
//         </div>
//         {/* Essential plan */}
//         <div className="px-6 flex flex-col justify-end">
//           <div className="grow pb-4 mb-4 border-b border-slate-800">
//             <div className="text-base font-medium bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-purple-200 pb-0.5">Essential</div>
//             <div className="mb-1">
//               <span className="text-lg font-medium text-slate-500">$</span><span className="text-3xl font-bold text-slate-50">{annual ? '39' : '29'}</span><span className="text-sm text-slate-600 font-medium">/mo</span>
//             </div>
//             <div className="text-slate-500">Local phone number setup<br />Basic call routing<br />Three Functions Setup<br />Email Support<br />CRM Integration<br />Up to 240 minutes per month</div>
//           </div>
//           <div className="pb-4 border-b border-slate-800">
//             <a className="btn-sm text-slate-900 bg-gradient-to-r from-white/80 via-white to-white/80 hover:bg-white w-full transition duration-150 ease-in-out group" href="#0">
//               Get Started <span className="tracking-normal text-purple-500 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">-&gt;</span>
//             </a>
//           </div>
//         </div>
//         {/* Professional plan */}
//         <div className="px-6 flex flex-col justify-end">
//           <div className="grow pb-4 mb-4 border-b border-slate-800">
//             <div className="text-base font-medium bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-purple-200 pb-0.5">Professional</div>
//             <div className="mb-1">
//               <span className="text-lg font-medium text-slate-500">$</span><span className="text-3xl font-bold text-slate-50">{annual ? '99' : '54'}</span><span className="text-sm text-slate-600 font-medium">/mo</span>
//             </div>
//             <div className="text-slate-500">Local phone number setup<br />Premium call routing<br />Unlimited Functions Setup<br />Email Support<br />CRM Integration<br />Advanced call routing by name<br />Up to 600 minutes per month<br />Invite Team members</div>
//           </div>
//           <div className="pb-4 border-b border-slate-800">
//             <a className="btn-sm text-white bg-purple-500 hover:bg-purple-600 w-full transition duration-150 ease-in-out group" href="#0">
//               Get Started <span className="tracking-normal text-purple-300 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">-&gt;</span>
//             </a>
//           </div>
//         </div>
//         {/* Enterprise plan */}
//         <div className="px-6 flex flex-col justify-end">
//           <div className="grow pb-4 mb-4 border-b border-slate-800">
//             <div className="text-base font-medium bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-purple-200 pb-0.5">Entreprise :contact salee</div>
//             <div className="mb-1">
//             <span className="text-sm text-slate-600 font-medium">custom/mo</span>
//             </div>
//             <div className="text-slate-500">Everything in Professional Plan<br />Multilingual support (100+ languages)<br />On-premises deployment options<br />Private internet backbone for reduced latency<br />Up to 5000 minutes per month<br />Custom integrations and API access<br />Dedicated account manager<br />24/7 premium support</div>
//           </div>
//           <div className="pb-4 border-b border-slate-800">
//             <a className="btn-sm text-slate-900 bg-gradient-to-r from-white/80 via-white to-white/80 hover:bg-white w-full transition duration-150 ease-in-out group" href="#0">
//               Get Started <span className="tracking-normal text-purple-500 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">-&gt;</span>
//             </a>
//           </div>
//         </div>
//         {/* Most Popular */}
//         <div className="hidden md:flex col-start-2 col-end-4 flex-col justify-center items-center text-sm px-6">
//           <div className="font-medium text-slate-50 mb-1">Most Popular</div>
//           <svg className="fill-slate-500" xmlns="http://www.w3.org/2000/svg" width="12" height="4">
//             <path d="M11.707 3.707a1 1 0 0 0 0-1.414l-2.999-2.999a1 1 0 0 0-1.414 0L6 1.586V1a1 1 0 1 0-2 0v1.586L1.707.294a1 1 0 1 0-1.414 1.414l2.999 2.999c.512.512 1.341.372 1.707 0L6 2.414V3a1 1 0 1 0 2 0V2.414l1.293 1.293a1 1 0 0 0 1.414 0z" />
//           </svg>
//         </div>
//       </div>
//     </div>
//   )
// }


'use client'

import { useState } from 'react'

export default function Pricing() {
  const [annual, setAnnual] = useState<boolean>(true)

  return (
    <div className="relative">
      {/* Blurred shape */}
      <div className="max-md:hidden absolute bottom-0 -mb-20 left-2/3 -translate-x-1/2 blur-2xl opacity-70 pointer-events-none" aria-hidden="true">
        <svg xmlns="http://www.w3.org/2000/svg" width="434" height="427">
          <defs>
            <linearGradient id="bs5-a" x1="19.609%" x2="50%" y1="14.544%" y2="100%">
              <stop offset="0%" stopColor="#A855F7" />
              <stop offset="100%" stopColor="#6366F1" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path fill="url(#bs5-a)" fillRule="evenodd" d="m661 736 461 369-284 58z" transform="matrix(1 0 0 -1 -661 1163)" />
        </svg>
      </div>
      {/* Content */}
      <div className="grid md:grid-cols-4 xl:-mx-6 text-sm [&>div:nth-of-type(-n+4)]:py-6 [&>div:nth-last-of-type(-n+4)]:pb-6 max-md:[&>div:nth-last-of-type(-n+4)]:mb-8 max-md:[&>div:nth-of-type(-n+4):nth-of-type(n+1)]:rounded-t-3xl max-md:[&>div:nth-last-of-type(-n+4)]:rounded-b-3xl md:[&>div:nth-of-type(2)]:rounded-tl-3xl md:[&>div:nth-of-type(4)]:rounded-tr-3xl md:[&>div:nth-last-of-type(3)]:rounded-bl-3xl md:[&>div:nth-last-of-type(1)]:rounded-br-3xl [&>div]:bg-slate-700/20 [&>div:nth-of-type(4n+1)]:bg-transparent max-md:[&>div:nth-of-type(4n+5)]:hidden max-md:[&>div:nth-of-type(4n+2)]:order-1 max-md:[&>div:nth-of-type(4n+3)]:order-2 max-md:[&>div:nth-of-type(4n+4)]:order-3 max-md:md:[&>div:nth-of-type(n)]:mb-0 [&>div:nth-of-type(4n+3)]:relative before:[&>div:nth-of-type(4n+3)]:absolute before:[&>div:nth-of-type(4n+3)]:-inset-px before:[&>div:nth-of-type(4n+3)]:rounded-[inherit] before:[&>div:nth-of-type(4n+3)]:border-x-2 before:[&>div:nth-of-type(3)]:border-t-2 before:[&>div:nth-last-of-type(2)]:border-b-2 before:[&>div:nth-of-type(4n+3)]:border-purple-500 before:[&>div:nth-of-type(4n+3)]:-z-10 before:[&>div:nth-of-type(4n+3)]:pointer-events-none">
        {/* Pricing toggle */}
        <div className="px-6 flex flex-col justify-end">
          <div className="pb-5 md:border-b border-slate-800">
            {/* Toggle switch */}
            <div className="max-md:text-center">
              <div className="inline-flex items-center whitespace-nowrap">
                <div className="text-sm text-slate-500 font-medium mr-2 md:max-lg:hidden">Monthly</div>
                <div className="relative">
                  <input type="checkbox" id="toggle" className="peer sr-only" checked={annual} onChange={() => setAnnual(!annual)} />
                  <label htmlFor="toggle" className="relative flex h-6 w-11 cursor-pointer items-center rounded-full bg-slate-400 px-0.5 outline-slate-400 transition-colors before:h-5 before:w-5 before:rounded-full before:bg-white before:shadow-sm before:transition-transform before:duration-150 peer-checked:bg-purple-500 peer-checked:before:translate-x-full peer-focus-visible:outline peer-focus-visible:outline-offset-2 peer-focus-visible:outline-gray-400 peer-checked:peer-focus-visible:outline-purple-500">
                    <span className="sr-only">Pay Yearly</span>
                  </label>
                </div>
                <div className="text-sm text-slate-500 font-medium ml-2">Yearly <span className="text-teal-500">(-20%)</span></div>
              </div>
            </div>
          </div>
        </div>
        {/* Pro price */}
        <div className="px-6 flex flex-col justify-end">
          <div className="grow pb-4 mb-4 border-b border-slate-800">
            <div className="text-base font-medium bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-purple-200 pb-0.5">Essential</div>
            <div className="mb-1">
              <span className="text-lg font-medium text-slate-500">$</span><span className="text-3xl font-bold text-slate-50">{annual ? '39' : '49'}</span><span className="text-sm text-slate-600 font-medium">/mo</span>
            </div>
            <div className="text-slate-500">Everything at your fingertips.</div>
          </div>
          <div className="pb-4 border-b border-slate-800">
            <a className="btn-sm text-slate-900 bg-gradient-to-r from-white/80 via-white to-white/80 hover:bg-white w-full transition duration-150 ease-in-out group" href="#0">
              Get Started <span className="tracking-normal text-purple-500 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">-&gt;</span>
            </a>
          </div>
        </div>
        {/* Team price */}
        <div className="px-6 flex flex-col justify-end">
          <div className="grow pb-4 mb-4 border-b border-slate-800">
            <div className="text-base font-medium bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-purple-200 pb-0.5">Professional</div>
            <div className="mb-1">
              <span className="text-lg font-medium text-slate-500">$</span><span className="text-3xl font-bold text-slate-50">{annual ? '99' : '110'}</span><span className="text-sm text-slate-600 font-medium">/mo</span>
            </div>
            <div className="text-slate-500">Everything at your fingertips.</div>
          </div>
          <div className="pb-4 border-b border-slate-800">
            <a className="btn-sm text-white bg-purple-500 hover:bg-purple-600 w-full transition duration-150 ease-in-out group" href="#0">
              Get Started <span className="tracking-normal text-purple-300 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">-&gt;</span>
            </a>
          </div>
        </div>
        {/* Enterprise price */}
        <div className="px-6 flex flex-col justify-end">
          <div className="grow pb-4 mb-4 border-b border-slate-800">
            <div className="text-base font-medium bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-purple-200 pb-0.5">Entreprise :contact sales </div>
            <div className="mb-1">
              <span className="text-lg font-medium text-slate-500">$</span><span className="text-3xl font-bold text-slate-50">{annual ? '150' : '160'}</span><span className="text-sm text-slate-600 font-medium">/mo</span>
            </div>
            <div className="text-slate-500">Everything at your fingertips.</div>
          </div>
          <div className="pb-4 border-b border-slate-800">
            <a className="btn-sm text-slate-900 bg-gradient-to-r from-white/80 via-white to-white/80 hover:bg-white w-full transition duration-150 ease-in-out group" href="#0">
              Get Started <span className="tracking-normal text-purple-500 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">-&gt;</span>
            </a>
          </div>
        </div>
        {/* # Usage */}
        <div className="px-6 flex flex-col justify-end">
          <div className="py-2 text-slate-50 font-medium mt-4"></div>
        </div>
        <div className="px-6 flex flex-col justify-end">
          <div className="py-2 text-slate-50 font-medium mt-4 md:hidden">Usage</div>
        </div>
        <div className="px-6 flex flex-col justify-end">
          <div className="py-2 text-slate-50 font-medium mt-4 md:hidden">Usage</div>
        </div>
        <div className="px-6 flex flex-col justify-end">
          <div className="py-2 text-slate-50 font-medium mt-4 md:hidden">Usage</div>
        </div>
        {/* Social Connections */}
        <div className="px-6 flex flex-col justify-end">
          <div className="py-2 text-slate-400 border-b border-slate-800">phone number</div>
        </div>
        <div className="px-6 flex flex-col justify-end">
          <div className="flex items-center h-full border-b border-slate-800 py-2 text-slate-400">
            <svg className="shrink-0 fill-purple-500 mr-3" xmlns="http://www.w3.org/2000/svg" width="12" height="9">
              <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z" />
            </svg>
            <span>Local phone number setup<span className="md:hidden">setup</span></span>
          </div>
        </div>
        <div className="px-6 flex flex-col justify-end">
          <div className="flex items-center h-full border-b border-slate-800 py-2 text-slate-400">
            <svg className="shrink-0 fill-purple-500 mr-3" xmlns="http://www.w3.org/2000/svg" width="12" height="9">
              <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z" />
            </svg>
            <span>Local phone number setup<span className="md:hidden">setup</span></span>
          </div>
        </div>
        <div className="px-6 flex flex-col justify-end">
          <div className="flex items-center h-full border-b border-slate-800 py-2 text-slate-400">
            <svg className="shrink-0 fill-purple-500 mr-3" xmlns="http://www.w3.org/2000/svg" width="12" height="9">
              <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z" />
            </svg>
            <span>Everything in Professional Plan<span className="md:hidden">setup</span></span>
          </div>
        </div>
        {/* Custom Domains */}
        <div className="px-6 flex flex-col justify-end">
          <div className="py-2 text-slate-400 border-b border-slate-800">call routing</div>
        </div>
        <div className="px-6 flex flex-col justify-end">
          <div className="flex items-center h-full border-b border-slate-800 py-2 text-slate-400">
            <svg className="shrink-0 fill-purple-500 mr-3" xmlns="http://www.w3.org/2000/svg" width="12" height="9">
              <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z" />
            </svg>
            <span>Basic call routing<span className="md:hidden">call routing</span></span>
          </div>
        </div>
        <div className="px-6 flex flex-col justify-end">
          <div className="flex items-center h-full border-b border-slate-800 py-2 text-slate-400">
            <svg className="shrink-0 fill-purple-500 mr-3" xmlns="http://www.w3.org/2000/svg" width="12" height="9">
              <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z" />
            </svg>
            <span>Premium call routing<span className="md:hidden">call routing</span></span>
          </div>
        </div>
        <div className="px-6 flex flex-col justify-end">
          <div className="flex items-center h-full border-b border-slate-800 py-2 text-slate-400">
            <svg className="shrink-0 fill-purple-500 mr-3" xmlns="http://www.w3.org/2000/svg" width="12" height="9">
              <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z" />
            </svg>
            <span>Multilingual support +100 languages<span className="md:hidden">call routing</span></span>
          </div>
        </div>
        {/* User Role Management */}
        <div className="px-6 flex flex-col justify-end">
          <div className="py-2 text-slate-400 border-b border-slate-800">Integration</div>
        </div>
        <div className="px-6 flex flex-col justify-end">
          <div className="flex items-center h-full border-b border-slate-800 py-2 text-slate-400">
            <svg className="shrink-0 fill-purple-500 mr-3" xmlns="http://www.w3.org/2000/svg" width="12" height="9">
              <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z" />
            </svg>
            <span>CRM Integration<span className="md:hidden">Integration</span></span>
          </div>
        </div>
        <div className="px-6 flex flex-col justify-end">
          <div className="flex items-center h-full border-b border-slate-800 py-2 text-slate-400">
            <svg className="shrink-0 fill-purple-500 mr-3" xmlns="http://www.w3.org/2000/svg" width="12" height="9">
              <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z" />
            </svg>
            <span>CRM Integration<span className="md:hidden">Integration</span></span>
          </div>
        </div>
        <div className="px-6 flex flex-col justify-end">
          <div className="flex items-center h-full border-b border-slate-800 py-2 text-slate-400">
            <svg className="shrink-0 fill-purple-500 mr-3" xmlns="http://www.w3.org/2000/svg" width="12" height="9">
              <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z" />
            </svg>
            <span>Custom integrations and API access<span className="md:hidden">Integration</span></span>
          </div>
        </div>
        {/* External Databases */}
        <div className="px-6 flex flex-col justify-end">
          <div className="py-2 text-slate-400 border-b border-slate-800">Support</div>
        </div>
        <div className="px-6 flex flex-col justify-end">
          <div className="flex items-center h-full border-b border-slate-800 py-2 text-slate-400">
            <svg className="shrink-0 fill-purple-500 mr-3" xmlns="http://www.w3.org/2000/svg" width="12" height="9">
              <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z" />
            </svg>
            <span>Email Support<span className="md:hidden">Email Support</span></span>
          </div>
        </div>
        <div className="px-6 flex flex-col justify-end">
          <div className="flex items-center h-full border-b border-slate-800 py-2 text-slate-400">
            <svg className="shrink-0 fill-purple-500 mr-3" xmlns="http://www.w3.org/2000/svg" width="12" height="9">
              <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z" />
            </svg>
            <span>Email Support</span>
          </div>
        </div>
        <div className="px-6 flex flex-col justify-end">
          <div className="flex items-center h-full border-b border-slate-800 py-2 text-slate-400">
            <svg className="shrink-0 fill-purple-500 mr-3" xmlns="http://www.w3.org/2000/svg" width="12" height="9">
              <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z" />
            </svg>
            <span>24/7 premium support<span className="md:hidden">Email Support</span></span>
          </div>
        </div>
        <div className="px-6 flex flex-col justify-end">
          <div className="py-2 text-slate-400 border-b border-slate-800">minutes</div>
        </div>
        <div className="px-6 flex flex-col justify-end">
          <div className="flex items-center h-full border-b border-slate-800 py-2 text-slate-400">
            <svg className="shrink-0 fill-purple-500 mr-3" xmlns="http://www.w3.org/2000/svg" width="12" height="9">
              <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z" />
            </svg>
            <span>Up to 240 minutes per month<span className="md:hidden">minutes</span></span>
          </div>
        </div>
        <div className="px-6 flex flex-col justify-end">
          <div className="flex items-center h-full border-b border-slate-800 py-2 text-slate-400">
            <svg className="shrink-0 fill-purple-500 mr-3" xmlns="http://www.w3.org/2000/svg" width="12" height="9">
              <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z" />
            </svg>
            <span>Up to 600 minutes per month<span className="md:hidden">minutes</span></span>
          </div>
        </div>
        <div className="px-6 flex flex-col justify-end">
          <div className="flex items-center h-full border-b border-slate-800 py-2 text-slate-400">
            <svg className="shrink-0 fill-purple-500 mr-3" xmlns="http://www.w3.org/2000/svg" width="12" height="9">
              <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z" />
            </svg>
            <span>Up to 5000 minutes per month<span className="md:hidden">minutes</span></span>
          </div>
        </div>
        
        <div className="px-6 flex flex-col justify-end">
          <div className="py-2 text-slate-400 border-b border-slate-800">Functions Setup</div>
        </div>
        <div className="px-6 flex flex-col justify-end">
          <div className="flex items-center h-full border-b border-slate-800 py-2 text-slate-400">
            <svg className="shrink-0 fill-purple-500 mr-3" xmlns="http://www.w3.org/2000/svg" width="12" height="9">
              <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z" />
            </svg>
            <span>Three Functions Setup<span className="md:hidden">Functions Setup</span></span>
          </div>
        </div>
        <div className="px-6 flex flex-col justify-end">
          <div className="flex items-center h-full border-b border-slate-800 py-2 text-slate-400">
            <svg className="shrink-0 fill-purple-500 mr-3" xmlns="http://www.w3.org/2000/svg" width="12" height="9">
              <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z" />
            </svg>
            <span>Unlimited Functions Setup<span className="md:hidden">Functions Setup</span></span>
          </div>
        </div>
        <div className="px-6 flex flex-col justify-end">
          <div className="flex items-center h-full border-b border-slate-800 py-2 text-slate-400">
            <svg className="shrink-0 fill-purple-500 mr-3" xmlns="http://www.w3.org/2000/svg" width="12" height="9">
              <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z" />
            </svg>
            <span>Unlimited Functions Setup<span className="md:hidden">Functions Setup</span></span>
          </div>
        </div>
        <div className="px-6 flex flex-col justify-end">
          <div className="py-2 text-slate-400 border-b border-slate-800">account</div>
        </div>
        <div className="px-6 flex flex-col justify-end">
          <div className="flex items-center h-full border-b border-slate-800 py-2 text-slate-400">
            <svg className="shrink-0 fill-purple-500 mr-3" xmlns="http://www.w3.org/2000/svg" width="12" height="9">
              <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z" />
            </svg>
            <span>------<span className="md:hidden">account</span></span>
          </div>
        </div>
        <div className="px-6 flex flex-col justify-end">
          <div className="flex items-center h-full border-b border-slate-800 py-2 text-slate-400">
            <svg className="shrink-0 fill-purple-500 mr-3" xmlns="http://www.w3.org/2000/svg" width="12" height="9">
              <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z" />
            </svg>
            <span>Invite Team members<span className="md:hidden">account</span></span>
          </div>
        </div>
        <div className="px-6 flex flex-col justify-end">
          <div className="flex items-center h-full border-b border-slate-800 py-2 text-slate-400">
            <svg className="shrink-0 fill-purple-500 mr-3" xmlns="http://www.w3.org/2000/svg" width="12" height="9">
              <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z" />
            </svg>
            <span>Dedicated account manager<span className="md:hidden">account</span></span>
          </div>
        </div>
        <div className="px-6 flex flex-col justify-end">
          <div className="py-2 text-slate-400 border-b border-slate-800">Internet</div>
        </div>
        <div className="px-6 flex flex-col justify-end">
          <div className="flex items-center h-full border-b border-slate-800 py-2 text-slate-400">
            <svg className="shrink-0 fill-purple-500 mr-3" xmlns="http://www.w3.org/2000/svg" width="12" height="9">
              <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z" />
            </svg>
            <span>------<span className="md:hidden">Internet</span></span>
          </div>
        </div>
        <div className="px-6 flex flex-col justify-end">
          <div className="flex items-center h-full border-b border-slate-800 py-2 text-slate-400">
            <svg className="shrink-0 fill-purple-500 mr-3" xmlns="http://www.w3.org/2000/svg" width="12" height="9">
              <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z" />
            </svg>
            <span>-------<span className="md:hidden">Internet</span></span>
          </div>
        </div>
        <div className="px-6 flex flex-col justify-end">
          <div className="flex items-center h-full border-b border-slate-800 py-2 text-slate-400">
            <svg className="shrink-0 fill-purple-500 mr-3" xmlns="http://www.w3.org/2000/svg" width="12" height="9">
              <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z" />
            </svg>
            <span>Private internet backbone for reduced latency<span className="md:hidden">Internet</span></span>
          </div>
        </div>
        {/* # Features */}
        {/* <div className="px-6 flex flex-col justify-end">
          <div className="py-2 text-slate-50 font-medium mt-4">Features</div>
        </div>
        <div className="px-6 flex flex-col justify-end">
          <div className="py-2 text-slate-50 font-medium mt-4 md:hidden">Features</div>
        </div>
        <div className="px-6 flex flex-col justify-end">
          <div className="py-2 text-slate-50 font-medium mt-4 md:hidden">Features</div>
        </div>
        <div className="px-6 flex flex-col justify-end">
          <div className="py-2 text-slate-50 font-medium mt-4 md:hidden">Features</div>
        </div>
        {/* Custom Connection */}
        {/* <div className="px-6 flex flex-col justify-end">
          <div className="py-2 text-slate-400 border-b border-slate-800">Custom Connection</div>
        </div> */}
        {/* <div className="px-6 flex flex-col justify-end">
          <div className="flex items-center h-full border-b border-slate-800 py-2 text-slate-400">
            <svg className="shrink-0 fill-purple-500 mr-3" xmlns="http://www.w3.org/2000/svg" width="12" height="9">
              <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z" />
            </svg>
            <span><span className="md:hidden">Custom Connection</span></span>
          </div>
        </div>
        <div className="px-6 flex flex-col justify-end">
          <div className="flex items-center h-full border-b border-slate-800 py-2 text-slate-400">
            <svg className="shrink-0 fill-purple-500 mr-3" xmlns="http://www.w3.org/2000/svg" width="12" height="9">
              <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z" />
            </svg>
            <span><span className="md:hidden">Custom Connection</span></span>
          </div>
        </div>
        <div className="px-6 flex flex-col justify-end">
          <div className="flex items-center h-full border-b border-slate-800 py-2 text-slate-400">
            <svg className="shrink-0 fill-purple-500 mr-3" xmlns="http://www.w3.org/2000/svg" width="12" height="9">
              <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z" />
            </svg>
            <span><span className="md:hidden">Custom Connection</span></span>
          </div>
        </div> */}
        {/* Advanced Deployment Options */}
        {/* <div className="px-6 flex flex-col justify-end">
          <div className="py-2 text-slate-400 border-b border-slate-800">Advanced Deployment Options</div>
        </div> */}
        {/* <div className="px-6 flex flex-col justify-end">
          <div className="flex items-center h-full border-b border-slate-800 py-2 text-slate-400">
            <svg className="shrink-0 fill-purple-500 mr-3" xmlns="http://www.w3.org/2000/svg" width="12" height="9">
              <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z" />
            </svg>
            <span><span className="md:hidden">Advanced Deployment Options</span></span>
          </div>
        </div>
        <div className="px-6 flex flex-col justify-end">
          <div className="flex items-center h-full border-b border-slate-800 py-2 text-slate-400">
            <svg className="shrink-0 fill-purple-500 mr-3" xmlns="http://www.w3.org/2000/svg" width="12" height="9">
              <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z" />
            </svg>
            <span><span className="md:hidden">Advanced Deployment Options</span></span>
          </div>
        </div>
        <div className="px-6 flex flex-col justify-end">
          <div className="flex items-center h-full border-b border-slate-800 py-2 text-slate-400">
            <svg className="shrink-0 fill-purple-500 mr-3" xmlns="http://www.w3.org/2000/svg" width="12" height="9">
              <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z" />
            </svg>
            <span><span className="md:hidden">Advanced Deployment Options</span></span>
          </div>
        </div> */}
        {/* Extra Add-ons */}
        {/* <div className="px-6 flex flex-col justify-end">
          <div className="py-2 text-slate-400 border-b border-slate-800">Extra Add-ons</div>
        </div> */}
        {/* <div className="px-6 flex flex-col justify-end">
          <div className="flex items-center h-full border-b border-slate-800 py-2 text-slate-400">
            <svg className="shrink-0 fill-purple-500 mr-3" xmlns="http://www.w3.org/2000/svg" width="12" height="9">
              <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z" />
            </svg>
            <span><span className="md:hidden">Extra Add-ons</span></span>
          </div>
        </div>
        <div className="px-6 flex flex-col justify-end">
          <div className="flex items-center h-full border-b border-slate-800 py-2 text-slate-400">
            <svg className="shrink-0 fill-purple-500 mr-3" xmlns="http://www.w3.org/2000/svg" width="12" height="9">
              <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z" />
            </svg>
            <span><span className="md:hidden">Extra Add-ons</span></span>
          </div>
        </div>
        <div className="px-6 flex flex-col justify-end">
          <div className="flex items-center h-full border-b border-slate-800 py-2 text-slate-400">
            <svg className="shrink-0 fill-purple-500 mr-3" xmlns="http://www.w3.org/2000/svg" width="12" height="9">
              <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z" />
            </svg>
            <span><span className="md:hidden">Extra Add-ons</span></span>
          </div>
        </div> */}
        {/* Admin Roles */}
        {/* <div className="px-6 flex flex-col justify-end">
          <div className="py-2 text-slate-400 border-b border-slate-800">Admin Roles</div>
        </div> */}
        {/* <div className="px-6 flex flex-col justify-end">
          <div className="flex items-center border-b border-slate-800 py-2 text-slate-400 max-md:hidden">
            <span><span className="md:hidden">Admin Roles</span></span>
          </div>
        </div>
        <div className="px-6 flex flex-col justify-end">
          <div className="flex items-center border-b border-slate-800 py-2 text-slate-400 max-md:hidden">
            <span><span className="md:hidden">Admin Roles</span></span>
          </div>
        </div>
        <div className="px-6 flex flex-col justify-end">
          <div className="flex items-center h-full border-b border-slate-800 py-2 text-slate-400">
            <svg className="shrink-0 fill-purple-500 mr-3" xmlns="http://www.w3.org/2000/svg" width="12" height="9">
              <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z" />
            </svg>
            <span><span className="md:hidden">Admin Roles</span></span>
          </div>
        </div> */}
        {/* Deploy and Monitor */}
        {/* <div className="px-6 flex flex-col justify-end">
          <div className="py-2 text-slate-400 border-b border-slate-800">Deploy and Monitor</div>
        </div> */}
        {/* <div className="px-6 flex flex-col justify-end">
          <div className="flex items-center border-b border-slate-800 py-2 text-slate-400 max-md:hidden">
            <span><span className="md:hidden">Deploy and Monitor</span></span>
          </div>
        </div>
        <div className="px-6 flex flex-col justify-end">
          <div className="flex items-center border-b border-slate-800 py-2 text-slate-400 max-md:hidden">
            <span><span className="md:hidden">Deploy and Monitor</span></span>
          </div>
        </div>
        <div className="px-6 flex flex-col justify-end">
          <div className="flex items-center h-full border-b border-slate-800 py-2 text-slate-400">
            <svg className="shrink-0 fill-purple-500 mr-3" xmlns="http://www.w3.org/2000/svg" width="12" height="9">
              <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z" />
            </svg>
            <span><span className="md:hidden">Deploy and Monitor</span></span>
          </div>
        </div> */}
        {/* Enterprise Add-ons */}
        {/* <div className="px-6 flex flex-col justify-end">
          <div className="py-2 text-slate-400 border-b border-slate-800">Enterprise Add-ons</div>
        </div> */}
        {/* <div className="px-6 flex flex-col justify-end">
          <div className="flex items-center border-b border-slate-800 py-2 text-slate-400 max-md:hidden">
            <span><span className="md:hidden">Enterprise Add-ons</span></span>
          </div>
        </div>
        <div className="px-6 flex flex-col justify-end">
          <div className="flex items-center border-b border-slate-800 py-2 text-slate-400 max-md:hidden">
            <span><span className="md:hidden">Enterprise Add-ons</span></span>
          </div>
        </div>
        <div className="px-6 flex flex-col justify-end">
          <div className="flex items-center h-full border-b border-slate-800 py-2 text-slate-400">
            <svg className="shrink-0 fill-purple-500 mr-3" xmlns="http://www.w3.org/2000/svg" width="12" height="9">
              <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z" />
            </svg>
            <span><span className="md:hidden">Enterprise Add-ons</span></span>
          </div>
        </div> */}
        {/* # Support */}
        {/* <div className="px-6 flex flex-col justify-end">
          <div className="py-2 text-slate-50 font-medium mt-4">Support</div>
        </div> */}
        {/* <div className="px-6 flex flex-col justify-end">
          <div className="py-2 text-slate-50 font-medium mt-4 hidden">Support</div>
        </div>
        <div className="px-6 flex flex-col justify-end">
          <div className="py-2 text-slate-50 font-medium mt-4 md:hidden">Support</div>
        </div>
        <div className="px-6 flex flex-col justify-end">
          <div className="py-2 text-slate-50 font-medium mt-4 md:hidden">Support</div>
        </div> */}
        {/* Premium Support */}
        {/* <div className="px-6 flex flex-col justify-end">
          <div className="py-2 text-slate-400 border-b border-slate-800">Premium Support</div>
        </div> */}
        {/* <div className="px-6 flex flex-col justify-end">
          <div className="flex items-center border-b border-slate-800 py-2 text-slate-400 max-md:hidden">
            <span><span className="md:hidden">Premium Support</span></span>
          </div>
        </div>
        <div className="px-6 flex flex-col justify-end">
          <div className="flex items-center h-full border-b border-slate-800 py-2 text-slate-400">
            <svg className="shrink-0 fill-purple-500 mr-3" xmlns="http://www.w3.org/2000/svg" width="12" height="9">
              <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z" />
            </svg>
            <span><span className="md:hidden">Premium Support</span></span>
          </div>
        </div>
        <div className="px-6 flex flex-col justify-end">
          <div className="flex items-center h-full border-b border-slate-800 py-2 text-slate-400">
            <svg className="shrink-0 fill-purple-500 mr-3" xmlns="http://www.w3.org/2000/svg" width="12" height="9">
              <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z" />
            </svg>
            <span><span className="md:hidden">Premium Support</span></span>
          </div>
        </div>  */}
      </div>
    </div>
  )
}