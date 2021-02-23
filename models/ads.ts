import { Cliente } from './cliente';
import { Indirizzo } from './indirizzo';
import { Caratteristiche } from './caratteristiche';
import { Preventivo } from './preventivo';
import { Utils } from '../utils/utils';
import { Params } from '../config/params';
import * as moment from 'moment';
import {CopInfo} from './cop-info';
import { VerbaleDiSopralluogo } from './verbale_di_sopralluogo';
import { DimensionamentoAllacciGas, DimensionamentoAllacciAcqua,DimensionamentoAllacciFognatura, DimensionamentoAllacciEE } from './dimensionamento-allacci';

declare var imgExample: any;
declare var fileUtil: any;


export enum CodSocieta{
    INVALID=0,
    HERA="HERA",
    HERATECH="HERATECH",
    AAA="AAA",
    INRETE="INRETE"
}

export enum Stato {
    ASSEGNATO,
    PRESO_IN_CARICO,
    SOPRALLUOGO_IN_CORSO,
    SOPRALLUOGO_SOSPESO,
    INATTESA_ODL,
    SOPRALLUOGO_CONCLUSO,
    SOPRALLUOGO_ANNULLATO
}

export enum SettoreMerceologico {
    ACQUA = 11,
    GAS = 10,
    //FOGNATURA = 0, 
    ENERGIA_ELETTRICA = 13,
    TLR = 14
}

export enum DettaglioMerceologico {
    ACQUEDOTTO_CIVILE = 1,
    ACQUEDOTTO_INDUSTRIALE = 2,
    FOGNATURA = 3,
    DEPURAZIONE = 4,
    GAS = 5,
    GPL = 6,
    ACQUE_METEORICHE = 7,
    TELERISCALDAMENTO = 8,
    ALTA_TENSIONE = 9,
    BASSA_TENSIONE = 10,
    MEDIA_TENSIONE = 11,
    MT_MISURA_BT = 12 
}

export enum Prestazione {
    PM1,
    PN1,
    PR1,
    E02
}

export class Ads {
    
    _stato: Stato;
    _data_appuntamento: string;
    _ora_inizio: string;
    _ora_fine: string;
    _cliente: Cliente;
    _codice_ads: any;
    _codice_odl: any;
    _prestazione: Prestazione;
    _indirizzo: Indirizzo;
    _telefonoPrestazione: string;
    _codice_rintracciabilita: string;
    _codice_avviso: string;
    _data_richiesta: string;
    _udd: boolean;
    _note: string;
    _tipologia_preventivo: string;

    _preso_in_carico: boolean = false;
    _ora_presa_in_carico: string = "";
    _arrivo_sul_posto: string = "";

    _settore_merceologico: SettoreMerceologico;
    _dettaglio_merceologico: DettaglioMerceologico;
    _codice_attivita: string;
    _prod_servizio: string;
    _caratteristiche: Caratteristiche;

    _preventivo: Preventivo;

    _bp: string;
    _stato_cruscotto: string;
    _note_avviso: string;
    _attivita_normata: string; //è il PM1 ecc
    _codice_sot: string;
    _descrizione_sot: string;
    _centro_di_lavoro: string;
    _gruppo_resp_pianificazione: string;
    _tipo_avviso: string;
    _codice_appuntamento: string;
    _provenienza: string;
    _tipo_fornitura: string;
    
    _podPdR: string;
    _matricola: string;
    _campoSort: string; 
    _chiaveTestoStd: string; 
    _operazTestoBreve: string;
    _indirizzoSpedizioneFattura: string;
     
    _altro1: string;
    _tipoPreventivo: number;

    _sync: boolean = false;
    _trash: boolean = false;
    _sospeso: boolean = false;
    _conferma_avviso: boolean = false;
    _dataFoto: any;
    _dataDocument: any;
    _read: boolean;
    _dataConfirmed: boolean;

    _base64Img: any;

    _base64ImgFt: any;
    _base64ImgFta: any;
    _base64ImgSopralluogo:any;

    _base64Doc: any;
    //_jsonForm: any;

    _isNew;

    _indirizzoSalvato;

    _doneSP;

    _disegnoTecnico;

    _pathJSON;

    _disegnoTecnicoBase64;
    _App_Effettivo_Ora_Inizio;
    _Scelta;
    _copInfo;
    _verbaleDiSopralluogo;
    _dimensionamentoAllacciGas;
    _dimensionamentoAllacciAcqua;
    _dimensionamentoAllacciFognatura;
    _dimensionamentoAllacciEE;

    _statoPrecedente: Stato;
    _forzaMaggiore: boolean;

    _noteProgettuali: string;
    _noteEsecutive: string;

    _smsClienteSent: boolean = false;
    _smsPrestazioneSent: boolean = false;

    //data appuntamento 
    _altro2: string;

    //ora inizio appuntamento 
    _altro3: string;

    //ora fine appuntamento 
    _altro4: string;

    //lista odl limitrofi
    _altro5: string;

    //societa
    _altro6;

    //profondita 
    _altro7;

    //diametro 
    _altro8;

    //pressione profondita
    _altro9;

    //tipo allaccio
    _altro10;
    

    _filterDataAppuntamento;
    _filterOraInizio;
    _tubaturaPosizionata;

    _preventivoSent;

    _cognomeIncaricato;
    _nomeIncaricato;
    _telefonoIncaricato;

    needToSendAttachment;
    _preventivoInibito;
    _dimensionamentoSaved;

    _tipoRichiesta;

    get DimensionamentoSaved(){
        return this._dimensionamentoSaved;
    }

    set DimensionamentoSaved(value){
        this._dimensionamentoSaved = value;
    }

    get PreventivoInibito(){
        return this._preventivoInibito;
    }

    set PreventivoInibito(value){
        this._preventivoInibito = value;
    }


    get PreventivoSent() {
        return this._preventivoSent;
    }

    set PreventivoSent(sent:boolean) {
        this._preventivoSent = sent;
    }

    get TubaturaPosizionata(){
        return this._tubaturaPosizionata;
    }

    set TubaturaPosizionata(value){
        this._tubaturaPosizionata = value;
    }

    get FilterOraInizio() {
        return this._filterOraInizio;
    }

    set FilterOraInizio(oraInizio: string){
        this._filterOraInizio = oraInizio;
    }

    get FilterDataAppuntamento() {
        return this._filterDataAppuntamento;
    }

    set FilterDataAppuntamento(dataAppuntamento: string) {
        this._filterDataAppuntamento = dataAppuntamento;
    }

    get Altro2(){
        return this._altro2;
    }

    set Altro2(altro2: string) {
        this._altro2 = altro2;
    }

    get Altro3(){
        return this._altro3;
    }

    set Altro3(altro3: string) {
        this._altro3 = altro3;
    }

    get Altro4() {
        return this._altro4;
    }

    set Altro4(altro4: string) {
        this._altro4 = altro4;
    }

    get Altro5() {
        return this._altro5;
    }

    set Altro5(altro5: string) {
        this._altro5 = altro5;
    }

    get Altro6() {
        return this._altro6;
    }

    get Societa() {
        try{
        var obj = JSON.parse(this._altro1);
        if(obj) return obj.societa;
        }catch(err){
            return "";
        }
    }

