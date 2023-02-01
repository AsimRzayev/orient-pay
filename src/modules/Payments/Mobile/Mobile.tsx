import React from 'react'

const Mobile = () => {
    React.useEffect(() => {
        fetch('http://localhost:4000/api/public/payments/mobile/list')
            .then((res) => res.json())
            .then((x) => console.log(x))
    }, [])

    return <div>Mobile</div>
}

export default Mobile
