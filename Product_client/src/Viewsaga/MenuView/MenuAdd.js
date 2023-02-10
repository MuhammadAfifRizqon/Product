import React, { useState } from 'react'
import { useFormik } from 'formik'
import { useDispatch } from 'react-redux'
import { AddMenuRequest } from '../../Redux-saga/Action/MenuActions'
import * as Yup from 'yup'

export default function MenuAdd(props) {
    const dispatch = useDispatch()
    const [previewImg, setPreviewImg] = useState();
    const [uploaded, setUploaded] = useState(false);

    const validationSchema = Yup.object().shape({
        menu_id: Yup.string("Enter  ID").required("Menu ID is required"),
        cate_id: Yup.string("Enter categori id").required("categori id is required"),
        menu_name: Yup.string("Enter Nama ").required("Nama is required"),
        menu_description: Yup.string("Enter Description").required("description is required"),
        price: Yup.string("Enter price").required("price is required"),
    });

    const formik = useFormik({
        initialValues: {
            menu_id:undefined,
            cate_id: '',
            menu_name: '',
            menu_description: '',
            price: undefined,
            menu_image: undefined
        },
        validationSchema : validationSchema,
        onSubmit: async (values) => {
            let payload = new FormData();
            payload.append('menu_id', values.menu_id)
            payload.append('cate_id', values.cate_id)
            payload.append('menu_name', values.menu_name)
            payload.append('menu_description', values.menu_description)
            payload.append('price', values.price)
            payload.append('menu_image', values.menu)

            dispatch(AddMenuRequest(payload))
            props.closeAdd();
            window.alert('Data Succesfully Insert')
            props.onRefresh();
        }
    })
    const uploadOnChange = name => event => {
        let reader = new FileReader()
        let file = event.target.files[0]

        reader.onload = () => {
            formik.setFieldValue('menu', file);
            setPreviewImg(reader.result)
        }
        reader.readAsDataURL(file);
        setUploaded(true)
    }

    const onClearImage = event => {
        event.preventDefault();
        setUploaded(false);
        setPreviewImg(null)
    }
    return (
        <div>
            <div>
                <label class="block text-sm font-medium text-white">Menu ID: </label>
                <input
                    class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    type="text"
                    name="menu_id"
                    id="menu_id"
                    value={formik.values.menu_id}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    autoComplete="menu_id"
                />
                {formik.touched.menu_id && formik.errors.menu_id ? <span className="mt-2 text-sm text-red-600">{formik.errors.menu_id}</span> : null}
            </div>

            <div>
                <label class="block text-sm font-medium text-white">Category Id : </label>
                <input
                    class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    type="text"
                    name="cate_id"
                    id="cate_id"
                    value={formik.values.cate_id}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    autoComplete="cate_id"
                />
                {formik.touched.cate_id && formik.errors.cate_id ? <span className="mt-2 text-sm text-red-600">{formik.errors.cate_id}</span> : null}
            </div>
            <div>
                <label class="block text-sm font-medium text-white">Name : </label>
                <input
                    class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    type="text"
                    name="menu_name"
                    id="menu_name"
                    value={formik.values.menu_name}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    autoComplete="menu_name"
                />
                {formik.touched.menu_name && formik.errors.menu_name ? <span className="mt-2 text-sm text-red-600">{formik.errors.menu_name}</span> : null}
            </div>
            <div>
                <label class="block text-sm font-medium text-white">Description : </label>
                <input
                    class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    type="text"
                    name="menu_description"
                    id="menu_description"
                    value={formik.values.menu_description}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    autoComplete="menu_description"
                />
                {formik.touched.menu_description && formik.errors.menu_description ? <span className="mt-2 text-sm text-red-600">{formik.errors.menu_description}</span> : null}
            </div>
            <div>
                <label class="block text-sm font-medium text-white">price : </label>
                <input
                    class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    type="number"
                    name="price"
                    id="price"
                    value={formik.values.price}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    autoComplete="price"
                />
                {formik.touched.price && formik.errors.price ? <span className="mt-2 text-sm text-red-600">{formik.errors.price}</span> : null}
            </div>
            <div>
            <label class="block text-sm font-medium text-white">Menu Image : </label>
                <div>
                    <div>
                        <div class="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                            <div class="space-y-1 text-center">
                                {
                                    uploaded === false ?
                                        <svg class="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                                            <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                        :
                                        <>
                                            <img src={previewImg} alt='image' />
                                            <span class="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500" onClick={onClearImage}>Remove</span>
                                        </>
                                }

                                <div class="flex text-sm text-gray-600">
                                    <label for="profile" class="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                                        <span>Upload a file</span>
                                        <input id="profile" name="profile" type="file" accept='image/png, image/jpg,image/gif' onChange={uploadOnChange('file')} class="sr-only" />
                                    </label>
                                    <p class="pl-1">or drag and drop</p>
                                </div>
                                <p class="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <button type='submit' className="cursor-pointer inline-flex justify-center py-2 px-2 shadow-sm text-sm font-medium rounded-md text-green-500 hover:text-green-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" onClick={formik.handleSubmit}>Simpan </button>
                <button className="cursor-pointer inline-flex justify-center py-2 px-2 shadow-sm text-sm font-medium rounded-md text-red-500 hover:text-red-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" onClick={() => props.setDisplay(false)}>Cancel </button>
            </div>
        </div>
    )
}