    get CodiceSocieta() {
        try{
        var obj = JSON.parse(this._altro1);
        if(obj) {
            let res = CodSocieta.INVALID;
            switch (parseInt(""+obj.societa)){
                case 7010: 	// AcegasApsAmga S.p.A.
                    res = CodSocieta.AAA;
                    break;
                case 1900:	// Inrete Distr. Energia SpA
                    res = CodSocieta.INRETE;
                    break;
                
                case 8060:	// Marche Multiservizi S.p.A (al momento accorpiamo)
                case 5010:	// Hera S.p.A.
                    res = CodSocieta.HERA;
                    break;
            
                default:
                    break;				
            }
            return res;
        }
        else return CodSocieta.INVALID;
        }catch(err){
            return CodSocieta.INVALID;
        }
    }

    get TipoRichiesta() {
        try{
        var obj = JSON.parse(this._altro1);
        if(obj) return obj.tipoRichiesta;
        }catch(err){
            return "";
        }
    }

    set TipoRichiesta(value){
        this._tipoRichiesta = value;
    }

    set Altro6(altro6: string) {
        this._altro6 = altro6;
    }

    get Altro7() {
        return this._altro7;
    }

    set Altro7(altro7: string) {
        this._altro7 = altro7;
    }


    get Altro8() {
        return this._altro8;
    }

    set Altro8(altro8: string) {
        this._altro8 = altro8;
    }

    get Altro9() {
        return this._altro9;
    }

    set Altro9(altro9: string) {
        this._altro9 = altro9;
    }

    get Altro10() {
        return this._altro10;
    }

    set Altro10(altro10: string) {
        this._altro10 = altro10;
    }


    get SmsClienteSent() {
        return this._smsClienteSent;
    }

    set SmsClienteSent(value: boolean) {
        this._smsClienteSent = value;
    }

    get SmsPrestazioneSent() {
        return this._smsPrestazioneSent;
    }

    set SmsPrestazioneSent(value: boolean) {
        this._smsPrestazioneSent = value;
    }

    get NoteProgettuali() {
        return this._noteProgettuali;
    }

    set NoteProgettuali(noteProgettuali: string) {
        this._noteProgettuali = noteProgettuali;
    }

    get NoteEsecutive() {
        return this._noteEsecutive;
    }

    set NoteEsecutive(noteEsecutive: string) {
        this._noteEsecutive = noteEsecutive;
    }

    get DimensionamentoAllacciGas() {
        return this._dimensionamentoAllacciGas;
    }

    set DimensionamentoAllacciGas(dimensionamentoAllacci: DimensionamentoAllacciGas) {
        this._dimensionamentoAllacciGas = dimensionamentoAllacci;
    }

    get DimensionamentoAllacciAcqua() {
        return this._dimensionamentoAllacciAcqua;
    }

    set DimensionamentoAllacciAcqua(dimensionamentoAllacci: DimensionamentoAllacciAcqua) {
        this._dimensionamentoAllacciAcqua = dimensionamentoAllacci;
    }

    get DimensionamentoAllacciFognatura() {
        return this._dimensionamentoAllacciFognatura;
    }

    set DimensionamentoAllacciFognatura(dimensionamentoAllacci: DimensionamentoAllacciFognatura) {
        this._dimensionamentoAllacciFognatura = dimensionamentoAllacci;
    }

    get DimensionamentoAllacciEE() {
        return this._dimensionamentoAllacciEE;
    }

    set DimensionamentoAllacciEE(dimensionamentoAllacci: DimensionamentoAllacciEE) {
        this._dimensionamentoAllacciEE = dimensionamentoAllacci;
    }

    get StatoPrecedente() {
        return this._statoPrecedente;
    }

    set StatoPrecedente(stato: Stato) {
        this._statoPrecedente = stato;
    }

    get ForzaMaggiore() {
        return this._forzaMaggiore;
    }

    set ForzaMaggiore(forzaMaggiore: boolean) {
        this._forzaMaggiore = forzaMaggiore;
    }



    get Altro1() {
        return this._altro1;
    }

    set Altro1(altro1: string) {
        this._altro1 = altro1;
    }

    get TipoPreventivo() {
        return this._tipoPreventivo;
    }

    set TipoPreventivo(tipoPreventivo: number) {
        this._tipoPreventivo = tipoPreventivo;
    }


    set VerbaleDiSopralluogo(verbaleDiSopralluogo: VerbaleDiSopralluogo){
        this._verbaleDiSopralluogo = verbaleDiSopralluogo;
    }

    get VerbaleDiSopralluogo() {
        return this._verbaleDiSopralluogo;
    }
    set CopInfo(copInfo: CopInfo) {
        this._copInfo = copInfo;
    }

    get CopInfo() {
        return this._copInfo;
    }

    set Scelta(data){
        this._Scelta = data;
    }

    get Scelta(){
        return this._Scelta;
    }


    set App_Effettivo_Ora_Inizio(data){
        this._App_Effettivo_Ora_Inizio = data;
    }

    get App_Effettivo_Ora_Inizio(){
        return this._App_Effettivo_Ora_Inizio;
    }

    getDisegnoTecnicoBase64(){
        return this._disegnoTecnicoBase64;
    }

    setDisegnoTecnicoBase64(data){
        this._disegnoTecnicoBase64 = data;
    }

    get pathJSON(){
        return this._pathJSON;
    }

    set pathJSON(data){
        this._pathJSON = data;
    }

    calculateDisegnoTecnicoBase64FromGal(file,successCallback){
        if(file==undefined) return undefined;
        var path = fileUtil.getExternalStoragePath()+this.Id+"/images/";
       //TODO: revert png?
        var fileName = file.split('/')[file.split('/').length-1];
       fileUtil.readBase64ExternalDoc(path,fileName, async function(data){
           //self._disegnoTecnicoBase64 = data;
           let res = await Utils.resizedataURL(data,-1, 1400);
           successCallback(res);
       }, function(err){
           console.error('base64 disegno tecnico '+err);
           successCallback("");
        });
    }

    calculateDisegnoTecnicoBase64(successCallback){
        if(this._disegnoTecnico==undefined) return undefined;
        var path = fileUtil.getExternalStoragePath()+this.Id+"/images/";
       //TODO: revert png?
        var fileName = "disegnoTecnico.jpg";
       fileUtil.readBase64ExternalDoc(path,fileName, async function(data){
           //self._disegnoTecnicoBase64 = data;
           let res = await Utils.resizedataURL(data,-1, 1400);
           successCallback(res);
       }, function(err){
           console.error('base64 disegno tecnico '+err);
           successCallback("");
        });
    }

    get DisegnoTecnico(){
        return this._disegnoTecnico;
    }

     set DisegnoTecnico(filename){
        this._disegnoTecnico = filename;
     }

    setDisegnoTecnico(base64,successCallback){
        var date = Date.now().toString();
        //TODO: revert to png?
        var filename =  fileUtil.getExternalStoragePath()+this.Id+"/images/disegnoTecnico.jpg";
        var src = base64.split(',')[1];
        //TODO: revert png?
        var blob = this.b64toBlob(src,"image/jpg");
        var self = this;
        self.DisegnoTecnico = fileUtil.getExternalStoragePath()+this.Id+"/images/disegnoTecnico.jpg";
       //TODO: revert png?
        fileUtil.createFile(this.Id,'images',"disegnoTecnico.jpg",blob,successCallback,
    function(err){
        self.DisegnoTecnico = undefined;
        self = null;
        console.error("form2 - saveFile - Errore nella creazione del file", err); 
    })

}

