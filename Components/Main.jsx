import Button from "../Components/button";
import { useState } from "react";

const languages = [
  {
    id: 1,
    title: "HTML",
    description:
      "HTML (HyperText Markup Language) è il linguaggio standard per creare pagine e applicazioni web. Struttura il contenuto web e fornisce elementi di base come titoli, paragrafi e immagini.",
    type: "btn-success",
  },
  {
    id: 2,
    title: "CSS",
    description:
      "CSS (Cascading Style Sheets) è un linguaggio di stile utilizzato per descrivere la presentazione di un documento scritto in HTML o XML. Controlla il layout, i colori, i caratteri e l'aspetto complessivo di una pagina web.",
    type: "btn-success",
  },
  {
    id: 3,
    title: "JavaScript",
    description:
      "JavaScript è un linguaggio di programmazione dinamico utilizzato per lo sviluppo web, che consente contenuti interattivi come grafici animati, pulsanti cliccabili e altre funzionalità dinamiche sui siti web.",
    type: "btn-success",
  },
  {
    id: 4,
    title: "Node.js",
    description:
      "Node.js è un ambiente di runtime JavaScript lato server che permette di utilizzare JavaScript anche sul backend, consentendo agli sviluppatori di usare lo stesso linguaggio sia sul client che sul server.",
    type: "btn-success",
  },
  {
    id: 5,
    title: "Express",
    description:
      "Express è un framework per applicazioni web minimalista e veloce per Node.js. Fornisce strumenti robusti per creare applicazioni web e API e semplifica la gestione delle rotte e delle richieste.",
    type: "btn-success",
  },
  {
    id: 6,
    title: "ReactJS",
    description:
      "ReactJS è una libreria JavaScript per costruire interfacce utente, in particolare applicazioni a pagina singola. Consente agli sviluppatori di creare componenti UI riutilizzabili e di gestire efficacemente lo stato dell'applicazione.",
    type: "btn-success",
  },
];

// creo una base HTML per vedere i bottoni
function Main() {
  const [isOpen, setIsOpen] = useState(null);

  const toogleOpen = (id) => {
    setIsOpen((current) => (current === id ? null : id));
  };

  return (
    <main className="container my-3">
      <div className="row">
        <h1> Learn Web development</h1>
      </div>
      <div></div>
      <div className="col-12">
        <div className="row">
          {languages.map((language) => {
            const { id, title, description } = language;

            return (
              <>
                <Button
                  key={id}
                  language={language}
                  isActive={isOpen === id}
                  onClick={() => toogleOpen(id)}
                />
                {isOpen === id && <p>{description}</p>}
              </>
            );
          })}
        </div>
      </div>
    </main>
  );
}

export default Main;
