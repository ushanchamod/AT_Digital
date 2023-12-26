import Button from "../../components/widgets/Button"
import PcImage from '../../assets/pc.png'
import Scope from '../../assets/scope.png'

const card_data = [
    {
        id: 1,
        img: PcImage,
        title: 'Web & Mobile App Development',
        phase: 'Your web and mobile Apps are pieces of the puzzle to grow your business. We use frameworks which tailor content and engagement methods to respond to different intents shown by your potential customers who interact with your business online.',
        btn: 'LEARN MORE'
    },
    {
        id: 2,
        img: Scope,
        title: 'Digital Strategy Consulting',
        phase: 'Your digital strategy should complement the overall marketing strategy of the company. In online marketing, each component will never work in isolation and every business needs a different mix. We provide a clear concept and strategic overview to find the most efficient model for your business.',
        btn: 'LEARN MORE'
    },
]


const Content = () => {
  return (
    <div id="home-content">
        {
            card_data.map((item) => {
                return(
                    <Card key={item.id} title={item.title} phase={item.phase} button_title={item.btn} img={item.img} />
                )
            })
        }
    </div>
  )
}

const Card = ({title, phase, button_title, img}) => {
    return(
        <div className="card">
            <div className="image">
                <img src={img} alt="dscfdsvdf" />
            </div>
            
            <div className="card_content">
                <h2>{title}</h2>
                <p>{phase}</p>
                <Button title={button_title} />
            </div>
        </div>
    )
}

export default Content