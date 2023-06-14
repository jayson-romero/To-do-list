import {  useContext } from 'react'
import { Disclosure } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { APIContext } from '../utils/API'
import { useNavigate } from 'react-router-dom'
import { useLocalStorage } from '../utils/LocalStorage'
import ToDoList from './ToDoList'
 


// const user = {
  
//    name: 'Tom Cook',
//    email: 'tom@example.com',
//    imageUrl:
//      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
//  }
//  const navigation = [
//    { name: 'Dashboard', href: '#', current: true },
//    { name: 'Team', href: '#', current: false },
//    { name: 'Projects', href: '#', current: false },
//    { name: 'Calendar', href: '#', current: false },
//    { name: 'Reports', href: '#', current: false },
//  ]
//  const userNavigation = [
//    { name: 'Your Profile', href: '#' },
//    { name: 'Settings', href: '#' },
//    { name: 'Sign out', href: '#' },
//  ]
 
//  function classNames(...classes) {
//    return classes.filter(Boolean).join(' ')
//  }

 


const Navbar = () => {

  const { logout } = useContext(APIContext);
  const { token } = useLocalStorage()
  const navigate = useNavigate()


  const handleLogout = () => {
    try {
      logout()
      navigate("/login")
    } catch (error) {
        console.log(error)
    }
  }


  return (
    <>
       {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-gray-100">
        <body class="h-full">
        ```
      */}
      <div className="">
        <Disclosure as="nav" className="bg-gray-800">
          {({ open }) => (
            <>
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <img
                        className="h-8 w-8"
                        src="https://www.sketchappsources.com/resources/source-image/sketch-3-todo-list-app-icon-template.png"
                        alt="Your Company"
                      />
                    </div>
                    {/* <div className="hidden md:block">
                      <div className="ml-10 flex items-baseline space-x-4">
                        {navigation.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            className={classNames(
                              item.current
                                ? 'bg-gray-900 text-white'
                                : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                              'rounded-md px-3 py-2 text-sm font-medium'
                            )}
                            aria-current={item.current ? 'page' : undefined}
                          >
                            {item.name}
                          </a>
                        ))}
                      </div>
                    </div> */}
                  </div>
                  <div className="hidden md:block">
                    <div className="ml-4 flex items-center md:ml-6">
                      
                    <div
                        className="rounded-full bg-gray-800 p-1 text-gray-400 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                      >
                        <span className="">{token? token.username : null} </span>
                        <span className="mx-2">{token? "/": null} </span>
                      </div>

                                

                      <button
                       onClick={handleLogout}
                        type="button"
                        className="rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                      >
                        <span className="">{token? "Logout" : "Sign-In"}</span>
                   
                      </button>

                      {/* Profile dropdown */}
                     
                        
                      <div className="flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 md:ml-2">
                        <span className="sr-only">Open user menu</span>
                        <img className="h-8 w-8 rounded-full" src={ token?   token.userProfile :user.imageUrl} alt="" />
                      </div>
              
                    </div>
                  </div>
                  <div className="-mr-2 flex md:hidden">
                    {/* Mobile menu button */}
                    <Disclosure.Button className="inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                      ) : (
                        <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                      )}
                    </Disclosure.Button>
                  </div>
                </div>
              </div>

              <Disclosure.Panel className="md:hidden">
                {/* <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
                  {navigation.map((item) => (
                    <Disclosure.Button
                      key={item.name}
                      as="a"
                      href={item.href}
                      className={classNames(
                        item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                        'block rounded-md px-3 py-2 text-base font-medium'
                      )}
                      aria-current={item.current ? 'page' : undefined}
                    >
                      {item.name}
                    </Disclosure.Button>
                  ))}
                </div> */}
                <div className="border-t border-gray-700 pb-3 pt-4">
                  <div className="flex items-center px-5">
                    <div className="flex-shrink-0">
                      <img className="h-10 w-10 rounded-full" src={token.userProfile} alt="" />
                    </div>
                    <div className="ml-3">
                      <div className="text-base font-medium leading-none text-white">{token.username}</div>
                      <div className="text-sm font-medium leading-none text-gray-400">{token.email}</div>
                    </div>
                    
                  </div>
                  <div className="mt-3 space-y-1 px-2">
                  
                      <Disclosure.Button
                        onClick={handleLogout}
                        as ="a"
                        href={null}
                        className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
                      >
                        SignOut
                      </Disclosure.Button>
                  
                  </div>
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>

        <header className="bg-white shadow">
          <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">To Do List</h1>
          </div>
        </header>
        
      </div>
    </>
  )
}

export default Navbar