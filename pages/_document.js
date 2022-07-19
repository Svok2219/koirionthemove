import React from 'react'
import Document, {Html, Head, Main, NextScript} from 'next/document'
import loader from "./Components/loader";
import { Audio , BallTriangle , Rings} from  'react-loader-spinner'

class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head/>
                <head>
                    <style>
                        {/* {loader} */}
                    </style>
                </head>
                <body>
                <div id={'globalLoader'}>
                <Rings
                    height="250"
                    width="300"
                    color='grey'
                    ariaLabel='loading'
                />
                </div>
                <Main/>
                <NextScript/>
                </body>
            </Html>
        )
    }
}

export default MyDocument ;