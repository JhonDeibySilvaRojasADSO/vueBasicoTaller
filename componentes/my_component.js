export default {
    data() {
        return {
            list: null,
            mapeo: [],
            nom: '',
            añadir: 'adi',
            apellio: '',
            numero:''

        }
    },
    methods: {
        crearObjeto() {
            this.list = []
        },
        agregarinicio() {
            this.list.unshift({ jhnsito2: this.nom, apellido: this.apellio });
            this.nom = '',
                this.apellio = '',

                console.log(this.list);

        },
        agregarfinal() {
            this.list.push({ jhnsito2: this.nom, apellido: this.apellio });
            this.nom = '',
            this.apellio = ''

        },

        eliminarfinal() {
            this.list.pop();
        },
        eliminarinicio() {
            this.list.shift();
        },

        elimarcualquiera(aa) {
            this.list.splice(aa, 1)
        },
        eliminartodo() {
            this.list = []
        },
        Mape() {
            this.mapeo = this.list.map((item) => ({ ...item }))
        }


    }
    // computed:{
    //     mymap(){
    //         gta=this.list.map(list => list + this.añadir)
    //     }
    // }
}
