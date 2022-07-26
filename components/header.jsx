/* This example requires Tailwind CSS v2.0+ */
import { useState } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import {classNames} from '/utils/classNames'
import ContactModal from '/components/contactModal'
import Image from 'next/image'

const navigation = [
  // { name: 'Blog', href: '/blog', current: false },
  { name: 'About', href: '/about/', current: false },
  { name: 'Portfolio', href: '/portfolio/', current: false },
  { name: 'Contact', href: '/contact/', current: false },
]

export default function Header() {
  const [isModalOpen, setModalOpen] = useState(false)
  const toggleModal = () => setModalOpen(prevState => !prevState)
  return (
    <>
      <Disclosure as="nav" className="bg-olive-700">
        {({ open }) => (
          <>
            <div id="nav-container" className="flex mx-auto w-[95%] min-w-[320px] md:w-[90%] lg:w-[85%] xl:w-[80%] min-h-[4rem] py-2">
              <div id="nav-main" className="flex items-center justify-between flex-1">
                <div id="button-hamburger" className="inset-y-0 flex items-center sm:hidden">
                  {/* Mobile menu button*/}
                  <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-olive-100 hover:bg-brown-700 hover:text-olive-300 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XIcon className="block w-6 h-6" aria-hidden="true" />
                    ) : (
                      <MenuIcon className="block w-6 h-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div id="profile-face" className="w-8 h-8 m-1 rounded-full overflow-clip">
                  <Image src="/images/jonTornetta-profile--face.jpg" height={60} width={60} alt="Jon Tornetta face profile" />
                </div>
                <h2 className="hidden py-2 ml-3 mr-1 text-lg font-bold whitespace-nowrap text-olive-100 sm:block">Jon Tornetta</h2>
                <div id="nav-menu" className="justify-center flex-grow hidden sm:flex">
                  <div className="flex mt-1 md:space-x-3 lg:space-x-6 xl:lg:space-x-12">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current ? 'bg-gray-900 text-white' : 'text-olive-100 hover:bg-brown-700 hover:text-olive-300',
                          'px-3 py-2 rounded-md text-md font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
                <div id="icons-container" className="flex items-center justify-end flex-grow gap-1">
                  <a id="profile-email" href="#" onClick={() => toggleModal()} className="p-1 rounded-full text-olive-300 bg-brown-800 hover:text-brown-800 hover:bg-olive-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 330.001 330.001" className="w-6 h-6 p-1" fill="currentColor"><path d="M173.871 177.097a14.982 14.982 0 0 1-8.87 2.903 14.98 14.98 0 0 1-8.871-2.903L30 84.602.001 62.603 0 275.001c.001 8.284 6.716 15 15 15L315.001 290c8.285 0 15-6.716 15-14.999V62.602l-30.001 22-126.129 92.495z" /><path d="M165.001 146.4 310.087 40.001 19.911 40z" /><script type="text/javascript" data-extension-id="fnnegphlobjdpkhecapkijjdkgcjhkib" /></svg>
                  </a>
                  <a id="profile-meet" href="https://cal.com/jmtornetta/personal/" target="_blank" className="p-1 rounded-full text-olive-300 bg-brown-800 hover:text-brown-800 hover:bg-olive-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 330 330" className="w-6 h-6 p-1" fill="currentColor"><path d="M30 120H0v195c0 8.284 6.716 15 15 15h165V195c0-8.283 6.716-15 15-15h135v-60H30z" /><path d="M278.787 210H210V321.213L321.213 210zM315 30h-85V15c0-8.284-6.716-15-15-15-8.284 0-15 6.716-15 15v15h-70V15c0-8.284-6.716-15-15-15-8.284 0-15 6.716-15 15v15H15C6.716 30 0 36.716 0 45v45h330V45c0-8.284-6.716-15-15-15z" /><script type="text/javascript" data-extension-id="fnnegphlobjdpkhecapkijjdkgcjhkib" /></svg>
                  </a>
                  <a id="profile-pay" href="https://paypal.me/JonTornetta/" target="_blank" className="p-1 rounded-full text-olive-300 bg-brown-800 hover:text-brown-800 hover:bg-olive-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-6 h-6 p-0.5" fill="currentColor"><path d="M1 24c0 1.1.9 2 2 2h26c1.1 0 2-.9 2-2V12H1v12zm3-5h12a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 3h5a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zM31 8v1H1V8c0-1.1.9-2 2-2h26c1.1 0 2 .9 2 2z" /><script type="text/javascript" data-extension-id="fnnegphlobjdpkhecapkijjdkgcjhkib" /></svg>
                  </a>
                  <a id="profile-linkedin" href="https://www.linkedin.com/in/jontornetta/" target="_blank" className="p-1 rounded-full text-olive-300 bg-brown-800 hover:text-brown-800 hover:bg-olive-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 310 310" className="w-6 h-6 p-1" fill="currentColor"><path d="M72.16 99.73H9.927a5 5 0 0 0-5 5v199.928a5 5 0 0 0 5 5H72.16a5 5 0 0 0 5-5V104.73a5 5 0 0 0-5-5zM41.066.341C18.422.341 0 18.743 0 41.362 0 63.991 18.422 82.4 41.066 82.4c22.626 0 41.033-18.41 41.033-41.038C82.1 18.743 63.692.341 41.066.341zM230.454 94.761c-24.995 0-43.472 10.745-54.679 22.954V104.73a5 5 0 0 0-5-5h-59.599a5 5 0 0 0-5 5v199.928a5 5 0 0 0 5 5h62.097a5 5 0 0 0 5-5V205.74c0-33.333 9.054-46.319 32.29-46.319 25.306 0 27.317 20.818 27.317 48.034v97.204a5 5 0 0 0 5 5H305a5 5 0 0 0 5-5V194.995c0-49.565-9.451-100.234-79.546-100.234z" /><script type="text/javascript" data-extension-id="fnnegphlobjdpkhecapkijjdkgcjhkib" /></svg>
                  </a>
                  <a id="profile-twitter" href="https://twitter.com/jmtornetta/" target="_blank" className="p-1 rounded-full text-olive-300 bg-brown-800 hover:text-brown-800 hover:bg-olive-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 310 310" className="w-6 h-6 p-1" fill="currentColor"><path d="M302.973 57.388a117.512 117.512 0 0 1-14.993 5.463 66.276 66.276 0 0 0 13.494-23.73 5 5 0 0 0-7.313-5.824 117.994 117.994 0 0 1-34.878 13.783c-12.381-12.098-29.197-18.983-46.581-18.983-36.695 0-66.549 29.853-66.549 66.547 0 2.89.183 5.764.545 8.598C101.163 99.244 58.83 76.863 29.76 41.204a5.001 5.001 0 0 0-8.196.642c-5.896 10.117-9.013 21.688-9.013 33.461 0 16.035 5.725 31.249 15.838 43.137a56.37 56.37 0 0 1-8.907-3.977 5 5 0 0 0-7.427 4.257c-.007.295-.007.59-.007.889 0 23.935 12.882 45.484 32.577 57.229a57.372 57.372 0 0 1-5.063-.735 4.998 4.998 0 0 0-5.699 6.437c7.29 22.76 26.059 39.501 48.749 44.605-18.819 11.787-40.34 17.961-62.932 17.961a120.4 120.4 0 0 1-14.095-.826 5 5 0 0 0-3.286 9.174c29.023 18.609 62.582 28.445 97.047 28.445 67.754 0 110.139-31.95 133.764-58.753 29.46-33.421 46.356-77.658 46.356-121.367 0-1.826-.028-3.67-.084-5.508 11.623-8.757 21.63-19.355 29.773-31.536a5 5 0 0 0-6.182-7.351z" /><script type="text/javascript" data-extension-id="fnnegphlobjdpkhecapkijjdkgcjhkib" /></svg>
                  </a>
                  <a id="profile-github" href="https://github.com/jmtornetta/" target="_blank" className="p-1 rounded-full text-olive-300 bg-brown-800 hover:text-brown-800 hover:bg-olive-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                    {/* Cannot add padding to this SVG; probably because of clip group */}
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="currentColor"><defs><clipPath clipPathUnits="userSpaceOnUse" id="a"><path d="M9.434 21.258a10.218 10.218 0 0 1-5.73-4.275 10.218 10.218 0 0 1-1.472-6.995 10.218 10.218 0 0 1 3.52-6.221 10.218 10.218 0 0 1 6.756-2.34 10.218 10.218 0 0 1 6.614 2.713 10.218 10.218 0 0 1 3.169 6.407 10.218 10.218 0 0 1-1.86 6.903 10.218 10.218 0 0 1-5.958 3.948 10.16 10.16 0 0 1-5.04-.14z" /></clipPath></defs><path d="M6.703 5.973a.286.286 0 0 0-.11.02 5.855 5.855 0 0 0-.23.763c-.054.254-.079.513-.08.773 0 .202.017.404.051.604.033.199.086.394.16.582-.345.372-.615.809-.793 1.285a4.144 4.144 0 0 0-.262 1.477 6.865 6.865 0 0 0 .291 2.119 4.09 4.09 0 0 0 .885 1.515c.415.422.914.751 1.465.965.653.25 1.337.41 2.033.477a1.825 1.825 0 0 0-.45.633 2.99 2.99 0 0 0-.2.744 2.757 2.757 0 0 1-1.176.27c-.378.014-.75-.091-1.064-.302a2.905 2.905 0 0 1-.752-.824 3.096 3.096 0 0 0-.293-.38 2.691 2.691 0 0 0-.371-.344c-.133-.1-.28-.18-.434-.24a1.196 1.196 0 0 0-.48-.1c-.04 0-.08.005-.12.01a.646.646 0 0 0-.162.02.414.414 0 0 0-.13.06.114.114 0 0 0-.06.1.329.329 0 0 0 .14.241c.093.074.17.13.232.17l.03.022c.132.103.261.215.382.334.112.098.214.209.3.33.09.119.168.246.231.38.073.135.15.289.23.464.189.474.524.874.956 1.144.453.243.96.365 1.474.352.174 0 .35-.011.524-.031.172-.028.342-.056.514-.09v1.742c.129.108.2.176.314.275.03.004.06.01.09.008.006 0 .012-.003.017-.004l.036-.002c.066 0 .132.003.199.002h.146c.056-.006.108.014.162.024.063-.014.122.027.17.06.004.002.008.008.012.006.003-.001-.01-.008-.006-.008.013 0 .025.004.037.006.022.004.043 0 .065.004.025.006.05.017.074.025l.039.022.012.004c-.025-.013-.03-.008.011-.012l.088-.008c.046.002.09.004.135.004l.162.018.043.004c-.037.013-.053.02-.03.006.07.014.13.013.198.007.009 0 .017-.003.026-.002.07.008.045.012.103.022l.033.004.09.015c.045-.001.091-.004.137-.004h.033c.015 0 .029-.003.043 0 .147.042.02.006.076.032l-.008-.006c.01-.009.064-.008.067-.008h.086c.016-.001.03.01.045.014.017.001.031-.003.052.006l.041.015c.003.003-.018.003-.013.004.008.001.051-.001.058-.002a.39.39 0 0 1 .114-.002c.01-.037.045-.07.12-.07l.032-.002-.043-.02c.043.006.107.004.156.008l.03-.008c.024-.003.055 0 .08.002.009.001.018.003.027.002.005 0 .01-.004.014-.006l.029-.007a.278.278 0 0 1 .092-.006c.094.006.187.003.28.002-.002-.001-.01-.003-.007-.004.051-.027.123-.018.178-.014.001.005.07-.002.07 0a.093.093 0 0 1 .026-.002c.023-.002.048.004.072 0v-.004c.004-.003.01-.004.015-.006l.028-.01c-.013.02.07-.02.066.003-.002.009-.019.003-.027-.002-.005-.003.01-.006.016-.008.036-.012.031-.009.07-.012a.689.689 0 0 0 .107.004H13.926a.272.272 0 0 1 .183-.037c.006 0 .013.004.018.002.004-.002-.014 0-.012-.004.004-.006.013-.006.02-.008a.292.292 0 0 1 .111-.01h.004c.003 0 .009 0 .012-.002l.004-.002.004-.004.035-.02.02-.005c.088-.04.15-.086.148-.139l.076-1.533c.006-.467.01-.94.01-1.416a3.688 3.688 0 0 0-.153-1.027 1.83 1.83 0 0 0-.54-.875 8.01 8.01 0 0 0 2.036-.473 4.051 4.051 0 0 0 1.467-.963c.407-.427.71-.943.885-1.506.213-.69.315-1.41.3-2.13a4.14 4.14 0 0 0-.259-1.477 3.894 3.894 0 0 0-.797-1.283 2.81 2.81 0 0 0 .162-.582c.033-.2.051-.402.051-.604 0-.26-.03-.52-.09-.773a5.317 5.317 0 0 0-.22-.764.294.294 0 0 0-.112-.02h-.11c-.23.002-.455.04-.673.112a5.34 5.34 0 0 0-.703.26 6.526 6.526 0 0 0-.662.343 11.49 11.49 0 0 0-.573.362 9.576 9.576 0 0 0-5.142 0 18.042 18.042 0 0 0-.572-.362 6.019 6.019 0 0 0-.672-.341 4.52 4.52 0 0 0-.705-.262 2.204 2.204 0 0 0-.663-.111Zm3.25 15.742.008.008v-.008h-.008z" clipPath="url(#a)" /></svg>
                  </a>
                </div>
              </div>
            </div>
            <Disclosure.Panel id="nav-menu--mobile" className="sm:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 text-olive-300 bg-brown-700">
                {navigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    className={classNames(
                      item.current ? 'bg-gray-900 text-white' : ' hover:text-brown-700 hover:bg-olive-300',
                      'block px-3 py-2 rounded-md text-base font-medium'
                    )}
                    aria-current={item.current ? 'page' : undefined}
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
      <ContactModal isOpen={isModalOpen} toggleOpen={toggleModal} />
    </>
  )
}
