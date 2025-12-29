import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Product from '#models/product'
import Brand from '#models/brand'

export default class extends BaseSeeder {
  async run() {

    await Brand.createMany([
      { name: 'Corona Ligth', imagen: 'https://www.silvereagle.com/wp-content/uploads/2014/04/Corona-Light-PNG.png' },
      { name: 'Modelo', imagen: 'https://images.seeklogo.com/logo-png/26/2/modelo-especial-logo-png_seeklogo-265826.png' },
      { name: 'Extra', imagen: 'https://cdn.freebiesupply.com/logos/large/2x/corona-extra-1-logo-png-transparent.png' },
      { name: 'Victoria', imagen: 'https://brandlogos.net/wp-content/uploads/2025/05/cerveza_victoria-logo_brandlogos.net_d6wd8.png' },
      { name: 'Tecate ligth', imagen: 'https://logoeps.com/wp-content/uploads/2012/12/tecate-light-vector-logo.png' },
      { name: 'Tecate rojo', imagen: 'https://1000logos.net/wp-content/uploads/2022/11/Tecate-Logo-2015.png' },
      { name: 'Indio', imagen: 'https://heinekenmexico.com/storage/app/uploads/public/654/549/cea/654549cea2a05262472535.png' },
      { name: 'Miler', imagen: 'https://upload.wikimedia.org/wikipedia/en/thumb/4/45/Miller_Brewery_Logo.svg/960px-Miller_Brewery_Logo.svg.png' },
      { name: 'Sol', imagen: 'https://cdn.cookielaw.org/logos/00afdec3-358f-4f2d-8b63-0c71e6f49172/019475ec-19ca-7499-8d94-55845ed49ed4/f0e45cae-efbb-4e2d-a6bf-ad8fe6a95a1c/Sol_Logo1_(1).png' }
    ])
    await Product.createMany([
      { name: 'Bote Corona Light', imagen: 'https://chedrauimx.vtexassets.com/arquivos/ids/60165488-800-auto?v=639014451297300000&width=800&height=auto&aspect=true', price: 15.00, brandId: 1 },
      { name: 'Six Corona Light', imagen: 'https://chedrauimx.vtexassets.com/arquivos/ids/60165485-1600-auto?v=639014451294900000&width=1600&height=auto&aspect=true', price: 90.00, brandId: 1 },
      { name: 'Charola Corona Light', imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcQQhk4R8-cPGXSUwAeO0-yMcp3geOO0Yz-g&s', price: 360.00, brandId: 1 },
      { name: 'Familia Corona', imagen: 'https://hebmx.vtexassets.com/arquivos/ids/926610-800-800?v=638958691166400000&width=800&height=800&aspect=true', price: 40.00, brandId: 1 },
      { name: 'Mega Corona', imagen: 'https://chedrauimx.vtexassets.com/arquivos/ids/60710984-800-auto?v=639022189773700000&width=800&height=auto&aspect=true', price: 45.00, brandId: 1 },

      // modelo products

      { name: 'Bote Modelo', imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTw3MJIiS44f0aRpsGOpc_dyKqw96ld4ncR4A&s', price: 20.00, brandId: 2 },
      { name: 'Six Modelo', imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhPCWKYbtjQqpg-8WjsdaGWq2qvgpX4VlCqA&s', price: 110.00, brandId: 2 },
      { name: 'Charola Modelo', imagen: 'https://lamaschiquita.com/cdn/shop/products/1262_800x.jpg?v=1576946831', price: 440.00, brandId: 2 },
      { name: 'Mega Modelo', imagen: 'https://bodeguitadel8.mx/cdn/shop/files/modelo_mega-removebg-preview_405ac267-3c54-4052-9ad9-b068fdd0f1d5.png?v=1750202671', price: 47.00, brandId: 2 },

      // extra products // mismos precios que corona light

      { name: 'Bote Extra', imagen: 'https://www.shutterstock.com/image-photo/corona-extra-beer-can-mexican-600nw-2504487911.jpg', price: 15.00, brandId: 3 },
      { name: 'Six Extra', imagen: 'https://chedrauimx.vtexassets.com/arquivos/ids/60155234-800-auto?v=639014425730200000&width=800&height=auto&aspect=true', price: 90.00, brandId: 3 },
      { name: 'Charola Extra', imagen: 'https://lamaschiquita.com/cdn/shop/products/1879_charola_de_cerveza_corona_extra_1024x.jpg?v=1578673572', price: 360.00, brandId: 3 },


      // victoria products // mismos precios que corona light

      { name: 'Bote Victoria', imagen: 'https://chedrauimx.vtexassets.com/arquivos/ids/60710913-800-auto?v=639022189685600000&width=800&height=auto&aspect=true', price: 15.00, brandId: 4 },
      { name: 'Six Victoria', imagen: 'https://images.rappi.com.mx/products/128841456445_ajjcswoykcto_791644644126_xagojgmhgycx_1553073_1.jpeg?e=webp&q=80&d=130x130', price: 90.00, brandId: 4 },
      { name: 'Charola Victoria', imagen: 'https://chedrauimx.vtexassets.com/arquivos/ids/60155219-800-auto?v=639014425709400000&width=800&height=auto&aspect=true', price: 360.00, brandId: 4 },
      { name: 'Familia Victoria', imagen: 'https://lamaschiquita.com/cdn/shop/products/2903_cerv_caguama_victoria_940ml_500x.jpg?v=1588614695', price: 40.00, brandId: 4 },
      { name: 'Mega Victoria', imagen: 'https://lamaschiquita.com/cdn/shop/products/92_500x.jpg?v=1576948100', price: 45.00, brandId: 4 },


      // tecate ligth products 

      { name: 'Bote Tecate Light', imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSh21Y7Kuc6F-gqq_B1peOmUEt2gu72r8iGFA&s', price: 15.00, brandId: 5 },
      { name: 'Six Tecate Light', imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8VmVX2nSdpOXUN-vxvpf01zTxQhe_a3401g&s', price: 90.00, brandId: 5 },
      { name: 'Charola Tecate Light', imagen: 'https://lamaschiquita.com/cdn/shop/products/1255_800x.jpg?v=1576893108', price: 360.00, brandId: 5 },
      { name: 'Mega Tecate Light', imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFcA3r-S5NQSFtm_Haz-WiGn_iw_fuxaj2Xg&s', price: 40.00, brandId: 5 },

      // tecate rojo products

      { name: 'Bote Tecate', imagen: 'https://chedrauimx.vtexassets.com/arquivos/ids/60709936-800-auto?v=639022187594670000&width=800&height=auto&aspect=true', price: 15.00, brandId: 6 },
      { name: 'Six Tecate', imagen: 'https://chedrauimx.vtexassets.com/arquivos/ids/60709937/75002459_01.jpg?v=639022187595630000', price: 90.00, brandId: 6 },
      { name: 'Charola Tecate', imagen: 'https://lamaschiquita.com/cdn/shop/products/1256_800x.jpg?v=1576893032', price: 360.00, brandId: 6 },

      // indio products 

      { name: 'Bote Indio', imagen: 'https://lasfuentes.traslacava.mx/wp-content/uploads/2022/08/anis-39.png', price: 15.00, brandId: 7 },
      { name: 'Six Indio', imagen: 'https://images.rappi.com.mx/products/981013805-1619010848558.png', price: 85.00, brandId: 7 },
      { name: 'Charola Indio', imagen: 'https://lamaschiquita.com/cdn/shop/products/1876_charola_de_cerveza_heineken_600x.jpg?v=1578673616', price: 340.00, brandId: 7 },


      // miler products 

      { name: 'Laton Miler', imagen: 'https://arteli.vtexassets.com/arquivos/ids/254801/7503024416220_00.jpg?v=638635800398330000', price: 38.00, brandId: 8 },
      { name: 'Caguama Miler', imagen: 'https://liquor.mn/cdn/shop/products/454930-600x600-A_2048x.jpg?v=1589310411', price: 48.00, brandId: 8 },

      // sol products 

      { name: 'Bote Clamato Sol', imagen: 'https://latarasca.net/cdn/shop/files/IMG-0071.jpg?v=1728014477&width=1445', price: 27.00, brandId: 9 },
    ])

  }
}