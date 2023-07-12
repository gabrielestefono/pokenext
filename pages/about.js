import Image from "next/image";
import styles from '../styles/About.module.css';

export default function about(){
    return(
        <div className={styles.about}>
            <h1>Sobre o Projeto</h1>
            <p>Lorem as dsadasdhkjashd asd sad ashjdkhasdjhasdjhasjkdhaskjd askjhd ask hdjkashdjkashdasjkhd sajkhdask dskajhdaskjdhasjkdhasjkdhasjkdhasdjkasdjkasd asdjkasdas asdasdasdasdas dasdasd asdasdasd asdsadad asdasd dasdasd asdasdasdas dasd asdasd asdasdas dasdas dsa asdasd sad asdas das sda</p>
            <Image src="/images/charizard.png" width="300" height="300" alt="Charizard"></Image>
        </div>
    )
}