    b64toBlob(b64Data, contentType, sliceSize?) {
        const binary_string =  window.atob(b64Data);
        const len = binary_string.length;
        const bytes = new Uint8Array(len);
        for (let i = 0; i < len; i++) {
            bytes[i] = binary_string.charCodeAt(i);
        }
        return bytes.buffer;
    }

    

    get IndirizzoSpedizioneFattura() {
        return this._indirizzoSpedizioneFattura;
    }

    set IndirizzoSpedizioneFattura(ind: string) {
        this._indirizzoSpedizioneFattura = ind;
    }

    get PodPdR() {
        return this._podPdR;
    }

    set PodPdR(pod: string) {
        this._podPdR = pod;
    }

    get Matricola() {
        return this._matricola;
    }

    set Matricola(matricola: string) {
        this._matricola = matricola;
    }

    get CampoSort() {
        return this._campoSort;
    }

    set CampoSort(camposort: string) {
        this._campoSort = camposort;
    }

    get ChiaveTestoStd() {
        return this._chiaveTestoStd;
    }

    set ChiaveTestoStd(chiavetestostd: string){
        this._chiaveTestoStd = chiavetestostd;
    }

    get OperazTestoBreve() {
        return this._operazTestoBreve;
    }

    set OperazTestoBreve(operazTestoBreve: string) {
        this._operazTestoBreve = operazTestoBreve;
    }

    get DoneSP(){
        if(this._doneSP == undefined) this._doneSP = false;
        return this._doneSP;
    }

    set DoneSP(data){
        this._doneSP = data;
    }

    get IndirizzoSalvato(){
        if(this._prestazione && this._prestazione.toString() != "PN1") return true;
        return this._indirizzoSalvato;
    }

    set IndirizzoSalvato(data){
        this._indirizzoSalvato = data;
    }

    set IsNew(data){
        this._isNew = data;
    }

    get IsNew(){
        if(this._isNew==undefined) return true;
        return this._isNew;
    }
/*
    get JsonForm(){
        return this._jsonForm;
    }

    set JsonForm(data){
        this._jsonForm = data;
    }
*/
    get Id(){
        if(this.CodiceAds!=undefined && this.CodiceAds!='') return this.CodiceAds;
        return this.CodiceOdl;
    }

    get Read() {
        return this._read;
    }

    set Read(read: boolean) {
        this._read = read;
    }

    get TelefonoPrestazione() {
        return this._telefonoPrestazione;
    }

    set TelefonoPrestazione(telefono: string) {
        this._telefonoPrestazione = telefono;
    }

    get DataConfirmed() {
        return this._dataConfirmed;
    }

    set DataConfirmed(confirmed: boolean) {
        this._dataConfirmed = confirmed;
    }

    getBase64Img(filename){
        var i = 0;
        for(let item of this._dataFoto){
            if(item.name == filename) {
                return this._base64Img[i];
            }
            i++;
        }
    }

    get Base64Img(){
        if(this._base64Img==undefined) this._base64Img = [];
        return this._base64Img;
    }

    set Base64Img(data){
        this._base64Img = data;
    }

    isDoneFt(){
        if(this.dataDocument==undefined) return false;
        for(let item of this.dataDocument){
            if(item.name.indexOf('fascicolo')>-1 && item.tag == 'doc') {
                return true;
            }
        }
        return false;
    }

    isDoneVs(){
         if(this.dataDocument==undefined) return false;
        for(let item of this.dataDocument){
            if(item.name.indexOf('Verbale')>-1 && item.tag == 'doc') {
                return true;
            }
        }
        return false;
    }

    getBase64DocFT(){
        var i = 0;
        if(this._base64Doc==undefined) return undefined;
        for(let item of this._base64Doc){
            if(item.name.indexOf('fascicolo')>-1 && item.tag == 'doc') {
                return this._base64Doc[i];
            }
            i++;
        }
        return undefined;
    }

    getBase64DocVS(){
        var i = 0;
        if(this._base64Doc==undefined) return undefined;
        for(let item of this._base64Doc){
            if(item.name.indexOf('Verbale')>-1 && item.tag == 'doc') {
                return this._base64Doc[i];
            }
            i++;
        }
        return undefined;
    }

    getBase64DocOD(){
        var i = 0;
        if(this._base64Doc==undefined) return undefined;
        var retEL = [];
        for(let item of this._base64Doc){
            if(item.tag != 'doc') {
                retEL.push(item);
            }
            i++;
        }
        return retEL;
    }

   getBase64Doc(filename){
        var i = 0;
        if(this._base64Doc==undefined) return undefined;
        for(let item of this._base64Doc){
            if(item.name.indexOf(filename)>-1) {
                return this._base64Doc[i];
            }
            i++;
        }
    }

    get Base64Doc(){
        if(this._base64Doc==undefined) this._base64Doc = [];
        return this._base64Doc;
    }



    get Base64ImgFt(){
        this._base64ImgFt = [];
        for(let img of this._base64Img){
            if(img.tag=='ft'){
                var base64 = img.base64;
                var name = img.name.split('/');
                name = name[name.length-1];
                //TODO: revert png?
                if(img.base64.indexOf("data:image")<0)
                        base64 = "data:image/jpg;base64,"+img.base64;
                 var item = {tag:'Foto planimetria', name:name,base64:base64};
                 this._base64ImgFt.push(item);
        }
        }
        return  this._base64ImgFt;
    }

    set Base64ImgFt(data){
        this._base64ImgFt = data;
    }

    get Base64ImgFta(){
        this._base64ImgFta = [];
        for(let img of this._base64Img){
            if(img.tag=='fta'){
                 var base64 = img.base64;                
                 var name = img.name.split('/');
                name = name[name.length-1];
                if(img.base64.indexOf("data:image")<0)
                        base64 = "data:image/png;base64,"+img.base64;
                 var item = {tag:'Altre foto', name:name,base64:base64};
                 this._base64ImgFta.push(item);
            }
        }
        return this._base64ImgFta;
    }

    set Base64ImgFta(data){
        this._base64ImgFta = data;
    }

    get Base64ImgSopralluogo(){
        this._base64ImgSopralluogo = [];
        for(let img of this._base64Img){
            if(img.tag=='sopralluogo'){
                 var base64 = img.base64;                
                 var name = img.name.split('/');
                name = name[name.length-1];
                //TODO: revert png?
                if(img.base64.indexOf("data:image")<0)
                        base64 = "data:image/jpg;base64,"+img.base64;
                 var item = {tag:'sopralluogo', name:name,base64:base64};
                 this._base64ImgSopralluogo.push(item);
            }
        }
        return this._base64ImgSopralluogo;
    }

    set Base64ImgSopralluogo(data){
        this._base64ImgSopralluogo = data;
    }

    pushBase64Img(data){
        if(this._base64Img==undefined) this._base64Img = [];
        this._base64Img.push(data);
    }

    cleanBase64Img(){
        this._base64Img = [];
    }

