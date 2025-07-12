import LogoListe from "./components/LogoListe"
import NavListe from "./components/NavListe"
import Pargraphe from "./components/Paragraphe"
import PargrapheTitre from "./components/ParagrapheTitre"

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
      ! Ce sont des métiers porteurs, des métiers du présent, des métiers du futur…\n \
      Développeur back end, développeur front end, développeurs mobile, chefs de projet, exploitants cloud,\
       analystes cybersécurité, pentesters, auditeur technique SSI, auditeur organisationnel SSI, administrateur\
        système et réseau, développeur de sécurité…"
  }]
  let ProgrammeText = [{
    titre:"Le programme pédagogique",
    texte:"Suivant le système LMD, jusqu’au Master, notre formation repose sur un programme pédagogique conçu\
     en adéquation avec les attentes du marché. La formation est sanctionnée par un diplôme de Licence et de\
      Master en Informatique reconnu par le MESupRes de Madagascar."
  }]
  let Techno = [{
    titre: "Les technos et langages utilisées",
    texte : "Nos étudiants sont formés à l’utilisation et à la maîtrise des langages de programmation Java et\
     JavaScript. Ces deux langages occupent une place de choix dans le domaine du développement logiciel et du web,\
      offrant une polyvalence et une robustesse appréciées par les développeurs à travers le monde."
  }]
  let TechnoListeLigne1 = [{url : "src\\assets\\Java.png"},{url : "src\\assets\\python.png"},{url : "src\\assets\\JS.png"},
    {url : "src\\assets\\C.png"},{url : "src\\assets\\TS.png"}]
  let TechnoListeLigne2 = [{url : "src\\assets\\docker.png"},{url : "src\\assets\\next.png"},
    {url : "src\\assets\\aws.png"},{url : "src\\assets\\serverless.png"},{url : "src\\assets\\react.png"},{url : "src\\assets\\openapi.png"}
  ]

  let Partenaires = [{
    titre:"Nos partenaires",
    texte : "L’employabilité de nos étudiants se base sur la pertinence  de notre programme pédagogique et de la\
     composition de notre corps enseignant mais aussi du soutien et la collaboration des entreprises partenaires"
  }]
  let PartenairesListe1 = [{url : "src\\assets\\LOGO-NEXTA.webp"},{url : "src\\assets\\PN_Logo_baseline_color_ENG.png"},
    {url : "src\\assets\\Yooz-2023-Logo-2.webp"},{url : "src\\assets\\logo-etech.png"},{url : "src\\assets\\logo_emit.png"}]
  let PartenairesListe2 = [{url : "src\\assets\\Logo-Numer-vf.png"},{url : "src\\assets\\bp-logo-full-1536x497.webp"},
    {url : "src\\assets\\YIF_LOGO_512x512_BL_on_WH-1.webp"},{url :"src\\assets\\logo-kante-company-1.png"}]


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

      <div className="bg-indigo-400 h-9/10 flex flex-col items-center py-10 px-50 text-center">
        <h1 className="text-5xl font-bold font-serif">L'équipe pédagogique</h1>
        <p className="text-lg">
          Notre équipe pédagogique se compose d’experts nationaux et internationaux de l’informatique,
           de la cybersécurité, de l’intelligence artificielle, dont un ingénieur chez Google.
            Ils sont passionnés par l’informatique et sont engagés vers l’excellence.
           Nous sommes conscients que cette équipe est la pierre angulaire de l’employabilité de nos étudiants,
            elle a été soigneusement sélectionnée.
        </p>
      </div>

      <div className="h-6/7 flex">
        <div className="w-3/5 p-30">
          <PargrapheTitre elements={Debouches}/>
        </div>
        <div>
          <img src="src\assets\IMG-02-e1720543344824-987x1024-1.webp" alt="" className="h-3/4"/>
        </div>
      </div>

      <div className="h-screen bg-gray-100 flex flex-col items-center p-15 text-center">
        <h1 className="font-medium text-5xl font-serif text-blue-950 p-5">Domaines</h1>
        <p className="text-blue-950 text-lg">
          Au cours de vos trois ans de formation,
           naviguez entre les domaines les plus porteurs
            du numérique du présent et de l’avenir :
        </p>
      </div>

      <div className="h-6/7 bg-indigo-400">

      </div>

      <div className="h-4/5 flex px-35 py-20">
        <div className="w-1/2"><img src="src\assets\IMG-03-e1720537524581-1024x950-1.webp" alt="" className="h-1/1"/></div>
        <div className="w-1/2">
          <PargrapheTitre elements={ProgrammeText}/>
          <div className="p-2 font-bold text-blue-950 text-lg border-2 border-blue-950 w-45">Notre Programme</div>
        </div>
      </div>

      <div className="h-screen">

      </div>

      <div className="h-5/6 text-center px-40 bg-gray-100">
        <PargrapheTitre elements={Techno}/>
        <LogoListe elements={TechnoListeLigne1}/>
        <LogoListe elements={TechnoListeLigne2}/>
      </div>

      <div className="h-5/6 text-center px-40">
        <PargrapheTitre elements={Partenaires}/>
        <LogoListe elements={PartenairesListe1}/>
        <LogoListe elements={PartenairesListe2}/>
      </div>
      
    </div>
    </>
  )
}

export default App
