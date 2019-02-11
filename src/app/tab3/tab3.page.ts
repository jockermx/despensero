import { Component } from '@angular/core';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner/ngx';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  constructor(
    private qrScanner: QRScanner
  ) { }

  scanner() {
    // Pedir permiso de utilizar la camara
    this.qrScanner.prepare().then((status: QRScannerStatus) => {
      if (status.authorized) {
        // el permiso fue otorgado
        // iniciar el escaneo
        const scanSub = this.qrScanner.scan().subscribe((texto: string) => {
          console.log('Scanned something', texto);

          this.qrScanner.hide(); // esconder el preview de la camara
          scanSub.unsubscribe(); // terminar el escaneo
        });

      } else if (status.denied) {
        // el permiso no fue otorgado de forma permanente
        // debes usar el metodo QRScanner.openSettings() para enviar el usuario a la pagina de configuracion
        // desde ahí podrán otorgar el permiso de nuevo
      } else {
        // el permiso no fue otorgado de forma temporal. Puedes pedir permiso de en cualquier otro momento
      }
    }).catch((e: any) => console.log('El error es: ', e));
  }
}