    removeBase64Img(index){
        var tmp = [];
        var i = 0;
        for(let obj of this._base64Img){
            if(i!=index) tmp.push(obj)
            i++;
        }
        this._base64Img = tmp;
    }

    pushBase64Doc(data){
        if(this._base64Doc==undefined) this._base64Doc = [];
        this._base64Doc.push(data);
    }

    cleanBase64Doc(){
        this._base64Doc = [];
    }

    removeBase64Doc(index){
        var tmp = [];
        var i = 0;
        for(let obj of this._base64Doc){
            if(i!=index) tmp.push(obj)
            i++;
        }
        this._base64Doc = tmp;
    }


    get TipoFornitura() {
        return this._tipo_fornitura;
    }

    set TipoFornitura(tipo_fornitura: string) {
        this._tipo_fornitura = tipo_fornitura;
    }

    get dataFoto() {
        if(this._dataFoto==undefined) this._dataFoto = [];
        return this._dataFoto;
    }
    set dataFoto(dataFoto) {
        this._dataFoto = dataFoto;
    }

    get dataDocument() {
          if(this._dataDocument==undefined) this._dataDocument = [];
        return this._dataDocument;
    }
    set dataDocument(dataDocument) {
        this._dataDocument = dataDocument;
    }

    get ConfermaAvviso() {
        return this._conferma_avviso;
    }
    set ConfermaAvviso(conferma_avviso: boolean) {
        this._conferma_avviso = conferma_avviso;
    }

    get CodiceAttivita() {
        return this._codice_attivita;
    }

    set CodiceAttivita(codice_attivita: string) {
        this._codice_attivita = codice_attivita;
    }

    get ProdServizio() {
        return this._prod_servizio;
    }

    set ProdServizio(prod_servizio: string) {
        this._prod_servizio = prod_servizio;
    }

    get DettaglioMerceologico() {
        return this._dettaglio_merceologico;
    }

    set DettaglioMerceologico(dettaglio_merceologico: DettaglioMerceologico) {
        this._dettaglio_merceologico = dettaglio_merceologico;
    }

    get SettoreMerceologico() {
        return this._settore_merceologico;
    }

    set SettoreMerceologico(settore_merceologico: SettoreMerceologico) {
        this._settore_merceologico = settore_merceologico;
    }

    get CodiceRintracciabilita()  {
        return this._codice_rintracciabilita;
    }

    set CodiceRintracciabilita(codice_rintracciabilita: string) {
        this._codice_rintracciabilita = codice_rintracciabilita;
    }

    get DataRichiesta() {
        return this._data_richiesta;
    }

    set DataRichiesta(data_richiesta: string) {
        this._data_richiesta = data_richiesta;
    }

    get Udd() {
        return this._udd;
    }

    set Udd(udd: boolean) {
        this._udd = udd;
    }

    get Note() {
        return this._note;
    }

    set Note(note: string) {
        this._note = note;
    }

    get CodiceAvviso() {
        return this._codice_avviso;
    }

    set CodiceAvviso(codice_avviso) {
        this._codice_avviso = codice_avviso;
    }

    get TipologiaPreventivo() {
        return this._tipologia_preventivo;
    }

    set TipologiaPreventivo(tipologia_preventivo: string) {
        this._tipologia_preventivo = tipologia_preventivo;
    }

    get Stato() {
        return this._stato;
    }

    set Stato(stato: Stato) {
        this._stato = stato;
    }

    get DataAppuntamento() {
        return this._data_appuntamento;
    }

    set DataAppuntamento(data_appuntamento: string){
        this._data_appuntamento = data_appuntamento;
    }

    get OraInizio() {
        return this._ora_inizio;
    }

    set OraInizio(ora_inizio: string) {
        this._ora_inizio = ora_inizio;
    }

    get OraFine() {
        return this._ora_fine;
    }

    set OraFine(ora_fine: string) {
        this._ora_fine = ora_fine;
    }

    get Cliente() {
        return this._cliente;
    }

    set Cliente(cliente: Cliente) {
        this._cliente = cliente;
    }

    get Caratteristiche() {
        return this._caratteristiche;
    }

    set Caratteristiche(caratteristiche: Caratteristiche) {
        this._caratteristiche = caratteristiche;
    }

    get CodiceAds() {
        return this._codice_ads;
    }

    set CodiceAds(codice_ads: string) {
        this._codice_ads = codice_ads;
    }

    get CodiceOdl() {
        return this._codice_odl;
    }

    set CodiceOdl(codice_odl: string) {
        this._codice_odl = codice_odl;
    }

    get Prestazione() {
        return this._prestazione;
    }

    set Prestazione(prestazione: Prestazione) {
        this._prestazione = prestazione;
    }

    get Indirizzo() {
        return this._indirizzo;
    }

    set Indirizzo(indirizzo: Indirizzo) {
        this._indirizzo = indirizzo;
    }

    get PresoInCarico() {
        return this._preso_in_carico;
    }

    set PresoInCarico(preso_in_carico: boolean) {
        this._preso_in_carico = preso_in_carico;
    }

    get OraPresaInCarico() {
        return this._ora_presa_in_carico;
    }

    set OraPresaInCarico(ora_presa_in_carico: any) {
        this._ora_presa_in_carico = ora_presa_in_carico;
    }

    get ArrivoSulPosto() {
        return this._arrivo_sul_posto;
    }

    set ArrivoSulPosto(arrivo_sul_posto: string) {
        this._arrivo_sul_posto = arrivo_sul_posto;
    }

    get Sync() {
        return this._sync;
    }

    set Sync(sync:boolean) {
        this._sync = sync;
    }

    get Trash() {
        return this._trash;
    }

    set Trash(trash: boolean) {
        this._trash = trash;
    }

    get Preventivo() { return this._preventivo; }
    set Preventivo(preventivo: Preventivo) { this._preventivo = preventivo; }

    get Sospeso() { return this._sospeso; }
    set Sospeso(sospeso: boolean) { this._sospeso = sospeso; }

    get StatoCruscotto() { return this._stato_cruscotto; }
    set StatoCruscotto(statocruscotto: string) { this._stato_cruscotto = statocruscotto; }

    get Bp() { return this._bp; }
    set Bp(bp: string) { this._bp = bp; }

    get NoteAvviso() { return this._note_avviso; }
    set NoteAvviso(note_avviso: string) { this._note_avviso = note_avviso;}

    get CodiceSot() { return this._codice_sot; }
    set CodiceSot(codice_sot: string) { this._codice_sot = codice_sot;}

    get DescrizioneSot() { return this._descrizione_sot; }
    set DescrizioneSot(descrizione_sot) { this._descrizione_sot = descrizione_sot;}

    get CentroDiLavoro() { return this._centro_di_lavoro; }
    set CentroDiLavoro(centro_di_lavoro: string) { this._centro_di_lavoro = centro_di_lavoro; }

    get GruppoResponsabilePianificazione() { return this._gruppo_resp_pianificazione; };
    set GruppoResponsabilePianificazione(gruppo_resp_pianificazione: string) { this._gruppo_resp_pianificazione = gruppo_resp_pianificazione;}

    get TipoAvviso() { return this._tipo_avviso; }
    set TipoAvviso(tipo_avviso: string) { this._tipo_avviso = tipo_avviso;}

