import styles from '../eventos/eventos.module.css';
import Image from 'next/image'


export default function Destaques() {
  return (
    <div className={styles.main}>
      <div id='destaques' className={styles.bodyBackground}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>Música do Carnaval 2023</h1>
          <p className={styles.subtitle}>A grande escolhida</p>
          <p className={styles.text}>Todos os anos, os cantores e artistas que passam pelos circuitos do carnaval agitam os foliões com canções e músicas de sucesso que colocam todos para dançar. Algumas das músicas, chegam a ter tanta popularidade que muitas pessoas a conhecem e chegam a considerar a música para o verão ou “a música do Carnaval”. Então, desde 1994 a TV Bahia promove um concurso entre as músicas que podem ser o “hit do carnaval” para que os foliões votem na sua preferida e deem a um cantor(a) o Troféu Bahia Folia.</p>
          <p className={styles.text}>No ano de 2023, os cantores que participaram da disputa foram: Filipe Escandurras, Ivete Sangalo, Oh Polêmico, Bell Marques, Lincoln, Xanddy Harmonia e Léo Santana, além das bandas Parangolé, Timbalada e Psirico.</p>
          <p className={styles.text}>A lista de músicas foi escolhida por um time de jornalistas da Rede Bahia e foi colocada à disposição daqueles que acessavam o site do G1 Bahia. A votação foi realizada durante os seis dias de festa e o resultado anunciado na quarta feira à tarde.</p>
          <p className={styles.text}>E a grande vencedora foi “Zona de Perigo” do cantor Léo Santana, com um pouco mais de 40% dos votos totais.</p>
          <Image
                className={styles.img}
                src="/images/dia1-img2.png"
                alt="vevete sangalos"
                width={500}
                height={300}
          />
          <h1 className={styles.title}>Folia através do mar e no seu bairro</h1>
          <p className={styles.text}>Os circuitos da Barra-Ondina e do Campo Grande são bastante populares e, de alguma forma, já familiares para aqueles que curtem a folia carnavalesca em Salvador</p>
          <p className={styles.text}>No entanto esse ano, além dos shows e atrações nos tradicionais circuitos, a folia está espalhada por toda a cidade com shows, palcos e apresentações em alguns bairros e para além da costa, em algumas ilhas.</p>
          <p className={styles.text}>Alguns dos lugares escolhidos foram as ilhas Paramana com um palco que teve atrações desde o domingo até a terça de carnaval, Bom Jesus dos Passos e Ilha da Maré, Santana. Nos bairros a festa estava localizada na Praça Nelson Mandela, Liberdade, Praça da Revolução, Periperi, Praça 15 de Abril, Plataforma, Praça Dorival Caymmi, em Itapuã, Praça Nossa Senhora Auxiliadora, Pau da Lima, Campo da Pronaica, em Cajazeiras. E no Parque Poliesportivo da Boca do Rio, onde os shows tiveram de ser cancelados na segunda feira, em virtude dos fortes ventos que abalaram as estruturas do palco.</p>
        </div>
      </div>
    </div>
  )
}


