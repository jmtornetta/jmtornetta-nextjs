import Head from "next/head"
import Content from "./content"
import Footer from "./footer"
import Header from "./header"

export default function Layout(props){
    return(
    <>
        <Head>
            <title>{props.title}</title>
            {/* <link rel="icon" href="/favicon.ico" /> //Insert icon here */}
        </Head>
        <Header />
        <Content title={props.title}>{props.children}</Content>
        <Footer />
    </>
)}