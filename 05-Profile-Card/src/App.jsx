import Card from "./Components/Card"

const App = () => {

  const users = [
  {
    name: "Rahul Sargar",
    project: 100,
    like: 200,
    comment: 50,
    img: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    name: "Ananya Sharma",
    project: 150,
    like: 400,
    comment: 90,
    img: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    name: "Vikram Patel",
    project: 120,
    like: 500,
    comment: 110,
    img: "https://randomuser.me/api/portraits/men/65.jpg"
  },
  {
    name: "Sneha Iyer",
    project: 130,
    like: 350,
    comment: 70,
    img: "https://randomuser.me/api/portraits/women/21.jpg"
  },
  {
    name: "Arjun Mehta",
    project: 140,
    like: 450,
    comment: 85,
    img: "https://randomuser.me/api/portraits/men/12.jpg"
  }
];


  return (
    <div className="parent">
     {users.map(function(elem){
      return <Card
      name = {elem.name}
      project = {elem.project}
      like = {elem.like}
      comment = {elem.comment}
      img = {elem.img}
      />
     })}
    </div>
  )
}

export default App
