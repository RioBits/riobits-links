import './App.css'
import Card from './Components/Card'

function App() {
  return (
    <main className='app'>
      <div className='container'>
        <h1>riobits</h1>
        <p className='desc'>
          this is just a simple website to share: links, refferals
        </p>
        <div className='cards'>
          <Card
            image='./images/binance_ref.png'
            title='Binance'
            description='Earn up to 40% commission on every trade across Binance Spot, Futures, and Pool.'
            rlink='https://accounts.binance.com/en/register?ref=GV3AQE91'
          />
          <Card
            image='./images/coinbase_ref.png'
            title='Coinbase'
            description='Receive $10 in Bitcoin when you buy or sell $100 or more on Coinbase!'
            rlink='https://www.coinbase.com/join/EANWW4'
          />
          <Card
            image='./images/honey_ref.png'
            title='Honey'
            description='Honey will help you save money while shopping online ,sign up & Earn 500 Honey Gold points on your first purchase'
            rlink='https://joinhoney.com/ref/mbjiwpo'
          />
          <Card
            image='./images/pi_ref.png'
            title='Pi Network'
            description='This is a cryptocurrency just like bitcoin! you can mine it on the phone, even without wifi, just make sure to click the mine button everyday, use the code: RioSY, so i can help you with mining'
            rlink='https://minepi.com/RioSY'
          />
          <Card
            image='./images/skillshare_ref.png'
            title='Skillshare'
            description='Explore online classes in design, illustration, photography, and more. Use my link and get 2 free month'
            rlink='https://skl.sh/3tudI3B'
          />
          <Card
            image='./images/honeygain_ref.png'
            title='honeygain'
            description='Earn up to $20 per month by simply sharing your Internet. Start earning now'
            rlink='https://r.honeygain.me/ABUDE7B94E'
          />
          <Card
            image='./images/stormgain_ref.png'
            title='Stormgain'
            description='Mine bitcoin on your phone!'
            rlink='https://app.stormgain.com/friend/BNS29073593'
          />
        </div>
      </div>
    </main>
  )
}

export default App
