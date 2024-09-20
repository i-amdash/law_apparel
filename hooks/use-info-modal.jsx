import { Fragment, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
// icons
import { HiShoppingBag } from 'react-icons/hi2';
import Image from 'next/image'
import Link from 'next/link'

export default function Example() {
  const [open, setOpen] = useState(true)

  const cancelButtonRef = useRef(null)

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-50" initialFocus={cancelButtonRef} onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div className="bg-secondary px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                      {/* <ExclamationTriangleIcon className="h-6 w-6 text-red-600" aria-hidden="true" /> */}
                    </div>
                    <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                      <Dialog.Title as="h3" className="text-base font-semibold leading-6">
                        Upcoming Event
                      </Dialog.Title>
                      <div className="mt-2">
                        <Link href={'https://www.event.landmarkbeach.ng/ticket/cupid-meets-art1706807603'} target="_blank">
                          <Image
                            src={'/CUPID.png'}
                            height={400}
                            width={600}
                            alt=""
                        />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-secondary px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                    <Link href={'/shop'}>
                    <button
                    type="button"
                    className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto gap-2"
                  >
                    Buy Packages (50% discount till 24th March) <HiShoppingBag fontSize="1.2em" />
                  </button>
                  </Link>
                  
                  {/* <Link href={'/Hansart_Pricelist.pdf'} target="_blank">
                    <button
                    type="button"
                    className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                  >
                    View Hans Artss Pricelist
                  </button>
                    </Link> */}
                  
                  <button
                    type="button"
                    className="mt-3 inline-flex w-full justify-center rounded-md bg-accent px-3 py-2 text-sm font-semibold shadow-sm sm:mt-0 sm:w-auto"
                    onClick={() => setOpen(false)}
                    ref={cancelButtonRef}
                  >
                    Close
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
