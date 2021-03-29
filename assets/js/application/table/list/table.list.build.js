TABLE.list.build = class{
    constructor(){
        this.#create()
    }


    // init
    #init(){
    }


    // create
    #create(){
        this.element = []
    }


    // event
    click(index){
        this.element.forEach((e, i) => {
            if(index === i) {
                e._class = 'item item-list on-click-item'
                e.param.clicked = true
                e.style = {display: 'flex'}
            }else{
                e._class = 'item item-list'
                e.param.clicked = false
                e.style = {display: 'none'}
            }
        })
    }
    set(type, race){
        this.element = []
        const table = METAL.data.find(e => e.type === type && e.race === race).table

        table.forEach((e, i) => {
            this.element[i] = {
                key: i,
                ...e,
                chance_of_each_level: e.chance_of_each_level.map((_, j) => ({
                    key: j,
                    ..._
                })),
                _class: 'item item-list',
                _id: `item-list-${i}`,
                param: {
                    clicked: false
                },
                style: {
                    display: 'none'
                }
            }
        })
    }
    clear(){
        this.element = []
    }


    // get
    get(){
        return this.element
    }
}