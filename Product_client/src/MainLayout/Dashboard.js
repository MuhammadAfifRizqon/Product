/* This example requires Tailwind CSS v2.0+ */
import React from 'react'
import { Outlet } from 'react-router-dom'
import { Disclosure } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'

const navigation = [
    { name: 'HOME', href: 'Home', current: true },
    { name: 'FILTER', href: 'filter', current: false },
    { name: 'CHART', href: 'chart', current: false },
    { name: 'TABLE', href: 'table', current: false },
    ,
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}


export default function Example() {
    return (
        <>
            <div className="min-h-full bg-fixed bg-cover ">
                <Disclosure as="nav" className="px-2 bg-white border-sky-500 dark:bg-white dark:border-black">
                    {({ open }) => (
                        <>
                            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                                <div className="flex items-center justify-between h-16">
                                    <div className="flex items-center">
                                        <div className="flex-shrink-0">
                                            
                                        </div>
                                        <div className="hidden md:block">
                                            <div className="ml-10 flex items-baseline space-x-4">
                                                {navigation.map((item) => (
                                                    <a
                                                        key={item.name}
                                                        href={item.href}
                                                        className={classNames(
                                                            item.current
                                                                ? 'bg-white text-black'
                                                                : 'text-black hover:bg-sky-600 hover:text-white',
                                                            'px-3 py-2 rounded-md text-sm font-medium'
                                                        )}
                                                        aria-current={item.current ? 'page' : undefined}
                                                    >
                                                        {item.name}
                                                    </a>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="-mr-2 flex md:hidden">
                                        {/* Mobile menu button */}
                                        <Disclosure.Button className="bg-black inline-flex items-center justify-center p-2 rounded-md text-black hover:text-black hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-black">
                                            <span className="sr-only">Open main menu</span>
                                            {open ? (
                                                <XIcon className="block h-6 w-6" aria-hidden="true" />
                                            ) : (
                                                <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                                            )}
                                        </Disclosure.Button>
                                    </div>
                                </div>
                            </div>

                            <Disclosure.Panel className="md:hidden">
                                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                                    {navigation.map((item) => (
                                        <Disclosure.Button
                                            key={item.name}
                                            as="a"
                                            href={item.href}
                                            className={classNames(
                                                item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-900 hover:text-white',
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

                <header className="bg-white shadow">
                    <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                        <h1 className="text-3xl font-bold text-gray-900">Jawab Test</h1>
                    </div>
                </header>
                <main>
                    <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                        {/* Replace with your content */}
                        <div className="px-4 py-6 sm:px-0">
                            <Outlet/>
                        </div>
                        {/* /End replace */}
                    </div>
                </main>
            </div>
        </>
    )
}