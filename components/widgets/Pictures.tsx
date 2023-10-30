import Image from 'next/image'
import React from 'react'

const Pictures = ({img}:any) => {
    return (
        <div >
            <div >
                    <Image alt='AASS' src={img} width={500} height={500} />
            </div>
        </div>
    )
}

export default Pictures
