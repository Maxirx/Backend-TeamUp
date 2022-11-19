const { legendTestimonials } = require("../../../basededatos")



const ALLLEGENDS = {
    getLegendsTest: async (req, res) => {

        try {
            const dato = ["https://bucketvideosteamup.s3.us-east-1.amazonaws.com/Politica_de_privacidad_y_proteccion_de_datos_personales_Teamup.pdf?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXNhLWVhc3QtMSJIMEYCIQCt4Tvr4wy1PfLgLiz8LeBh8hu4uIIjqdLBsloykgBT3wIhALIe1lUUH5jeNpFCmGyLjdOqMc%2FPXPFpBb4dD4i3x5b2KvsCCEgQABoMODEzNzYwNDUyMDM2Igzv1yqgqYbqcYb4sw4q2AKZ7CX5wBdTwqIDPsYk4GMrF2OKD%2BGehJPFmNqpu3FtHlea4w%2FXRrVRkPqzV5zaO4wWXggzVw8UOdHUdCiz3IS6SkOSmdqHXz5BoQkonZj8yGB53g%2BasselYDpneboqcFwIkRVYoj%2B%2FTsijVQUMUqCX2KDzQyk%2FOz9BlVl%2Ftbl4icg5%2BumT3%2Bj2682dluabAMb5syPbt%2FPWef9S5LuM%2B%2BZd8%2Bqb1E3CNTq47wfQBMxyQuzJ%2BRmk6gJBl4326%2BHAh%2FF4DDBKR%2BUoGBRfqbFK43ZOPaWdsQw7txl3G5JZNkk0zpotRqsdK32k0NKABKIP%2FcxNpevPVg2IpO7e9FTXqzT4%2BhCrcuguLI6i30pamkXESFiHjoRjvpqYQIP910TfX%2FRXfIAYIYkdzVERCE5D53B3S3KWpuBfuuxv1XHMAUDemxsfKr4NNZIV4WYIxZk5161GFOMEyd36wjDqtN6bBjqyAkUx2lgOlMjUXTBTjuLnyKuIVE%2FkT92ovyvoH0NnCKbryqorvUFobiJIcg3A7IkCIgG%2F9ffpbblDCpps8noDkSAXKxAMUHQMWynV%2FU5N9UvmhqLl%2F1SelzT3GZ03CzebCzu7HQl6bM2YjKJgoKFLvELx9qtW4BRXumzUg1W6ur%2BbSO3DYohxbO%2BFlZMTk0IVnZbGEQZ0hnjaWNoKv2YtdsqQF%2Fc61PnXlH2baJtV2EUvn%2BNRQppKHF4YYIilIJgvYpY7Zye%2F7XCfH8SZaeyblcLR8lB7UsapNGF02kDUj%2B49Sirb8rNyhpE2UBplS9GuuWoGLmFSBkHC1ny7laLff7XK5IHOopl7M2URtkrIuk4wi1oh7pS6VeICEhIgq8jqIRDID6Q6Gfdi4jARQJDEAMr0Xg%3D%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20221118T145937Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIA3257HCXCHZEVNTCH%2F20221118%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=bac96747fad0b252847957599f5cd3fc93b471eb80dadec7caa461cca643e3db",
                "https://bucketvideosteamup.s3.us-east-1.amazonaws.com/Terminos-y-condiciones-de-uso-teamup.pdf?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXNhLWVhc3QtMSJIMEYCIQCt4Tvr4wy1PfLgLiz8LeBh8hu4uIIjqdLBsloykgBT3wIhALIe1lUUH5jeNpFCmGyLjdOqMc%2FPXPFpBb4dD4i3x5b2KvsCCEgQABoMODEzNzYwNDUyMDM2Igzv1yqgqYbqcYb4sw4q2AKZ7CX5wBdTwqIDPsYk4GMrF2OKD%2BGehJPFmNqpu3FtHlea4w%2FXRrVRkPqzV5zaO4wWXggzVw8UOdHUdCiz3IS6SkOSmdqHXz5BoQkonZj8yGB53g%2BasselYDpneboqcFwIkRVYoj%2B%2FTsijVQUMUqCX2KDzQyk%2FOz9BlVl%2Ftbl4icg5%2BumT3%2Bj2682dluabAMb5syPbt%2FPWef9S5LuM%2B%2BZd8%2Bqb1E3CNTq47wfQBMxyQuzJ%2BRmk6gJBl4326%2BHAh%2FF4DDBKR%2BUoGBRfqbFK43ZOPaWdsQw7txl3G5JZNkk0zpotRqsdK32k0NKABKIP%2FcxNpevPVg2IpO7e9FTXqzT4%2BhCrcuguLI6i30pamkXESFiHjoRjvpqYQIP910TfX%2FRXfIAYIYkdzVERCE5D53B3S3KWpuBfuuxv1XHMAUDemxsfKr4NNZIV4WYIxZk5161GFOMEyd36wjDqtN6bBjqyAkUx2lgOlMjUXTBTjuLnyKuIVE%2FkT92ovyvoH0NnCKbryqorvUFobiJIcg3A7IkCIgG%2F9ffpbblDCpps8noDkSAXKxAMUHQMWynV%2FU5N9UvmhqLl%2F1SelzT3GZ03CzebCzu7HQl6bM2YjKJgoKFLvELx9qtW4BRXumzUg1W6ur%2BbSO3DYohxbO%2BFlZMTk0IVnZbGEQZ0hnjaWNoKv2YtdsqQF%2Fc61PnXlH2baJtV2EUvn%2BNRQppKHF4YYIilIJgvYpY7Zye%2F7XCfH8SZaeyblcLR8lB7UsapNGF02kDUj%2B49Sirb8rNyhpE2UBplS9GuuWoGLmFSBkHC1ny7laLff7XK5IHOopl7M2URtkrIuk4wi1oh7pS6VeICEhIgq8jqIRDID6Q6Gfdi4jARQJDEAMr0Xg%3D%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20221118T150016Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIA3257HCXCHZEVNTCH%2F20221118%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=4c21c0beea27b6d1122c5de5314331c47a494a3128082710f9a8b9a7c5d5f9ee"]
            res.send(dato)
        } catch (error) {
            return res.json({ message: error.message })
        }



    },

    createLegendsTest: async (req, res) => {


        try {
            const {
                name
            } = req.body
            const dato = await legendTestimonials.create({
                name

            })

            res.send(dato)



        } catch (error) {
            return res.json({ message: error.message })
        }

    }
}

module.exports = ALLLEGENDS 
