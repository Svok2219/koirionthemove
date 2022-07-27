import React from 'react'
import Document, {Html, Head, Main, NextScript} from 'next/document'
import loader from "./loader";
// import '../styles/globals'
class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head/>
                <head>
                    <style>
                        {loader}
                    </style>
                </head>
                <body>
        <div  id={'globalLoader'} className="load-wrapp">
        {/* <div className="load-wrapp"> */}
      <div className="load-3 mx-2">
        {/* <p>Loading 3</p> */}
        <div className="line"></div>
        <div className="line mx-3"></div>
        <div className="line"></div>
      </div>
    {/* </div> */}
    </div>
                <Main/>
                <NextScript/>
                </body>
            </Html>
        )
    }
}

export default MyDocument
