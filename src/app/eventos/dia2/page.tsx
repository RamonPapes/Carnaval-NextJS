import Dia from '@/app/components/Dia/dia'
import styles from '../eventos.module.css';
import Image from 'next/image'
export default function Dia2() {
  return (
    <div className={styles.main}>
      <Dia />
      <div className={styles.bodyBackground}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>17 de fevereiro</h1>
          <p className={styles.subtitle}>Segundo dia de folia</p>
          <p className={styles.text}>A festa vira a noite, atravessa até a madrugada e as comemorações estão longe de acabar. Novo dia, novos shows, novos e os mesmos foliões todos ainda muito animados em viver o Carnaval de Salvador e aproveitar ao máximo.</p>
          <p className={styles.text}>O segundo dia de folia contou com atrações como Daniela Mercury, que tem confirmada suas apresentações para todos os dias da fesfa, Luísa Sonza e Psirico. Além dos shows, o segundo dia também foi marcado pelo episódio de um funcionário do Bell Marques sendo detido, trio quebrado e Márcio Victor dando um abraço em uma foliona.</p>
          <Image
            className={styles.img}
            src="/images/sonzaAgregados.jpg"
            alt="vevete sangalos"
            width={500}
            height={300}
          />
          <p className={styles.text}>A aparição de Anitta em cima dos trios e entre os foliões, disfarçada de homem, para curtir o Carnaval também agitou os fãs e a internet.</p>
          <p className={styles.text}>A cantora também se posicionou quando um isopor de um ambulante quebrou durante a passagem do seu trio. Ela tranquilizou o ambulante e disse que iria pagar pelos prejuízos.&quot O que foi que aconteceu aí gente? Quem fez isso? Vou resolver, fica tranquila. Calma. Eu pago o que foi perdido&quot, disse a cantora.</p>
          <p className={styles.text}>Outro cantor que também interrompeu parte de seu show durante a passagem do trio para interferir em algo que acontecia no meio da multidão foi Bell Marques. No final do percurso, no bairro da Ondina, percebendo que um de seus funcionários estava sendo detido, o cantor pediu para que eles não maltratassem o homem e ainda disse que iria ligar para o coronel que comanda a Polícia Militar para resolver a situação.
            “Calma, deixa eu falar uma coisa. Ele trabalha para mim, é meu funcionário, um dos melhores que tenho. Não faça isso, não. Vou ligar para o coronel agora, não faça isso, não precisa&quot, disse o cantor.
          </p>
          <ul className={styles.section}>
            <li className={styles.sectionText}>Destaques</li>
            <div className={styles.sectionTextContainer}>
              <h1 className={styles.sectionTitle}>Homenagem a Gal Costa</h1>
              <p className={styles.text}>A abertura do segundo dia de folia, na sexta-feira (dia 17 de fevereiro), foi mais que especial com o circuito Barra-Ondina se tornando palco de homenagens para uma das vozes mais importantes da música brasileira.</p>
              <p className={styles.text}>Gal Costa, cantora e compositora, faleceu em novembro de 2022 e foi homenageada pelas cantoras Carla Visi, Ana Mametto e Márcia Short enquanto elas performaram no Balancê, cantando clássicos imortalizados na voz de Gal.</p>
              <h1 className={styles.sectionTitle}>História do bloco “Os toalhas”</h1>
              <p className={styles.text}>Você já se perguntou de onde surgiram alguns dos blocos que desfilam pelas ruas no Carnaval de Salvador? Muitos deles, antes de serem oficializados e passarem a atrair multidões para a folia, tiveram uma “origem humilde”.</p>
              <p className={styles.text}>O bloco dos toalhas, muito conhecido no Circuito Mestre Bimba, na região do Nordeste de Amaralina, era um desses blocos. Surgido de um pequeno grupo de amigos, o bloco não passava de uma reunião de pessoas que queriam se divertir e não tinham condições de arcar com os valores para um abadá.</p>
              <p className={styles.text}>A solução encontrada por eles foi improvisar. Compraram algumas toalhas e umas bebidas e com nada mais do que isso e empolgação para curtir a festa, começaram a farrear pela região.</p>
              <p className={styles.text}>Com o passar dos anos, a ideia foi se popularizando (apesar de as toalhas não serem mais tão populares e eles passarem a usar chapéus) e ganhando mais adeptos. Tudo isso ao ponto que o movimento foi oficializado como bloco e passou a ter mais de mil pessoas participando.</p>
            </div>
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
    </div>
  )
}