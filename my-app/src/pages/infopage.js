import NavBar from '../app/components/NavBar'
import styles from '../styles/infopage.module.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Page() {
    return (
        <div class={styles.main}>
        

            <div className={styles.logoWrapper}>
                
                <img className={styles.logo} src="/icons/3.png" />
            
            </div>
            
            <div className={styles.infowrapper}> 

                <div>
                    <h2>Sobre Nós</h2>
                    <p class="sqsrte-small preFade fadeIn">Bem-vindo ao nosso site, o destino definitivo para profissionais, empreendedores e empresas que buscam uma nova abordagem para o local de trabalho. O objetivo é proporcionar um espaço de trabalho que inspire, conecte e capacite indivíduos e empresas a alcançar seu pleno potencial. Acreditamos que o ambiente de trabalho pode contribuir para o sucesso, e estamos comprometidos em fornecer as ferramentas necessárias para que isso aconteça.
                    </p></div>
                <div>

                    <h2>Serviços</h2>
                    <p class="sqsrte-small preFade fadeIn">
                        Oferecemos uma variedade de salas de coworking totalmente equipadas. Quer seja um freelancer em busca de um local tranquilo para trabalhar, uma startup em crescimento ou uma empresa estabelecida que busca flexibilidade, temos a solução certa para ti.
                    </p>
                </div>

                <div className= {styles.imgwrapper}>
                    <img className= {styles.img} src="/icons/INK-BIZ.jpg"/>
                    <img className= {styles.img} src="/icons/USE-1.jpg"/>
                    <img className= {styles.img} src="/icons/benefits-of-shared.jpg"/>
                </div>
                <h2>Localização</h2>
                <div className={styles.mapa}>
                    
                    <iframe className={styles.google} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3109.6262401208505!2d-9.334984423648594!3d38.795201871746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd1ed030eac1ffcd%3A0x7377fbdaf67c7dac!2sCasa%20da%20Juventude%20da%20Tapada%20das%20Merc%C3%AAs.!5e0!3m2!1spt-PT!2spt!4v1699351619302!5m2!1spt-PT!2spt" width="300" height="190" styles="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
                        
            
                <NavBar/>
            
        </div>
    )
}