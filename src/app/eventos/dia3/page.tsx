import Dia from '@/app/components/Dia/dia'
import styles from '../eventos.module.css'
import Image from 'next/image'

export default function Dia3() {
  return (
    <div className={styles.main}>
      <Dia />
      <div className={styles.bodyBackground}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>18 de fevereiro</h1>
          <p className={styles.subtitle}>Terceiro dia de folia</p>
          <p className={styles.text}>Um, dois, três. Já são três dias de festas espalhadas por toda a Salvador. Uma programação recheada de artistas vindos de vários lugares e novas oportunidades para festejar aguardam por todos.</p>
          <p className={styles.text}>O terceiro dia de festa reuniu na capital baiana Ivete Sangalo, Alok, Márcio Victor, Tony Salles e Bell Marques, que até agora participou de todos os dias da festa e está confirmado para os outros dias, e o famoso bloco das Muquiranas que tomou conta das ruas do Campo Grande.</p>
          <p className={styles.text}>O desfile dos trios também viu um pedido de casamento, feito pelo ator Thiago Tomé à Bárbara Carine no trio da Timbalada.</p>
          <p className={styles.text}>Tony Salles também virou um destaque esse dia, quando desceu do trio e foi para o meio dos fãs. Ele cantou, apoiado nos braços de um dos seguranças, até pedir para descer e cantar e dançar no meio da multidão. O cantor também pediu para que os fãs aplaudissem o segurança.</p>
          <p className={styles.text}>Outra artista que também deu o que falar foi Ivete Sangalo, que em certo momento convidou sua sobrinha, que também é cantora, para lhe substituir enquanto se ausentava.</p>
          <p className={styles.text}>A cantora também parou o show quando avistou o celular de um folião sendo roubado no meio da multidão. Ivete chamou sua atenção e pediu que parasse de correr atrás do aparelho. Prometeu a ele que lhe daria um novo e para acalmá-lo o convidou para subir ao trio e ficar ao seu lado.</p>
          <ul className={styles.section}>
            <li className={styles.sectionText}>Destaques</li>
            <div className={styles.sectionTextContainer}>
              <h1 className={styles.sectionTitle}>De novo? Outra adutora rompe próximo ao circuito do Carnaval</h1>
              <p className={styles.sectionSummaryText}>Na manhã do sábado (18 de fevereiro), outra adutora se rompe em um trecho perto do circuito por onde deviam passar os trios elétricos. Dessa vez, o caso aconteceu na Avenida Oceânica, Ondina, quase no fim do Circuito Dodô. Motoristas que estavam com os trios próximos à região se assustaram com a cratera que se abriu e se apressaram para retirar os carros de perto.</p>
              <p className={styles.sectionSummaryText}>Os primeiros sinais foram vistos pelos ambulantes que estavam perto do local, por causa do alagamento e da cratera uma parte da área de trabalho deles foi afetada. Além disso, algumas residências e prédios do entorno tiveram seu fornecimento de água interrompido por algum tempo.</p>
              <p className={styles.sectionSummaryText}>Como no caso anterior, parte da via foi bloqueada e equipes da Embasa foram até o local para efetuar o conserto.</p>
              <p className={styles.sectionSummaryText}>Felizmente, os reparos foram concluídos em algumas horas e não tiveram grande impacto, causando transtornos ao trânsito ou na movimentação dos veículos, para o Carnaval.</p>
              <h1 className={styles.sectionTitle}>Claudia Leitte e os 5 sentidos: A audição</h1>
              <p className={styles.sectionSummaryText}>No final da tarde de sexta feira, a cantora Claudia Leitte retorna às ruas do Circuito Dodô, à frente do bloco Blow Out, dessa vez sem uma moto, mas vestida em um look em sua maior parte rosa, representando a audição. </p>
              <p className={styles.sectionSummaryText}>Antes do início da festa, a cantora tinha anunciado em uma coletiva de imprensa que o seu tema no ano de 2023 iria representar os cinco sentidos humanos: olfato, tato, audição e etc.</p>
              <Image
                className={styles.img}
                src="/images/claudialeite-rouparosa.jpg"
                alt="vevete sangalos"
                width={500}
                height={500}
              />
              <p className={styles.sectionSummaryText}>Outros figurinos inspirados no restante dos sentidos são esperados por parte da cantora e daqueles que a estão acompanhando nos blocos que irá comandar nos próximos dias, um deles o bloco Largadinho.</p>
              <h1 className={styles.sectionTitle}>Paula Fernandes e Bell Marques: mistura de axé e sertanejo gera críticas na internet</h1>
              <p className={styles.sectionSummaryText}>Muitos foliões foram pegos de surpresa na tarde de sábado (dia 18 de fevereiro) com um acontecimento no trio de Bell Marques no Circuito da Barra-Ondina.</p>
              <p className={styles.sectionSummaryText}>Juntamente a Bell, Paula Fernandes, cantora sertaneja, trouxe para o Carnaval de Salvador um pouco de sertanejo, com uma versão diferente de músicas como “Pássaro de Fogo”, “Cabelo Raspadinho” e “Tocando em Frente”.</p>
              <p className={styles.sectionSummaryText}>Nas redes sociais, a colaboração não rendeu o efeito positivo esperado. Alguns fizeram questão em deixar sua insatisfação em comentários como: “Não cansada de passar vergonha com Durval Lellys anos atrás, Paula Fernandes agora foi para o carnaval de salvador passar vergonha com Bell Marques!” e “não tinha um amigo para avisar pra Paula Fernandes? ‘Melhor não, amiga.’”</p>
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