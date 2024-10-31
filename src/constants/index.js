import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "Om",
  },
  {
    id: "work",
    title: "Arbeidserfaring",
  },
  {
    id: "contact",
    title: "Kontakt",
  },
];

const services = [
  {
    title: "Fullstack Programvareutvikler",
    icon: web,
  },
  {
    title: "React Utvikler",
    icon: mobile,
  },
  {
    title: ".NET Utvikler",
    icon: backend,
  },
 
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
 
  {
    name: "React JS",
    icon: reactjs,
  },
  
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Drosjesjåfør",
    company_name: "Drosjesjåfør - 07000",
    icon: starbucks,
    iconBg: "#383E56",
    date: "2017 - 2019",
    points: [
      "Jeg jobbet som taxisjåfør og fraktet folk til ønsket destinasjon. Jeg møtte forskjellige mennesker med ulik bakgrunn.",
    ],
  },
  {
    title: "Studentassistent",
    company_name: "Universitetet i Agder",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "2020 - 2021",
    points: [
      "Som studentassistent ved Universitetet i Agder hjalp jeg studenter med laboratorieøvelser og obligatoriske oppgaver i C++ og C. Denne erfaringen styrket mine ferdigheter i disse programmeringsspråkene og ga meg verdifull innsikt i undervisning og veiledning.",
    ],
  },
  {
    title: "Intern Programvareutvikler",
    company_name: "KPMG",
    icon: shopify,
    iconBg: "#383E56",
    date: "2022 - 2022",
    points: [
      "Dette prosjektarbeidet har vi jobbet med digitale tvillinger og hvordan det kan effektivisere landbruksproduksjonen ved å automatisere prosessene og bruke dyp læring for optimalisering.",
    ],
  },
  {
    title: "Deltids Mastergrad i Datateknologi",
    company_name: "Universitetet i Stavanger",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "2024 - Nå",
    points: [
      "Masterstudiet i Datateknologi ved Universitetet i Stavanger er et deltidsprogram over fire år, som kombinerer arbeid og studier. Programmet gir avansert kunnskap innen skytjenester, sikkerhet, nettverk, distribuerte systemer, datautvinning og maskinlæring. Studiet legger stor vekt på praktiske ferdigheter, med laboratorie- og prosjektarbeid som krever noe fysisk oppmøte. Utdannelsen forbereder studentene på karrierer innen IT-konsulentselskaper, teknologiutvikling, energisektoren, telekommunikasjon, helsevesen og offentlige etater.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Loomo segway tale-til-tekst navigasjonssystem",
    description:
      "Denne bacheloroppgaven fokuserte på utviklingen av et assistansesystem for Loomo Segway, som kombinerer navigasjon og tale-til-tekst-teknologi. Ved å bruke Java og Android Studio for programvareutvikling, og Cisco-teknologi for nettverksintegrasjon, ble det skapt et system som kunne gi brukere muligheten til å styre og navigere Loomo Segway-enheten ved hjelp av talekommandoer. Systemet oversetter talekommandoer til tekst, som deretter brukes til å kontrollere enhetens bevegelser og funksjoner. Dette prosjektet demonstrerte avanserte ferdigheter innen programvareutvikling og integrasjon av moderne teknologier for å forbedre brukervennligheten og funksjonaliteten til robotiske assistansesystemer.",
    tags: [
      {
        name: "Android Studio",
        color: "blue-text-gradient",
      },
      {
        name: "MazemapAPI",
        color: "green-text-gradient",
      },
    
      {
        name: "Cisco CMX",
        color: "pink-text-gradient",
        
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/robotflame/NavigationSystemLoomoSegway",
  },
  {
    name: "E-handelsplattform Sellorama",
    description:
      "En e-handelsplattform designet for handel med brukte mobiltelefoner. Plattformen er utviklet med bruk av .NET Framework for backend, React for frontend, samt Javascript og C# for å sikre en sømløs og effektiv brukeropplevelse. Prosjektet ble fullført med høyeste karakter, A.",
    tags: [
      {
        name: ".NET",
        color: "blue-text-gradient",
      },
      {
        name: "React",
        color: "green-text-gradient",
      },
      {
        name: "Figma",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/robotflame/Sellorama",
  },
  
];

export { services, technologies, experiences, testimonials, projects };
