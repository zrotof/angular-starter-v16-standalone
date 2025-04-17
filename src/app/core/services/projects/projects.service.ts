import { Injectable } from '@angular/core';
import { ProjectSummary } from '../../models/project';

@Injectable({
  providedIn: 'root'
})

export class ProjectsService {

  projectsListBriefData !: ProjectSummary[];
  projectsListAllData: any[] = [];

  constructor() { }

  initProjectSummaryList(): ProjectSummary[]{
    return this.projectsListBriefData = [
      {
        id:1,
        title : "Amadou BÂ 2024",
        image : "../../../assets/img/projects/ab-pact.png",
        summary : "Application web de campagne du candidat Amadou BÂ pour les élections présidentielles sénégalaise de 2024"
      },
      {
        id : 2 ,
        title : "FOR YOU MEDIA",
        image : "../../../assets/img/projects/foryou-media-afrique-logo.png",
        summary : "Réalisation de l'application web de la chaine de télévision et chaine de radio internationale ForYou Media Africa"
      },
      {
        id : 3,
        title : "Elites Voyages",
        image : "../../../assets/img/projects/ev.png",
        summary : "Réalisation du site web d'Elites Voyages, agence de voyage, de tourisme, de transport et de logistique"
      },
      {
        id : 4,
        title : "Restaurant",
        image : "../../../assets/img/projects/restaurant.png",
        summary : "Réalisation d'un template de site web idéal pour un restaurant avec un système de prise de commande en ligne"
      },
      {
        id : 5,
        title : "Élections",
        image : "../../../assets/img/projects/fecabasket-campain.png",
        summary : "Réalisation du site web de campagne pour la présidence d'une organisation sportive de basketball"
      },
      {
        id : 6,
        title : "Sscovid19",
        image : "../../../assets/img/projects/sscovid19.png",
        summary : "Réalisation d'une application web qui permet de suivre l'évolution de l'épidémie de la covid-19 dans le monde"
      }
    ]
  }

