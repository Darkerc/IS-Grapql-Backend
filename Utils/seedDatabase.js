export default async (sequelize) => {
    await sequelize.models.Usuario.create({
        Nombre: 'Eder',
        PrimerApellido:'Reyes',
        SegundoApellido:'Castellanos',
        Contraseña: '12345',
        TipoUsuario:'Participante',
        FechaNacimiento:'1999-03-01',
        Direccion:'hasvhjd',
        Telefono:'182655',
        Correo:'ederastonmartin@hotmail.com',
        Pais:'Mexico',
        Genero:'Hombre',
        UsuarioImg:'https://vignette.wikia.nocookie.net/ficcion-sin-limites/images/b/b9/58a20c6dc8dd3432c6fa8224.png/revision/latest?cb=20190623213434&path-prefix=es', 
        NSS:'jsbdjkad',
        NoControl:'17301148'
      })

      await sequelize.models.Usuario.create({
        Nombre: 'Nayanci',
        PrimerApellido:'Garcia',
        SegundoApellido:'Rodriguez',
        Contraseña: '12345',
        TipoUsuario:'Nutricionista',
        FechaNacimiento:'1999-02-22',
        Direccion:'hasvhjd',
        Telefono:'182655',
        Correo:'nayanci99@gmail.com',
        Pais:'Mexico',
        Genero:'Mujer',
        UsuarioImg:'https://cdn.pixabay.com/photo/2012/03/01/00/55/flowers-19830__340.jpg',
        NSS:'jsbdjkad',
        NoControl:'17301148'
      })

      await sequelize.models.Usuario.create({
        Nombre: 'Christian Miguel',
        PrimerApellido:'Hernandez',
        SegundoApellido:'Perez',
        Contraseña: '12345',
        TipoUsuario:'Proveedor',
        FechaNacimiento:'1998-12-26',
        Direccion:'hasvhjd',
        Telefono:'182655',
        Correo:'cristian@gmail.com',
        Pais:'Mexico',
        Genero:'Hombre',
        UsuarioImg:'https://c8.alamy.com/compes/gw4882/balon-de-futbol-anonimo-personaje-de-dibujos-animados-usando-un-dedo-de-espuma-gw4882.jpg',
        NSS:'jsbdjkad',
        NoControl:'17301148'
      })
      
      await sequelize.models.Usuario.create({
        Nombre: 'Jesus Leonardo',
        PrimerApellido:'Solano',
        SegundoApellido:'Carrasco',
        Contraseña: '12345',
        TipoUsuario:'Participante',
        FechaNacimiento:'1998-12-26',
        Direccion:'hasvhjd',
        Telefono:'182655',
        Correo:'leonardo99@gmail.com',
        Pais:'Mexico',
        Genero:'Hombre',
        UsuarioImg:'https://images-na.ssl-images-amazon.com/images/I/71-o46CzdiL._SY355_.png',
        NSS:'jsbdjkad',
        NoControl:'17301148'
      })

      await sequelize.models.Usuario.create({
        Nombre: 'Karen del rocio',
        PrimerApellido:'Hernandez',
        SegundoApellido:'Perez',
        Contraseña: '12345',
        TipoUsuario:'Participante',
        FechaNacimiento:'1998-12-26',
        Direccion:'hasvhjd',
        Telefono:'182655',
        Correo:'karen99@gmail.com',
        Pais:'Mexico',
        Genero:'Mujer',
        UsuarioImg:'https://i.pinimg.com/236x/58/ce/d3/58ced3f3305708df4c435f810716c75f.jpg',
        NSS:'jsbdjkad',
        NoControl:'17301148'
      })

      await sequelize.models.Usuario.create({
        Nombre: 'Alex Ignacio',
        PrimerApellido:'Aguilar',
        SegundoApellido:'Cabrera',
        Contraseña: '12345',
        TipoUsuario:'Participante',
        FechaNacimiento:'1998-12-26',
        Direccion:'hasvhjd',
        Telefono:'182655',
        Correo:'alex99@gmail.com',
        Pais:'Mexico',
        Genero:'Hombre',
        UsuarioImg:'https://www1.minijuegosgratis.com/v3/games/thumbnails/232579_1.jpg',
        NSS:'jsbdjkad',
        NoControl:'17301148'
      })

      await sequelize.models.Usuario.create({
        Nombre: 'Miguel Angel',
        PrimerApellido:'Hernandez',
        SegundoApellido:'Cortes',
        Contraseña: '12345',
        TipoUsuario:'Participante',
        FechaNacimiento:'1998-12-26',
        Direccion:'hasvhjd',
        Telefono:'182655',
        Correo:'fenix99@gmail.com',
        Pais:'Mexico',
        Genero:'Hombre',
        UsuarioImg:'https://cdn-3.expansion.mx/dims4/default/70fe9a9/2147483647/strip/true/crop/328x230+0+0/resize/800x561!/quality/90/?url=https%3A%2F%2Fcherry-brightspot.s3.amazonaws.com%2Fmedia%2F2010%2F12%2F10%2Fwikileaks-anonymous.jpg',
        NSS:'jsbdjkad',
        NoControl:'17301148'
      })

      await sequelize.models.NutricionistaPaciente.create({
        FKUsuarioParticipante:1,
        FKUsuarioNutricionista:2
      })

      await sequelize.models.Cita.create({
          FKUsuarioParticipante:1,
          FKUsuarioNutricionista:2,
          FechaCita:new Date(),
          Motivo:"Chequeo de rutina"
      })

      await sequelize.models.Cita.create({
        FKUsuarioParticipante:1,
        FKUsuarioNutricionista:2,
        FechaCita:new Date(),
        Motivo:"Exceso de calorias"
      })

      await sequelize.models.Cita.create({
        FKUsuarioParticipante:1,
        FKUsuarioNutricionista:2,
        FechaCita:new Date(),
        Motivo:"Chequeo de glucosa"
      })
      
      await sequelize.models.Cafeteria.create({
        FKUsuarioProveedor:3,
        Foto:"Foto",
        Edificio:"K",
        Telefono:"9933639466"
      })

      await sequelize.models.Cafeteria.create({
        FKUsuarioProveedor:3,
        Foto:"Foto",
        Edificio:"L",
        Telefono:"9933639466"
      })

      //========= Cafeteria 1
      await sequelize.models.PlatilloProducto.create({
        FKCafeteria:1,
        NombrePlatillo:"Choco pastel",
        Calorias: 500,
        Precio:50,
        PlatilloImg:'https://www.recetin.com/wp-content/uploads/2012/08/pastel_chocolate_microondas.jpg',
        Existencias:50
      })

      await sequelize.models.PlatilloProducto.create({
        FKCafeteria:1,
        NombrePlatillo:"Empanadas Op",
        Calorias: 75,
        Precio:12,
        PlatilloImg:'https://3.bp.blogspot.com/--pYi8OwpjB8/WlWG1uWrbaI/AAAAAAAAG80/XDPtv3ep48ct3nfEiY7DkyylJwHgCH-uACLcBGAs/s1600/empanadas-venezolanas-receta.jpg',
        Existencias:300
      })

      await sequelize.models.PlatilloProducto.create({
        FKCafeteria:1,
        NombrePlatillo:"Jugo de naranja",
        Calorias: 20,
        Precio:15,
        PlatilloImg:'https://i.pinimg.com/600x315/1b/97/9a/1b979ad7aab10ebe134d2e7cdef8cdb6.jpg',
        Existencias:200
      })

      await sequelize.models.PlatilloProducto.create({
        FKCafeteria:1,
        NombrePlatillo:"Bocadillo de pollo",
        Calorias: 150,
        Precio:20,
        PlatilloImg:'https://gastronomiaycia.republica.com/wp-content/photos/bocata_polloaguacHP1.jpg',
        Existencias:100
      })
      //====================================================

      //========== Cafeteria 2

      await sequelize.models.PlatilloProducto.create({
        FKCafeteria:2,
        NombrePlatillo:"Plato con fruta",
        Calorias: 250,
        Precio:25,
        PlatilloImg:'https://lacarta.digital/atrium/wp-content/uploads/2018/05/frutas.jpg',
        Existencias:30
      })

      await sequelize.models.PlatilloProducto.create({
        FKCafeteria:2,
        NombrePlatillo:"Licuado de platano",
        Calorias: 200,
        Precio:25,
        PlatilloImg:'https://t1.uc.ltmcdn.com/images/4/2/9/img_como_hacer_licuado_de_banana_35924_600_square.jpg',
        Existencias:30
      })

      await sequelize.models.PlatilloProducto.create({
        FKCafeteria:2,
        NombrePlatillo:"Tacos al pastos",
        Calorias: 400,
        Precio:10,
        PlatilloImg:'https://i.ytimg.com/vi/F7N3l6XGn-0/hqdefault.jpg',
        Existencias:150
      })

      await sequelize.models.PlatilloProducto.create({
        FKCafeteria:2,
        NombrePlatillo:"Agua mineral",
        Calorias: 0,
        Precio:10,
        PlatilloImg:'https://www.superama.com.mx/Content/images/products/img_large/0750107383050L.jpg',
        Existencias:500
      })
      //===================================================

      await sequelize.models.Pedido.create({
        FKUsuarioParticipante:1,
        PrecioTotal:330,
        CaloriasTotales:450,
        MetodoPago:'Efectivo',
      })

      await sequelize.models.ProductosPedido.create({ 
        FKPedido:1,
        FKPlatillo:1
      })

      await sequelize.models.ProductosPedido.create({
        FKPedido:1,
        FKPlatillo:2
      })
  
}