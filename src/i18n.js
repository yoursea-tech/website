import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector'

i18next
.use(initReactI18next)
.use(LanguageDetector)
.init({
    fallbackLng: 'en',
    resources: {
        en: {
            translation: {
                motto: "Find the best sea spot for your next holidays",
                help: { 
                    title: 'Have 3 minutes?',
                    description: 'We are currently looking for people interested in taking a really short anonimous survey about solutions we are developing. To help us, please scan or click the QR code below. Thank you joining our mission! '
                },
                dumi_desc: 'CEO. No more, no less than a geodetic and geological engineer with land surveying and remote sensing background that identifies: who, what, when and how much does our clients and partners need',
                marco_desc: "CBO. Focused on business development and sustainability with a focus on circular economy systems that aims to promote a virtuous approach to the surrounding world through satellite technologies.",
                cata_desc: "CTO. A satellite data analyst, passionate about the 'eyes in the sky', with the help of which we can see, analyze and understand much better the environment in which we live. Focused on data acquisition, processing and interpretation, offering reliable results and solutions.",
                flavio_desc: "R&D Manager. Computer engineer willing to understand the world a little more through scientific research. Mainly into development of models and technologies supporting the core business.",

            }
        },
        it: {
            translation: {
                motto: "Trova il mare perfetto per le tue prossime vacanze",
                help: { 
                    title: 'Have 3 minutes?',
                    description: 'We are currently looking for people interested in taking a really short anonimous survey about solutions we are developing. To help us, please scan or click the QR code below. Thank you joining our mission! '
                },
                dumi_desc: 'CEO. Ingegnere geodetico e geologico con esperienza nel rilevamento e telerilevamento del territorio. Si interfaccia direttamente con partners e clienti identificando necessita` e soluzioni.',
                marco_desc: "CBO. Incentrato sullo sviluppo del business e la sostenibilit?? con un focus sui sistemi di economia circolare che mira a promuovere un approccio virtuoso al mondo circostante attraverso le tecnologie satellitari.",
                cata_desc: "CTO. Appassionato analista di dati, elabora ed interpreta il flusso costante di infromazione proveniente dai satelliti che con l'aiuto dei quali possiamo vedere, analizzare e comprendere molto meglio l'ambiente in cui viviamo.",
                flavio_desc: "R&D Manager. Ingegnere informatico curioso e volenteroso di conoscere il mondo in cui viviamo sempre di piu, attraverso la ricerca scientifica. Si occupa di formulare soluzioni tecnologicamente all'avanguardia e di applicarle nel contesto di sviluppo",
            }
        },
        ro: {
            translation: {
                motto: "G??si??i marea perfect?? pentru urm??toarea dvs. vacan????",
                help: { 
                    title: 'Have 3 minutes?',
                    description: 'We are currently looking for people interested in taking a really short anonimous survey about solutions we are developing. To help us, please scan or click the QR code below. Thank you joining our mission! '
                },
                dumi_desc: 'CEO. Inginer geodezist ??i geologic cu experien???? ??n cercetare a terenurilor ??i teledetec??ie. Se interac??ioneaz?? direct cu partenerii ??i clien??ii, identific??nd nevoile ??i solu??iile',
                marco_desc: "CBO. Axat pe dezvoltarea afacerilor ??i sustenabilitate, cu accent pe sistemele economiei circulare, care ????i propune s?? promoveze o abordare virtuoas?? a lumii ??nconjur??toare prin intermediul tehnologiilor prin satelit.",
                cata_desc: "CTO. Analist de date pasionat, el elaboreaz?? ??i interpreteaz?? fluxul constant de informa??ii venite de la sateli??i care cu ajutorul c??rora putem vedea, analiza ??i ??n??elege mult mai bine mediul ??n care tr??im.  ",
                flavio_desc: "Manager R&D. Inginer informatic curios ??i dornic s?? cunoasc?? lumea ??n care tr??im din ce ??n ce mai mult, prin cercetare ??tiin??ific??. Se ocup?? cu formularea de solu??ii avansate din punct de vedere tehnologic ??i aplicarea acestora ??n contextul dezvolt??rii",
            }
        }
    }
})