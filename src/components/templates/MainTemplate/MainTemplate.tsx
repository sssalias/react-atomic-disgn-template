import React from 'react'


type PropsType = {
    children: React.ReactNode
}


const MainTemplate = ({children}:PropsType) => {
    return (
        <div>
            {/* other code here */}
            <main>
                {children}
            </main>
        </div>
    )
}

export default MainTemplate