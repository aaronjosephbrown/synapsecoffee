const Footer = () => {
  return (
    <footer className="bg-black text-white px-10 py-14 mt-20">
      <div className='grid grid-cols-5 gap-10'>
        <section>
          <p>{'Sign up and save'.toUpperCase()}</p>
          <div>
            {
              'Sign up to receive updates on new offerings, events, online promotions, and coffee-related news. Get 20% off your first online order.'
            }
          </div>
          <input type='email' name='email' placeholder='Enter you email' className="bg-black text-white border w-52 p-2" />
        </section>
        <section>
          <p>{'Cafes'.toUpperCase()}</p>
          <ul>
            <li>Uptown</li>
            <li>North Loop</li>
            <li>St. Paul</li>
            <li>Edina</li>
            <li>Elk River</li>
            <li>Bloomington</li>
          </ul>
        </section>
        <section>
          <p>{'About'.toUpperCase()}</p>
          <ul>
            <li>About Us</li>
            <li>Community</li>
            <li>Sustainability</li>
            <li>News</li>
            <li>Careers</li>
            <li>Log In</li>
          </ul>
        </section>
        <section>
          <p>{'Shop'.toUpperCase()}</p>
          <ul>
            <li>Coffees</li>
            <li>Drinkware</li>
            <li>Apparel</li>
            <li>Gift Cards</li>
          </ul>
        </section>
        <section>
          <p>{'Contact'.toUpperCase()}</p>
          <ul>
            <li>General Inquiries:</li>
            <li>info@synapsecoffeeshop.com</li>
          </ul>
        </section>
      </div>
      <section className="text-center pt-6 text-xs">{'© 2023 Synapse Coffee Shop / Refund policy / Terms of service / Privacy policy / Contact information'}</section>
    </footer>
  )
}

export default Footer
