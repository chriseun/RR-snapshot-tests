import Button from 'react-bootstrap/Button';
import myPhoto from './1.png'

const GitHubCard = () => {
  return (
    <div>
    <h1>chriseun</h1>
    <img src={myPhoto} alt="photoOfMe" />
      <Button variant="primary">Primary</Button>
     <h2>Hello World</h2>
    </div>
  )
}

export default GitHubCard
