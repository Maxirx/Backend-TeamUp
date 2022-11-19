const { descriptionsTestimonials } = require("../../../basededatos")



const ALLDESCRIPTIONSTEST = {
    getDescriptionsTest: async (req, res) => {

        try {
            const dato = ["https://bucketvideosteamup.s3.us-east-1.amazonaws.com/Testimonio%20Final%20Pa%C3%ADs%20de%20Ra%C3%ADz.mp4?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXNhLWVhc3QtMSJIMEYCIQCt4Tvr4wy1PfLgLiz8LeBh8hu4uIIjqdLBsloykgBT3wIhALIe1lUUH5jeNpFCmGyLjdOqMc%2FPXPFpBb4dD4i3x5b2KvsCCEgQABoMODEzNzYwNDUyMDM2Igzv1yqgqYbqcYb4sw4q2AKZ7CX5wBdTwqIDPsYk4GMrF2OKD%2BGehJPFmNqpu3FtHlea4w%2FXRrVRkPqzV5zaO4wWXggzVw8UOdHUdCiz3IS6SkOSmdqHXz5BoQkonZj8yGB53g%2BasselYDpneboqcFwIkRVYoj%2B%2FTsijVQUMUqCX2KDzQyk%2FOz9BlVl%2Ftbl4icg5%2BumT3%2Bj2682dluabAMb5syPbt%2FPWef9S5LuM%2B%2BZd8%2Bqb1E3CNTq47wfQBMxyQuzJ%2BRmk6gJBl4326%2BHAh%2FF4DDBKR%2BUoGBRfqbFK43ZOPaWdsQw7txl3G5JZNkk0zpotRqsdK32k0NKABKIP%2FcxNpevPVg2IpO7e9FTXqzT4%2BhCrcuguLI6i30pamkXESFiHjoRjvpqYQIP910TfX%2FRXfIAYIYkdzVERCE5D53B3S3KWpuBfuuxv1XHMAUDemxsfKr4NNZIV4WYIxZk5161GFOMEyd36wjDqtN6bBjqyAkUx2lgOlMjUXTBTjuLnyKuIVE%2FkT92ovyvoH0NnCKbryqorvUFobiJIcg3A7IkCIgG%2F9ffpbblDCpps8noDkSAXKxAMUHQMWynV%2FU5N9UvmhqLl%2F1SelzT3GZ03CzebCzu7HQl6bM2YjKJgoKFLvELx9qtW4BRXumzUg1W6ur%2BbSO3DYohxbO%2BFlZMTk0IVnZbGEQZ0hnjaWNoKv2YtdsqQF%2Fc61PnXlH2baJtV2EUvn%2BNRQppKHF4YYIilIJgvYpY7Zye%2F7XCfH8SZaeyblcLR8lB7UsapNGF02kDUj%2B49Sirb8rNyhpE2UBplS9GuuWoGLmFSBkHC1ny7laLff7XK5IHOopl7M2URtkrIuk4wi1oh7pS6VeICEhIgq8jqIRDID6Q6Gfdi4jARQJDEAMr0Xg%3D%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20221118T144727Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIA3257HCXCHZEVNTCH%2F20221118%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=9bfdefb3872312bc0b6f20b2c4b50be7526404ffe36e0379abc901be6423bc01",
                "https://bucketvideosteamup.s3.us-east-1.amazonaws.com/drive-download-20221116T225907Z-001/Testimonio%20Final%20Jojoto.mp4?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXNhLWVhc3QtMSJIMEYCIQCt4Tvr4wy1PfLgLiz8LeBh8hu4uIIjqdLBsloykgBT3wIhALIe1lUUH5jeNpFCmGyLjdOqMc%2FPXPFpBb4dD4i3x5b2KvsCCEgQABoMODEzNzYwNDUyMDM2Igzv1yqgqYbqcYb4sw4q2AKZ7CX5wBdTwqIDPsYk4GMrF2OKD%2BGehJPFmNqpu3FtHlea4w%2FXRrVRkPqzV5zaO4wWXggzVw8UOdHUdCiz3IS6SkOSmdqHXz5BoQkonZj8yGB53g%2BasselYDpneboqcFwIkRVYoj%2B%2FTsijVQUMUqCX2KDzQyk%2FOz9BlVl%2Ftbl4icg5%2BumT3%2Bj2682dluabAMb5syPbt%2FPWef9S5LuM%2B%2BZd8%2Bqb1E3CNTq47wfQBMxyQuzJ%2BRmk6gJBl4326%2BHAh%2FF4DDBKR%2BUoGBRfqbFK43ZOPaWdsQw7txl3G5JZNkk0zpotRqsdK32k0NKABKIP%2FcxNpevPVg2IpO7e9FTXqzT4%2BhCrcuguLI6i30pamkXESFiHjoRjvpqYQIP910TfX%2FRXfIAYIYkdzVERCE5D53B3S3KWpuBfuuxv1XHMAUDemxsfKr4NNZIV4WYIxZk5161GFOMEyd36wjDqtN6bBjqyAkUx2lgOlMjUXTBTjuLnyKuIVE%2FkT92ovyvoH0NnCKbryqorvUFobiJIcg3A7IkCIgG%2F9ffpbblDCpps8noDkSAXKxAMUHQMWynV%2FU5N9UvmhqLl%2F1SelzT3GZ03CzebCzu7HQl6bM2YjKJgoKFLvELx9qtW4BRXumzUg1W6ur%2BbSO3DYohxbO%2BFlZMTk0IVnZbGEQZ0hnjaWNoKv2YtdsqQF%2Fc61PnXlH2baJtV2EUvn%2BNRQppKHF4YYIilIJgvYpY7Zye%2F7XCfH8SZaeyblcLR8lB7UsapNGF02kDUj%2B49Sirb8rNyhpE2UBplS9GuuWoGLmFSBkHC1ny7laLff7XK5IHOopl7M2URtkrIuk4wi1oh7pS6VeICEhIgq8jqIRDID6Q6Gfdi4jARQJDEAMr0Xg%3D%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20221118T144959Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIA3257HCXCHZEVNTCH%2F20221118%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=f3302c6fddf531409801c48dc1a2faa493f065cc6f1f6f00249b00cd45bfd86d"]
            res.send(dato)
        } catch (error) {
            return res.json({ message: error.message })
        }



    },

    createDescriptionsTest: async (req, res) => {


        try {
            const {
                name
            } = req.body
            const dato = await descriptionsTestimonials.create({
                name

            })

            res.send(dato)



        } catch (error) {
            return res.json({ message: error.message })
        }

    }
}

module.exports = ALLDESCRIPTIONSTEST 
