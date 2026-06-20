import type { CampsiteConfig } from "../types";

const IMG = "/campsites/arlbergcamping";

const arlbergcamping: CampsiteConfig = {
  name: "Arlberg Camping",
  shortName: "Arlberg",
  slug: "arlbergcamping",
  ort: "Wald am Arlberg",
  region: "Vorarlberg",
  brandKind: "Camping",
  regionLong: "Klostertal · Arlberg · Vorarlberg · Österreich",

  heroVariant: "center",

  claim: "Dein Bergcamping direkt an der Sonnenkopfbahn",
  claimEmphasis: "an der Sonnenkopfbahn",
  emailDetail: "euer Platz zwischen Skigebiet und Langlaufloipe",
  intro:
    "Eine modern eingerichtete Anlage, umgeben von einer atemberaubenden Naturkulisse: Arlberg Camping liegt direkt neben der Sonnenkopfbahn und ist Sommer wie Winter geöffnet — viel Raum für Erholung und Freizeit.",

  statement: {
    text: "Bei uns stehst du im Sommer wie im Winter mitten in der Arlberger Bergwelt — Skilift und Loipe nur ein paar Schritte entfernt.",
    emphasis: "Sommer wie im Winter",
  },

  pillars: [
    {
      title: "Direkt an der Sonnenkopfbahn",
      text: "Die Anlage liegt direkt neben der Bergbahn — Skigebiet und Loipe sind nur wenige Gehminuten entfernt.",
      image: { src: `${IMG}/gallery-f71dd7b9f3.webp`, alt: "Arlberg Camping vor der Bergkulisse im Klostertal" },
    },
    {
      title: "Sommer wie Winter offen",
      text: "Ob Bergsommer oder Skiwinter — der Platz ist ganzjährig geöffnet und bietet viel Raum für Erholung.",
      image: { src: `${IMG}/gallery-ff7c87aee3.webp`, alt: "Wintercamping am Arlberg Camping vor verschneiter Bergkulisse" },
    },
    {
      title: "Gepflegt & modern",
      text: "Eine modern eingerichtete Anlage mit gehobener Sanitärausstattung — gepflegt und ganzjährig betreut.",
      image: { src: `${IMG}/gallery-85524c4acf.webp`, alt: "Gepflegte Anlage des Arlberg Camping im Sommergrün" },
    },
  ],

  usps: [
    "Sommer & Winter geöffnet",
    "80 Stromanschlüsse",
    "Gehobene Sanitärausstattung",
    "Direkt an der Sonnenkopfbahn",
    "Kinderspielzimmer",
    "Langlaufloipe in Gehweite",
  ],

  trust: {
    heading: "Ankommen, wo die Berge beginnen",
    headingEmphasis: "die Berge beginnen",
    intro:
      "Direkt neben der Sonnenkopfbahn, umgeben von der Arlberger Bergwelt: Hier campst du Sommer wie Winter mitten in der Natur — mit kurzen Wegen zu Skigebiet, Loipe und Bergbahn.",
  },

  awards: [],

  hero: {
    aerial: { src: `${IMG}/gallery-a26fd44582.webp`, alt: "Arlberg Camping vor winterlicher Bergkulisse am Arlberg" },
  },

  camping: {
    heading: "Camping am Arlberg",
    intro:
      "Vom Stellplatz mitten in die Berge: ebene Plätze, moderne Ausstattung und kurze Wege zu Skilift, Loipe und Gasthof.",
    features: [
      {
        title: "Stellplätze mit Strom",
        text: "80 Stromanschlüsse mit 6 Ampere, eigenes Gaslager sowie Frisch- und Abwasser sorgen für vollen Komfort.",
        image: { src: `${IMG}/gallery-83f4e483f8.webp`, alt: "Wohnmobilstellplätze am Arlberg Camping mit Bergblick" },
      },
      {
        title: "Platz für alle",
        text: "Großzügige Plätze für Wohnwagen, Wohnmobil und Zelt, eingebettet in eine grüne Bergkulisse.",
        image: { src: `${IMG}/gallery-44e9eec89f.webp`, alt: "Stellplätze mit Sommerblumen am Arlberg Camping" },
      },
      {
        title: "Mitten in der Natur",
        text: "Umgeben von einer atemberaubenden Naturkulisse findest du hier viel Raum für Erholung und Freizeit.",
        image: { src: `${IMG}/award-bc86dc97be.png`, alt: "Luftaufnahme vom Arlberg Camping im Klostertal" },
      },
    ],
  },

  anreise: {
    heading: "Dein Weg ins Klostertal",
    modes: [
      {
        title: "Mit dem Auto",
        text: "Über die S16 Arlberg Schnellstraße bis Wald am Arlberg — der Platz liegt direkt an der Sonnenkopfbahn.",
      },
      {
        title: "Mit der Bahn",
        text: "Nächster Halt ist der Bahnhof Wald am Arlberg an der Arlbergbahn, von dort sind es nur wenige Minuten zum Platz.",
      },
      {
        title: "Mit dem Bus",
        text: "Die nächste Bushaltestelle liegt nur 200 m vom Platz entfernt.",
      },
    ],
  },

  galerie: {
    heading: "Sommer und Winter am Arlberg",
    headingEmphasis: "Sommer und Winter",
    intro:
      "Ein paar Eindrücke vom Platz und seiner Lage in der Arlberger Bergwelt — bei Schnee und im satten Sommergrün.",
    tag: "Ganzjährig geöffnet",
    images: [
      { src: `${IMG}/award-680f9de4e7.png`, alt: "Wohnmobil mit Bergblick am Arlberg Camping" },
      { src: `${IMG}/award-10370611de.png`, alt: "Stellplätze für Zelte und Wohnwagen mit Alpenblick" },
      { src: `${IMG}/award-7968d8bc57.png`, alt: "Campingbereich mit Bergpanorama am Arlberg Camping" },
    ],
  },

  booking: {
    heading: "Sichere dir deinen Stellplatz am Arlberg",
    headingEmphasis: "deinen Stellplatz",
    intro:
      "Wähle Zeitraum und Personenzahl — David Sojer und sein Team melden sich persönlich bei dir.",
    pricesArePlaceholder: false,
    priceNote:
      "Sommersaison, 2 Erwachsene inkl. Stellplatzgebühr — zzgl. Kurtaxe € 3,20 pro Person/Nacht ab 14 Jahren.",
    highlight: {
      title: "Mitten in der Bergwelt",
      text: "Vom Stellplatz sind es nur wenige Gehminuten zur Sonnenkopfbahn.",
    },
    categories: [
      { id: "stellplatz-strom", label: "Stellplatz mit Strom", perNight: 35.6, perExtraGuest: 9.3 },
      { id: "stellplatz", label: "Stellplatz ohne Strom", perNight: 31.6, perExtraGuest: 9.3 },
      { id: "zelt", label: "Zeltplatz", perNight: 24.6, perExtraGuest: 9.3 },
    ],
  },

  kontakt: {
    tel: "+43 5585 7386",
    telHref: "tel:+4355857386",
    mail: "office@arlbergcamping.at",
    adresse: "Sonnenbühel 107 · 6752 Wald am Arlberg · Vorarlberg",
    coords: { lat: 47.13032, lng: 10.05114 },
  },

  languages: ["DE"],

  nav: [
    { label: "Camping", href: "#camping" },
    { label: "Galerie", href: "#galerie" },
    {
      label: "Preise & Anreise",
      href: "#booking",
      children: [
        { label: "Preise", href: "#booking" },
        { label: "Anreise", href: "#anreise" },
      ],
    },
    { label: "Kontakt", href: "#kontakt" },
  ],
};

export default arlbergcamping;
