import React from 'react';

export function ThirdParty(props) {
    const [print, setPrint] = React.useState('loading...');

    React.useEffect(() => {
      // fetch('https://www.thingiverse.com/thing:2713579')
      // fetch('https://pokemon3d-api.onrender.com/v1/all')
      // fetch('https://quote.cs260.click')
      fetch('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
        .then(response => {
          console.log(response);
          return response.json();
        })
        .then(data => {
          console.log(data);
          setPrint(data.url);
        })
        // .then(response => response.json())
        // .then(data => {
        //   setPrint(data.quote);
        //   console.log(data);
        //   console.log(data.quote);
        // })
        // .catch();
    }, [])

    return (
        <section className = 'third-party'>
          {/* <div>{ print }</div> */}
          <img src={print} alt='third party' className = 'nasa' />
        </section>
    );
}