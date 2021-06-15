import React from 'react'
import Loader from "react-loader-spinner";

const Load = () => {
    return (
        <Loader
            type="TailSpin"
            color="#000"
            height={20}
            width={20}
            timeout={5000}
      />
    )
}

export default Load