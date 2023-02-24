import Dia from '@/app/components/Dia/dia'
import styles from '../eventos.module.css'
import Image from 'next/image'

export default function Dia1() {
  return (
    <div className={styles.main}>
      <Dia />
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
                <ul className={styles.insideSection}>
                  <li>PROJETO ESPECIAL FOBIQUINHA ARMANDINHO DODÔ E OSMAR – 18:00h
                  </li>
                  <li>TRIO PIPOCA DA DANIELA MERCURY – 18:15h
                  </li>
                  <li>PIPOCA DO MUDEI DE NOME- 18:30h
                  </li>
                  <li>TRIO LA FURIA – 18:45h
                  </li>
                  <li>TRIO THIAGO AQUINO- 19:00h</li>
                  <li>A MULHERADA – 19:15h
                  </li>
                  <li>TRIO PSIRICO – 19:30h
                  </li>
                  <li>ALERTA GERAL (COM XANDE DE PILARES, DÉLCIO LUIZ E MIUDINHO) –19:45h</li>
                  <li>PAGODE TOTAL (COM BANDA PAGODE TOTAL / GRUPO SAMBA E SUOR / GRUPO CAJÁ PRA BAIXO) – 20:15h</li>
                  <li>AMOR E PAIXÃO COM NELSON RUFINO / BATIFUN /FORA DA MÍDIA E PARTICIPAÇÃO DE DUDU NOBRE) – 20:45h</li>
                  <li>BLOCO DA CAPOEIRA (COM TONHO MATÉRIA)</li>
                  <li>BANKOMA – 21:30h</li>
                  <li>TRIO ESCANDURRAS – 22:00h</li>
                  <li>PROIBIDO PROIBIR (O POLÊMICO)- 22:15h</li>
                  <li>FOGUEIRÃO – 22:45h</li>
                  <li>QUERO VER MOMO – 23:00h</li>
                  <li>SAMBA & FOLIA (SAMBA TDN / PAGODI DO NANY / PAPARICO) – 23:15h</li>
                  <li>AFRO REGGAE BAHIA – 23:30h</li>
                  <li>SAMBA TERRAMAR – 23:45h</li>
                  <li>TRIO COMCAR – 00:00</li>
                </ul>
                <li>Circuito Batatinha</li>
                <ul className={styles.insideSection}>
                  <li>OMINIRA DE ODE</li>
                  <li>AFOXE FILHOS DE ONIRA</li>
                  <li>EXPRESSÃO NEGRA – 20:00h</li>
                  <li>KORIN EFAN – 20:30h</li>
                  <li>DARAJÚ DE ODÉ – 20:45h</li>
                  <li>NOVA FLOR – 21:00h</li>
                  <li>BLOCO QUESTÃO DE GOSTO – 21:15h</li>
                  <li>SAMBA NEGUINHO – 21:45h</li>
                  <li>BLOCO DAS BAIANAS DO REINO – 22:00h</li>
                  <li>BLOCO DE INDIOS TAMOIOS – 22:30h</li>
                  <li>FILHOS DA FEIRA – 22:45h</li>
                  <li>MALCOLM X – 23:15h</li>
                  <li>IMPACTO SONORO – 23:45h</li>
                  <li>TAMBORES E CORES – 00:15h</li>
                  <li>BOKA LOUKA (COM SAMBA COM NÓS E TAIS MORENO) – 00:30h</li>
                </ul>
                <li>Circuito Mestre Bimba</li>
                <ul className={styles.insideSection}>
                  <li>BLOCO FANTASIA – 10:00h</li>
                  <li>BLOCO ASA SURF REGGAE PELA PAZ 3 – 15:00h</li>
                  <li>BLOCO DM DE BOA – 16:00h</li>
                  <li>BLOCO R9 – 17:00h</li>
                  <li>BLOCO MENINOS DA VILA – 18:00h</li>
                  <li>BLOCO BAILE BLACK – 19:00h</li>
                  <li>BLOCO AS DONDOLETES – 20:00h</li>
                  <li>BLOCO SAMBA MAINHA – 21:00h</li>
                  <li>BLOCO COLAR DE CONCHA – 22:00h</li>
                  <li>BLOCO CANTO PARA SENEGAL – 23:00h</li>
                </ul>
                <li>Contra Fluxo</li>
                <ul className={styles.insideSection}>
                  <li>BLOCO CULTURAL – 20:00h</li>
                  <li>CORRENTE DO SAMBA – 20:15h</li>
                  <li>RODOPIÔ – 20:30h</li>
                  <li>ACARÁ – 20:45h</li>
                  <li>NAMORAL – 21:00h</li>
                </ul>
              </ul>
            </div>
          </ul>
        </div>
      </div>
    </div>
  )
}