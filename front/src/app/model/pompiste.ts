export class Pompiste {
    idGess: string;
    name: string;
    dateNaissance: Date;
    CIN: number;
    dateCIN: Date;
    payement: string;
    famille: string;
    travail: string;
    address: string;
    tel: string;
    email: string;
    motpass: string;
    contrat: string;
    type: number;
    active: number;
  
    constructor(
      idGess: string,
      name: string,
      dateNaissance: Date,
      CIN: number,
      dateCIN: Date,
      payement: string,
      famille: string,
      travail: string,
      address: string,
      tel: string,
      email: string,
      motpass: string,
      contrat: string,
      type: number,
      active: number
    ) {
      this.idGess = idGess;
      this.name = name;
      this.dateNaissance = dateNaissance;
      this.CIN = CIN;
      this.dateCIN = dateCIN;
      this.payement = payement;
      this.famille = famille;
      this.travail = travail;
      this.address = address;
      this.tel = tel;
      this.email = email;
      this.motpass = motpass;
      this.contrat = contrat;
      this.type = type;
      this.active = active;
    }
  }
  