    get CodiceAppuntamento() { return this._codice_appuntamento; }
    set CodiceAppuntamento(codice_appuntamento: string) { this._codice_appuntamento = codice_appuntamento;}

    get Provenienza() { return this._provenienza; }
    set Provenienza(provenienza: string) { this._provenienza = provenienza;}

    get CognomeIncaricato() { return this._cognomeIncaricato; }
    set CognomeIncaricato(cognome: string) { this._cognomeIncaricato = cognome;}

    get NomeIncaricato() { return this._nomeIncaricato; }
    set NomeIncaricato(nome: string) { this._nomeIncaricato = nome;}

    get TelefonoIncaricato() { return this._telefonoIncaricato; }
    set TelefonoIncaricato(telefono: string) { this._telefonoIncaricato = telefono;}


    get VarianteListino() {
        try{
        var obj = JSON.parse(this._altro1);
        if(obj) return obj.varianteListino;
        }catch(err){
            return "";
        }
    }


    
    get Logo(){
        switch(this.CodiceSocieta){
            case CodSocieta.INRETE:
                return imgExample.getLogoInRete();
                break;
            
            case CodSocieta.AAA:
                return imgExample.getLogoAAA();
                break;

            case CodSocieta.HERA:
            default:
                return imgExample.getLogoHera();
                break;
            }

    }

    get NomeSettore(){
        let nomeSettore = ""
        switch(this.SettoreMerceologico){
            case SettoreMerceologico.ACQUA:
                nomeSettore = "ACQUA";
                break;
            
            case SettoreMerceologico.GAS:
                nomeSettore = "GAS";
                break;

            case SettoreMerceologico.ENERGIA_ELETTRICA:
                nomeSettore = "EE";
                break;
            
            case SettoreMerceologico.TLR:
                nomeSettore = "TLR";
                break;
        }
        return nomeSettore;
    }

    get ActiveConnection(){
        return ((this.SettoreMerceologico === SettoreMerceologico.ENERGIA_ELETTRICA) && 
                (["LAVFAT1400","LAVFAT1410","LAVFAT1420","LAVFAT1430","LAVFAT1690","VERFAT1615"].includes(this.ProdServizio)));
    }

    static filterByClienteAndSettore(ads_list: Ads[], ads: Ads) : Ads[] {
        let list =  ads_list.filter(a => a.Bp === ads.Bp 
                            && a.CodiceAds !== ads.CodiceAds
                            && a.CodiceOdl !== ads.CodiceOdl);

        if(ads.SettoreMerceologico === SettoreMerceologico.GAS || 
           ads.SettoreMerceologico === SettoreMerceologico.ENERGIA_ELETTRICA) {
               list = list.filter(a => a.SettoreMerceologico === SettoreMerceologico.GAS ||
                                  a.SettoreMerceologico === SettoreMerceologico.ENERGIA_ELETTRICA)
           }
        if(ads.SettoreMerceologico === SettoreMerceologico.ACQUA) {
              list = list.filter(a => a.SettoreMerceologico === SettoreMerceologico.ACQUA)
          }

        return list;
    }

    static filterForVerbale(ads_list: Ads[], ads: Ads) {
        let list =  ads_list.filter(a => a.VerbaleDiSopralluogo 
            && a.CodiceAds !== ads.CodiceAds
            && a.CodiceOdl !== ads.CodiceOdl);
        
        list = list.filter(a => Utils.dateCompare(ads.DataAppuntamento, a.DataAppuntamento) === true 
                            && ads.Indirizzo.Via === a.Indirizzo.Via 
                            && ads.Indirizzo.Citta === a.Indirizzo.Citta 
                          );

        return list;
    }

   
    

    static filterByStateAndDate(ads_list: Ads[]) : Ads[] {
        // return ads_list.sort((a,b) => b.Stato - a.Stato || new Date(Utils.formatDate(b.DataAppuntamento)).getTime() - new Date(Utils.formatDate(a.DataAppuntamento)).getTime());
        return ads_list.sort((a,b) => b.Stato - a.Stato || new Date(Utils.formatDate(b.FilterDataAppuntamento)).getTime() - new Date(Utils.formatDate(a.FilterDataAppuntamento)).getTime());

    }

    static filterByDate(date_filter: string, ads_list: Ads[]): Ads[] {
        
        let _date = moment(date_filter);
        // return ads_list.filter(ads => moment(ads.DataAppuntamento, "DD-MM-YYYY").isSame(_date, 'day'));
        return ads_list.filter(ads => moment(ads.FilterDataAppuntamento, "DD-MM-YYYY").isSame(_date, 'day'));

    }

    static filterByHour(hour: number, ads_list: Ads[]): Ads[] {

        return ads_list.filter(ads => +moment(ads.DataAppuntamento).format("hh") >= hour && +moment(ads.DataAppuntamento).format("hh") < hour+1);
    }

    static _filterByHour(hour: string, ads_list: Ads[]): Ads[] {

        // return ads_list.filter(ads => Ads.timeComparator(hour, ads.OraInizio));
        return ads_list.filter(ads => Ads.timeComparator(hour, ads.FilterOraInizio));

    }

    static _filterBySospeso(sospeso: boolean, ads_list: Ads[]): Ads[] {
        if(sospeso == false) return ads_list;
        return ads_list.filter(ads => ads.Stato !== Stato["SOPRALLUOGO_SOSPESO"]);

    }

    static notInTrash(ads: Ads[]): Ads[] {
        return ads.filter(a => a.Trash === false);
    }

    static inTrash(ads: Ads[]): Ads[] {
        return ads.filter(a => a.Trash === true);
    }

    static timeComparator(time1: string, time2: string): boolean {
        var temp1 = moment();
        temp1.hour(+time1);
        temp1.minute(0);

        var temp2 = moment();
        temp2.hour(+time2.split(":")[0]);
        temp2.minute(0);

        if(temp1.format('HH') <= temp2.format('HH') && temp2.format('HH') < temp1.add(2, 'hours').format('HH')) {
            return true;
        } else {
            return false;
        }

    }

