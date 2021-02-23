import { Injectable } from '@angular/core';
import { SettoreMerceologico } from '../models/ads'
import { Utils } from '../utils/utils'

declare var util: any;
declare var imgExample;

@Injectable()
export class ModelPermessi {

    fillColor = '#cccccc';
    icon;
    indirizzo;
    settoreMerceologico;
    odlCode= '';
    header;
    header2;
    LogoSx;
    fotoGis;
    fotoLarg;
    fotoCons;
    fotoPart;

    constructor() {

    }

    async addFoto (tipo,src, ads, titleToIns) {

        var title
        if(titleToIns) title = titleToIns;
        var sources = src;
        if(src.indexOf('file:///')>-1){
          sources = ads.getBase64Img(src).base64;
          //TODO: revert png?
          if(sources.indexOf('base64')==-1) sources = 'data:image/jpg;base64,'+sources;
        }

        var thumbSize = tipo== 'permgis' ? 1400 : 1200
        var resized = await Utils.resizedataURL(sources,-1,thumbSize);

        var foto = {
            base64:resized,
            title:title,
            tipo:tipo
        };

        console.log(foto)
        
        if(tipo=='permgis'){
          this.fotoGis.push(foto)
        }
        if(tipo=='permlarg'){
          this.fotoLarg.push(foto)
        }
        if(tipo=='permcons'){
         this.fotoCons.push(foto)
        }
        if(tipo=='permpart'){
          this.fotoPart.push(foto)
        }
    }

