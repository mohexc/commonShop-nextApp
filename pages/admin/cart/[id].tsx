import { useRouter } from 'next/router'
import React, { FC } from 'react'

const ProductDetailPage: FC = () => {
    const router = useRouter()
    return (
        <pre>{JSON.stringify(router.query.id, null, 2)}  </pre>
    )
}

export default ProductDetailPage