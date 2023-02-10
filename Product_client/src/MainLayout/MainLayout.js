import React from 'react'
import { Outlet,Link } from 'react-router-dom'

const navigation = [
    { name: 'Home', href: 'home', current: true },
    { name: 'Filter', href: 'filter', current: false },
    { name: 'Chart', href: 'chart', current: false },
    { name: 'Table', href: 'table', current: false },
    ,
]

export default function MainLayout() {
    return (
        <div>
            <h2>Main Layout</h2>
            <nav className="px-2">
                <div className="space-y-1">
                    {navigation.map((item) => (
                        <Link
                            key={item.name}
                            to={item.href}
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>

            </nav>
            <main>
                {/* Page title & actions */}
                <Outlet />
            </main>
        </div>
    )
}