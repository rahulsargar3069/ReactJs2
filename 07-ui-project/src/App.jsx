import Section1 from "./Components/Section1/Section1"
import Section2 from "./Components/Section2/Section2"

const App = () => {

  const Users = [
    {
      img : 'https://images.unsplash.com/photo-1574073763042-9dbe6ae03853?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
      intro : 'Customer satisfaction is our priority. We deliver quality services, build trust, and ensure every customer feels valued and happy.',
      tag : 'Satisfed',
      color : 'Orange',
    }, 
    {
      img : 'https://plus.unsplash.com/premium_photo-1683121120533-89999a606862?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
      intro : 'Development drives innovation, improves skills, solves problems, and creates opportunities for growth through continuous learning and technological advancement.',
      tag : 'Developer',
      color : 'yellowgreen',

    },
    {
      img : 'https://images.unsplash.com/photo-1768428581237-0d4f78bcbcc4?q=80&w=436&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
      intro : 'Software simplifies tasks, improves productivity, automates processes, and helps businesses manage data efficiently through reliable digital solutions.',
      tag : 'Software',
      color : 'royalblue',
    },{
      img : 'https://images.unsplash.com/photo-1574073763042-9dbe6ae03853?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
      intro : 'Customer satisfaction is our priority. We deliver quality services, build trust, and ensure every customer feels valued and happy.',
      tag : 'Satisfed',
      color : 'Orange',
    }, 
    {
      img : 'https://plus.unsplash.com/premium_photo-1683121120533-89999a606862?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
      intro : 'Development drives innovation, improves skills, solves problems, and creates opportunities for growth through continuous learning and technological advancement.',
      tag : 'Developer',
      color : 'yellowgreen',

    },
  ]
  return (
    <div>
      <Section1 User={Users}/>
      <Section2 />
    </div>
  )
}

export default App
