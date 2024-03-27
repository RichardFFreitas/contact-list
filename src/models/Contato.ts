class Contato {
    nomeContato: string
    emailContato: string
    phoneContato: string
    id: number


    constructor(
    nomeContato: string,
    emailContato: string,
    phoneContato: string,
    id: number
    ) {
        this.nomeContato = nomeContato
        this.emailContato = emailContato
        this.phoneContato = phoneContato
        this.id = id
    }
}

export default Contato