    getFotoLayout(foto,page){
        var fotoLayout1 =  [
             { style: 'image',
                    table: {
                            widths: ['*'],
                            body: [
                                    [ {border:[true,true,true,false],alignment:'center',fit: [460, 480],image:foto[0].base64}
                            
                                   ]
                            ]
                    }
                        
        },{ style: 'text',
                    table: {
                            widths: ['*'],
                            body: [
                                    [{text:'Nome file:'+foto[0].title ,border:[true,false,true,true]}]
                            ]
                    }
                        
        }
        ];

        var fotoLayout2 = [];
        if(foto.length>1)
        fotoLayout2 = [
           { style: 'image',
                    table: {
                            widths: ['*'],
                            body: [
                                    [ {border:[true,true,true,false],alignment:'center',fit: [400, 240],image:foto[0].base64}
                            
                                   ]
                            ]
                    }
                        
        },{ style: 'text',
                    table: {
                            widths: ['*'],
                            body: [
                                    [{text:'Nome file:'+foto[0].title ,border:[true,false,true,true]}]
                            ]
                    }
                        
        }, { style: 'image',
                    table: {
                            widths: ['*'],
                            body: [
                                    [ {border:[true,true,true,false],alignment:'center',fit: [400, 240],image:foto[1].base64}
                                    ]
                            ]
                    }
                        
        },{ style: 'text',
                    table: {
                            widths: ['*'],
                            body: [
                                    [{text:'Nome file:'+foto[1].title ,border:[true,false,true,true]}]
                            ]
                    }
                        
        }
        ]


        var fotoLayout4 = [];
        if(foto.length>2)
        fotoLayout4 = [
       
              { style: 'image',
                    table: {
                            widths: ['*','*'],
                            body: [
                                    [ {border:[true,true,true,false],alignment:'center',fit: [245, 220],image:foto[0].base64}
                                    ,{border:[true,true,true,false],alignment:'center',fit: [245, 220],image:foto[1].base64}
                                    ]
                            ]
                    }
                        
        },{ style: 'text',
                    table: {
                            widths: ['*','*'],
                            body: [
                                    [{  fontSize:9,text:'Nome:'+foto[0].title ,border:[true,false,true,true]},{  fontSize:9,border:[true,false,true,true],text:'Nome:'+foto[1].title }]
                            ]
                    }
                        
        },{ style: 'image',
                    table: {
                            widths: ['*','*'],
                            body: [
                                    [ {border:[true,true,true,false],alignment:'center',fit: [245, 220],image:foto[2].base64}
                                    ,{border:[true,true,true,false],alignment:'center',fit: [245, 220],image:foto[3].base64}
                                    ]
                            ]
                    }
                        
        },{ style: 'text',
                    table: {
                            widths: ['*','*'],
                            body: [
                                    [{  fontSize:9,text:'Nome:'+foto[2].title ,border:[true,false,true,true]},{  fontSize:9,border:[true,false,true,true],text:'Nome:'+foto[3].title }]
                            ]
                    }
                        
        }

        ]


        var fotoLayout6 = [];
        if(foto.length>4)
        fotoLayout6 = [
            { style: 'image',
                    table: {
                            widths: ['*','*'],
                            body: [
                                    [ {border:[true,true,true,false],alignment:'center',fit: [245, 130],image:foto[0].base64}
                                    ,{border:[true,true,true,false],alignment:'center',fit: [245, 130],image:foto[1].base64}
                                    ]
                            ]
                    }
                        
        },{ style: 'text',
                    table: {
                            widths: ['*','*'],
                            body: [
                                    [{  fontSize:9,text:'Nome:'+foto[0].title ,border:[true,false,true,true]},{  fontSize:9,border:[true,false,true,true],text:'Nome:'+foto[1].title }]
                            ]
                    }
                        
        },{ style: 'image',
                    table: {
                            widths: ['*','*'],
                            body: [
                                    [ {border:[true,true,true,false],alignment:'center',fit: [245, 130],image:foto[2].base64}
                                    ,{border:[true,true,true,false],alignment:'center',fit: [245, 130],image: foto[3].base64}
                                    ]
                            ]
                    }
                        
        },{ style: 'text',
                    table: {
                            widths: ['*','*'],
                            body: [
                                    [{  fontSize:9,text:'Nome:'+foto[2].title ,border:[true,false,true,true]},{  fontSize:9,border:[true,false,true,true],text:'Nome:'+foto[3].title }]
                            ]
                    }
                        
        },{ style: 'image',
                    table: {
                            widths: ['*','*'],
                            body: [
                                    [ {border:[true,true,true,false],alignment:'center',fit: [245, 130],image:foto[4].base64}
                                    ,{border:[true,true,true,false],alignment:'center',fit: [245, 130],image:foto[5].base64}
                                    ]
                            ]
                    }
                        
        },
        { style: 'text',
                    table: {
                            widths: ['*','*'],
                            body: [
                                    [{  fontSize:9,text:'Nome:'+foto[4].title ,border:[true,false,true,true]},{  fontSize:9,border:[true,false,true,true],text:'Nome:'+foto[5].title }]
                            ]
                    }
                        
        }
        ];

      var numFoto = foto.length;
        if(numFoto==1){
            page.push(fotoLayout1[0]);
            page.push(fotoLayout1[1]);
        }
        if(numFoto==2){
            page.push(fotoLayout2[0]);
            page.push(fotoLayout2[1]);
            page.push(fotoLayout2[2]);
            page.push(fotoLayout2[3]);
        }
        if(numFoto==3 || numFoto==4){
            page.push(fotoLayout4[0]);
            page.push(fotoLayout4[1]);
            page.push(fotoLayout4[2]);
            page.push(fotoLayout4[3]);
        }
         if(numFoto==5 || numFoto==6){
            page.push(fotoLayout6[0]);
            page.push(fotoLayout6[1]);
            page.push(fotoLayout6[2]);
            page.push(fotoLayout6[3]);
            page.push(fotoLayout6[4]);
            page.push(fotoLayout6[5]);
        }
        
    }

    getPage5(){
        // Page for foto particolari
        var page = [
            {
                "pageBreak": "before",
                "style": "header",
                "table": {
                    "body": [
                        [
                            
                        ]
                    ],
                    "widths": [
                        "*",
                        100
                    ]
                }
            },
            {
                "style": "header",
                "table": {
                    "body": [
                        [
                            {
                                "border": [
                                    true,
                                    true,
                                    false,
                                    true
                                ],
                                "fillColor": this.fillColor,
                                "text": " "
                            },
                            {
                                "alignment": "center",
                                "bold": true,
                                "border": [
                                    false,
                                    true,
                                    true,
                                    true
                                ],
                                "fillColor": this.fillColor,
                                "fontSize": 20,
                                "text": "Particolari"
                            }
                        ]
                    ],
                    "widths": [
                        1,
                        "*"
                    ]
                }
            },
            {
                "style": "separator",
                "table": {
                    "body": [
                        [
                            {
                                "border": [
                                    false,
                                    false,
                                    false,
                                    false
                                ],
                                "text": "\n"
                            }
                        ]
                    ],
                    "widths": [
                        "*"
                    ]
                }
            }
        ];

        this.getFotoLayout(this.fotoPart, page)
        return page;
    }

