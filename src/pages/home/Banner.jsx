import Background from '../../assets/home-background.png'
import Button from '../../components/widgets/Button'

const Banner = () => {
  return (
    <div className='banner'>
        <div className="image">
            <img src={Background} alt="background_image" />
        </div>
        <div className="content">
            <p>
                We crush your competitors, goals, and sales records - without the B.S.
            </p>

            <Button title="Get free consultation" />
        </div>
    </div>
  )
}

export default Banner