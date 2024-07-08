import { FC, PropsWithChildren } from "react";


export const Container: FC<PropsWithChildren> = ({ children }) => {

    return (
        <div className={'bg-[#0F172A] min-h-screen p-5'}>
            <div className='max-w-3xl m-auto bg-white rounded p-8 flex flex-col gap-6'>
                {children}
            </div>
        </div>
    )
}