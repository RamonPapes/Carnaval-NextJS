import Dia from '@/app/components/Dia/dia'
import styles from '../eventos.module.css'
import Image from 'next/image'

export default function Dia5() {
  return (
    <div className={styles.main}>
      <Dia/>
      <div className={styles.bodyBackground}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>20 de fevereiro</h1>
          <p className={styles.subtitle}>Quinto dia de folia</p>
          <p className={styles.text}>É o penúltimo e quinto dia das comemorações de Carnaval. Quem pensa que a energia desse povo acabou, está muito enganado. Teve muita coisa para acontecer, e depois de tanto tempo sem a folia, é como se tivesse festa e energia o suficiente para o dobro da dose.</p>
          <Image
            className={styles.img}
            src="/images/dia1-img3.png"
            alt="vevete sangalos"
            width={500}
            height={300}
          />
          <p className={styles.text}>Nesta segunda- feira de Carnaval, a folia começou com Carla Perez dando uma bronca na Saltur depois do atraso no desfile do “Pipoca Doce” no Campo Grande. Além da cantora e dançarina, o outro tópico citado desse da foi Ivete Sangalo. Ela fez um intervalo no desfile deste dia 20, isso para fazer um apelo em favor das vítimas das chuvas no Leste de São Paulo.</p>
          <p className={styles.text}>A cantora também foi protagonista de um “momento fofo” com a família em cima do trio em que estava. Foi a primeira vez que Marcelo tocou como músico na banda da mãe para o carnaval, porém ele já participava da equipe desde os primeiros shows depois da pandemia. E no bloco Coruja, do circuito Dodô, Ivete dançou &quotagarradinha&quot com o marido Daniel Cady.</p>
          <p className={styles.text}>A cantora Claudia Leitte, que estava no comando da pipoca do circuito Osmar, desceu do trio durante a apresentação para cantar perto do público. E ao som de “Carnaval e futebol, não mata, não engorda e não faz mal”, ela pulou entre os foliões e levou seus fãs à loucura.</p>
          <p className={styles.text}>Voltando a falar da cantora Ivete, ela foi convidada pelo prefeito Bruno Reis para desfilar no último dia da festa em um trio independente. “Vocês vão me ajudar, vamo Ivete para o Centro. Estou aguardando ela confirmar”, ele disse em coletiva na segunda, dia 20.</p>
          <p className={styles.text}>Infelizmente, a cantora recusou o convite no fim do dia. Com apresentações na cidade de São José do Rio Preto, São Paulo, a logística impossibilitaria sua participação na festa.</p>
          <h1 className={styles.title}>Carla Perez dá uma bronca na Saltur</h1>
          <p className={styles.text}>À frente do desfile voltado para o público infantil, Pipoca Doce, no Circuito Osmar, no Campo Grande, a cantora Carla Perez já iniciou com uma bronca aos organizadores.</p>
          <p className={styles.text}>O desfile programado para iniciar às 13h entrou na avenida com atraso e a cantora, revoltada com a situação, não deixou de criticar a Saltur. Em cima do trio, Carla Perez fez críticas à demora para começar o show e falou sobre como isso era um desrespeito com as crianças que estavam na chuva.</p>
          <p className={styles.text}>“Acontece muito no Carnaval isso de ter atrasos, um carro de apoio quebra, um som que queima, com chuva então, muita gente sofre com isso, mas eu acho inadmissível judiar das crianças como tem sido feito. Me desculpe, mas as crianças estão desde cedo aqui, debaixo de chuva e fica essa maresia, as crianças tem que ter o mesmo direito dos adultos de ir e vir”, se pronunciou</p>
          <p className={styles.text}>“Eu sou mãe também, meus filhos não são pequenos hoje, mas eu sou uma leoa. Então eu vou defender meus filhos sempre, vou defender o filho de cada um de vocês que vem para a avenida. Isso não é justo, a gente precisa de mais organização para as crianças, mais atenção e mais respeito.”</p>
          <p className={styles.text}>Mostrando estar muito irritada com a situação, a cantora disse que iria insistir no assunto durante todo o ano para que no próximo Carnaval a situação mudasse e fosse mais organizado.</p>
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