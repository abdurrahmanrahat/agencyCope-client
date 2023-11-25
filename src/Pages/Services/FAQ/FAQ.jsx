import { Disclosure } from "@headlessui/react";
import { FaAngleDown } from "react-icons/fa";

export default function FAQ() {
  return (
    <div className="my-20">
      <div className="text-center mb-8">
        <h2 className="font-medium text-[32px]">Frequently asked questions</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-full justify-between rounded-lg px-4 py-2 text-left text-[18px] font-medium focus:outline-none focus-visible:ring">
                  <span>What is your refund policy?</span>
                  <FaAngleDown
                    className={`${
                      open ? "rotate-180 transform duration-500" : ""
                    } h-5 w-5 `}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pb-2 pt-4 text-md text-gray-600">
                  If you&apos;re unhappy with your purchase for any reason,
                  email us within 90 days and we&apos;ll refund you in full, no
                  questions asked.
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        </div>
        <div>
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-full justify-between rounded-lg px-4 py-2 text-left text-[18px] font-medium focus:outline-none focus-visible:ring">
                  <span>What is your refund policy?</span>
                  <FaAngleDown
                    className={`${
                      open ? "rotate-180 transform duration-500" : ""
                    } h-5 w-5 `}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pb-2 pt-4 text-md text-gray-600">
                  If you&apos;re unhappy with your purchase for any reason,
                  email us within 90 days and we&apos;ll refund you in full, no
                  questions asked.
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        </div>
        <div>
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-full justify-between rounded-lg px-4 py-2 text-left text-[18px] font-medium focus:outline-none focus-visible:ring">
                  <span>What is your refund policy?</span>
                  <FaAngleDown
                    className={`${
                      open ? "rotate-180 transform duration-500" : ""
                    } h-5 w-5 `}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pb-2 pt-4 text-md text-gray-600">
                  If you&apos;re unhappy with your purchase for any reason,
                  email us within 90 days and we&apos;ll refund you in full, no
                  questions asked.
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        </div>
        <div>
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-full justify-between rounded-lg px-4 py-2 text-left text-[18px] font-medium focus:outline-none focus-visible:ring">
                  <span>What is your refund policy?</span>
                  <FaAngleDown
                    className={`${
                      open ? "rotate-180 transform duration-500" : ""
                    } h-5 w-5 `}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pb-2 pt-4 text-md text-gray-600">
                  If you&apos;re unhappy with your purchase for any reason,
                  email us within 90 days and we&apos;ll refund you in full, no
                  questions asked.
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        </div>
        <div>
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-full justify-between rounded-lg px-4 py-2 text-left text-[18px] font-medium focus:outline-none focus-visible:ring">
                  <span>What is your refund policy?</span>
                  <FaAngleDown
                    className={`${
                      open ? "rotate-180 transform duration-500" : ""
                    } h-5 w-5 `}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pb-2 pt-4 text-md text-gray-600">
                  If you&apos;re unhappy with your purchase for any reason,
                  email us within 90 days and we&apos;ll refund you in full, no
                  questions asked.
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        </div>
        <div>
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-full justify-between rounded-lg px-4 py-2 text-left text-[18px] font-medium focus:outline-none focus-visible:ring">
                  <span>What is your refund policy?</span>
                  <FaAngleDown
                    className={`${
                      open ? "rotate-180 transform duration-500" : ""
                    } h-5 w-5 `}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pb-2 pt-4 text-md text-gray-600">
                  If you&apos;re unhappy with your purchase for any reason,
                  email us within 90 days and we&apos;ll refund you in full, no
                  questions asked.
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        </div>
      </div>
    </div>
  );
}
