import Pargraphe from "./components/Paragraphe"

function App() {

  let Infos= [
    {
      titre : "+3ans",
      texte : "Depuis 3 ans, nous formons ceux qui décodent\
       le futur, aux métiers de l’informatique. Nous sommes un groupe d’experts,\
        de professionnels et des passionnés de l’informatique de Madagascar et du monde entier."
    },
    {
      titre:"+250 étudiants",
      texte : "Plus de 250 étudiants et plus d’une dizaine d’entreprises ont déjà fait\
       confiance à notre formation habilitée par l’État malgache.\
        Avec eux tous, nous sommes fiers de pouvoir parler de la “grande famille HEI”."

    },
    {
      titre : "Notre mission",
      texte : "Notre mission est d’amener des jeunes malgaches sur des domaines porteurs comme\
       l’intelligence artificielle, la cybersécurité ou la programmation afin de favoriser leur\
        employabilité et le développement de Madagascar."
    }
  ]
  return (
    <>
    <div className="h-screen w-full">

      <div className="h-1/7 bg-blue-950"></div>
      <div className="h-6/7 bg-amber-400"></div>

      <div className="h-screen w-full flex flex-row justify-center p-10">
        <div className="w-3/7 ">
        <img src="src\assets\A-propos-left-1.webp" alt="" />
        </div>
        <div className="w-3/7 flex flex-col items-center justify-between">
          <h1 className="font-bold text-blue-950 text-3xl"> A propos de nous</h1>
          <Pargraphe elements={Infos}/>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
