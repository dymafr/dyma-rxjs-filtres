screenLog.init(); // affiche le log de la console
// Cliquez sur la flèche de rafraichissement dans la fenêtre de droite, juste à gauche de l'url pour relancer.

import { Observable, interval } from 'rxjs';
import { take, tap, filter } from 'rxjs/operators';

// Création de streams
function createStream(name: string, iterations: number, intervalle: number): Observable<any> {
  return interval(intervalle).pipe(
    take(iterations),
    tap(val => console.log(`[ Stream ${name} ] : ${val}`))
  )
}

const streamA = createStream('A', 6, 100);
const streamB = createStream('B', 5, 200);

// Filtre les valeurs émises par l'Observable A pour ne garder que les nombres supérieurs à 3
streamA.pipe(filter(val => val > 3)).subscribe(val => console.log(`Filtre1 : ${val}`));

// Filtre les valeurs émises par l'Observable B pour ne garder que les nombres pairs
streamB.pipe(filter(val => val % 2 === 0)).subscribe(val => console.log(`Filtre2 : ${val}`));