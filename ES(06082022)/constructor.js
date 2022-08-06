class example{
    constructor(){
        this.ConstructorAlert = 'Constructor Call Alert'
        alert(this.ConstructorAlert);
    }
    alertFirst  =() => {
        alert('First Alert is named as BACK')
    }
    alertSecond  =() => {
        alert('Second Alert is named as NEXT')
    }

}
let push = new example();