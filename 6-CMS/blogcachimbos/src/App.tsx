import React from 'react';
import './App.css';
import { PrismicImage, PrismicRichText, useFirstPrismicDocument, PrismicText } from '@prismicio/react'

function App() {
  const [homepage] = useFirstPrismicDocument()
  console.log(homepage)
  return (
    <main>
      <div className ="header">
        <div className = "title">
          {homepage && (<PrismicRichText field={homepage.data.title} />)}
        </div>
        <div className = "subtitle">
          {homepage && (<PrismicRichText field={homepage.data.subtitle} />)}
        </div>
      </div>
      <div className="about_us">
        <div className = "about_us_container">
          <div className = "about_us_image">
            {homepage && (<PrismicImage field={homepage.data.body[0].items[0].horizontal_card_image} />)}
          </div>
          <div className = "about_us_content">
            <div className = "about_us_title">
              {homepage && (<PrismicRichText field={homepage.data.body[0].items[0].horizontal_card_container_title} />)}
            </div>
            <div className = "about_us_text">
              {homepage && (<PrismicRichText field={homepage.data.body[0].items[0].horizontal_card_description} />)}
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default App;
