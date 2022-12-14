import fs from 'fs';
import { Cerveja } from 'src/cerveja/cerveja.entity';

export class Database {
  private FILENAME = 'cervejas.json';

  public getCervejas(): Array<Cerveja> {
    const cervejasInFile = fs.readFileSync(this.FILENAME).toString();
    const cervejas = JSON.parse(cervejasInFile);
    return cervejas;
  }

  public gravar(cerveja: Cerveja) {
    fs.writeFileSync(
      this.FILENAME,
      JSON.stringify([...this.getCervejas(), cerveja]),
    );
  }

  public gravarCervejas(cervejas: Cerveja[]) {
    fs.writeFileSync(this.FILENAME, JSON.stringify(cervejas));
  }
}
