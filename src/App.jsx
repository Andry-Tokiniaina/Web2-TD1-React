import NavListe from "./components/NavListe"
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
  let liens = [
    {texte: "Accueil".toUpperCase()},{texte:"Actualités".toUpperCase()},{texte:"Bourses d'études".toUpperCase()},{texte:"Inscription".toUpperCase()}
  ]
  let Debouches = [{
    titre : "Quelques débouchés",texte : "Formez-vous à une panoplie de métiers du numérique avec\
     nous et venez acquérir les fondements de la programmation (qui vous servira pour les différents métiers)\
      ! Ce sont des métiers porteurs, des métiers du présent, des métiers du futur…\n\
      Développeur back end, développeur front end, développeurs mobile, chefs de projet, exploitants cloud,\
       analystes cybersécurité, pentesters, auditeur technique SSI, auditeur organisationnel SSI, administrateur\
        système et réseau, développeur de sécurité…"
  }]

  return (
    <>
    <div className="h-screen w-full">
      <div className="h-1/7 bg-blue-950 flex flex-row justify-around items-center">
        <div>
          <img src="src\assets\cropped-Logo-e1662790239183.png" alt="" className="h-18"/>
        </div> 
        <div className="flex flex-row items-center">
          <NavListe elements={liens}/>
          <div className="bg-amber-400 text-lg text-blue-50 p-2 rounded-md font-bold w-30 flex  flex-col items-center">INTRANET</div>
        </div>
      </div>

      <div className="h-6/7 bg-amber-400">

      </div>

      <div className="h-screen w-full flex flex-row justify-center p-20">
        <div className="w-3/7 flex items-center justify-center">
          <img src="src\assets\A-propos-left-1.webp" alt="" className="p-6"/>
        </div>
        <div className="w-3/7 flex flex-col justify-between">
          <h1 className="font-bold text-blue-950 text-5xl font-serif"> à propos de nous</h1>
          <Pargraphe elements={Infos}/>
        </div>
      </div>

      <div className="bg-blue-400 h-9/10 flex flex-col items-center py-10 px-50 text-center">
        <h1 className="text-5xl font-bold font-serif">L'équipe pédagogique</h1>
        <p className="text-xl">
          Notre équipe pédagogique se compose d’experts nationaux et internationaux de l’informatique,
           de la cybersécurité, de l’intelligence artificielle, dont un ingénieur chez Google.
            Ils sont passionnés par l’informatique et sont engagés vers l’excellence.
           Nous sommes conscients que cette équipe est la pierre angulaire de l’employabilité de nos étudiants,
            elle a été soigneusement sélectionnée.
        </p>
      </div>

      <div className="h-6/7 flex">
        <div className="w-1/2 p-30">
          <Pargraphe elements={Debouches}/>
        </div>
        <div>
          <img src="src\assets\IMG-02-e1720543344824-987x1024-1.webp" alt="" className="h-3/4"/>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
