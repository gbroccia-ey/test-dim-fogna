import { Injectable } from '@angular/core';
import { SettoreMerceologico } from './ads';
import { Utils } from '../utils/utils';

declare var util: any;
declare var imgExample;

@Injectable()
export class ModelFT {

    foto_planimetria; 
    foto_altre;
    fillColor;
    header;
    header2;

    constructor() {

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
                                            [{text:'Nome file:'+foto[0].name+'\nTag (descrizione):'+foto[0].tag,border:[true,false,true,true]}]
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
                                            [{text:'Nome file:'+foto[0].name+'\nTag (descrizione):'+foto[0].tag,border:[true,false,true,true]}]
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
                                            [{text:'Nome file:'+foto[1].name+'\nTag (descrizione):'+foto[1].tag,border:[true,false,true,true]}]
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
                                            [{  fontSize:9,text:'Nome:'+foto[0].name+'\nTag (descrizione):'+foto[0].tag,border:[true,false,true,true]},{  fontSize:9,border:[true,false,true,true],text:'Nome:'+foto[1].name+'\nTag (descrizione):'+foto[1].tag}]
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
                                            [{  fontSize:9,text:'Nome:'+foto[2].name+'\nTag (descrizione):'+foto[2].tag,border:[true,false,true,true]},{  fontSize:9,border:[true,false,true,true],text:'Nome:'+foto[3].name+'\nTag (descrizione):'+foto[3].tag}]
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
                                            [{  fontSize:9,text:'Nome:'+foto[0].name+'\nTag (descrizione):'+foto[0].tag,border:[true,false,true,true]},{  fontSize:9,border:[true,false,true,true],text:'Nome:'+foto[1].name+'\nTag (descrizione):'+foto[1].tag}]
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
                                            [{  fontSize:9,text:'Nome:'+foto[2].name+'\nTag (descrizione):'+foto[2].tag,border:[true,false,true,true]},{  fontSize:9,border:[true,false,true,true],text:'Nome:'+foto[3].name+'\nTag (descrizione):'+foto[3].tag}]
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
                                            [{  fontSize:9,text:'Nome:'+foto[4].name+'\nTag (descrizione):'+foto[4].tag,border:[true,false,true,true]},{  fontSize:9,border:[true,false,true,true],text:'Nome:'+foto[5].name+'\nTag (descrizione):'+foto[5].tag}]
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

    //dimensionamento allacci
    getPage6(value) {
        let dimAllacci: any;
        let isDimensionamentoAllacciGas: boolean = false;
        let isDimensionamentoAllacciAcqua: boolean = false;
        let isDimensionamentoAllacciEE: boolean = false;

        if(value.dati.form._ads.SettoreMerceologico === SettoreMerceologico.GAS && value.dati.form._ads.DimensionamentoSaved){
            dimAllacci = value.dati.form._ads.DimensionamentoAllacciGas;
            isDimensionamentoAllacciGas = true;
        }else if(value.dati.form._ads.SettoreMerceologico === SettoreMerceologico.ACQUA && value.dati.form._ads.DimensionamentoSaved){
            dimAllacci = value.dati.form._ads.DimensionamentoAllacciAcqua;
            isDimensionamentoAllacciAcqua = true;
        } else if(value.dati.form._ads.SettoreMerceologico === SettoreMerceologico.ENERGIA_ELETTRICA && value.dati.form._ads.DimensionamentoSaved){
            dimAllacci = value.dati.form._ads.DimensionamentoAllacciEE;
            isDimensionamentoAllacciEE = true;
        }

        console.log(dimAllacci)

        if(!dimAllacci) {
            return null;
        }

        else if(isDimensionamentoAllacciGas){
            let dataList = [];
            dataList.push([{text: 'OdL', fillColor:this.fillColor},{text: value.dati.form._codice_odl}]);
            dataList.push([{text: 'Comune', fillColor:this.fillColor},{text: value.dati.form._ads.Indirizzo.Citta}]);
            dataList.push([{text: 'Indirizzo', fillColor:this.fillColor},{text: value.dati.form._ads.Indirizzo.toString()}]);
            let clienteTxt: string = (value.dati.form._ads.Cliente.CodiceCliente ?  value.dati.form._ads.Cliente.CodiceCliente : "") + " " +
                             (value.dati.form._ads.Cliente.Cognome ? value.dati.form._ads.Cliente.Cognome : "") + " " + 
                             (value.dati.form._ads.Cliente.Nome ? value.dati.form._ads.Cliente.Nome : " ");
            dataList.push([{text: 'Cliente', fillColor:this.fillColor},{text: clienteTxt}]);
    
            let dimensionamentoList = [];
            dimensionamentoList.push([{text: 'Tipo rete', fillColor:this.fillColor},
                                {text: dimAllacci.TipoRete}]);
            dimensionamentoList.push([{text: 'Rete stradale', fillColor:this.fillColor},{text: ""+dimAllacci.ReteStradale}]);
            dimensionamentoList.push([{text: 'Materiale allaccio', fillColor:this.fillColor},{text: ""+dimAllacci.MaterialeAllaccio}]);
            dimensionamentoList.push([{text: 'Lunghezza tubazione', fillColor:this.fillColor},{text: ""+dimAllacci.LunghezzaTubazione}]);
            
            let richiesteNonDomestiche = []; 
            richiesteNonDomestiche.push(
                [
                    { text: 'Classe > G4 o non domestico', fillColor:this.fillColor }, 
                    { text: 'Numero', fillColor:this.fillColor}, 
                    { text: 'Portata (Smc/h)', fillColor:this.fillColor }
                ],        
            );
            if(dimAllacci.RichiesteNonDomestiche && dimAllacci.RichiesteNonDomestiche.length === 0) {
                richiesteNonDomestiche.push([
                   " ","",""
                ]);
            }
            for(var i = 0; i < dimAllacci.RichiesteNonDomestiche.length; i++) {
                richiesteNonDomestiche.push([
                    "Classe contatore: " + dimAllacci.RichiesteNonDomestiche[i].classeContatore,
                    ""+dimAllacci.RichiesteNonDomestiche[i].numero,
                    ""+util.formatNumber(dimAllacci.RichiesteNonDomestiche[i].portata)
                ]);
            }
            
            var page = [  
                this.header2, 
                 { style: 'separator',
                             table: {
                                     widths: ['*'],
                                     body: [
                                             [ {text:'\n\n\n',border: [ false, false, false, false]}
                                             ]
                                     ]
                             }
                                 
                 },
                   {
                         style: 'header',
                         table: {
                             widths: [1,'*'],
                             body: [
                                     [{text:' ',fillColor:this.fillColor, border:[true,true,false,true]},
                                     {text: 'CALCOLO DIMENSIONALE', fontSize: 20,bold:true, alignment: 'center', fillColor:this.fillColor, 	border:[false,true,true,true]}],
                             ]
                         }
                     },
                     { style: 'separator',
                        table: {
                                widths: ['*'],
                                body: [
                                        [ {text:'\n',border: [ false, false, false, false]}
                                        ]
                                ]
                        }
                     },
                     {
                        style: 'header',
                        table: {
                            widths: [1,'*'],
                            body: [
                                    [{text:' ',fillColor:this.fillColor, 	border:[true,true,false,true]},
                                    {	border:[false,true,true,true],text: 'Dati Progetto', fontSize: 20,bold:true, alignment: 'center', fillColor:this.fillColor}],
                            ]
                        }
                    },
                      { style: 'separator',
                      table: {
                             widths: ['*'],
                             body: [
                                     [ {text:'\n',border: [ false, false, false, false]}
                                     ]
                             ]
                     }
                          
                      },
                       {
                         style: 'tableImg',
                         table: {
                             widths: [150,'*'],
                             body: 
                                dataList
                               }
                     },
                     
                      { style: 'separator',
                      table: {
                             widths: ['*'],
                             body: [
                                     [ {text:'\n',border: [ false, false, false, false]}
                                     ]
                             ]
                        }
                          
                      },
                     
                      { style: 'separator',
                      table: {
                             widths: ['*'],
                             body: [
                                     [ {text:'\n',border: [ false, false, false, false]}
                                     ]
                             ]
                        }
                      },    
                      {
                        style: 'header',
                        table: {
                            widths: [1,'*'],
                            body: [
                                    [{text:' ',fillColor:this.fillColor, 	border:[true,true,false,true]},
                                    {	border:[false,true,true,true],text: 'Dimensionamento allaccio gas', fontSize: 20,bold:true, alignment: 'center', fillColor:this.fillColor}],
                            ]
                        }
                      },
                      { style: 'separator',
                        table: {
                                widths: ['*'],
                                body: [
                                        [ {text:'\n',border: [ false, false, false, false]}
                                        ]
                                ]
                            }
                      }, 
                      {
                        style: 'tableImg',
                        table: {
                            widths: [150,'*'],
                            body: 
                               dimensionamentoList
                              }
                      },
                      { style: 'separator',
                         table: {
                              widths: ['*'],
                              body: [
                                      [ {text:'\n',border: [ false, false, false, false]}
                                      ]
                              ]
                          }
                      }, 
                      {
                        columns: [
                            
                                
                                {
                                    width: 350,
                                    headerRows: 1,
                                    style: 'tableExample',
                                    table: {
                                        body: [
                                            [
                                                { text: 'Richieste uso domestico', fillColor:this.fillColor }, 
                                                { text: 'Numero', fillColor:this.fillColor}, 
                                                { text: 'Portata (Smc/h)', fillColor:this.fillColor }
                                            ],                                        
                                            ['Classe contatore: ' + dimAllacci.ClasseContatoreDomestico, 
                                            ""+dimAllacci.NumeroContatoriUsoDomestico, 
                                            ""+util.formatNumber(dimAllacci.PortataDomestico)]
                                        ]
                                    }
                                },
                            
                            {
                                    fontSize: 9.5,
                                    headerRows: 1,
                                    width: '*',
                                    table: {
                                        body: [
                                            [{ text: 'PORTATA TOTALE USO DOMESTICO', fillColor:this.fillColor }],
                                            [dimAllacci.PortataTotaleDomestico ? util.formatNumber(dimAllacci.PortataTotaleDomestico) : 0]
                                        ]
                                    }
                            },
            
                        ]
                    },
    
                    { style: 'separator',
                        table: {
                            widths: ['*'],
                            body: [
                                    [ {text:'\n',border: [ false, false, false, false]}
                                    ]
                            ]
                        }
                    }, 
    
                    {
                        columns: [
                                {
                                    width: 350,
                                    style: 'tableExample',
                                    headerRows: 1,
                                    table: {
                                        body: richiesteNonDomestiche
                                    }
                                },
                            
                            {
                                    fontSize: 9.5,
                                    width: '*',
                                    table: {
                                        body: [
                                            [{ text: 'PORTATA TOTALE ALTRI USI', fillColor:this.fillColor }],
                                            [dimAllacci.PortataTotaleAltriUsi ? util.formatNumber(dimAllacci.PortataTotaleAltriUsi) : 0],
                                            [{ text: 'PORTATA TOTALE ALLACCIAMENTO', fillColor:this.fillColor }],
                                            [dimAllacci.PortataTotaleAllacciamento ? util.formatNumber(dimAllacci.PortataTotaleAllacciamento) : 0]
                                        ]
                                    }
                            },
            
                        ]
                    },

                      { style: 'separator',
                        table: {
                            widths: ['*'],
                            body: [
                                    [ {text:'\n',border: [ false, false, false, false]}
                                    ]
                            ]
                        }
                    }, 
                   {
				    style: "tableImg",
				    table: {
					    widths: ['50%', '50%'],
							body: [[{
                                        text: ((dimAllacci && dimAllacci.Risultato && dimAllacci.Risultato.materiale) ?  dimAllacci.Risultato.materiale : '') +'\n'+ 
                                        (dimAllacci && dimAllacci.Risultato && dimAllacci.Risultato.text ? String(dimAllacci.Risultato.text).toUpperCase() : ""),
                                        fillColor: "#ead383",
										alignment: "center",
                                        bold: true,
										fontSize: 12.5,
										border: [true, true, true, true]
									},{
                                        text: (dimAllacci && dimAllacci.Risultato && dimAllacci.Risultato.warning) ? dimAllacci.Risultato.warning : '',
										fillColor: "#ead383",
										alignment: "center",
                                        fontSize: 9,
										border: [true, true, true, true]
                                    }
								]]
						}
					
				
			}



                      
                      
                      ];
    
         return page;
        }

        else if(isDimensionamentoAllacciAcqua) {
            let dataList = [];
            dataList.push([{text: 'OdL', fillColor:this.fillColor},{text: value.dati.form._codice_odl}]);
           // dataList.push([{text: 'Comune', fillColor:this.fillColor},{text: value.dati.form._ads.Indirizzo.Citta}]);
            dataList.push([{text: 'Indirizzo', fillColor:this.fillColor},{text: value.dati.form._ads.Indirizzo.toString()}]);
            let clienteTxt: string = (value.dati.form._ads.Cliente.CodiceCliente ?  value.dati.form._ads.Cliente.CodiceCliente : "") + " " +
                             (value.dati.form._ads.Cliente.Cognome ? value.dati.form._ads.Cliente.Cognome : "") + " " + 
                             (value.dati.form._ads.Cliente.Nome ? value.dati.form._ads.Cliente.Nome : " ");

            if ( (clienteTxt == "   ") && value.dati.form._ads.Cliente.RagioneSociale) {
                clienteTxt = value.dati.form._ads.Cliente.RagioneSociale;
            }
            dataList.push([{text: 'Cliente', fillColor:this.fillColor},{text: clienteTxt}]);
    
            let dimensionamentoList = [];
            
            dimensionamentoList.push([{text: 'Tubazione stradale', fillColor:this.fillColor},{text: dimAllacci.ReteStradale}]);
            dimensionamentoList.push([{text: 'Pressione di rete [bar]', fillColor:this.fillColor},{text: dimAllacci.PressioneRete}]);
            dimensionamentoList.push([{text: 'Lunghezza allacciamento [m]', fillColor:this.fillColor},{text: dimAllacci.LunghezzaAllacciamento}]);
            dimensionamentoList.push([{text: 'Numero perdite di carico concentrate (curve, tee,..)', fillColor:this.fillColor},{text: dimAllacci.NumeroPerdite}]);
            
            let richiesteTipoA = [];
            if(dimAllacci.UnitaSingola && dimAllacci.UnitaSingola.numero > 0)
            richiesteTipoA.push(
                [
                    { text: '', fillColor:this.fillColor }, 
                    { text: 'Numero contatori', fillColor:this.fillColor}, 
                    { text: 'Tipo di contatore', fillColor:this.fillColor }
                ],  [
                    { text: '"A" Contatore per unità abitativa singola' }, 
                    { text: ""+dimAllacci.UnitaSingola.numero}, 
                    { text: ""+dimAllacci.UnitaSingola.tipoContatore }
          
                ]      
            );
            if(dimAllacci.UnitaDeroga && dimAllacci.UnitaDeroga.numero > 0)
            richiesteTipoA.push(
                [
                    { text: '', fillColor:this.fillColor }, 
                    { fontsize:8,text: 'Numero unità abitative civili singole servite', fillColor:this.fillColor}, 
                    { text: 'Tipo di contatore', fillColor:this.fillColor }
                ],   
                [
                    { fontSize:8, text: '"A" Contatore condominiale per unità abitative (in deroga)' }, 
                    { text: ""+dimAllacci.UnitaDeroga.numero}, 
                    { text: ""+dimAllacci.UnitaDeroga.tipoContatore }
          
                ]        
            );


            if(dimAllacci && dimAllacci.UnitaSingola && dimAllacci.UnitaDeroga && dimAllacci.UnitaSingola.numero <1 &&  dimAllacci.UnitaDeroga.numero<1){

             richiesteTipoA.push(
                [
                    { text: '', fillColor:this.fillColor }, 
                    { text: 'Numero contatori', fillColor:this.fillColor}, 
                    { text: 'Tipo di contatore', fillColor:this.fillColor }
                ])
            }


            let richiesteUsoAntincendio = [];
            richiesteUsoAntincendio.push(
                [
                    { fontSize:10, text: '', fillColor:this.fillColor }, 
                    { fontSize:8,text: 'N. contatori', fillColor:this.fillColor}, 
                    { fontSize:10,text: 'Portata [l/s]', fillColor:this.fillColor },
                    { fontSize:10,text: 'Portata [mc/h]', fillColor:this.fillColor },
                    { fontSize:10,text: 'Tipo di contatore', fillColor:this.fillColor }
                ],        
            );

            if(dimAllacci.ContatoriAntincendio && dimAllacci.ContatoriAntincendio.length === 0 ){
                richiesteUsoAntincendio.push([
                    " ","","","",""
                ]);
            }

            for(var i = 0; i < dimAllacci.ContatoriAntincendio.length; i++) {
                if(dimAllacci.ContatoriAntincendio[i].numero>0)
                richiesteUsoAntincendio.push([
                  '"B" Contatore per antincendio', 
                  "" + dimAllacci.ContatoriAntincendio[i].numero, 
                  "" + dimAllacci.ContatoriAntincendio[i].portataLS, 
                  "" + dimAllacci.ContatoriAntincendio[i].portataMH, 
                  "" + dimAllacci.ContatoriAntincendio[i].tipoContatore
                ]);
            }

            var portate = [];
            portate.push([{	text: 'PORTATA  DI CALCOLO "A" [mc/h]\n(contatori a servizio di unità abitative civili)', fillColor:this.fillColor},{text: dimAllacci.PortataCalcoloA}]);
            portate.push([{	text: 'PORTATA  DI CALCOLO "B" [mc/h]\n(altri contatori)', fillColor:this.fillColor},{text: dimAllacci.PortataCalcoloB}]);
            portate.push([{ text: 'PORTATA  DI CALCOLO COMPLESSIVA (A+B) [mc/h]', fillColor:this.fillColor},{text: dimAllacci.PortataCalcoloTotale}]);
         
            var condotte =  [];
            condotte.push( [{text:'Condotta allacciamento',fontSize:7, fillColor:this.fillColor},
            {text:'Diametro interno [mm]',fontSize:7, fillColor:this.fillColor},
            {text:'Scabrezza [mm]',fontSize:7, fillColor:this.fillColor},
            {text:'Perdita di carico [bar]',fontSize:7,  fillColor:this.fillColor},
            {text:'Pressione al contatore [bar]',fontSize:7,  fillColor:this.fillColor},
            {text:'Velocità [m/s]',fontSize:7, fillColor:this.fillColor},
            {text:'Verifica cond. esistente o nuova',fontSize:7, fillColor:this.fillColor}
            ]);

            condotte.push([{fontSize:10, text:"VERIFICA ALLACCIAMENTO ESISTENTE (scelta libera)", bold:true, fillColor:this.fillColor},{text:""},{text:""},{text:""},{text:""},{text:""},{text:""}]);
            if(dimAllacci.AllacciamentoEsistente && dimAllacci.AllacciamentoEsistente.nome) condotte.push([{  fontSize: 8, text:dimAllacci.AllacciamentoEsistente.nome ? 
                dimAllacci.AllacciamentoEsistente.nome: ' '},{ text:dimAllacci.AllacciamentoEsistente.diametro?dimAllacci.AllacciamentoEsistente.diametro: ' '},{text:dimAllacci.AllacciamentoEsistente.scabrezza? dimAllacci.AllacciamentoEsistente.scabrezza : ' '},{text:dimAllacci.AllacciamentoEsistente.perdita?dimAllacci.AllacciamentoEsistente.perdita: ' ' ,fillColor:dimAllacci.AllacciamentoEsistente.colorPerdita},{text:dimAllacci.AllacciamentoEsistente.pressione ? dimAllacci.AllacciamentoEsistente.pressione : ' '},{text:dimAllacci.AllacciamentoEsistente.velocita? dimAllacci.AllacciamentoEsistente.velocita: ' ',fillColor:dimAllacci.AllacciamentoEsistente.colorVelocita},{fontSize: 8, text:dimAllacci.AllacciamentoEsistente.VerificaCondotta? dimAllacci.AllacciamentoEsistente.VerificaCondotta:''}]);
            condotte.push([{fontSize:10,text:"DIMENSIONAMENTO ALLACCIAMENTO NUOVO (scelta predefinita)", bold:true, fillColor:this.fillColor},{text:""},{text:""},{text:""},{text:""},{text:""},{text:""}]);

            if(dimAllacci.AllacciamentoNuovo1) condotte.push([{fontSize:8,fillColor:this.fillColor,text:dimAllacci.AllacciamentoNuovo1.nome ? dimAllacci.AllacciamentoNuovo1.nome: ' ' },{text:dimAllacci.AllacciamentoNuovo1.diametro? dimAllacci.AllacciamentoNuovo1.diametro : ' '},{text:dimAllacci.AllacciamentoNuovo1.scabrezza ? dimAllacci.AllacciamentoNuovo1.scabrezza : ' '},{text:dimAllacci.AllacciamentoNuovo1.perdita ? dimAllacci.AllacciamentoNuovo1.perdita : ' ',fillColor:dimAllacci.AllacciamentoNuovo1.colorPerdita},{text:dimAllacci.AllacciamentoNuovo1.pressione ? dimAllacci.AllacciamentoNuovo1.pressione : ' '},{text:dimAllacci.AllacciamentoNuovo1.velocita? dimAllacci.AllacciamentoNuovo1.velocita : ' ', fillColor:dimAllacci.AllacciamentoNuovo1.colorVelocita},{fontSize: 8, text:dimAllacci.AllacciamentoNuovo1.VerificaCondotta ? dimAllacci.AllacciamentoNuovo1.VerificaCondotta:''}]);
           
            if(dimAllacci.AllacciamentoNuovo2) condotte.push([{fontSize: 8, fillColor:this.fillColor,text:dimAllacci.AllacciamentoNuovo2.nome ? dimAllacci.AllacciamentoNuovo2.nome : ' '},{text:dimAllacci.AllacciamentoNuovo2.diametro? dimAllacci.AllacciamentoNuovo2.diametro : ' '},{text:dimAllacci.AllacciamentoNuovo2.scabrezza? dimAllacci.AllacciamentoNuovo2.scabrezza : ' '},{text:dimAllacci.AllacciamentoNuovo2.perdita ? dimAllacci.AllacciamentoNuovo2.perdita : ' ',fillColor:dimAllacci.AllacciamentoNuovo2.colorPerdita},{text:dimAllacci.AllacciamentoNuovo2.pressione ? dimAllacci.AllacciamentoNuovo2.pressione : ''},{text:dimAllacci.AllacciamentoNuovo2.velocita ? dimAllacci.AllacciamentoNuovo2.velocita : ' ', fillColor:dimAllacci.AllacciamentoNuovo2.colorVelocita},{fontSize: 8, text:dimAllacci.AllacciamentoNuovo2.VerificaCondotta?dimAllacci.AllacciamentoNuovo2.VerificaCondotta:''}]);
            
            if(dimAllacci.AllacciamentoNuovo3) condotte.push([{fontSize: 8, fillColor:this.fillColor,text:dimAllacci.AllacciamentoNuovo3.nome? dimAllacci.AllacciamentoNuovo3.nome : ' '},{text:dimAllacci.AllacciamentoNuovo3.diametro ? dimAllacci.AllacciamentoNuovo3.diametro : ''},{text:dimAllacci.AllacciamentoNuovo3.scabrezza ? dimAllacci.AllacciamentoNuovo3.scabrezza : ' '},{text:dimAllacci.AllacciamentoNuovo3.perdita ? dimAllacci.AllacciamentoNuovo3.perdita : ' ',fillColor:dimAllacci.AllacciamentoNuovo3.colorPerdita},{text:dimAllacci.AllacciamentoNuovo3.pressione ?dimAllacci.AllacciamentoNuovo3.pressione :""},{text:dimAllacci.AllacciamentoNuovo3.velocita ? dimAllacci.AllacciamentoNuovo3.velocita : '', fillColor:dimAllacci.AllacciamentoNuovo3.colorVelocita},{fontSize: 8, text:dimAllacci.AllacciamentoNuovo3.VerificaCondotta?dimAllacci.AllacciamentoNuovo3.VerificaCondotta:''}]);
            
            if(dimAllacci.AllacciamentoNuovo4) condotte.push([{fontSize: 8, fillColor:this.fillColor,text:dimAllacci.AllacciamentoNuovo4.nome},{text:dimAllacci.AllacciamentoNuovo4.diametro},{text:dimAllacci.AllacciamentoNuovo4.scabrezza},{text:dimAllacci.AllacciamentoNuovo4.perdita?
                dimAllacci.AllacciamentoNuovo4.perdita: '',fillColor:dimAllacci.AllacciamentoNuovo4.colorPerdita},{text:dimAllacci.AllacciamentoNuovo4.pressione? dimAllacci.AllacciamentoNuovo4.pressione : ' '},{text:dimAllacci.AllacciamentoNuovo4.velocita ? dimAllacci.AllacciamentoNuovo4.velocita : '', fillColor:dimAllacci.AllacciamentoNuovo4.colorVelocita},{fontSize: 8, text:dimAllacci.AllacciamentoNuovo4.VerificaCondotta?dimAllacci.AllacciamentoNuovo4.VerificaCondotta:''}]);
            
            if(dimAllacci.AllacciamentoNuovo5) condotte.push([{fontSize: 8, fillColor:this.fillColor,text:dimAllacci.AllacciamentoNuovo5.nome ? dimAllacci.AllacciamentoNuovo5.nome : ''},{text:dimAllacci.AllacciamentoNuovo5.diametro? dimAllacci.AllacciamentoNuovo5.diametro : ''},{text:dimAllacci.AllacciamentoNuovo5.scabrezza ? dimAllacci.AllacciamentoNuovo5.scabrezza : ''},{text:dimAllacci.AllacciamentoNuovo5.perdita? dimAllacci.AllacciamentoNuovo5.perdita : '',fillColor:dimAllacci.AllacciamentoNuovo5.colorPerdita},{text:dimAllacci.AllacciamentoNuovo5.pressione ? dimAllacci.AllacciamentoNuovo5.pressione : ''},{text:dimAllacci.AllacciamentoNuovo5.velocita ? dimAllacci.AllacciamentoNuovo5.velocita : '', fillColor:dimAllacci.AllacciamentoNuovo5.colorVelocita},{fontSize: 8, text:dimAllacci.AllacciamentoNuovo5.VerificaCondotta?dimAllacci.AllacciamentoNuovo5.VerificaCondotta:''}]);
            
            if(dimAllacci.AllacciamentoNuovo6 && dimAllacci.AllacciamentoNuovo6.nome) condotte.push([{fontSize: 8, text:dimAllacci.AllacciamentoNuovo6.nome?dimAllacci.AllacciamentoNuovo6.nome: ' '},{text:dimAllacci.AllacciamentoNuovo6.diametro ? dimAllacci.AllacciamentoNuovo6.diametro : ' '},{text:dimAllacci.AllacciamentoNuovo6.scabrezza? dimAllacci.AllacciamentoNuovo6.scabrezza : ''},{text:dimAllacci.AllacciamentoNuovo6.perdita ? dimAllacci.AllacciamentoNuovo6.perdita : ' ',fillColor:dimAllacci.AllacciamentoNuovo6.colorPerdita ?
            dimAllacci.AllacciamentoNuovo6.colorPerdita : ''},{text:dimAllacci.AllacciamentoNuovo6.pressione ? dimAllacci.AllacciamentoNuovo6.pressione : ''},{text:dimAllacci.AllacciamentoNuovo6.velocita? dimAllacci.AllacciamentoNuovo6.velocita : '', fillColor:dimAllacci.AllacciamentoNuovo6.colorVelocita ? dimAllacci.AllacciamentoNuovo6.colorVelocita : ''},{fontSize: 8, text:dimAllacci.AllacciamentoNuovo6.VerificaCondotta?dimAllacci.AllacciamentoNuovo6.VerificaCondotta:''}]);
         

            var page = [  
                this.header2, 
                {
                    style: 'header',
                    table: {
                        widths: [1,'*'],
                        body: [
                                [
                                {text:' ',fillColor:this.fillColor, 	border:[true,true,false,true]},
                                {border:[false,true,true,true],text: 'Dimensionamento allaccio acqua (interrato/aereo)', fontSize: 12,bold:true, alignment: 'center', fillColor:this.fillColor}
                                ],
                              ]
                    }
                  },
                 {
                         style: 'tableImg',
                         table: {
                             widths: [150,'*'],
                             body: 
                                dataList
                               }
                     },
                 
                      {
                        style: 'tableImg',
                        table: {
                            widths: [300,'*'],
                            body: 
                               dimensionamentoList
                            
                        }
                      },
                 
                 {
                     table:
                             {
                                 headerRows: 1,
                                 widths: ['50%','25%','25%'],
                                 body: richiesteTipoA        
                             },                  
                 },
              
                    
                    {
                        table:
                                {
                                    headerRows: 1,
                                    widths: ['35%','10%','15%','15%','25%'],
                                    body: richiesteUsoAntincendio
                                }, 
                    },

                    {
                        table:
                                {
                                    headerRows: 1,
                                    widths: ['34%','6%','24%','6%','24%','6%'],
                                    body: [[{fontSize:8, text:"PORTATA DI CALCOLO A [MC/H] (contatori a servizio di unità abitative civili)", fillColor:this.fillColor},{	fontSize: 8,text:dimAllacci.PortataCalcoloA},{fontSize:10,text:"PORTATA DI CALCOLO B [MC/H] (altri contatori)",fillColor:this.fillColor},{	fontSize: 8, text:dimAllacci.PortataCalcoloB},{fontSize:8,text:"PORTATA DI CALCOLO COMPLESSIVA (A+B) [MC/H]", fillColor:this.fillColor},{	fontSize: 8, text:dimAllacci.PortataCalcoloTotale}]]
                                }, 
                    },


                    {
                        style: 'tableExample',
                        table:
                                {
                                    headerRows: 1,
                                    fontSize:10,
                                    widths: ['100%'],
                                    body: [
                                        [ {text:"Verifica allacciamento esistente / Dimensionamento nuovo allaccio", fillColor:this.fillColor}
                                        ]
                                    ]
                                    
                                }, 
                    },
                    {
                        style: 'tableExample',
                        table:
                                {
                                    headerRows: 1,
                                    widths: ['30%','10%','10%','12%','12%','10%','16%'],
                                    body: 
                                      condotte
                                    
                                    
                                }, 
                    },
                      {   
                        style: 'big',
                          table: {
                              widths: ['*'],
                              body: [
                                      [{	image: "data:image/png;base64,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",
                                          width: 500, alignment:'center', border: [ true, false, true, false]}]
                                    ]
                          }
                      },
                      ];
    
         return page;
        }

        else if(isDimensionamentoAllacciEE){
            let dataList = [];
            dataList.push([{text: 'OdL', fillColor:this.fillColor},{text: value.dati.form._codice_odl}]);
            dataList.push([{text: 'Comune', fillColor:this.fillColor},{text: value.dati.form._ads.Indirizzo.Citta}]);
            dataList.push([{text: 'Indirizzo', fillColor:this.fillColor},{text: value.dati.form._ads.Indirizzo.toString()}]);
            let clienteTxt: string = (value.dati.form._ads.Cliente.CodiceCliente ?  value.dati.form._ads.Cliente.CodiceCliente : "") + " " +
                             (value.dati.form._ads.Cliente.Cognome ? value.dati.form._ads.Cliente.Cognome : "") + " " + 
                             (value.dati.form._ads.Cliente.Nome ? value.dati.form._ads.Cliente.Nome : " ");
            dataList.push([{text: 'Cliente', fillColor:this.fillColor},{text: clienteTxt}]);
    
            let reteEE = [];
            reteEE.push(
                [
                    { text: 'Nome', fillColor:this.fillColor }, 
                    { text: 'Numero', fillColor:this.fillColor}, 
                    { text: 'Descrizione', fillColor:this.fillColor }
                ],        
            );
            if(dimAllacci.ReteEE && dimAllacci.ReteEE.length === 0) {
                reteEE.push([
                   " ","",""
                ]);
            }
            for(var i = 0; i < dimAllacci.ReteEE.length; i++) {
                reteEE.push([
                    dimAllacci.ReteEE[i].nome,
                    dimAllacci.ReteEE[i].numero,
                    dimAllacci.ReteEE[i].desc,
                ]);
            }
            
            var page = [  
                this.header2, 
                 { style: 'separator',
                             table: {
                                     widths: ['*'],
                                     body: [
                                             [ {text:'\n\n\n',border: [ false, false, false, false]}
                                             ]
                                     ]
                             }
                                 
                 },
                   {
                         style: 'header',
                         table: {
                             widths: [1,'*'],
                             body: [
                                     [{text:' ',fillColor:this.fillColor, border:[true,true,false,true]},
                                     {text: 'CALCOLO DIMENSIONALE', fontSize: 20,bold:true, alignment: 'center', fillColor:this.fillColor, 	border:[false,true,true,true]}],
                             ]
                         }
                     },
                     { style: 'separator',
                        table: {
                                widths: ['*'],
                                body: [
                                        [ {text:'\n',border: [ false, false, false, false]}
                                        ]
                                ]
                        }
                     },
                     {
                        style: 'header',
                        table: {
                            widths: [1,'*'],
                            body: [
                                    [{text:' ',fillColor:this.fillColor, 	border:[true,true,false,true]},
                                    {	border:[false,true,true,true],text: 'Dati Progetto', fontSize: 20,bold:true, alignment: 'center', fillColor:this.fillColor}],
                            ]
                        }
                    },
                      { style: 'separator',
                      table: {
                             widths: ['*'],
                             body: [
                                     [ {text:'\n',border: [ false, false, false, false]}
                                     ]
                             ]
                     }
                          
                      },
                       {
                         style: 'tableImg',
                         table: {
                             widths: [150,'*'],
                             body: 
                                dataList
                               }
                     },
                     
                      { style: 'separator',
                      table: {
                             widths: ['*'],
                             body: [
                                     [ {text:'\n',border: [ false, false, false, false]}
                                     ]
                             ]
                        }
                          
                      },
                     
                      { style: 'separator',
                      table: {
                             widths: ['*'],
                             body: [
                                     [ {text:'\n',border: [ false, false, false, false]}
                                     ]
                             ]
                        }
                      },    
                      {
                        style: 'header',
                        table: {
                            widths: [1,'*'],
                            body: [
                                    [{text:' ',fillColor:this.fillColor, 	border:[true,true,false,true]},
                                    {	border:[false,true,true,true],text: 'Dimensionamento allaccio energia elettrica', fontSize: 20,bold:true, alignment: 'center', fillColor:this.fillColor}],
                            ]
                        }
                      },
                      { style: 'separator',
                        table: {
                                widths: ['*'],
                                body: [
                                        [ {text:'\n',border: [ false, false, false, false]}
                                        ]
                                ]
                            }
                      },
    
                    {
                        columns: [
                                {
                                    width: 350,
                                    style: 'tableExample',
                                    headerRows: 1,
                                    table: {
                                        widths: ["auto", "auto", "*"],
                                        body: reteEE
                                    }
                                },
                            ]
                    },                     
                      
                ];
    
         return page;
        }
    }

  
    getPage4(value){

        var page = [];
           page = [ 

	               this.header2, 
                { style: 'separator',
                            table: {
                                    widths: ['*'],
                                    body: [
                                            [ {text:'\n\n\n',border: [ false, false, false, false]}
                                            ]
                                    ]
                            }
                                
                },
                  {
                        style: 'header',
                        table: {
                            widths: [1,'*'],
                            body: [
                                	[{text:' ',fillColor:this.fillColor, border:[true,true,false,true]},
                                    {	border:[false,true,true,true],text: 'Relazione fotografica', fontSize: 20,bold:true, alignment: 'center', fillColor:this.fillColor}],
                            ]
                        }
                    }, 
                     { style: 'separator',
                            table: {
                                    widths: ['*'],
                                    body: [
                                            [ {text:'\n',border: [ false, false, false, false]}
                                            ]
                                    ]
                            }
                                
                }];
                

                this.getFotoLayout(this.foto_altre,page);
             

        return page;
    }

    getPage3(value){
            var datiTecnici = [];
            datiTecnici.push([{text: 'GRP', fillColor:this.fillColor},{text:value.dati.form._GRP},{text:' ', border:[true,false,true,false]},{text: 'CDL', fillColor:this.fillColor},{text:value.dati.form._CDL}]);
	        datiTecnici.push([{text: 'Tipo Avv.', fillColor:this.fillColor},{text:value.dati.form._tipoAvviso},{text:' ', border:[true,false,true,false]},{text: 'Dati Cliente', fillColor:this.fillColor},{text:value.dati.form._datiCliente}]);
	        datiTecnici.push([{text: 'Cod.App.', fillColor:this.fillColor},{text:value.dati.form._codiceAppuntamento},{text:' ', border:[true,false,true,false]},{text: 'Provenienza', fillColor:this.fillColor},{text:value.dati.form._provenienza}]);
           
            var page = [

	                this.header2, 
                { style: 'separator',
                            table: {
                                    widths: ['*'],
                                    body: [
                                            [ {text:'\n\n\n',border: [ false, false, false, false]}
                                            ]
                                    ]
                            }
                                
                },
                  {
                        style: 'header',
                        table: {
                            widths: [1,'*'],
                            body: [
                                	[{text:' ',fillColor:this.fillColor, 	border:[true,true,false,true]},
                                    {	border:[false,true,true,true],text: 'Dati Tecnici', fontSize: 20,bold:true, alignment: 'center', fillColor:this.fillColor}],
                            ]
                        }
                    },
                     { style: 'separator',
                     table: {
                            widths: ['*'],
                            body: [
                                	[ {text:'\n',border: [ false, false, false, false]}
                                	]
                            ]
                    }
                         
                     },


                    {
                        style: 'tableImg',
                        table: {
                            widths: [100,'*',1,100,'*'],
                            body: datiTecnici
                        }
                    },
                    { style: 'separator',
                     table: {
                            widths: ['*'],
                            body: [
                                	[ {text:'\n',border: [ false, false, false, false]}
                                	]
                            ]
                    }
                         
                     },
                     {
                        style: 'header',
                        table: {
                            widths: ['*',1],
                            body: [
                                	[{text: 'Caratteristiche di configurazione', fillColor:this.fillColor, alignment:'center',border:[true,true,false,true]},{text:'',fillColor:this.fillColor,border:[false,true,true,true]}],
                                	[{text: value.dati.form._DatiTecnici ,rowSpan:4,border:[true,true,false,true] },{text: '\n',border:[false,false,true,false]}],
                                	[{text:' '},{text: '\n',border:[false,false,true,false]}],
                                	[{text:' '},{text: '\n',border:[false,false,true,false]}],
                                	[{text:' '},{text: '\n',border:[false,false,true,true]}]
                            ]
                        }
                    },
                    
                     { style: 'separator',
                     table: {
                            widths: ['*'],
                            body: [
                                	[ {text:'\n',border: [ false, false, false, false]}
                                	]
                            ]
                    }
                         
                     },
                     {
                        style: 'header',
                        table: {
                            widths: ['*',1],
                            body: [
                                	[{text: 'Note Avviso/Odl', fillColor:this.fillColor, alignment:'center',border:[true,true,false,true]},{text:'',fillColor:this.fillColor,border:[false,true,true,true]}],
                                	[{text: value.dati.form._Note ,rowSpan:4,border:[true,true,false,true] },{text: '\n',border:[false,false,true,false]}],
                                	[{text:' '},{text: '\n',border:[false,false,true,false]}],
                                	[{text:' '},{text: '\n',border:[false,false,true,false]}],
                                	[{text:' '},{text: '\n',border:[false,false,true,true]}]
                            ]
                        }
                    },
                     { style: 'separator',
                     table: {
                            widths: ['*'],
                            body: [
                                	[ {text:'\n',border: [ false, false, false, false]}
                                	]
                            ]
                        }
                     },
                     {
                        style: 'header',
                        table: {
                            widths: ['*',1],
                            body: [
                                	[{text: 'Note Esecutive', fillColor:this.fillColor, alignment:'center',border:[true,true,false,true]},{text:'',fillColor:this.fillColor,border:[false,true,true,true]}],
                                	[{text: value.dati.form._NoteEsecutive ,rowSpan:4,border:[true,true,false,true] },{text: '\n',border:[false,false,true,false]}],
                                	[{text:' '},{text: '\n',border:[false,false,true,false]}],
                                	[{text:' '},{text: '\n',border:[false,false,true,false]}],
                                	[{text:' '},{text: '\n',border:[false,false,true,true]}]
                            ]
                        }
                    }
            ]
        return page;
    }

    getPage2(value){
        var page = [

	        this.header2, 
                { style: 'separator',
                            table: {
                                    widths: ['*'],
                                    body: [
                                            [ {text:'\n\n\n',border: [ false, false, false, false]}
                                            ]
                                    ]
                            }
                                
                },

	            {
                        style: 'header',
                        table: {
                            widths: [1,'*'],
                            body: [
                                	[{text:' ',fillColor:this.fillColor, 	border:[true,true,false,true]},
                                    {	border:[false,true,true,true],text: 'COROGRAFIA - PLANIMETRIA', fontSize: 20, bold:true, alignment: 'center',fillColor:this.fillColor}],
                            ]
                        }
                    },
                     { style: 'separator',
                     table: {
                            widths: ['*'],
                            body: [
                                	[ {text:'\n',border: [ false, false, false, false]}
                                	]
                            ]
                    }
                         
                     }
                    
                ];

                this.getFotoLayout(this.foto_planimetria,page);

        return page;
    }


    getPage1(value){
        var page = [
         this.header, 
		{ style: 'separator',
                     table: {
                            widths: ['*'],
                            body: [
                                	[ {text:'\n\n\n',border: [ false, false, false, false]}
                                	]
                            ]
                    }
                         
                     },

	        {
                        style: '',
                        table: {
                            widths: [1,'*'],
                            body: [
                                	[{text:' ',fillColor:this.fillColor, 	border:[true,true,false,true]},
                                    {	border:[false,true,true,true],text: 'FASCICOLO TECNICO', fontSize: 20,bold:true, alignment: 'center', fillColor:this.fillColor}],
                            ]
                        }
                    },
                     { style: 'separator',
                     table: {
                            widths: ['*'],
                            body: [
                                	[ {text:'\n',border: [ false, false, false, false]}
                                	]
                            ]
                    }
                         
                     },
                    {
                        style: 'tableExample',
                        table: {
                            widths: [50, 150,'*', 50, 150],
                            body: [
                                [{
                                    text:'Avviso',
                                    fillColor:this.fillColor
                                }, 
                                {
                                    text:value.dati.form._Avviso
                                },
                                {
                                    border: [ false, false, false, false],
                                    text:''
                                }, 
                                {
                                    text:'Odl',
                                    fillColor:this.fillColor
                                }, 
                                {
                                    text:value.dati.form._codice_odl
                                }]
                             ]
                        }
                    },
                     { style: 'separator',
                     table: {
                            widths: ['*'],
                            body: [
                                	[ {text:'\n',border: [ false, false, false, false]}
                                	]
                            ]
                    }
                     },
                    {   
                      style: 'big',
                        table: {
                            widths: ['*'],
                            body: [
                                	[{text: 'Settore merceologico', bold:true, fontSize: 10, alignment: 'center', border: [ true, true, true, false]}],
                                	[{text: value.dati.form._TipoServizio, fontSize: 20,bold:true, alignment: 'center', fillColor:this.fillColor,  border: [ true, false, true, false]}],
                                  	[{text: '', fontSize: 20,bold:true, alignment: 'center',  border: [ true, false, true, false]}],
                                	[{	image: value.dati.form._Icon,
							            width: 60, alignment:'center', border: [ true, false, true, false]}],   [{text: '', fontSize: 20,bold:true, alignment: 'center',  border: [ true, false, true, true]}]
                            ]
                        }
                    },
                     { style: 'separator',
                     table: {
                            widths: ['*'],
                            body: [
                                	[ {text:'\n',border: [ false, false, false, false]}
                                	]
                            ]
                    }
                     },
                     
                    {
                        style: 'tableExample',
                        table: {
                            widths: [50, '*'],
                            body: [
                                [{
                                    text:'Pds',
                                    fillColor:this.fillColor
                                }, 
                                {
                                    text: value.dati.form._prod_servizio
                                }]
                             ]
                        }
                    },
                     { style: 'separator',
                     table: {
                            widths: ['*'],
                            body: [
                                	[ {text:'\n',border: [ false, false, false, false]}
                                	]
                            ]
                    }
                },
                   {
                        style: 'tableExample',
                        table: {
                            widths: [50, '*'],
                            body: [
                                [{
                                    text:'Cod.Att.',
                                    fillColor:this.fillColor
                                }, 
                                {
                                    text:value.dati.form._codice_attivita
                                }]
                             ]
                        }
                    },
                                         { style: 'separator',
                     table: {
                            widths: ['*'],
                            body: [
                                	[ {text:'\n',border: [ false, false, false, false]}
                                	]
                            ]
                    }
                },
                   {
                        style: 'tableExample',
                        table: {
                            widths: [50, '*'],
                            body: [
                                [{
                                    text:'SOT',
                                    fillColor:this.fillColor
                                }, 
                                {
                                    text: value.dati.form._codice_sot
                                }]
                             ]
                        }
                    },    
                    { style: 'separator',
                     table: {
                            widths: ['*'],
                            body: [
                                	[ {text:'\n',border: [ false, false, false, false]}
                                	]
                            ]
                    }
                },
                   {
                        style: 'tableExample',
                        table: {
                            widths: [50, '*'],
                            body: [
                                [{
                                    text:'Indirizzo',
                                    fillColor:this.fillColor
                                }, 
                                {
                                    text:value.dati.form._Indirizzo
                                }]
                             ]
                        }
                    },
                          { style: 'separator',
                     table: {
                            widths: ['*'],
                            body: [
                                	[ {text:'\n',border: [ false, false, false, false]}
                                	]
                            ]
                    }
                },
                   {
                        style: 'tableExample',
                        table: {
                            widths: ['*'],
                            body: [
                                [{
                                    text:'Note manuali post redazione fascicolo tecnico',
                                    fillColor:this.fillColor,
                                    alignment: 'center'
                                }],
                                [ 
                                {
                                    text:'\n\n\n\n\n\n\n\n\n'
                                }]
                             ]
                        }
                    }
            ];
                    return page;
    }


    getAllDoc(page1,page2,page3,page4, page6){
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
        if(page6) {
            for(let item of page6) {
                retPage.push(item);
            }
        }
        return retPage;
    }

    public getTesProvDomDefinition(value): Promise<any> {

/*
        for(var i=0; i < value.download.ads.foto.length; i++ )
          this.foto_salvate[i] = fileUtil.readBase64Image(value.download.ads._codice_odl,"image",value.download.ads.foto[i].name);
  */     
        this.foto_planimetria = [];   
        this.foto_altre = [];
        this.fillColor = value.dati.form._fillColor;

        if(value.dati.form._Gas==true||value.dati.form._Energia_Elettrica==true){
            this.header = {
				style: "header",
				table: {
					widths: ["*", 100],
					body: [[{
								image: value.dati.form._LogoSx,
								width: 150,
								border: [false, false, false, false]
							}, {
								image: value.dati.form._LogoDx,
							   margin: [-30,10],
								width: 125,
								border: [false, false, false, false]
							}
						]]
				}
			};
            this.header2 = {
				style: "header",
				table: {
					widths: ["*", 100],
					body: [[{
								image: value.dati.form._LogoSx,
								width: 150,
								border: [false, false, false, false]
							}, {
								image: value.dati.form._LogoDx,
							   margin: [-30,10],
								width: 125,
								border: [false, false, false, false]
							}
						]]
				},
				pageBreak: "before"
			};

        }
        else {
            this.header = {
            	style: "header",
				table: {
					widths: ["*", 100],
					body: [[{
								image: value.dati.form._LogoSx,
								width: 150,
								border: [false, false, false, false]
							}, {
								image: value.dati.form._LogoDx,
								width: 100,
								border: [false, false, false, false]
							}
						]]
				}
        };
        this.header2 = {
            style: "header",
				table: {
					widths: ["*", 100],
					body: [[{
								image: value.dati.form._LogoSx,
								width: 150,
								border: [false, false, false, false]
							}, {
								image: value.dati.form._LogoDx,
								width: 100,
								border: [false, false, false, false]
							}
						]]
				},	pageBreak: "before"
        }
    
        }

        return new Promise(async (resolve, reject) => {
        
        //var pdfContent = value;


        let thumbSize;
        if (value.dati.form._imagesPlanimetria != " "){
            thumbSize = 1400;
            for(let img of value.dati.form._imagesPlanimetria){
                if (thumbSize > 0){
                    var thumb = await Utils.resizedataURL(img.base64,-1,thumbSize);
                    if(thumb){ 
                        img.base64 = thumb;
                    }
                }
                this.foto_planimetria.push(img);
            }    
        }
        if(this.foto_planimetria.length>0 && this.foto_planimetria[0]==' ') this.foto_planimetria = [];
        if(this.foto_planimetria.length == 0||this.foto_planimetria.length == 3||this.foto_planimetria.length == 5){      
            this.foto_planimetria.push({name:'',tag:'',base64:imgExample.getWhiteImg()});
        }

        if (value.dati.form._imagesAltre != " "){
            thumbSize = 1200;    
            for(let img of value.dati.form._imagesAltre){
                if (thumbSize > 0){
                    var thumb = await Utils.resizedataURL(img.base64,-1,thumbSize);
                    if(thumb){ 
                        img.base64 = thumb;
                    }
                }
                this.foto_altre.push(img);
            }
        }
        if(this.foto_altre.length>0 && this.foto_altre[0]==' ') this.foto_altre = [];
        if(this.foto_altre.length == 0||this.foto_altre.length == 3||this.foto_altre.length == 5){      
           this.foto_altre.push({name:'',tag:'',base64:imgExample.getWhiteImg()});
        }
    

        var page1 = this.getPage1(value);
        var page2 = this.getPage2(value);
        var page3 = this.getPage3(value);
        var page4 = this.getPage4(value);
        var page6 = this.getPage6(value);

        var contPdf = this.getAllDoc(page1,page2,page3,page4, page6);
            var docDefinition = {
                    footer: function(currentPage, pageCount) {return {	"table": {
					"widths": [30, 50, "*", 160, 30],
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
								"text": "Data Redazione: "+value.dati.form._DataRedazione,
								"border": [false, false, false, false],
							}, {
								"text": "",
									"border": [false, false, false, false],
							}
						]]
				}}
				
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