    getPage4(){
        // Page for consegna
        var page = [
            {
                "pageBreak": "before",
                "style": "header",
                "table": {
                    "body": [
                        [
                            
                        ]
                    ],
                    "widths": [
                        "*",
                        100
                    ]
                }
            },
            {
                "style": "header",
                "table": {
                    "body": [
                        [
                            {
                                "border": [
                                    true,
                                    true,
                                    false,
                                    true
                                ],
                                "fillColor": this.fillColor,
                                "text": " "
                            },
                            {
                                "alignment": "center",
                                "bold": true,
                                "border": [
                                    false,
                                    true,
                                    true,
                                    true
                                ],
                                "fillColor": this.fillColor,
                                "fontSize": 20,
                                "text": "Fotografia del punto di consegna"
                            }
                        ]
                    ],
                    "widths": [
                        1,
                        "*"
                    ]
                }
            },
            {
                "style": "separator",
                "table": {
                    "body": [
                        [
                            {
                                "border": [
                                    false,
                                    false,
                                    false,
                                    false
                                ],
                                "text": "\n"
                            }
                        ]
                    ],
                    "widths": [
                        "*"
                    ]
                }
            }
        ];

        this.getFotoLayout(this.fotoCons, page)
        return page;
    }

    getPage3(){
        // Page fot larghezza image
        var page = [
            {
                "pageBreak": "before",
                "style": "header",
                "table": {
                    "body": [
                        [
                            
                        ]
                    ],
                    "widths": [
                        "*",
                        100
                    ]
                }
            },
            {
                "style": "header",
                "table": {
                    "body": [
                        [
                            {
                                "border": [
                                    true,
                                    true,
                                    false,
                                    true
                                ],
                                "fillColor": this.fillColor,
                                "text": " "
                            },
                            {
                                "alignment": "center",
                                "bold": true,
                                "border": [
                                    false,
                                    true,
                                    true,
                                    true
                                ],
                                "fillColor": this.fillColor,
                                "fontSize": 20,
                                "text": "Fotografia della larghezza strada"
                            }
                        ]
                    ],
                    "widths": [
                        1,
                        "*"
                    ]
                }
            },
            {
                "style": "separator",
                "table": {
                    "body": [
                        [
                            {
                                "border": [
                                    false,
                                    false,
                                    false,
                                    false
                                ],
                                "text": "\n"
                            }
                        ]
                    ],
                    "widths": [
                        "*"
                    ]
                }
            }
        ];

        this.getFotoLayout(this.fotoLarg, page)
        return page;
    }

    getPage2(){
        // Page fot GIS image
        var page = [
            {
                "pageBreak": "before",
                "style": "header",
                "table": {
                    "body": [
                        [
                            
                        ]
                    ],
                    "widths": [
                        "*",
                        100
                    ]
                }
            },
            {
                "style": "header",
                "table": {
                    "body": [
                        [
                            {
                                "border": [
                                    true,
                                    true,
                                    false,
                                    true
                                ],
                                "fillColor": this.fillColor,
                                "text": " "
                            },
                            {
                                "alignment": "center",
                                "bold": true,
                                "border": [
                                    false,
                                    true,
                                    true,
                                    true
                                ],
                                "fillColor": this.fillColor,
                                "fontSize": 20,
                                "text": "Immagine Cartografica GIS"
                            }
                        ]
                    ],
                    "widths": [
                        1,
                        "*"
                    ]
                }
            },
            {
                "style": "separator",
                "table": {
                    "body": [
                        [
                            {
                                "border": [
                                    false,
                                    false,
                                    false,
                                    false
                                ],
                                "text": "\n"
                            }
                        ]
                    ],
                    "widths": [
                        "*"
                    ]
                }
            }
        ];

        this.getFotoLayout(this.fotoGis, page)
        return page;
    }

