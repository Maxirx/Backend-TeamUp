require('dotenv').config();
const { Sequelize } = require('sequelize');
const fs = require('fs');
const path = require('path');




const {
    DB_USER, DB_PASSWORD, DB_HOST, PORTDB, DB_NAME, DATABASE_URL
} = process.env;


const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${PORTDB}/${DB_NAME}?ssl=no-verify`, {
    logging: false,
    /*     native: false, */
});

try {
    sequelize.authenticate();
    console.log('Conexion exitosa a la base de datos');
} catch (error) {
    console.error('no es posible conectarse a la base de datos:', error);
}
const basename = path.basename(__filename);


const modelDefiners = [];




fs.readdirSync(path.join(__dirname, '/Model/modelsPages'))
    .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
    .forEach((file) => {
        modelDefiners.push(require(path.join(__dirname, '/Model/modelsPages', file)));
    });


modelDefiners.forEach(model => model(sequelize))

let entries = Object.entries(sequelize.models);

sequelize.models = Object.fromEntries(entries);

console.log(sequelize.models);

const { legendTestimonials, titleTestimonials, descriptionAreas, descriptionsTestimonials, inPage, areas, aboutTeam, footer, testimonials, titles, items, descriptions, features, actionFeatures, descriptionFeatures, itemDescriptionFeatures, legendAbout, titleAbout, descriptionsAbout, legendAreas, titleAreas } = sequelize.models;


// Relaciones hasMany

//////Relaciones inPage con paginas

inPage.hasMany(areas, {
    foreignKey: "id",
    sourceKey: "fkAreas"
})


areas.belongsTo(inPage, {
    foreignKey: "id",
    targetId: "id"
})

areas.hasMany(legendAreas, {
    foreignKey: "id",
    sourceKey: "fkLegendAreas"
})


legendAreas.belongsTo(areas, {
    foreignKey: "id",
    targetId: "id"
})

legendAreas.hasMany(titleAreas, {
    foreignKey: "id",
    sourceKey: "fkTitleAreas"
})


titleAreas.belongsTo(legendAreas, {
    foreignKey: "id",
    targetId: "id"
})

titleAreas.hasMany(descriptionAreas, {
    foreignKey: "id",
    sourceKey: "fkDescriptionAreas"
})


descriptionAreas.belongsTo(titleAreas, {
    foreignKey: "id",
    targetId: "id"
})





/////////// relaciones del home a testimonials y al arbol

inPage.hasMany(testimonials, {
    foreignKey: "id",
    sourceKey: "fkTestimonials"
})


testimonials.belongsTo(inPage, {
    foreignKey: "id",
    targetId: "id"
})

testimonials.hasMany(legendTestimonials, {
    foreignKey: "id",
    sourceKey: "fkLegendTest"
})


legendTestimonials.belongsTo(testimonials, {
    foreignKey: "id",
    targetId: "id"
})

legendTestimonials.hasMany(titleTestimonials, {
    foreignKey: "id",
    sourceKey: "fkTitleTest"
})


titleTestimonials.belongsTo(legendTestimonials, {
    foreignKey: "id",
    targetId: "id"
})


titleTestimonials.hasMany(descriptionsTestimonials, {
    foreignKey: "id",
    sourceKey: "fkDescriptionsTest"
})


descriptionsTestimonials.belongsTo(titleTestimonials, {
    foreignKey: "id",
    targetId: "id"
})


/////////// relaciones del home a about y al arbol
inPage.hasMany(aboutTeam, {
    foreignKey: "id",
    sourceKey: "fkAboutTeam"
})


aboutTeam.belongsTo(inPage, {
    foreignKey: "id",
    targetId: "id"
})




aboutTeam.hasMany(legendAbout, {
    foreignKey: "id",
    sourceKey: "fkLegendAbout"
})


legendAbout.belongsTo(aboutTeam, {
    foreignKey: "id",
    targetId: "id"
})

legendAbout.hasMany(titleAbout, {
    foreignKey: "id",
    sourceKey: "fkTitleAbout"
})


titleAbout.belongsTo(legendAbout, {
    foreignKey: "id",
    targetId: "id"
})


titleAbout.hasMany(descriptionsAbout, {
    foreignKey: "id",
    sourceKey: "fkDescriptionsAbout"
})


descriptionsAbout.belongsTo(titleAbout, {
    foreignKey: "id",
    targetId: "id"
})


//relaciones del home al footer y arbol

inPage.hasMany(footer, {
    foreignKey: "id",
    sourceKey: "fkFooter"
})


footer.belongsTo(inPage, {
    foreignKey: "id",
    targetId: "id"
})


footer.hasMany(titles, {
    foreignKey: "id",
    sourceKey: "fkTitle"
})


titles.belongsTo(footer, {
    foreignKey: "id",
    targetId: "id"
})

titles.hasMany(descriptions, {
    foreignKey: "id",
    sourceKey: "fkDescriptions"
})


descriptions.belongsTo(titles, {
    foreignKey: "id",
    targetId: "id"
})

descriptions.hasMany(items, {
    foreignKey: "id",
    sourceKey: "fkItems"
})


items.belongsTo(descriptions, {
    foreignKey: "id",
    targetId: "id"
})



///// relaciones del home al features y arbol

inPage.hasMany(features, {
    foreignKey: "id",
    sourceKey: "fkFeatures"
})


features.belongsTo(inPage, {
    foreignKey: "id",
    targetId: "id"
})

features.hasMany(descriptionFeatures, {
    foreignKey: "id",
    sourceKey: "fkDescriptionFeatures"
})


descriptionFeatures.belongsTo(features, {
    foreignKey: "id",
    targetId: "id"
})

descriptionFeatures.hasMany(itemDescriptionFeatures, {
    foreignKey: "id",
    sourceKey: "fkItem"
})


itemDescriptionFeatures.belongsTo(descriptionFeatures, {
    foreignKey: "id",
    targetId: "id"
})

features.hasMany(actionFeatures, {
    foreignKey: "id",
    sourceKey: "fkActionFeatures"
})


actionFeatures.belongsTo(features, {
    foreignKey: "id",
    targetId: "id"
})



module.exports = {
    ...sequelize.models,
    conn: sequelize,
}


