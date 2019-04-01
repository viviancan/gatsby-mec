import React from 'react';

import Layout from '../components/layout';
import Header from "../components/header";
import Midsection from "../components/midsection";
import Aboutsection from "../components/aboutsection";
import Testimonialsection from "../components/testimonialsection";

const IndexPage = () => 
<Layout>
    <Header></Header>
    <Aboutsection  ></Aboutsection>
    <Midsection></Midsection> 
    <Testimonialsection></Testimonialsection>

</Layout>

export default IndexPage;
