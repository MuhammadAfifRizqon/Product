import React, { useState, useEffect } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { GetMenuRequest, DelMenuRequest } from '../../Redux-saga/Action/MenuActions'
import MenuAdd from './MenuAdd'
import MenuEdit from './MenuEdit'

export default function MenuPlus() {
    const dispatch = useDispatch()
    const [display, setDisplay] = useState(false)
    const [displayEdit, setDisplayEdit] = useState(false)
    const [refresh, setRefresh] = useState(false)
    const [id, setId] = useState()
    const {menus} = useSelector(state => state.menuStated)
    
    useEffect(() => {
        dispatch(GetMenuRequest())
        setRefresh(false)
    }, [refresh])

    const onDelete = async (id) =>{
        dispatch(DelMenuRequest(id))
        setRefresh(true)
    }

    const onClick = (menuID) => {
        setDisplayEdit(true)
        setId(menuID)
    }

    return (
        <div className='justify-center'>
            <div className="relative shadow-md sm:rounded-lg">
                {
                    displayEdit
                    ?
                    <MenuEdit
                        closeAdd={() => setDisplayEdit(false)}
                        onRefresh={() => setRefresh(true)}
                        id={id}
                        setDisplay={setDisplayEdit}
                    />
                    :
                    display ?
                        <MenuAdd
                            setDisplay={setDisplay}
                            closeAdd={() => setDisplay(false)}
                            onRefresh={() => setRefresh(true)}
                        />
                        :
                <>
                
                <div className='grid justify-items-stretch px-36'> 
                <h1 className='font-bold text-4xl text-white m-8-center pb-2'>List Food</h1>
                    <table className="text-sm text-left text-gray-500 dark:text-gray-400 ">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-9 py-3 text-sm"> Name </th>
                                <th scope="col" className="px-9 py-3 text-sm"> Description </th>
                                <th scope="col" className="px-9 py-3 text-sm"> price </th>
                                <th scope="col" className="px-9 py-3 text-sm">
                                    <button type="button" className="cursor-pointer border px-4 py-1  border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" onClick={() => setDisplay(true)}>Add</button>
                                </th>
                            </tr>
                        </thead>
                        <tbody className="overscroll-auto md:overscroll-contain">
                            {
                                menus && menus.map(menu => {
                                    return (
                                        <tr key={menu.menu_id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                            <td scope="row" className="px-6 py-2 font-medium text-gray-900 dark:text-white whitespace-nowrap">{menu.menu_name}</td>
                                            <td scope="row" className="px-6 py-2 font-medium text-gray-900 dark:text-white whitespace-nowrap">{menu.menu_description}</td>
                                            <td scope="row" className="px-6 py-2 font-medium text-gray-900 dark:text-white whitespace-nowrap">{menu.price}</td>
                                            <td className='flex space-x-4 text-base py-2 px-2'>
                                                <div>
                                                    <button type="button" className="cursor-pointer py-2 px-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" onClick={() => onClick(menu.menu_id)}>Edit</button>
                                                </div>
                                                
                                                <div>
                                                    <button type="button" className="cursor-pointer py-2 px-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" onClick={() => onDelete(menu.menu_id)}>Delete</button>
                                                </div>
                                            </td>                                     
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
                </>
                }
            </div>
        </div>
    )
}