import React from "react";

function BreadCrumbCadastroCliente(){
    return(
        <>
        <nav className="text-sm w-100" aria-label="Breadcrumb">
            <ol className="list-none p-0 inline-flex">
                <li className="flex items-center">
                    <span className="text-gray-500">Passo 1</span>
                    <svg
                    className="fill-current w-3 h-3 mx-2 text-gray-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    >
                        <path d="M0 0h24v24H0z" fill="none" />
                        <path d="M5 9l7 7 7-7H5z" />
                    </svg>
                </li>
                <li className="flex items-center">
                    <span className="text-gray-500 ">Passo 2</span>
                    <svg
                    className="fill-current w-3 h-3 mx-2 text-gray-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    >
                        <path d="M0 0h24v24H0z" fill="none" />
                        <path d="M5 9l7 7 7-7H5z" />
                    </svg>
                </li>
                    <li className="flex items-center">
                    <span className="text-gray-500">Passo 3</span>
                    <svg
                    className="fill-current w-3 h-3 mx-2 text-gray-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    ></svg>
                </li>
            </ol>
        </nav>
        
        </>
        )
    }
    
    export default BreadCrumbCadastroCliente;