    getPage1(value){

        const form = value.dati.form.data.value

        let values = []

        values.push('Ubicazione Scavo: ' + form.ubicazioneScavo)
        values.push('Tipo Manto: ' + form.tipoManto)
        values.push('Tipo Scavo: ' + form.tipoScavo)
        values.push('Numero Scavi: ' + form.numeroScavi)
        values.push('Larghezza mt: ' + form.larghezza)
        values.push('Lunghezza mt: ' + form.lunghezza)
        values.push('Profondità mt: ' + form.profondita)
        values.push('Numero Giorni: ' + form.numeroGiorni)

        if (form.chilometrica1 != undefined) {
            values.push('Chilometrica 1: ' + form.chilometrica1)
        }
        if (form.chilometrica2 != undefined && form.chilometrica2 != '') {
            values.push('Chilometrica 1: ' + form.chilometrica2)
        }
        if (form.chilometrica3 != undefined && form.chilometrica2 != '') {
            values.push('Chilometrica 1: ' + form.chilometrica3)
        }
        if (form.superficie != undefined && form.superficie != '') {
            values.push('Superficie/Occupazione mq: ' + form.superficie)
        }
        if (form.larghezzaTot != undefined && form.larghezzaTot != '') {
            values.push('Larghezza totale strada mq: ' + form.larghezzaTot)
        }

        var page = [
        this.header, 
		{
            "style": "separator",
            "table": {
                "body": [
                    [
                        {
                            "border": [
                                false,
                                false,
                                false,
                                false
                            ],
                            "text": "\n\n\n"
                        }
                    ]
                ],
                "widths": [
                    "*"
                ]
            }
        },
        {
            "style": "",
            "table": {
                "body": [
                    [
                        {
                            "border": [
                                true,
                                true,
                                false,
                                true
                            ],
                            "fillColor": this.fillColor,
                            "text": " "
                        },
                        {
                            "alignment": "center",
                            "bold": true,
                            "border": [
                                false,
                                true,
                                true,
                                true
                            ],
                            "fillColor": this.fillColor,
                            "fontSize": 20,
                            "text": "SCHEDA PERMESSI"
                        }
                    ]
                ],
                "widths": [
                    1,
                    "*"
                ]
            }
        },
        {
            "style": "separator",
            "table": {
                "body": [
                    [
                        {
                            "border": [
                                false,
                                false,
                                false,
                                false
                            ],
                            "text": "\n"
                        }
                    ]
                ],
                "widths": [
                    "*"
                ]
            }
        },
        {
            "style": "tableExample",
            "table": {
                "body": [
                    [
                        {
                            "fillColor": this.fillColor,
                            "text": "Avviso"
                        },
                        {
                            "text": value.dati.form.ads.CodiceAds
                        },
                        {
                            "border": [
                                false,
                                false,
                                false,
                                false
                            ],
                            "text": ""
                        },
                        {
                            "fillColor": this.fillColor,
                            "text": "Odl"
                        },
                        {
                            "text": this.odlCode
                        }
                    ]
                ],
                "widths": [
                    50,
                    150,
                    "*",
                    50,
                    150
                ]
            }
        },
        {
            "style": "separator",
            "table": {
                "body": [
                    [
                        {
                            "border": [
                                false,
                                false,
                                false,
                                false
                            ],
                            "text": "\n"
                        }
                    ]
                ],
                "widths": [
                    "*"
                ]
            }
        },
        {
            "style": "tableExample",
            "table": {
                "body": [
                    [
                        {
                            "fillColor": this.fillColor,
                            "text": "Pds"
                        },
                        {
                            "text": value.dati.form.ads.ProdServizio
                        }
                    ]
                ],
                "widths": [
                    50,
                    "*"
                ]
            }
        },
        {
            "style": "separator",
            "table": {
                "body": [
                    [
                        {
                            "border": [
                                false,
                                false,
                                false,
                                false
                            ],
                            "text": "\n"
                        }
                    ]
                ],
                "widths": [
                    "*"
                ]
            }
        },
        {
            "style": "tableExample",
            "table": {
                "body": [
                    [
                        {
                            "fillColor": this.fillColor,
                            "text": "Cod.Att."
                        },
                        {
                            "text": value.dati.form.ads.CodiceAttivita
                        }
                    ]
                ],
                "widths": [
                    50,
                    "*"
                ]
            }
        },
        {
            "style": "separator",
            "table": {
                "body": [
                    [
                        {
                            "border": [
                                false,
                                false,
                                false,
                                false
                            ],
                            "text": "\n"
                        }
                    ]
                ],
                "widths": [
                    "*"
                ]
            }
        },
        {
            "style": "tableExample",
            "table": {
                "body": [
                    [
                        {
                            "fillColor": this.fillColor,
                            "text": "SOT"
                        },
                        {
                            "text": value.dati.form.ads.Societa
                        }
                    ]
                ],
                "widths": [
                    50,
                    "*"
                ]
            }
        },
        {
            "style": "separator",
            "table": {
                "body": [
                    [
                        {
                            "border": [
                                false,
                                false,
                                false,
                                false
                            ],
                            "text": "\n"
                        }
                    ]
                ],
                "widths": [
                    "*"
                ]
            }
        },
        {
            "style": "tableExample",
            "table": {
                "body": [
                    [
                        {
                            "fillColor": this.fillColor,
                            "text": "Indirizzo"
                        },
                        {
                            "text": this.indirizzo
                        }
                    ]
                ],
                "widths": [
                    50,
                    "*"
                ]
            }
        },
        {
            "style": "separator",
            "table": {
                "body": [
                    [
                        {
                            "border": [
                                false,
                                false,
                                false,
                                false
                            ],
                            "text": "\n"
                        }
                    ]
                ],
                "widths": [
                    "*"
                ]
            }
        },

        {
            "style": "separator",
            "table": {
                "body": [
                    [
                        {
                            "border": [
                                false,
                                false,
                                false,
                                false
                            ],
                            "text": "\n\n\n"
                        }
                    ]
                ],
                "widths": [
                    "*"
                ]
            }
        },

        {
            "style": "header",
            "table": {
                "body": [
                    [
                        {
                            "alignment": "center",
                            "border": [
                                true,
                                true,
                                false,
                                true
                            ],
                            "fillColor": this.fillColor,
                            "text": "Elenco Dati Tecnici"
                        },
                        {
                            "border": [
                                false,
                                true,
                                true,
                                true
                            ],
                            "fillColor": this.fillColor,
                            "text": ""
                        }
                    ],
                    [
                        {
                            "border": [
                                true,
                                true,
                                false,
                                true
                            ],
                            "rowSpan": 4,
                            "type": "none",
                            "ul": values
                        },
                        {
                            "border": [
                                false,
                                false,
                                true,
                                false
                            ],
                            "text": "\n"
                        }
                    ],
                    [
                        {
                            "text": " "
                        },
                        {
                            "border": [
                                false,
                                false,
                                true,
                                false
                            ],
                            "text": "\n"
                        }
                    ],
                    [
                        {
                            "text": " "
                        },
                        {
                            "border": [
                                false,
                                false,
                                true,
                                false
                            ],
                            "text": "\n"
                        }
                    ],
                    [
                        {
                            "text": " "
                        },
                        {
                            "border": [
                                false,
                                false,
                                true,
                                true
                            ],
                            "text": "\n"
                        }
                    ]
                ],
                "widths": [
                    "*",
                    1
                ]
            }
        }    
        ];
        return page;
    }