    static parseServerDto(ads: Ads) {
        var a = new Ads();
        if(ads.Stato==undefined){
            a.Stato = Stato["ASSEGNATO"];
        }
        else
            a.Stato = Stato[ads.Stato.toString().split(" ").join("_")];
        a.DataAppuntamento = Utils.getSAPDate(ads.DataAppuntamento);
        a.FilterDataAppuntamento = a.DataAppuntamento;

        a.OraInizio = Utils.getSAPTime(ads.OraInizio);
        a.FilterOraInizio = a.OraInizio;

        a.OraFine = Utils.getSAPTime(ads.OraFine);
        a.Cliente = Cliente.parseServerDto(ads.Cliente);
        a.TelefonoPrestazione = ads.TelefonoPrestazione;
        a.CodiceAds = ads.CodiceAds;
        a.CodiceOdl = ads.CodiceOdl;
        a.Prestazione = ads.Caratteristiche.AttivitaNormata;
        a.Indirizzo = Indirizzo.parseServerDto(ads.Indirizzo);
        a.CodiceRintracciabilita = ads.CodiceRintracciabilita;
        a.CodiceAvviso = ads.CodiceAvviso;
        a.DataRichiesta = Utils.getSAPDate(ads.DataRichiesta);
        a.Udd = ads.Udd;
        a.Note = ads.Note;
        a.TipologiaPreventivo = ads.TipologiaPreventivo;
        a.PresoInCarico = ads.PresoInCarico;
        a.OraPresaInCarico = ads.OraPresaInCarico;
        a.ArrivoSulPosto = ads.ArrivoSulPosto;
        a.SettoreMerceologico = +ads.SettoreMerceologico;
        a.DettaglioMerceologico = +ads.TipoFornitura;
        a.CodiceAttivita = ads.CodiceAttivita;
        a.Caratteristiche = Caratteristiche.parseServerDto(ads.Caratteristiche);
        a.Preventivo = ads.Preventivo;
        a.Bp = ads.Bp;
        a.StatoCruscotto = ads.StatoCruscotto;
        a.NoteAvviso = ads.NoteAvviso;
        a.CodiceSot = ads.CodiceSot;
        a.DescrizioneSot = ads.DescrizioneSot;
        a.CentroDiLavoro = ads.CentroDiLavoro;
        a.GruppoResponsabilePianificazione = ads.GruppoResponsabilePianificazione;
        a.TipoAvviso = ads.TipoAvviso;
        a.CodiceAppuntamento = ads.CodiceAppuntamento;
        a.Provenienza = ads.Provenienza;
        a.ProdServizio = ads.Caratteristiche.PdS;
        a.ConfermaAvviso = ads.ConfermaAvviso;
        a.TipoFornitura = ads.TipoFornitura;
        a.Sospeso = ads.Sospeso;

        a.dataDocument = ads.dataDocument;
        a.dataFoto = ads.dataFoto;
        a.Read = ads.Read;
        a.DataConfirmed = ads.DataConfirmed;
        
        //a.JsonForm = ads.JsonForm;
        a.IsNew = ads.IsNew;
        a.IndirizzoSalvato = ads.IndirizzoSalvato;
        a.DoneSP = ads.DoneSP;

        a.PodPdR = ads.PodPdR;
        a.Matricola = ads.Matricola;
        a.CampoSort = ads.CampoSort;
        a.ChiaveTestoStd = ads.ChiaveTestoStd;
        a.OperazTestoBreve = ads.OperazTestoBreve;
        a.IndirizzoSpedizioneFattura = ads.IndirizzoSpedizioneFattura;
        a.DisegnoTecnico = ads.DisegnoTecnico;
        a.App_Effettivo_Ora_Inizio = ads.App_Effettivo_Ora_Inizio;
        a.Scelta = ads.Scelta;
        a.CopInfo = ads.CopInfo;
        if(ads.VerbaleDiSopralluogo)
            a.VerbaleDiSopralluogo = VerbaleDiSopralluogo.parseServerDto(ads.VerbaleDiSopralluogo);
        a.pathJSON = ads.pathJSON;

        //altro1 = TipoPreventivo
        a.TipoPreventivo = Number(ads.Altro1);
        a.Altro1 = ads.Altro1;

        a.StatoPrecedente = ads.StatoPrecedente;
        a.ForzaMaggiore = ads.ForzaMaggiore;

        a.DimensionamentoAllacciGas = ads.DimensionamentoAllacciGas;
        a.DimensionamentoAllacciAcqua = ads.DimensionamentoAllacciAcqua;

        a.NoteProgettuali = ads.NoteProgettuali;
        a.NoteEsecutive = ads.NoteEsecutive;

        a.SmsClienteSent = ads.SmsClienteSent;
        a.SmsPrestazioneSent = ads.SmsPrestazioneSent;

        //data appuntamento anticipato
        a.Altro2 = Utils.getSAPDate(ads.Altro2);
        //ora inizio appuntamento anticipato
        a.Altro3 = Utils.getSAPTime(ads.Altro3);
        //ora fine appuntamento anticipato
        a.Altro4 = Utils.getSAPTime(ads.Altro4);

        a.Altro5 = ads.Altro5;
        a.Altro6 = ads.Altro6;
        a.Altro7 = ads.Altro7;
        a.Altro8 = ads.Altro8;
        a.Altro9 = ads.Altro9;
        a.Altro10 = ads.Altro10;

        if(ads.ChiaveTestoStd === "ZAP3"){
            a.FilterDataAppuntamento = a.Altro2;
            a.FilterOraInizio = a.Altro3;
        }

        a.TubaturaPosizionata= ads.TubaturaPosizionata;

        a.PreventivoSent = ads.PreventivoSent;

        a.NomeIncaricato = ads.NomeIncaricato;
        a.TelefonoIncaricato = ads.TelefonoIncaricato;
        a.CognomeIncaricato = ads.CognomeIncaricato;
        a.DimensionamentoSaved = ads.DimensionamentoSaved;
        return a;
    }

     static parseServerDtos(ads: Ads[]) : Ads[] {
        var _ads: Ads[] = [];
        //ads.forEach(a => _ads.push(Ads.parseServerDto(a)));
        ads.forEach(a => _ads.push(Ads.parseServerDto(a)));
        return _ads;

    }



    /*
    static parseServerDto(ads: Ads) : Ads {
        var a: Ads = new Ads(ads.Stato, ads.DataAppuntamento, ads.OraInizio, ads.OraFine, 
                        Cliente.parseServerDto(ads.Cliente), ads.CodiceAds, ads.CodiceOdl, 
                        ads.Prestazione, Indirizzo.parseServerDto(ads.Indirizzo),
                        ads.CodiceRintracciabilita, ads.CodiceAvviso, ads.DataRichiesta, ads.Udd, ads.Note, 
                        ads.TipologiaPreventivo, ads.TelefonoCliente, ads.SettoreMerceologico, ads.DettaglioMerceologico,
                        ads.CodiceAttivita, ads.ProdServizio, Caratteristiche.parseServerDto(ads.Caratteristiche));
        if(ads.OraPresaInCarico) {
            a.OraPresaInCarico = ads.OraPresaInCarico;
        }
        if(ads.ArrivoSulPosto) {
            a.ArrivoSulPosto = ads.ArrivoSulPosto;
        }
        if(ads.ConfermaAvviso) {
            a.ConfermaAvviso = ads.ConfermaAvviso;
        }
        if(ads.Sospeso) {
            a.Sospeso = ads.Sospeso;
        }
        return a;

    }

    static parseServerDtos(ads: Ads[]) : Ads[] {
        var _ads: Ads[] = [];
        ads.forEach(a => _ads.push(Ads.parseServerDto(a)));
        return _ads;

    }
    
    */

