const pagesRouter = require("express").Router();
const TODOSLOSFOOTERS = require("../controladores/paginas/footer.controladores")
const ALLTITLES = require("../controladores/paginas/titles.controladores")
const ALLDESCRIPTIONS = require("../controladores/paginas/descriptions.controladores");
const { getItems, createItems } = require("../controladores/paginas/items.controlers");
const { getAbout, createAbout } = require("../controladores/paginas/aboutTeam/aboutTeam.controladores");
const { getAreas, createAreas } = require("../controladores/paginas/areas/areas.controladores");
const { getTestimonials, createTestimonials } = require("../controladores/paginas/testimonials/testimonials.controladores");
const { createLegendsAbout, getLegendsAbout } = require("../controladores/paginas/aboutTeam/aboutLegend.controladores");
const { createTitleAbout, getTitleAbout } = require("../controladores/paginas/aboutTeam/aboutTitle.controladores");
const { getDescriptionsAbout, createDescriptionsAbout } = require("../controladores/paginas/aboutTeam/descriptionsAbout.controladores");
const { getLegendsAreas, createLegendsAreas } = require("../controladores/paginas/areas/legendAreas.controladores");
const { getTitleAreas, createTitleAreas } = require("../controladores/paginas/areas/titleAreas.controladores");
const { getDescriptionAreas, createDescriptionAreas } = require("../controladores/paginas/areas/descriptionAreas.controladores");
const { getTitleTest, createTitleTest } = require("../controladores/paginas/testimonials/titleTestimonials.controladores");
const { getLegendsTest, createLegendsTest } = require("../controladores/paginas/testimonials/legendTestimonials.controladores");
const { getDescriptionsTest, createDescriptionsTest } = require("../controladores/paginas/testimonials/descriptionsTestimonials.controladores");
const { getActionFeatures, createActionFeatures } = require("../controladores/paginas/features/actionsFeatures.controladores");
const { getDescriptionFeatures, createDescriptionFeatures } = require("../controladores/paginas/features/descriptionsFeatures.controladores");
const { getFooter, createFooter } = TODOSLOSFOOTERS
const { getTitles, createTitles } = ALLTITLES
const { getDescriptions, createDescriptions } = ALLDESCRIPTIONS




///////////////////Footer y arbol
pagesRouter.route("/footer")
    .get(getFooter)//////////// name teampUP /////NAVBAR
    .post(createFooter)

pagesRouter.route("/footer/id")
    .get()
    .put()
    .delete()

pagesRouter.route("/title")
    .get(getTitles) ////////// 1Contacto 2contenido 3politicas ///// 4 EN ADELANTE 4 ??QUE HACEMOS? 5 AREAS ....
    .post(createTitles)

pagesRouter.route("/title/id")
    .get()
    .put()
    .delete()

pagesRouter.route("/descriptions")
    .get(getDescriptions) ////////numero , mail, localidad, 
    .post(createDescriptions)

pagesRouter.route("/descriptions/id")
    .get()
    .put()
    .delete()

pagesRouter.route("/items")
    .get(getItems) ////// imagenes
    .post(createItems)

pagesRouter.route("/items/id")
    .get()
    .put()
    .delete()

///////////////////// FIN DE FOOTER










////////////////////////// ABOUT Y ARBOL



pagesRouter.route("/aboutteam")
    .get(getAbout) ///// QUE HACEMOS?
    .post(createAbout)

pagesRouter.route("/aboutteam/id")
    .get()
    .put()
    .delete()




pagesRouter.route("/legendAbout")
    .get(getLegendsAbout) /////////// EN TEAMUP CONECTAMOS ....
    .post(createLegendsAbout)

pagesRouter.route("/legendAbout/id")
    .get()
    .put()
    .delete()


pagesRouter.route("/titleAbout")
    .get(getTitleAbout)  ////////////VOLUNTARIO Y EMPRESARIO
    .post(createTitleAbout)

pagesRouter.route("/titleAbout/id")
    .get()
    .put()
    .delete()


pagesRouter.route("/descriptionsAbout")
    .get(getDescriptionsAbout) ////////////// 1 OBTIENES EXPERIENCIA LABORAL ....
    .post(createDescriptionsAbout)

pagesRouter.route("/descriptionsAbout/id")
    .get()
    .put()
    .delete()




////////////////////////// FIN DE ABOUT










//////////////////////////  AREAS Y ARBOL



pagesRouter.route("/areas")
    .get(getAreas) ////// ??REAS
    .post(createAreas)

pagesRouter.route("/areas/id")
    .get()
    .put()
    .delete()

pagesRouter.route("/legendAreas")
    .get(getLegendsAreas) /////////// TENEMOS OPORTUNIDADES EN ESTAS AREAS
    .post(createLegendsAreas)

pagesRouter.route("/legendAbout/id")
    .get()
    .put()
    .delete()


pagesRouter.route("/titleAreas")
    .get(getTitleAreas)  //////////// MARKETING DIGITAL DISE??O GR??FICO Y AUDIOVISUAL
    .post(createTitleAreas)

pagesRouter.route("/titleAreas/id")
    .get()
    .put()
    .delete()

pagesRouter.route("/descriptionAreas")
    .get(getDescriptionAreas)
    .post(createDescriptionAreas)

pagesRouter.route("/descriptionAreas/id")
    .get()
    .put()
    .delete()



////////////////////////// FIN DE AREAS


///////////////////////// CARACTERISTICAS
pagesRouter.route("/actionFeatures")
    .get(getActionFeatures)
    .post(createActionFeatures)

pagesRouter.route("/actionFeatures/id")
    .get()
    .put()
    .delete()

pagesRouter.route("/descriptionFeatures") /////////teamUp te ofrece... VOLUNTARIADO HORARIO FLEXIBLE 100% Remoto Sujeto al cumplimiento de objetivos
    .get(getDescriptionFeatures)
    .post(createDescriptionFeatures)

pagesRouter.route("/descriptionFeatures/id")
    .get()
    .put()
    .delete()


///////////////////////// FIN CARACTERISTICAS






/////////////////////////////// TESTIMONIOS 






pagesRouter.route("/testimonials")
    .get(getTestimonials)
    .post(createTestimonials)

pagesRouter.route("/testimonials/id")
    .get()
    .put()
    .delete()

pagesRouter.route("/legendTestimonials")
    .get(getLegendsTest)
    .post(createLegendsTest)

pagesRouter.route("/legendTestimonials/id")
    .get()
    .put()
    .delete()

pagesRouter.route("/tittleTestimonials")
    .get(getTitleTest)
    .post(createTitleTest)

pagesRouter.route("/tittleTestimonials/id")
    .get()
    .put()
    .delete()

pagesRouter.route("/descriptionsTest")
    .get(getDescriptionsTest)
    .post(createDescriptionsTest)

pagesRouter.route("/descriptionsTest/id")
    .get()
    .put()
    .delete()

/////////////////////////////// FIN DE TESTIMONIOS







module.exports = pagesRouter