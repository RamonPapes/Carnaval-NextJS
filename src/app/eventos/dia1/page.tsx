import Dia from '@/app/components/Dia/dia'
import styles from '../eventos.module.css'
import Image from 'next/image'

export default function Dia1() {
  return (
    <div className={styles.main}>
      <Dia/>
      <div className={styles.bodyBackground}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>16 de fevereiro</h1>
          <p className={styles.subtitle}>Primeiro dia de folia</p>
          <p className={styles.text}>Finalmente a espera acabou, a maior festa de rua do país voltou a circular pelas ruas dos tradicionais circuitos. Ansiosos, foliões soteropolitanos e turistas assistiram à abertura oficial do Carnaval, com a cerimônia de entrega da chave da cidade ao Rei Momo e o show, tão aguardado, da cantora Ivete Sangalo que pela primeira vez foi transmitido ao vivo em rede nacional.</p>
          <Image
              className={styles.img} 
              src="/images/dia1-img1.png"
              alt="vevete sangalos"
              width={500}
              height={300}
            />
            <ul className={styles.section}>
              <li className={styles.sectionText}>Destaques</li>
              <div className={styles.sectionTextContainer}>
                <h1 className={styles.sectionTitle}>Vai na Fé invade o Carnaval de Salvador
</h1>
                <p className={styles.sectionSummaryText}>A abertura do Carnaval foi mais que especial, além de contar com toda a alegria contagiante de Ivete Sangalo arrastando uma multidão pelas ruas do circuito Dodô, a multidão foi surpreendida com uma aparição que saiu das telas da rede GLOBO para o trio elétrico. 

O personagem Lui Lorenzo, interpretado pelo ator José Loreto, da novela das sete “Vai na Fé” subiu ao palco ao lado da cantora Ivete. E, ao lado dela, cantou as músicas Não Precisa Mudar, da própria cantora Ivete, e Pool Party, gravada por Lui Lorenzo para a novela.
</p>
            <Image
              className={styles.img} 
              src="/images/destaques-img1.png"
              alt="vevete sangalos"
              width={500}
              height={300}
            />
            <p className={styles.sectionSummaryText}>Nem tudo saiu como esperado, Ivete acabou confundindo o nome do ator com o personagem ao chamá-lo de “Lui Loreto”, e ele apresentou sinais de nervosismo, mas contou com o apoio da cantora para dar continuidade ao seu show.

O episódio fez parte das tomadas de gravações para a novela e ainda não tem previsão de quando será exibido. Mas quando passar nas telas de todos os brasileiros servirá de lembrança da festa.
            </p>
            <h1 className={styles.sectionTitle}>Claudia Leitte sobre duas rodas
</h1>
            <p className={styles.sectionSummaryText}>Claudia Leitte não ficou atrás, logo depois de Ivete a cantora chegou para agitar a festa e surpreendeu a todos chegando numa motocicleta e passando no meio dos foliões antes de subir no trio.
            </p>
            <Image
              className={styles.img} 
              src="/images/destaques-img3.png"
              alt="vevete sangalos"
              width={500}
              height={300}
            />
            <h1 className={styles.sectionTitle}>Rompimento de adutora perto do Circuito do Carnaval 
            </h1>
            <p className={styles.sectionSummaryText}>
            Na manhã de quinta feira (16 de fevereiro), uma adutora se rompeu em uma das vias que dá acesso a um dos circuitos do Carnaval de Salvador. Um casal que estava no carro ficou ilhado e seu veículo foi “engolido” pela água. 

Felizmente, não houveram feridos, os dois que estavam no carro foram resgatados por moradores. De acordo com informações da prefeitura, a adutora rompida era de responsabilidade da Embasa e uma equipe da companhia foi enviada ao local para resolver a situação.

            </p>
            <Image
              className={styles.img} 
              src="/images/destaques-img4.png"
              alt="vevete sangalos"
              width={500}
              height={300}
            />
            <p className={styles.sectionSummaryText}>Em virtude desse acontecimento, o trânsito nesta via precisou ser interrompido e prosseguiu dessa maneira até o término dos trabalhos no final do dia.

Tudo aconteceu na Avenida Reitor Miguel Calmon, bem próximo ao encontro com a Avenida Garibaldi, uma das rotas de acesso muito importantes para o Circuito Osmar.

Por sorte, o bloqueio da via não gerou grandes impedimentos de locomoção por um período mais longo.
            </p>
            

              </div>
              <li className={styles.sectionText}>Programação dos Circuitos</li>
              <div className={styles.sectionTextContainer}>
                <p className={styles.sectionSummaryText}>Para garantir a diversão do folião neste Carnaval que sempre é considerado o maior do país, esforços foram empregados pelas autoridades, artistas e empresas para que essa seja a maior festa de todas. Confira abaixo as informações sobre as atrações de cada circuito e fique por dentro da programação.
                </p>
                <ul className={styles.section}>
                  <li>Circuito Dodô</li>
                    <ul className={styles.insideSection}>
                      <li>PROJETO BALANCÊ HOMENAGEIA GAL (COM ANA MAMETTO, CARLA VISI E MARCIA SHORT) – 14:30h
</li>
                      <li>PROJETO TIK TOK (COM LUÍSA SONZA) – 14:45h</li>
                      <li>TRIO LINCOLN – 15:00h</li>
                      <li>TRIO PARANGOLÉ – 15:15h</li>
                      <li>TRIO PSIRICO – 15:30h</li>
                      <li>BABY LEGUAS/UNIVERSITÁRIO (JP ESTOURADO) – 15:45h</li>
                      <li>VUMBORA (COM BELL MARQUES) – 16:00h</li>
                      <li>NANA (COM LÉO SANTANA) – 16:30h</li>
                      <li>TIMBALADA/BLOW OUT (COM CLAUDIA LEITTE)– 17:00h
</li>
                      <li>D+/EVA – 17:30h</li>
                      <li>FISSURA (COM TOMATE) – 18:00h
</li>
                      <li>TRIO DANIELA MERCURY – 18:30h
</li>
                      <li>TRIO PIPOCA DO CHEIRO (COM CHEIRO DE AMOR) – 18:45h
</li>
                      <li>TRIO BROWN – 19:00h
</li>
                      <li>TRIO O POLEMICO – 19:15h
</li>
                      <li>TRIO PABLLO E LUISA – 19:30h
</li>
                      <li>EU VOU (COM ANITTA) – 19:45h
</li>
                      <li>TÔ LIGADO – 20:00h
</li>
                      <li>TRIO SOLANGE ALMEIDA – 20:15h
</li>
                      <li>RIO KART LOVE – 20:30h
</li>
                      <li>TRIO O KANNALHA – 20:45h</li>
                      <li>TRIO IGOR KANNARIO – 21:00h
</li>
                      <li>TRIO LA FURIA – 21:15h
</li>
                      <li>SIRI COM TODI (COM PAPAZONI) – 21:30h</li>
                      <li>BLOCO DOS VAQUEIROS (FULÔ DE MANDACARÚ / GUITO / JAPINHA CONDE E CONVIDADOS) – 21:45h</li>
                      <li>TRIO ESCANDURRAS – 22:00h</li>
                      <li>TRIO FILHOS DA BAHIA – 22:15h
</li>
                      <li>TRIO O POETA – 22:30h
</li>
                    </ul>
                  <li>Circuito Osmar</li>
                  <li>Circuito Batatinha</li>
                  <li>Circuito Mestre Bimba</li>
                  <li>Circuito Fluxo</li>
                </ul>

              </div>
                
            </ul>
        </div>

       
      </div>
    </div>
  )
}