    static toJsObject(ads: Ads): Object {
        var obj = {};

        obj["Stato"] = Stato[ads.Stato];
        obj["DataAppuntamento"] = Utils.toSAPDate(ads.DataAppuntamento);
        obj["OraInizio"] = Utils.toSAPTime(ads.OraInizio);
        obj["OraFine"] = Utils.toSAPTime(ads.OraFine);
        obj["Cliente"] = Cliente.toJsObject(ads.Cliente);
        obj["TelefonoPrestazione"] = ads.TelefonoPrestazione;
        obj["CodiceAds"] = ads.CodiceAds;
        obj["CodiceOdl"] = ads.CodiceOdl;
        obj["Prestazione"] = ads.Prestazione;
        obj["Indirizzo"] = Indirizzo.toJsObject(ads.Indirizzo);
        obj["CodiceRintracciabilita"] = ads.CodiceRintracciabilita;
        obj["CodiceAvviso"] = ads.CodiceAvviso;
        obj["DataRichiesta"] = Utils.toSAPDate(ads.DataRichiesta);
        obj["Udd"] = ads.Udd;
        obj["Note"] = ads.Note;
        obj["TipologiaPreventivo"] = ads.TipologiaPreventivo;

        obj["OraPresaInCarico"] = ads.OraPresaInCarico;
        obj["ArrivoSulPosto"] = ads.ArrivoSulPosto;
        //obj["SettoreMerceologico"] = SettoreMerceologico[ads.SettoreMerceologico];
        obj["SettoreMerceologico"] = ads.SettoreMerceologico;
        //obj["DettaglioMerceologico"] = DettaglioMerceologico[ads.DettaglioMerceologico];
        obj["DettaglioMerceologico"] = ads.DettaglioMerceologico;
        
        obj["CodiceAttivita"] = ads.CodiceAttivita;
        //obj["ProdServizio"] = ads.ProdServizio;

        obj["Caratteristiche"] = Caratteristiche.toJsObject(ads.Caratteristiche);

        obj["ConfermaAvviso"] = ads.ConfermaAvviso;
        obj["Sospeso"] = ads.Sospeso;
        obj["Preventivo"] = ads.Preventivo;

        obj["Bp"] = ads.Bp;
        obj["StatoCruscotto"] = ads.StatoCruscotto;
        obj["NoteAvviso"] = ads.NoteAvviso;
        obj["CodiceSot"] = ads.CodiceSot;
        obj["DescrizioneSot"] = ads.DescrizioneSot;
        obj["CentroDiLavoro"] = ads.CentroDiLavoro;
        obj["GruppoRespPianificazione"] = ads.GruppoResponsabilePianificazione;
        obj["TipoAvviso"] = ads.TipoAvviso;
        obj["CodiceAppuntamento"] = ads.CodiceAppuntamento;
        obj["Provenienza"] = ads.Provenienza;
        obj["ProdServizio"] = ads.ProdServizio;
        obj["ConfermaAvviso"] = ads.ConfermaAvviso;
        obj["TipoFornitura"] = ads.TipoFornitura;

        obj["dataFoto"] = ads.dataFoto;
        obj["dataDocument"] = ads.dataDocument;
        obj["Read"] = ads.Read;
        obj["DataConfirmed"] = ads.DataConfirmed;
        //obj["JsonForm"] = ads.JsonForm;
        obj["IsNew"] = ads.IsNew;
        obj["IndirizzoSalvato"] = ads.IndirizzoSalvato;
        obj["DoneSP"] = ads.DoneSP;

        obj["PodPdR"] = ads.PodPdR;
        obj["Matricola"] = ads.Matricola;
        obj["CampoSort"] = ads.CampoSort;
        obj["ChiaveTestoStd"] = ads.ChiaveTestoStd;
        obj["OperazTestoBreve"] = ads.OperazTestoBreve;
        obj["IndirizzoSpedizioneFattura"] = ads.IndirizzoSpedizioneFattura;
        obj["DisegnoTecnico"] = ads.DisegnoTecnico;
        obj["App_Effettivo_Ora_Inizio"] = ads.App_Effettivo_Ora_Inizio;
        obj["Scelta"] = ads.Scelta;
        obj["CopInfo"] = ads.CopInfo;
        if(ads.VerbaleDiSopralluogo){
            obj["VerbaleDiSopralluogo"] = VerbaleDiSopralluogo.toJsObject(ads.VerbaleDiSopralluogo); 
        }

        obj["Altro1"] = ads.Altro1;
        obj["TipoPreventivo"] = ads.Altro1;

        obj["StatoPrecedente"] = ads.StatoPrecedente;
        obj["ForzaMaggiore"] = ads.ForzaMaggiore;

        obj["DimensionamentoAllacciGas"] = ads.DimensionamentoAllacciGas;
        obj["DimensionamentoAllacciAcqua"] = ads.DimensionamentoAllacciAcqua;

        obj["NoteProgettuali"] = ads.NoteProgettuali;
        obj["NoteEsecutive"] = ads.NoteEsecutive;

        obj["SmsClienteSent"] = ads.SmsClienteSent;
        obj["SmsPrestazioneSent"] = ads.SmsPrestazioneSent;

        //data e ora appuntamento anticipato
        obj["Altro2"] = Utils.toSAPDate(ads.Altro2);
        obj["Altro3"] = Utils.toSAPTime(ads.Altro3);
        obj["Altro4"] = Utils.toSAPTime(ads.Altro4);
        
        obj["Altro5"] = ads.Altro5;
        obj["Altro6"] = ads.Altro6;
        obj["Altro7"] = ads.Altro7;
        obj["Altro8"] = ads.Altro8;
        obj["Altro9"] = ads.Altro9;
        obj["Altro10"] = ads.Altro10;

        obj["FilterDataAppuntamento"] = Utils.toSAPDate(ads.FilterDataAppuntamento);
        obj["FilterOraInizio"] = Utils.toSAPTime(ads.FilterOraInizio);
        obj["TubaturaPosizionata"] = ads.TubaturaPosizionata;
        obj["PreventivoSent"] = ads.PreventivoSent;
        
        obj["CognomeIncaricato"] = ads.CognomeIncaricato;
        obj["NomeIncaricato"] = ads.NomeIncaricato;
        obj["TelefonoIncaricato"] = ads.TelefonoIncaricato;
        obj["DimensionamentoSaved"] = ads.DimensionamentoSaved;
        return obj;

    }

    static toJsObjectList(ads: Ads[]): Object[] {
        var result: Object[] = [];
        ads.forEach(a => result.push(Ads.toJsObject(a)));
        return result;
    }

    

    public getIcon(): string {
        var icon: string = "";
        switch(this.SettoreMerceologico) {
            case SettoreMerceologico["ACQUA"]:
                icon = "water.png";
                break;
            case SettoreMerceologico["GAS"]:
                 icon = "gas.png";
                 break;
            case SettoreMerceologico["ENERGIA_ELETTRICA"]:
                icon = "energia.png";
                break;
            case SettoreMerceologico["TLR"]:
                icon = "tlr.png";
                break;
            default:
                icon = "no_icon.png";
        }
            
        switch(this.DettaglioMerceologico) {
            case DettaglioMerceologico["ACQUE_METEORICHE"]:
                icon = "water.png";
                break;
            case DettaglioMerceologico["ACQUEDOTTO_CIVILE"]:
                icon = "water.png";
                break;
            case DettaglioMerceologico["ACQUEDOTTO_INDUSTRIALE"]:
                icon = "water.png";
                break;
            case DettaglioMerceologico["ALTA_TENSIONE"]:
                icon = "energia.png";
                break;
            case DettaglioMerceologico["BASSA_TENSIONE"]:
                icon = "energia.png";
                break;
            case DettaglioMerceologico["FOGNATURA"]:
                icon = "fogna.png";
                break;
            case DettaglioMerceologico["GPL"]:
                icon = "gpl.png";
                break;
            case DettaglioMerceologico["MEDIA_TENSIONE"]:
                icon = "energia.png";
                break;
            case DettaglioMerceologico["MT_MISURA_BT"]:
                icon = "energia.png";
                break;
            case DettaglioMerceologico["TELERISCALDAMENTO"]:
                icon = "tlr.png";
                break;
        }

        return icon;
    }

