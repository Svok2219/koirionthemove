import React from 'react'
import Document, {Html, Head, Main, NextScript} from 'next/document'
// import loader from "./Components/loader";
import { Audio , BallTriangle , Rings} from  'react-loader-spinner'
// import "./Components/loader.css"
// import '../styles/globals.css'
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
                <body style={{	display: "block"}}>
                <div id={'globalLoaderr'} style={{	position: "fixed",zindex:"1700" ,
                backgroundColor: "#fff",
                display: "flex",
                left: "0",
                // transform: "translate(-50%, -50%)",
                right: "0",
                width: "100%",
                height: "100%",
                justifyContent: "center",
                alignItems: "center"
}}>
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