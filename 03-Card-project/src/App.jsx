import Card from "./components/Card";

const App = () => {

  const jobOpenings = [
  {
    brandLogo: "https://th.bing.com/th/id/OIP.bL2pe2umaUcsKBK3XwMPxQHaHa?r=0&o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3",
    companyName: "Meta",
    datePosted: "5 days ago",
    post: "Frontend Engineer",
    tag1: "Full-Time",
    tag2: "Junior Level",
    pay: "$85/hr",
    location: "Menlo Park, USA"
  },
  {
    brandLogo: "https://img.freepik.com/premium-photo/amazon-logo-icon-illustration-vector_895118-6116.jpg?w=2000",
    companyName: "Amazon",
    datePosted: "2 weeks ago",
    post: "Cloud Support Engineer",
    tag1: "Full-Time",
    tag2: "Senior Level",
    pay: "$120/hr",
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://static.vecteezy.com/system/resources/previews/019/136/325/original/apple-logo-apple-icon-free-free-vector.jpg",
    companyName: "Apple",
    datePosted: "10 weeks ago",
    post: "iOS Developer",
    tag1: "Part-Time",
    tag2: "Junior Level",
    pay: "$95/hr",
    location: "Cupertino, USA"
  },
  {
    brandLogo: "https://tse4.mm.bing.net/th/id/OIP.jAGbJVOkM4-1eqt7WDJIBAHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    companyName: "Netflix",
    datePosted: "3 days ago",
    post: "UI/UX Designer",
    tag1: "Full-Time",
    tag2: "Senior Level",
    pay: "$110/hr",
    location: "Los Angeles, USA"
  },
  {
    brandLogo: "https://seekvectors.com/storage/images/google-Logo-38.jpg",
    companyName: "Google",
    datePosted: "1 month ago",
    post: "Data Scientist",
    tag1: "Full-Time",
    tag2: "Junior Level",
    pay: "$100/hr",
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://wallpaperbat.com/img/926558-download-microsoft-wallpaper.jpg",
    companyName: "Microsoft",
    datePosted: "4 weeks ago",
    post: "Backend Developer",
    tag1: "Full-Time",
    tag2: "Senior Level",
    pay: "$130/hr",
    location: "Redmond, USA"
  },
  {
    brandLogo: "https://static.vecteezy.com/system/resources/previews/020/336/735/original/tesla-logo-tesla-icon-transparent-png-free-vector.jpg",
    companyName: "Tesla",
    datePosted: "6 days ago",
    post: "AI Engineer",
    tag1: "Full-Time",
    tag2: "Senior Level",
    pay: "$150/hr",
    location: "California, USA"
  },
  {
    brandLogo: "https://i.pinimg.com/736x/84/e5/7b/84e57bc14d1b783e9b96a5be4c9c269b.jpg",
    companyName: "Adobe",
    datePosted: "8 weeks ago",
    post: "Graphic Designer",
    tag1: "Part-Time",
    tag2: "Junior Level",
    pay: "$70/hr",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://cdn.mos.cms.futurecdn.net/6buS8FJa2RPi4ubSZnwczd.jpg",
    companyName: "Oracle",
    datePosted: "2 days ago",
    post: "Database Administrator",
    tag1: "Full-Time",
    tag2: "Senior Level",
    pay: "$125/hr",
    location: "Austin, USA"
  },
  {
    brandLogo: "https://tse4.mm.bing.net/th/id/OIP.CcwuWERtE-zUerNo22UScAHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    companyName: "IBM",
    datePosted: "7 weeks ago",
    post: "Cloud Engineer",
    tag1: "Full-Time",
    tag2: "Junior Level",
    pay: "$90/hr",
    location: "Pune, India"
  }
];

  return (
    <div className="parent">
     {jobOpenings.map(function(elem){
      return <Card 
      logo={elem.brandLogo}
      company={elem.companyName}
      post={elem.post}
      date={elem.datePosted}
      post1={elem.tag1}
      post2={elem.tag2}
      pay={elem.pay}
      location={elem.location}
      />
     })}
    </div>

  )
}

export default App