    getIconBase64(){

       

        var tipo = this.getIcon();
        var base64 = imgExample.getBase64noicon();
         switch(tipo) {
            case "gpl.png":{
                base64 = imgExample.getBase64gpl();    
                break;
            }
            case "water.png":{
                base64 = imgExample.getBase64water();    
                break;
            }
            case "energia.png":{
                base64 = imgExample.getBase64energia();    
                break;
            }
            case "fogna.png":{
                base64 = imgExample.getBase64fogna();    
                break;
            }
            case "gas.png":{
                base64 = imgExample.getBase64gas();    
                break;
            }
            case "tlr.png":{
                base64 = imgExample.getBase64tlr();    
                break;
            }
        }
      return base64;           
    }

    GetTipoPreventivoLabel(){
        let label = "";
        if (this.TipoPreventivo){
            let item
            switch(this.SettoreMerceologico){
                case SettoreMerceologico.ACQUA:
                    item = Params.TipoPreventivoAcqua.find((x) => x.value === ""+this.TipoPreventivo);
                    break;
                case SettoreMerceologico.ENERGIA_ELETTRICA:
                    item = Params.TipoPreventivoEE.find((x) => x.value === ""+this.TipoPreventivo);
                    break;
                default:
                    break;
            }
            if (item) {
                label = item.label;
            }
        }
        return label;
    }

GetTipoLavoroLabel(){
    let val =  Params.TipoLavoro.find(x => x.value === this.Caratteristiche.TipoLavoro);
    if(val == undefined) return "";
    return val["label"] || "";
  }

  GetTipoTaglioLabel() {
    let val =  Params.TipoTaglio.find(x => x.value === this.Caratteristiche.TipoTaglio);
     if(val == undefined) return "";
    return val["label"] || "";
  }

  GetDestinazioneLabel() {
    let val = Params.Destinazione.find(x => x.value === this.Caratteristiche.DestinazioneUso);
     if(val == undefined) return "";
    return val["label"] || "";
  }

  GetTipoFontePrimariaLabel() {
    let val =  Params.TipoFontePrimaria.find(x => x.value === +this.Caratteristiche.TipoFontePrimaria);
     if(val == undefined) return "";
    return val["label"] || "";
  }

  GetFontePrimariaLabel() {
    let val =  Params.FontePrimaria.find(x => x.value === this.Caratteristiche.FontePrimaria);
    if(val == undefined) return "";
   return val["label"] || "";
  }

  GetTipoCessioneLabel() {
    let val = Params.TipoCessione.find(x => x.value === this.Caratteristiche.TipoCessione);
     if(val == undefined) return "";
    return val["label"] || "";
  }

  GetTipoFornituraLabel() {
    let val =  Params.TipoFornitura.find(x => x.value === Number(this.TipoFornitura));
     if(val == undefined) return "";
    return val["label"] || "";
  }

  GetNumeroFasiLabel() {
    let val =  Params.NumeroFasi.find(x => x.key === this.Caratteristiche.NumeroFasi);
     if(val == undefined) return "";
    return val["value"] || "";
  }

  getTipologiaInterventoLabel(){
    let val =  Params.TipologiaIntervento.find(x => x.value === this.Caratteristiche.TipologiaIntervento);
    if(val == undefined) return "";
    return val["label"] || "";
  }

  getTempCondRit(){
    let val =  Params.TempCondRit.find(x => x.value === this.Caratteristiche.TemperaturaCondRit);
    if(val == undefined) return "";
    return val["label"] || "";
  }

  getAllacCondMandata() {
    let val =  Params.AllacciamentoCondMandata.find(x => x.value === this.Caratteristiche.AllacciamentoCondMandata);
    if(val == undefined) return "";
    return val["label"] || "";
  }


  getListaContatori(){
      var lista = [];
      switch(this._settore_merceologico) {
        case SettoreMerceologico["GAS"]:
            lista.push("G4");
            lista.push("G6");
            lista.push("G10");
            lista.push("G16");
            lista.push("G25");
            lista.push("G40");
            lista.push("G65");
            lista.push("G100");
            lista.push("G160");
            lista.push("G250");
            lista.push("G400");
            lista.push("G650");
            lista.push("G1000");
            lista.push("G1600");
            lista.push("G2500");
            break;
        case SettoreMerceologico["ACQUA"]:
            lista.push("3x15");
            lista.push("5x20");
            lista.push("7x25");
            lista.push("10x30");
            lista.push("20x40");
            lista.push("WV50");
            lista.push("WV80");
            lista.push("WV100");
            lista.push("WV150");
            break;
        case SettoreMerceologico["TLR"]:
            lista.push("DN20");
            lista.push("DN25");
            lista.push("DN32");
            lista.push("DN40");
            lista.push("DN50");
            lista.push("DN60");
            lista.push("DN65");
            lista.push("DN100");
            lista.push("DN150");
            lista.push("DN200");
            break;
        case SettoreMerceologico["ENERGIA_ELETTRICA"]:
            if(this.GetNumeroFasiLabel()=='230 MONOFASE'){
                lista.push("GEM");
                lista.push("GISM");
                lista.push("GEMIS");
                lista.push("LENNT-S3A");
            }
            else{    
                lista.push("LENNT-P3");
                lista.push("LENNT-P2");
                lista.push("GT4S");
                lista.push("GET1");
                lista.push("GT2A");
                lista.push("GET2D");
                lista.push("GT3A");
                lista.push("GET3D");
                lista.push("GISS");
                lista.push("GIST");
                lista.push("GME");
                lista.push("GETIS");
                lista.push("GESIS");
                lista.push("ISKRA-GME");
                lista.push("LENNT-P3A");
                lista.push("LENNT-P2A");
                lista.push("LENNT-P2AS");
            }
            /*
            if(this.GetNumeroFasiLabel()=='230 MONOFASE'){
                lista.push("GISM");
                lista.push("GEM");}
            else{
                lista.push("GIST");
                lista.push("GET2A");
                lista.push("GET3A");
                lista.push("GET4S")
                lista.push("GISS");
                lista.push("GME");
            }
            */
            break;
        }
    return lista;
  }

  getFasi(){
    var lista = [];
    switch(this._settore_merceologico) {
      case SettoreMerceologico["GAS"]:
      case SettoreMerceologico["ACQUA"]:
      case SettoreMerceologico["TLR"]:
        break;  
      case SettoreMerceologico["ENERGIA_ELETTRICA"]:
        lista = Params.NumeroFasi; 
        break;
      }
  return lista;
  }

  getVariantiFasi(){
    var lista = [];
    switch(this._settore_merceologico) {
      case SettoreMerceologico["GAS"]:
      case SettoreMerceologico["ACQUA"]:
      case SettoreMerceologico["TLR"]:
        break;  
      case SettoreMerceologico["ENERGIA_ELETTRICA"]:
        lista.push("230 FF");
        lista.push("230 FN");
        lista.push("Trifase 230");
        lista.push("Trifase 400");  
        break;
      }
  return lista;
  }


}

