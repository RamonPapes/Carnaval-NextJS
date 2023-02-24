import Dia from '@/app/components/Dia/dia'
import styles from '../eventos.module.css'
import Image from 'next/image'

export default function Dia6() {
  return (
    <div className={styles.main}>
      <Dia/>
      <div className={styles.bodyBackground}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>21 de fevereiro</h1>
          <p className={styles.subtitle}>Sexto dia de folia</p>
          <p className={styles.text}>O último e sexto dia de folia carnavalesca passou por Salvador e deixou nos foliões um gostinho de quero mais. E para matar a saudade, o último dia de festejo foi marcado por vários desfiles sem cordas nos circuitos Dodô e Osmar, os mais populares.</p>
          <p className={styles.text}>Muitos artistas renomados puxaram a festa desta terça-feira de carnaval num desfile sem cordas em que muitas pessoas foram em família para aproveitar as últimas horas de festa oficial.</p>
          <p className={styles.text}>Um dos primeiros a desfilar no Circuito Osmar foi a Banda Olodum, levando o samba reggae para a multidão e agitando os que acompanharam seus grandes sucessos como “Avisa Lá” e “Várias Queixas”.</p>
          <p className={styles.text}>Eles foram seguidos pelo Mudei de Nome, o trio do Durval Lelyes e Saulo. O último puxando a “Pipoca Doce” e puxando uma salva de palmas para os ambulantes que trabalharam durante o período das festas. Ele também aproveitou o momento para falar da saudade que já começava a se aproximar de todos no último dia oficial de festa.</p>
          <p className={styles.text}>Em seguida, nos desfiles da pipoca, teve Psirico, Daniela Mercury, Xanddy Harmonia, Lincoln, La Fúria e Léo Santana. E muitos outros artistas. Além dos blocos afros que lotaram o Campo Grande falando sobre a potência negra.</p>
          <p className={styles.text}>O Circuito Dodô começou com Bell Marque, que mesmo com 70 anos, participou de todos os dias da folia. Na sequência Claudia Leitte, finalizando o seu tema sobre os cinco sentidos, com uma roupa cheia de flores, para fazer uma alusao ao Olfato.</p>
          <p className={styles.text}>Outros como Mari Antunes, do Babado Novo, e Juliette (ex-bbb e cantora), passaram pelas ruas do Circuito para encerrar oficialmente a folia.</p>
        </div>
        <ul className={styles.section}>
            <li className={styles.sectionText}>Programação dos circuitos:</li>
            <div className={styles.sectionTextContainer}>
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
  )
}