  initProjectData(){

    return this.projectsListAllData = [

      {
            id: 1,
            image: "../../../assets/img/projects/sscovid19-devices.png",
            link:"https://sscovid19.com",
            who:[
              {
                message:"<b>SSCOVID19</b> est une application web qui présente l'état d'évolution de la covid-19 dans le monde."
              }
            ],
            why:[
              {
                message: "C'est un projet personnel que j'ai réalisé dans le but de participer activement dans la lutte contre la covid en permettant à quiconque de consulter les chiffres clés de la pandémie. "
              },
              {
                message: "Il prend en compte les données de plus de 215 pays et les affiche via des graphes et des tableaux représentants les chiffres enregistrés par pays et par continent."
              }
            ],
            requirement_intro:"Quelles sont les spécifités de ce projet ?",
            requirements:[
              {
                message: "présentation des chiffres mondiaux de la pandémie "
              },
              {
                message: "présentation des chiffres par continents et par pays"
              },
              {
                message: "visualisation de l'évolution de la maladie et d'évolution des vaccinations ( depuis janvier 2020 ) via des graphes"
              },
              {
                message: "présentation de la carte du monde avec des indicateurs de couleur suivant la gravité des cas dans différents pays" 
              },
              {
                message: "Mise à jour des bases de données toutes les 45 minutes"
              }
            ],

            estate: "terminé",

            technologies:[
              {
                name: "Angular 11",
                image: "../../../assets/img/logos/angular_logo.png"
              },
              {
                name: "Node js",
                image: "../../../assets/img/logos/node_logo.png"
              },
              {
                name: "Express js",
                image: "../../../assets/img/logos/express_logo.png"
              },
              {
                name: "PostgreSQL",
                image: "../../../assets/img/logos/postgres_logo.png"
              },
              {
                name: "AmCharts",
                image: "../../../assets/img/logos/amcharts_logo.png"
              },
              {
                name: "Google Analytics",
                image: "../../../assets/img/logos/google_analytics_logo.png"
              },
              {
                name: "o2Switch",
                image: "../../../assets/img/logos/o2switch_logo.png"
              },
              {
                name: "Github",
                image: "../../../assets/img/logos/github.png"
              }
            ]
      },
      {
        id: 2,
            image: "../../../assets/img/projects/restaurant-responsive.png",
            link:"https://restaurant.sm-digitalizer.fr",
            who:[
              {
                message:"Je me suis proposé de réaliser un système complet de gestion de site web de restaurant."
              }
            ],
            why:[
              {
                message: "J'ai cherché au travers de ce projet à créer un excellent outil à destinantion des restaurants leurs permettant de présenter des plats et services proposés tout en optimisant la prise de commande client. Les commandes sont passées directement sur le site web par le client et le restaurant les reçoit directement par mail et aussi dans la partie admin sécurisée. Cette partie admin permet aussi de gérer les produits pésentés sur le site web."
              }
            ],
            estate: "terminé",

            technologies:[
              {
                name: "Angular 12",
                image: "../../../assets/img/logos/angular_logo.png"
              },
              {
                name: "Prime ng",
                image: "../../../assets/img/logos/primeng_logo.png"
              },
              {
                name: "Sass",
                image: "../../../assets/img/logos/scss_logo.png"
              },
              {
                name: "Node js",
                image: "../../../assets/img/logos/node_logo.png"
              },
              {
                name: "Express js",
                image: "../../../assets/img/logos/express_logo.png"
              },
              {
                name: "MongoDB Atlas",
                image: "../../../assets/img/logos/mongodb_logo.png"
              },
              {
                name: "JWT",
                image: "../../../assets/img/logos/json_web_token_logo.png"
              },
              {
                name: "o2switch",
                image: "../../../assets/img/logos/o2switch_logo.png"
              },
              {
                name: "Adobe XD",
                image: "../../../assets/img/logos/adobe_logo.png"
              },
              {
                name: "Github",
                image: "../../../assets/img/logos/github.png"
              }
            ]
      },
      {
        id: 3,
            image: "../../../assets/img/projects/ev-responsive.png",
            link:"https://elites-voyages.com",
            who:[
              {
                message:"<b>ELITES VOYAGES</b>  est une agence de voyage et de tourisme située au Cameroun."
              }
            ],
            why:[
              {
                message: "Voulant se rapprocher d'avantage de sa clientèle grandissante, elle a décidé de se doter d'un site web lui permettant de fournir un service de qualité aux clients. "
              },
              {
                message: "Après un ensemble de réunions au bouts desquelles je leur ai présenté le design du site web et les interfaces utilisateurs de la solution que je proposais, nous sommes tombés d'accord. Étant donné qu'elle ne possedait pas d'ancienne solution , j'ai dû tout créer de rien y compris le logo."
              }
            ],
            requirement_intro:"Les exigences de ce site web étaient les suivantes: ",
            requirements:[
              {
                message: "achat du nom de domaine"
              },
              {
                message: "création du logo"
              },
              {
                message: "création d'adresses mails professionnelles"
              },
              {
                message: "présentation des services de l'entreprise via des design de qualité"
              },
              {
                message: "création de différents formulaires d'accès aux services (Réservation de billet d'avions, hôtel, appartements meublé, location voiture, expédition DHL, ...) "
              },
              {
                message: "présentation des services proposés par des entreprises partenanires"
              },
              {
                message: "création d'une partie administrateur sécurisée destinée à la gestion et mise à jour du site web ( gestion de tourisme, gestion des hébergements (appartements meublés et hôtels), dashboard de l'activité de l'entreprise, ..."
              },
              
              {
                message: "optimisation du SEO"
              },
              {
                message: "intégration de fonctionnalités de suivi du parcours utilisateurs sur le site"
              },
              {
                message: "Intégration d'une adaptation de prix suivant les dévises"
              },
              {
                message: "Formation des équipes pour l'utilisation de la partie admin"
              },
              {
                message: "Mise en ligne du site web"
              }
              
            ],

            estate: "terminé",

            technologies:[


              {
                name: "Angular 12",
                image: "../../../assets/img/logos/angular_logo.png"
              },
              {
                name: "Prime ng",
                image: "../../../assets/img/logos/primeng_logo.png"
              },
              {
                name: "Sass",
                image: "../../../assets/img/logos/scss_logo.png"
              },
              {
                name: "Node js",
                image: "../../../assets/img/logos/node_logo.png"
              },
              {
                name: "Express js",
                image: "../../../assets/img/logos/express_logo.png"
              },
              {
                name: "MongoDB",
                image: "../../../assets/img/logos/mongodb_logo.png"
              },
              {
                name: "JWT",
                image: "../../../assets/img/logos/json_web_token_logo.png"
              },
              {
                name: "Amadeus API",
                image: "../../../assets/img/logos/amadeus.png"
              },
              {
                name: "Microanalytics.io",
                image: "../../../assets/img/logos/microanalytics.png"
              },
              {
                name: "o2switch",
                image: "../../../assets/img/logos/o2switch_logo.png"
              },
              {
                name: "Adobe XD",
                image: "../../../assets/img/logos/adobe_logo.png"
              },
              {
                name: "Github",
                image: "../../../assets/img/logos/github.png"
              }
            ]
          
      },
      {
        id: 4,
            image: "../../../assets/img/projects/yves-tsala-devices.png",
            link:"https://root.yvestsala2022.com",
            who:[
              {
                message:"Le directeur de campagne du candidat Yves Tsala, candidat aux éléctions 2022 pour la présidence de la Fédération camerounaise de basket-ball ( FECABASKET )  m'a contacté pour un besoin de création, suivi et maintient du site web de campagne de son candidat."
              }
            ],
            why:[
              {
                message: "Le besoin manifesté a été de créer un outil de communication de qualité permettant de présenter sa vision et son projet pour le basketball camerounais. "
              }
            ],
            requirement_intro:"Les exigences de ce projet sont les suivantes: ",
            requirements:[
              {
                message: "réaliser les maquettes du site web permettant au candidat de se présenter, présenter son QG de campagne, sa vision et son projet de la façon la plus optimale possible"
              },
              {
                message: "rendre le site web consultable sur tous types de devices"
              },
              {
                message: "créer des bouttons de partage avec un contenu pré-construit à destination des différents réseaux sociaux"
              },
              {
                message: "rediriger les utilisateurs vers les plateformes de réceptions de dons créées pour soutenir la campagne"
              },
              {
                message: "créer une partie administrateur sécurisée qui permet de mettre à jour le calendrier d'évènements de campagne visible sur le site web"
              }
            ],

            estate: "terminé",

            technologies:[
              {
                name: "Angular 13",
                image: "../../../assets/img/logos/angular_logo.png"
              },
              {
                name: "Prime ng",
                image: "../../../assets/img/logos/primeng_logo.png"
              },
              {
                name: "Node js",
                image: "../../../assets/img/logos/node_logo.png"
              },
              {
                name: "Express js",
                image: "../../../assets/img/logos/express_logo.png"
              },
              {
                name: "MongoDB Atlas",
                image: "../../../assets/img/logos/mongodb_logo.png"
              }
              ,
              {
                name: "passport js",
                image: "../../../assets/img/logos/passportjs.png"
              },
              {
                name: "o2switch",
                image: "../../../assets/img/logos/o2switch_logo.png"
              },
              {
                name: "Adobe XD",
                image: "../../../assets/img/logos/adobe_logo.png"
              },
              {
                name: "Github",
                image: "../../../assets/img/logos/github.png"
              }
            ]
      },
      {
        id: 5,
            image: "../../../assets/img/projects/foryou-media-afrique-logo.png",
            link:"",
            who:[
              {
                message:"<b>For You Media Africa</b> est une chaîne de télévision et de radio panafricaine basée au Cameroun à Douala.</b>"
              }
            ],
            why:[
              {
                message: "La chaine possédait déjà un premier site web mais ce dernier ne répondait plus à ses exigences. Aussi, la chaine a souhaité rajouter de nouvelles fonctionnalités mais il s'est posé de nombreux problèmes d'implémentation provenant du mauvais choix de technologies. Après une analyse de l'existant, j'ai proposé des maquettes qui ont été validées et ensuite s'est suivi la phase de réalisation."
              }
            ],
            requirement_intro:"Les exigences de ce projet sont les suivantes: ",
            requirements:[
              {
                message: "achat du nouveau nom de domaine"
              },
              {
                message: "création d'adresses mails professionnelles"
              },
              {
                message: "design des maquettes et développement"
              },
              {
                message: "implémentation de la réception de dons à l'endroit de la chaine. Dons reçu par paypal et virements bancaires"
              },
              {
                message: "création d'une partie administrateur sécurisée qui permet de gérer et de mettre à jour l'application web à destination du publique ( céation et mise à jour des types d'émissions, programmes, replay ... )"
              },
              {
                message: "mise en production de la partie admin et publique"
              },
              {
                message: "maintenance et rajout de fonctionnalités"
              }
            ],

            estate: "en cours",

            technologies:[
              {
                name: "Angular 13",
                image: "../../../assets/img/logos/angular_logo.png"
              },
              {
                name: "Prime ng",
                image: "../../../assets/img/logos/primeng_logo.png"
              },
              {
                name: "Node js",
                image: "../../../assets/img/logos/node_logo.png"
              },
              {
                name: "Express js",
                image: "../../../assets/img/logos/express_logo.png"
              },
              {
                name: "MongoDB",
                image: "../../../assets/img/logos/mongodb_logo.png"
              }
              ,
              {
                name: "passport js",
                image: "../../../assets/img/logos/passportjs.png"
              },
              {
                name: "Google Analytics",
                image: "../../../assets/img/logos/google_analytics_logo.png"
              },
              {
                name: "o2switch",
                image: "../../../assets/img/logos/o2switch_logo.png"
              },
              {
                name: "Adobe XD",
                image: "../../../assets/img/logos/adobe_logo.png"
              },
              {
                name: "Github",
                image: "../../../assets/img/logos/github.png"
              }
            ]
      },
      {
        id: 6,
        name : "Amadou Bâ 2024",
        activity : "Campagne présidentielles sénégalaise 2024",
        summary : "Application web de promotion du candidat Amadou BÂ pour les élections présidentielles. Développement et test Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum debitis similique numquam molestias vitae autem maxime rem?",
        isAppOnline : true,
        links : [
          {
            type : "public",
            link : "https://amadou-ba.sn"
          },
          {
            type : "admin",
            link : "https://amadou-ba.sn"
          }
        ],
        context : "Dans le contexte des élections présidentielles de 2024 au Sénégal, l'équipe de campagne d'Amadou Ba cherchait à établir une plateforme numérique inclusive et informative. Cette plateforme devait être conçue non seulement pour promouvoir la vision politique du candidat, mais aussi pour offrir aux électeurs un accès direct à des informations claires et crédibles concernant ses propositions, son programme politique, son parcours et ses activités de campagne.",
        solutions : {
          intro : "Dans le contexte des élections présidentielles de 2024 au Sénégal, l'équipe de campagne d'Amadou Ba cherchait à établir une plateforme numérique inclusive et informative.",
          proposals : [
            {
              type : "public",
              lists : [
                {
                  header : "Application web intuitive",
                  detail : "Des contenus dynamiques conçus pour captiver instantanément l'attention des visiteurs"
                },
                {
                  header : "Application web engageante",
                  detail : "Mise en avant des messages, de l'idéoplogie et des éléments clés de la campagne candidat"
                },
                {
                  header : "Live Streaming Intégré",
                  detail : "L'intégration d'un système de streaming en direct permet de diffuser les discours et les événements du candidat en temps réel, favorisant ainsi une interaction directe avec les électeurs"
                },
                {
                  header : "Application web rapide et responsive",
                  detail : "S'assurer que les visiteurs puissent avoir accès à l'application depuis n'importe quelle appareil"
                }
              ]
            },
            {
              type : "admin",
              lists : [
                {
                  header : "Authentification sécurisée",
                  detail : "L'accès à la partie admin est restreinte à l'équipe de campagne du candidat"
                },
                {
                  header : "Système de gestion des articles de blog",
                  detail : "Mise en place d'une plateforme d'administration sécurisée permettant à l'équipe de campagne de créer des articles de blog sur l'actualité politique du candidat"
                },
                {
                  header : "Système de gestion l'agenda de campagne",
                  detail : "Développement d'un outil de gestion d'agenda pour organiser et programmer efficacement les événements de la campagne"
                },
                {
                  header : "Système de gestion des replays",
                  detail : "Connexion avec l'API Youtube de google pour récupérer les replays des événements passés classés par catégories, facilitant ainsi l'accès à ces informations pour référence ultérieure."
                },
                {
                  header : "Gestion des Ambassadeurs de campagne inscrits",
                  detail : "Développement d'un outil de gestion d'agenda pour organiser et programmer efficacement les événements de la campagne"
                }
              ]
            }
          ]
        },
        work : {
          intro : [
            "Développement d'un outil de gestion d'agenda pour organiser et programmer efficacement les événements de la campagne",
            "Connexion avec l'API Youtube de google pour récupérer les replays des événements passés classés par catégories, facilitant ainsi l'accès à ces informations pour référence ultérieure."
          ],
          steps : [
            {
              icon : "pi pi-question-circle",
              header : "Analyse des besoins",
              texts : [
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum dolore tempore odio consequuntur ?",
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit.?"
              ]
            },
            {
              icon : "pi pi-palette",
              header : "Conception graphique",
              texts : [
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit.?"
              ]
            },
            {
              icon : "pi pi-code",
              header : "Développement et test",
              texts : [
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum dolore tempore odio consequuntur pariatur alias sint hic aut, debitis similique numquam molestias vitae autem maxime rem expedita cum ex placeat?",
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit.?"
              ]
            },
            {
              icon : "pi pi-share-alt",
              header : "Formation et documentation",
              texts : [
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum dolore tempore odio consequuntur pariatur alias sint hic aut, debitis similique numquam molestias vitae autem maxime rem expedita cum ex placeat?",
              ]
            },
            {
              icon : "pi pi-globe",
              header : "Mise en production",
              texts : [
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum dolore tempore odio consequuntur pariatur alias sint hic aut, debitis similique numquam molestias vitae autem maxime rem expedita cum ex placeat?",
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit.?"
              ]
            }
          ]
        },
        technos:[
          {
            name: "Angular 15",
            image: "../../../assets/img/logos/angular_logo.png"
          },
          {
            name: "Prime ng",
            image: "../../../assets/img/logos/primeng_logo.png"
          },
          {
            name: "Node js",
            image: "../../../assets/img/logos/node_logo.png"
          },
          {
            name: "Express js",
            image: "../../../assets/img/logos/express_logo.png"
          },
          {
            name: "MongoDB",
            image: "../../../assets/img/logos/mongodb_logo.png"
          }
          ,
          {
            name: "passport js",
            image: "../../../assets/img/logos/passportjs.png"
          },
          {
            name: "Google Analytics",
            image: "../../../assets/img/logos/google_analytics_logo.png"
          },
          {
            name: "o2switch",
            image: "../../../assets/img/logos/o2switch_logo.png"
          },
          {
            name: "Adobe XD",
            image: "../../../assets/img/logos/adobe_logo.png"
          },
          {
            name: "Github",
            image: "../../../assets/img/logos/github.png"
          }
        ],
        images : [
          "../../../assets/img/projects/ab-home.png",
          "../../../assets/img/projects/ab-home-articles.png",
          "../../../assets/img/projects/ab-campain-ambassador.png",
          "../../../assets/img/projects/ab-pograms.png",
          "../../../assets/img/projects/ab-pact.png",
          "../../../assets/img/projects/ab-live.png",
          "../../../assets/img/projects/ab-agenda-event.png"
        ]
      }
    ]
  }

  getProjectData(id : number){

    let projectData: any;

    let projectsListAllData = this.initProjectData();

    projectsListAllData.forEach(project =>{
      if( project.id === id ){
        projectData = project;
      }
    })

    return projectData;
  }
  
}
