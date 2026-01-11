import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Product from '#models/product'
import Brand from '#models/brand'
import Stock from '#models/stock'
import StockProduct from '#models/stock_product'

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
      { name: 'Sol', imagen: 'https://www.sol.com/media/5wjikgci/sol-logo.png' }
    ])

    await StockProduct.createMany(
      [
    /*1*/    { name: 'Charola Corona Light', imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcQQhk4R8-cPGXSUwAeO0-yMcp3geOO0Yz-g&s', price: 360.00, contentUnits: 24, brandId: 1,stockProductId: 1 },
    /*2*/    { name: 'Charola Modelo', imagen: 'https://lamaschiquita.com/cdn/shop/products/1262_800x.jpg?v=1576946831', price: 440.00, contentUnits: 24, brandId: 2,stockProductId: 2 },
    /*3*/    { name: 'Charola Extra', imagen: 'https://lamaschiquita.com/cdn/shop/products/1879_charola_de_cerveza_corona_extra_1024x.jpg?v=1578673572', price: 360.00, contentUnits: 24, brandId: 3,stockProductId: 3 },
    /*4*/    { name: 'Charola Victoria', imagen: 'https://chedrauimx.vtexassets.com/arquivos/ids/60155219-800-auto?v=639014425709400000&width=800&height=auto&aspect=true', price: 360.00, contentUnits: 24, brandId: 4,stockProductId: 4 },
    /*5*/    { name: 'Charola Tecate Light', imagen: 'https://lamaschiquita.com/cdn/shop/products/1255_800x.jpg?v=1576893108', price: 360.00, contentUnits: 24, brandId: 5,stockProductId: 5 },
    /*6*/    { name: 'Charola Tecate', imagen: 'https://lamaschiquita.com/cdn/shop/products/1256_800x.jpg?v=1576893032', price: 360.00, contentUnits: 24, brandId: 6,stockProductId: 6 },
    /*7*/    { name: 'Charola Indio', imagen: 'https://lamaschiquita.com/cdn/shop/products/1876_charola_de_cerveza_heineken_600x.jpg?v=1578673616', price: 340.00, contentUnits: 24, brandId: 7,stockProductId: 7 },
    /*8*/    { name: 'Charola Miller', imagen: 'https://http2.mlstatic.com/D_NQ_NP_2X_900481-MLA99452092296_112025-F.webp', price: 456.00, contentUnits: 12, brandId: 8,stockProductId: 8 },
    /*9*/   { name: 'Charola Clamato Sol', imagen: 'https://lamaschiquita.com/cdn/shop/products/1260_1024x.jpg?v=1576893454', price: 150.00, contentUnits: 24, brandId: 9,stockProductId: 9 },
    /*10*/   { name: 'Carton Familia Corona', imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSPPqHrEWPZnQ0NHqbh1-AtTpS7k9hHS7Ciw&s', price: 480.00, contentUnits: 12, brandId: 1,stockProductId: 10 },
    /*11*/   { name: 'Carton Mega Corona', imagen: 'https://static.wixstatic.com/media/2ef5b1_c729b0e09f6b4cfb8fbe3249f323a022~mv2.jpg/v1/fill/w_480,h_382,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/2ef5b1_c729b0e09f6b4cfb8fbe3249f323a022~mv2.jpg', price: 540.00, contentUnits: 12, brandId: 1,stockProductId: 11 },
    /*12*/   { name: 'Carton Familia Victoria', imagen: 'https://lamaschiquita.com/cdn/shop/products/1781_carton_victoria_800x.jpg?v=1578673726', price: 480.00, contentUnits: 12, brandId: 4,stockProductId: 12 },
    /*13*/   { name: 'Carton Mega Victoria', imagen: 'https://lamaschiquita.com/cdn/shop/products/1770_carton_victoria_1024x.jpg?v=1578674016', price: 540.00, contentUnits: 12, brandId: 4,stockProductId: 13 },
    /*14*/   { name: 'Carton Mega Tecate Light', imagen: 'https://lamaschiquita.com/cdn/shop/products/1779_carton_tecate_light_800x.jpg?v=1578673765', price: 540.00, contentUnits: 12, brandId: 5,stockProductId: 14 },
    /*15*/   { name: 'Carton Caguama Miller', imagen: 'https://http2.mlstatic.com/D_NQ_NP_2X_809132-MLA99450774486_112025-F.webp', price: 576.00, contentUnits: 12, brandId: 8,stockProductId: 15 },
    /*16*/   { name: 'Carton Mega Caguama Indio', imagen: 'https://lamaschiquita.com/cdn/shop/products/2803_carton_caguama_indio_1024x.jpg?v=1585937357', price: 540.00, contentUnits: 12, brandId: 7,stockProductId: 16 },
    /*17*/   { name: 'Carton Mega Modelo', imagen: 'https://m.media-amazon.com/images/I/71jnpwS6rCL._AC_UF894,1000_QL80_.jpg', price: 564.00, contentUnits: 12, brandId: 2,stockProductId: 17 }
      ])


    await Product.createMany([
      { name: 'Bote Corona Light', imagen: 'https://chedrauimx.vtexassets.com/arquivos/ids/60165488-800-auto?v=639014451297300000&width=800&height=auto&aspect=true', price: 15.00, contentUnits: 1, brandId: 1, stockProductId: 1 },
      { name: 'Six Corona Light', imagen: 'https://chedrauimx.vtexassets.com/arquivos/ids/60165485-1600-auto?v=639014451294900000&width=1600&height=auto&aspect=true', price: 90.00, contentUnits: 6, brandId: 1, stockProductId: 1 },
      { name: 'Charola Corona Light', imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcQQhk4R8-cPGXSUwAeO0-yMcp3geOO0Yz-g&s', price: 360.00, contentUnits: 24, brandId: 1, stockProductId: 1 },
      { name: 'Familia Corona', imagen: 'https://hebmx.vtexassets.com/arquivos/ids/926610-800-800?v=638958691166400000&width=800&height=800&aspect=true', price: 40.00, contentUnits: 1, brandId: 1, stockProductId: 10 },
      { name: 'Carton Familia Corona', imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSPPqHrEWPZnQ0NHqbh1-AtTpS7k9hHS7Ciw&s', price: 480.00, contentUnits: 12, brandId: 1, stockProductId: 10 },
      { name: 'Mega Corona', imagen: 'https://chedrauimx.vtexassets.com/arquivos/ids/60710984-800-auto?v=639022189773700000&width=800&height=auto&aspect=true', price: 45.00, contentUnits: 1, brandId: 1, stockProductId: 11 },
      { name: 'Carton Mega Corona', imagen: 'https://static.wixstatic.com/media/2ef5b1_c729b0e09f6b4cfb8fbe3249f323a022~mv2.jpg/v1/fill/w_480,h_382,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/2ef5b1_c729b0e09f6b4cfb8fbe3249f323a022~mv2.jpg', price: 540.00, contentUnits: 12, brandId: 1, stockProductId: 11 },
      // modelo products

      { name: 'Bote Modelo', imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTw3MJIiS44f0aRpsGOpc_dyKqw96ld4ncR4A&s', price: 20.00, contentUnits: 1, brandId: 2, stockProductId: 2 },
      { name: 'Six Modelo', imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhPCWKYbtjQqpg-8WjsdaGWq2qvgpX4VlCqA&s', price: 110.00, contentUnits: 6, brandId: 2, stockProductId: 2 },
      { name: 'Charola Modelo', imagen: 'https://lamaschiquita.com/cdn/shop/products/1262_800x.jpg?v=1576946831', price: 440.00, contentUnits: 24, brandId: 2, stockProductId: 2 },
      { name: 'Mega Modelo', imagen: 'https://bodeguitadel8.mx/cdn/shop/files/modelo_mega-removebg-preview_405ac267-3c54-4052-9ad9-b068fdd0f1d5.png?v=1750202671', price: 47.00, contentUnits: 1, brandId: 2, stockProductId: 17 },
      { name: 'Carton Mega Modelo', imagen: 'https://m.media-amazon.com/images/I/71jnpwS6rCL._AC_UF894,1000_QL80_.jpg', price: 564.00, contentUnits: 12, brandId: 2, stockProductId: 17 },

      // extra products // mismos precios que corona light

      { name: 'Bote Extra', imagen: 'https://www.shutterstock.com/image-photo/corona-extra-beer-can-mexican-600nw-2504487911.jpg', price: 15.00, contentUnits: 1, brandId: 3, stockProductId: 3 },
      { name: 'Six Extra', imagen: 'https://chedrauimx.vtexassets.com/arquivos/ids/60155234-800-auto?v=639014425730200000&width=800&height=auto&aspect=true', price: 90.00, contentUnits: 6, brandId: 3, stockProductId: 3 },
      { name: 'Charola Extra', imagen: 'https://lamaschiquita.com/cdn/shop/products/1879_charola_de_cerveza_corona_extra_1024x.jpg?v=1578673572', price: 360.00, contentUnits: 24, brandId: 3, stockProductId: 3 },


      // victoria products // mismos precios que corona light

      { name: 'Bote Victoria', imagen: 'https://chedrauimx.vtexassets.com/arquivos/ids/60710913-800-auto?v=639022189685600000&width=800&height=auto&aspect=true', price: 15.00, contentUnits: 1, brandId: 4, stockProductId: 4 },
      { name: 'Six Victoria', imagen: 'https://images.rappi.com.mx/products/128841456445_ajjcswoykcto_791644644126_xagojgmhgycx_1553073_1.jpeg?e=webp&q=80&d=130x130', price: 90.00, contentUnits: 6, brandId: 4, stockProductId: 4 },
      { name: 'Charola Victoria', imagen: 'https://chedrauimx.vtexassets.com/arquivos/ids/60155219-800-auto?v=639014425709400000&width=800&height=auto&aspect=true', price: 360.00, contentUnits: 24, brandId: 4, stockProductId: 4 },
      { name: 'Familia Victoria', imagen: 'https://lamaschiquita.com/cdn/shop/products/2903_cerv_caguama_victoria_940ml_500x.jpg?v=1588614695', price: 40.00, contentUnits: 1, brandId: 4, stockProductId: 12 },
      { name: 'Carton Familia Victoria', imagen: 'https://lamaschiquita.com/cdn/shop/products/1781_carton_victoria_800x.jpg?v=1578673726', price: 480.00, contentUnits: 12, brandId: 4, stockProductId: 12 },
      { name: 'Mega Victoria', imagen: 'https://lamaschiquita.com/cdn/shop/products/92_500x.jpg?v=1576948100', price: 45.00, contentUnits: 1, brandId: 4, stockProductId: 13 },
      { name: 'Carton Mega Victoria', imagen: 'https://lamaschiquita.com/cdn/shop/products/1770_carton_victoria_1024x.jpg?v=1578674016', price: 540.00, contentUnits: 12, brandId: 4, stockProductId: 13 },

      // tecate ligth products 

      { name: 'Bote Tecate Light', imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSh21Y7Kuc6F-gqq_B1peOmUEt2gu72r8iGFA&s', price: 15.00, contentUnits: 1, brandId: 5, stockProductId: 5 },
      { name: 'Six Tecate Light', imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8VmVX2nSdpOXUN-vxvpf01zTxQhe_a3401g&s', price: 90.00, contentUnits: 6, brandId: 5 , stockProductId: 5 },
      { name: 'Charola Tecate Light', imagen: 'https://lamaschiquita.com/cdn/shop/products/1255_800x.jpg?v=1576893108', price: 360.00, contentUnits: 24, brandId: 5 , stockProductId: 5 },
      { name: 'Mega Tecate Light', imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFcA3r-S5NQSFtm_Haz-WiGn_iw_fuxaj2Xg&s', price: 45.00, contentUnits: 1, brandId: 5, stockProductId: 14 },
      { name: 'Carton Mega Tecate Light', imagen: 'https://lamaschiquita.com/cdn/shop/products/1779_carton_tecate_light_800x.jpg?v=1578673765', price: 540.00, contentUnits: 12, brandId: 5, stockProductId: 14 },

      // tecate rojo products

      { name: 'Bote Tecate', imagen: 'https://chedrauimx.vtexassets.com/arquivos/ids/60709936-800-auto?v=639022187594670000&width=800&height=auto&aspect=true', price: 15.00, contentUnits: 1, brandId: 6 , stockProductId: 6 },
      { name: 'Six Tecate', imagen: 'https://chedrauimx.vtexassets.com/arquivos/ids/60709937/75002459_01.jpg?v=639022187595630000', price: 90.00, contentUnits: 6, brandId: 6, stockProductId: 6 },
      { name: 'Charola Tecate', imagen: 'https://lamaschiquita.com/cdn/shop/products/1256_800x.jpg?v=1576893032', price: 360.00, contentUnits: 24, brandId: 6, stockProductId: 6 },

      // indio products 

      { name: 'Bote Indio', imagen: 'https://lasfuentes.traslacava.mx/wp-content/uploads/2022/08/anis-39.png', price: 15.00, contentUnits: 1, brandId: 7, stockProductId: 7 },
      { name: 'Six Indio', imagen: 'https://images.rappi.com.mx/products/981013805-1619010848558.png', price: 85.00, contentUnits: 6, brandId: 7, stockProductId: 7 },
      { name: 'Charola Indio', imagen: 'https://lamaschiquita.com/cdn/shop/products/1876_charola_de_cerveza_heineken_600x.jpg?v=1578673616', price: 340.00, contentUnits: 24, brandId: 7, stockProductId: 7 },
      { name: 'Mega Indio', imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJXVQMlMmCLWV6e9rgcyBzbvqwTwYAEBNLww&s', price: 45.00, contentUnits: 1, brandId: 7, stockProductId: 16 },
      { name: 'Carton Mega Indio', imagen: 'https://lamaschiquita.com/cdn/shop/products/2803_carton_caguama_indio_1024x.jpg?v=1585937357', price: 540.00, contentUnits: 12, brandId: 7, stockProductId: 16 },

      // miler products 

      { name: 'Laton Miller', imagen: 'https://arteli.vtexassets.com/arquivos/ids/254801/7503024416220_00.jpg?v=638635800398330000', price: 38.00, contentUnits: 1, brandId: 8, stockProductId: 8 },
      { name: 'Charola Miller', imagen: 'https://http2.mlstatic.com/D_NQ_NP_2X_900481-MLA99452092296_112025-F.webp', price: 456.00, contentUnits: 12, brandId: 8, stockProductId: 8 },
      { name: 'Caguama Miller', imagen: 'https://liquor.mn/cdn/shop/products/454930-600x600-A_2048x.jpg?v=1589310411', price: 48.00, contentUnits: 1, brandId: 8, stockProductId: 15 },
      { name: 'Carton Caguama Miller', imagen: 'https://http2.mlstatic.com/D_NQ_NP_2X_809132-MLA99450774486_112025-F.webp', price: 576.00, contentUnits: 12, brandId: 8, stockProductId: 15 },

      // sol products 

      { name: 'Bote Clamato Sol', imagen: 'https://latarasca.net/cdn/shop/files/IMG-0071.jpg?v=1728014477&width=1445', price: 27.00, contentUnits: 1, brandId: 9, stockProductId: 9 },
      { name: 'Charola Clamato Sol', imagen: 'https://lamaschiquita.com/cdn/shop/products/1260_1024x.jpg?v=1576893454', price: 150.00, contentUnits: 24, brandId: 9, stockProductId: 9 }
    ])





    const stockProducts = await StockProduct.all()
    for (const stockProduct of stockProducts) {
      await Stock.create({
        stock_product_id: stockProduct.id,
        total_units: 0 * stockProduct.contentUnits,
        min_stock: 2 * stockProduct.contentUnits,
        name_unit: 'unidad'
      })
    }
  }
}