class colaD
{
    constructor()
    {
        this.items = {};
        this.atras = 0;
        this.frente = 0;
    }

    inserta(obj)
    {
        this.items[this.frente] = obj;
        this.frente++;
    }

    elimina()
    {
        if (this.atras === this.frente) 
        {
            return null;    
        }else
         {
            var obj = this.items[this.atras];
            this.atras++;
            return obj;
         }
    }
}