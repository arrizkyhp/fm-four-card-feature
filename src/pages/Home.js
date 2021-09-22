import React from 'react'
import apiData from 'json/apiData.json'

import Cards from 'layout/Cards'
import Header from 'layout/Header';
import Footer from 'layout/Footer';

export default function Home() {
    return (
      <>
      <main>
        <Header />
        <Cards data={apiData.card} />
      </main>
      <Footer />
      </>
    );
}
