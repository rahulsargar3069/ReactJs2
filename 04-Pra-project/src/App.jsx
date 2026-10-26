import Card from "./components/Card/Card"
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar"

const App = () => {

  const jobLists = [
  {
    logo: "https://img.freepik.com/premium-vector/web-developer-design_24911-42715.jpg",
    job: "Web Development",
    description: "Build and maintain responsive websites with modern frameworks."
  },
  {
    logo: "https://tse3.mm.bing.net/th/id/OIP.V8fe0XJTZtsHh4wLcnuz9gHaEK?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    job: "Data Analyst",
    description: "Analyze datasets to uncover insights and support business decisions."
  },
  {
    logo: "https://tse3.mm.bing.net/th/id/OIP.rcA9sjzQBpYrEoW1miwP5gHaEK?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    job: "Cloud Engineer",
    description: "Design and manage scalable cloud infrastructure for enterprises."
  },
  {
    logo: "https://tse2.mm.bing.net/th/id/OIP.qheRv6E74LkqfZiKpVUcQQHaEO?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    job: "AI Engineer",
    description: "Develop machine learning models and deploy intelligent applications."
  },
  {
    logo: "https://tse3.mm.bing.net/th/id/OIP.EdvTF7n2Jwde4PtCLYqOIwHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    job: "Cybersecurity Specialist",
    description: "Protect systems and networks against threats and vulnerabilities."
  },
  {
    logo: "https://tse3.mm.bing.net/th/id/OIP.j0n8Ae4KxFE8RRzJoFvhNgHaE8?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    job: "DevOps Engineer",
    description: "Automate deployments and streamline CI/CD pipelines efficiently."
  }
];


  return (

    <div className="parent">
      <Navbar/>
      <div className="Card-main">
      {jobLists.map(function(elem){
        return <Card 
        logo={elem.logo}
        job={elem.job}
        description={elem.description}
        />
      })}
      </div>
      <Footer/>
    </div>
  )
}

export default App