    getAllDoc(page1, page2, page3, page4, page5){
        var retPage = [];
        for(let item of page1){
            retPage.push(item);
        }
        for(let item of page2){
            retPage.push(item);
        }
        for(let item of page3){
            retPage.push(item);
        }
        for(let item of page4){
            retPage.push(item);
        }
        for(let item of page5){
            retPage.push(item);
        }
        return retPage;
    }

    public getTesProvDomDefinition(value): Promise<any> {

        this.fotoGis = []
        this.fotoLarg = []
        this.fotoCons = []
        this.fotoPart = []

        // Settore merceologico for logo
        let TipoServizio = SettoreMerceologico[value.dati.form.ads.SettoreMerceologico];
        //this.LogoSx = imgExample.getLogoSxHera();
        //if(TipoServizio=='ENERGIA_ELETTRICA' || TipoServizio=='GAS') this.LogoSx = imgExample.getLogoDxInRete();

        this.LogoSx = imgExample.getLogoSxImg(value.dati.form.ads.SettoreMerceologico,value.dati.form.ads.CodiceSocieta);
                
        // Get ODL code if existing
        this.odlCode = value.dati.form.ads.CodiceOdl != null || undefined ? value.dati.form.ads.CodiceOdl : ''

        // Get fillcolor
        switch( TipoServizio ){
            case('ACQUA'):{
              this.fillColor = "#fcce5";
              break;
            }
            case('GAS'):{
              this.fillColor = "#ead383";
              break;
            }
            case('TLR'):{
              this.fillColor = "#ead383";
              break;
            }
            case('ENERGIA_ELETTRICA'):{
              this.fillColor = "#f8eebe";
              break;
            }
        }

        // Set Header logo
        this.header = {
        style: "header",
        table: {
            widths: ["*"],
            body: [[{
                        image: this.LogoSx,
                        width: 150,
                        border: [false, false, false, false]
                    }
                ]]
            }
        };

        // Two logo header layout

        // this.header = {
        //     style: "header",
        //     table: {
        //         widths: ["*", 100],
        //         body: [[{
        //                     image: value.dati.form.LogoSx,
        //                     width: 150,
        //                     border: [false, false, false, false]
        //                 },
        //                 {
        //                     image: value.dati.form.LogoDx,
        //                     margin: [-30,10],
        //                     width: 125,
        //                     border: [false, false, false, false]
        //                 }
        //             ]]
        //         }
        //     };

        this.icon = value.dati.form.ads.getIconBase64()
        this.indirizzo = value.dati.form.ads.Indirizzo.toString();

        return new Promise (async (resolve, reject) => {

        // foto push
        for(let item of value.dati.form.img){
            var tmpTitle = item.name.split('/');
            tmpTitle = tmpTitle[tmpTitle.length-1];
            var title = tmpTitle.split('.');
            var tmpTag = tmpTitle.split('_');
            var tag;
            if(tmpTag.length>1){
                tag = tmpTag[1];
                if(tag)
                tag = tag.replace("-", " ");
            }
            title = title[0];
            await this.addFoto(item.tag, item.name, value.dati.form.ads, title);
            }

        if(this.fotoGis.length>0 && this.fotoGis[0]==' ') this.fotoGis = [];
        if(this.fotoGis.length == 0||this.fotoGis.length == 3||this.fotoGis.length == 5){      
            this.fotoGis.push({name:'',tag:'',base64:imgExample.getWhiteImg()});
        }

        if(this.fotoLarg.length>0 && this.fotoLarg[0]==' ') this.fotoLarg = [];
        if(this.fotoLarg.length == 0||this.fotoLarg.length == 3||this.fotoLarg.length == 5){      
            this.fotoLarg.push({name:'',tag:'',base64:imgExample.getWhiteImg()});
        }

        if(this.fotoCons.length>0 && this.fotoCons[0]==' ') this.fotoCons = [];
        if(this.fotoCons.length == 0||this.fotoCons.length == 3||this.fotoCons.length == 5){      
            this.fotoCons.push({name:'',tag:'',base64:imgExample.getWhiteImg()});
        }

        if(this.fotoPart.length>0 && this.fotoPart[0]==' ') this.fotoPart = [];
        if(this.fotoPart.length == 0||this.fotoPart.length == 3||this.fotoPart.length == 5){      
            this.fotoPart.push({name:'',tag:'',base64:imgExample.getWhiteImg()});
        }
    
        var page1 = this.getPage1(value);
        var page2 = this.getPage2();
        var page3 = this.getPage3();
        var page4 = this.getPage4();
        var page5 = this.getPage5();

        var contPdf = this.getAllDoc(page1, page2, page3, page4, page5);
            var docDefinition = {
                    footer: function(currentPage, pageCount) {
                        return {
                            "table": {
                                "widths": [30, 50, "*", 30],
                                "body": [[{
                                    "text": "",
                                        "border": [false, false, false, false],
                                }, {
                                    "text": "Pag."+ currentPage.toString() ,
                                        "border": [false, false, false, false],
                                }, {
                                    "border": [false, false, false, false],
                                    "text": ""
                                }, {
                                    "text": "",
                                    "border": [false, false, false, false],
                                }
                            ]]
                            }
                        }
                    },
                content: [                
                   contPdf
                ]
            }
            resolve(docDefinition);
            contPdf = null;
            docDefinition = null;
        });
    }
}